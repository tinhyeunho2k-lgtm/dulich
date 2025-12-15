import { GoogleGenAI } from "@google/genai";
import { Destination, ModelMode } from "../types";

const getClient = () => {
  const apiKey = process.env.API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.API_KEY.");
  }
  return new GoogleGenAI({ apiKey });
};

// Hàm chọn ngẫu nhiên một phần tử từ mảng
const getRandomItem = (items: any[]) => {
    return items[Math.floor(Math.random() * items.length)];
};

export const generateTravelPhoto = async (
  base64Image1: string, 
  destination: Destination,
  modelMode: ModelMode = 'quality',
  base64Image2: string | null = null // Optional second image for couple mode
): Promise<string> => {
  const ai = getClient();
  
  const cleanBase64_1 = base64Image1.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
  const cleanBase64_2 = base64Image2 ? base64Image2.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '') : null;
  const isCoupleMode = !!cleanBase64_2;

  // 1. CHỌN KỊCH BẢN BỐI CẢNH (SCENARIO)
  let selectedContext = "";
  if (Array.isArray(destination.promptContext)) {
      selectedContext = getRandomItem(destination.promptContext);
  } else {
      selectedContext = destination.promptContext;
  }

  // 2. LOGIC POSE & GÓC MÁY (Đặc biệt cho Couple)
  let poseGuidance = "";
  let selectedTime = ""; 
  let selectedAngle = "";
  let faceVisibilityRule = "Ensure the face is FULLY VISIBLE and well-lit.";

  const timeOfDays = [
      "Golden Hour (Soft sunlight, romantic)",
      "Bright Noon (Clear blue sky)",
      "Soft Morning Light (Fresh atmosphere)",
      "Sunny Afternoon (Vibrant colors)"
  ];

  const cameraAngles = [
      "Eye-level portrait shot",
      "Medium shot (Waist up)",
      "Close-up portrait"
  ];

  if (isCoupleMode) {
      // 9 "Thuật toán" góc chụp Couple chuyên nghiệp
      const coupleScenarios = [
          {
              type: "Forehead Touch",
              desc: "Intimate Close-up. The couple stands close, eyes closed, gently touching foreheads. Hands holding waist or gently cupping cheeks. Peaceful, trusting, and incredibly sweet atmosphere.",
              forceAngle: "Close-up Portrait",
              forceTime: null
          },
          {
              type: "POV (Em trong mắt anh)",
              desc: "POV Shot. Perspective of one partner looking at the other. The subject is laughing, eating, or looking back over their shoulder. A blurred shoulder or hand of the 'photographer' partner is visible in the foreground.",
              forceAngle: "Point of View Shot",
              forceTime: null
          },
          {
              type: "The Hidden Kiss",
              desc: "Playful Romantic. The couple is about to kiss but hiding it behind a wide-brimmed hat, a bouquet of flowers, or a map/newspaper. Only smiling eyes or tiptoes are visible.",
              forceAngle: "Medium Shot",
              forceTime: null
          },
          {
              type: "Silhouette",
              desc: "Artistic Silhouette. The couple is standing against a bright light source. They are dark silhouettes against a dramatic sky. Kissing, holding hands, or lifting each other up.",
              forceAngle: "Low Angle Shot",
              forceTime: "Sunset (Backlight)" // Đặc biệt: Silhouette sẽ khó thấy mặt
          },
          {
              type: "Back View (Đồng hành)",
              desc: "Back View. The couple is seen from behind, sitting leaning on each other or walking forward hand-in-hand towards the landmark. Symbolizing 'facing the world together'.",
              forceAngle: "Eye-level from behind",
              forceTime: null
          },
          {
              type: "Tiny People, Big World",
              desc: "Wide Landscape. The couple takes up a small portion of the frame, surrounded by the majestic nature/landmark. Emphasizing the bond in a vast world.",
              forceAngle: "Ultra-Wide Angle Shot",
              forceTime: null
          },
          {
              type: "Candid Laughter",
              desc: "Action/Candid. Not looking at the camera. Holding hands running, splashing water (if beach), or tickling each other. Burst mode style. Full of energy, happiness, and youth.",
              forceAngle: "Eye-level Action Shot",
              forceTime: "Sunny Afternoon"
          },
          {
              type: "Top-down (Mơ màng)",
              desc: "Top-down Aerial View. The couple lying on grass/sand. Heads touching (lying in opposite directions) or lying side by side holding hands. Eyes closed, relaxed. Dreamy vibe.",
              forceAngle: "Top-down Drone Shot",
              forceTime: "Soft Morning Light"
          },
          {
              type: "Reflection",
              desc: "Artistic Reflection. The couple seen through a reflection in a puddle, a store window, or a rearview mirror. Artistic and deep depth of field.",
              forceAngle: "Artistic Angle",
              forceTime: null
          }
      ];

      const selectedScenario = getRandomItem(coupleScenarios);
      
      poseGuidance = `**COUPLE POSE ALGORITHM: ${selectedScenario.type}**
      - Action: ${selectedScenario.desc}
      - Interaction: Ensure the interaction looks NATURAL, INTIMATE (Honeymoon vibe).`;
      
      selectedAngle = selectedScenario.forceAngle || getRandomItem(cameraAngles);
      selectedTime = selectedScenario.forceTime || getRandomItem(timeOfDays);

      // Nếu là Silhouette hoặc Back View, chấp nhận không thấy rõ mặt
      if (selectedScenario.type === "Silhouette" || selectedScenario.type === "Back View (Đồng hành)") {
          faceVisibilityRule = "Face details might be obscured due to the artistic style (Silhouette/Back View). Focus on body language and profile outline.";
      }

  } else {
      // Logic cho chế độ Solo - Ưu tiên góc chụp chân dung để rõ mặt hơn
      poseGuidance = "Pose: Confident, relaxed, looking at camera or slightly away. High-end travel influencer style.";
      selectedAngle = getRandomItem(["Eye-level portrait", "Medium close-up"]);
      selectedTime = getRandomItem(timeOfDays);
  }

  // Logic prompt: Trang phục
  let outfitGuidance = "Analyze the destination description and the selected time of day. AUTOMATICALLY CHANGE the outfits to match this context perfectly.";
  
  if (destination.isBeach) {
    outfitGuidance += " Since this is a beach/resort location, generate swimwear, bikini, or light summer beach attire.";
  } else {
    outfitGuidance += " Examples: If it's snowy, wear winter coats. If it's a city street at night, wear stylish dinner clothes. If it's a hiking trail, wear outdoor gear.";
  }
  
  if (isCoupleMode) {
      outfitGuidance += " **COUPLE OUTFIT**: Use 'Tone-sur-tone' coordination (matching colors/style) but NOT identical outfits.";
  }

  const atmosphereGuidance = "Background: Photorealistic, cinematic depth of field (Bokeh).";

  const modelName = modelMode === 'quality' ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';
  
  const imageConfig: any = {
    aspectRatio: '3:4',
  };

  if (modelMode === 'quality') {
    imageConfig.imageSize = '2K';
  }

  // Construct parts array
  const parts: any[] = [
    { text: `Output a Masterpiece, High-Fidelity, ${modelMode === 'quality' ? '8K Resolution ' : ''}Photorealistic image.` },
    { inlineData: { data: cleanBase64_1, mimeType: 'image/jpeg' } }
  ];

  if (cleanBase64_2) {
      parts.push({ inlineData: { data: cleanBase64_2, mimeType: 'image/jpeg' } });
  }

  // STRICT IDENTITY PROMPT
  const identityPrompt = `
    **CRITICAL PRIORITY: FACE IDENTITY PRESERVATION**
    1. **EXACT FACE MATCH**: The generated face MUST look exactly like the person in the input image(s).
       - Replicate specific facial features: **Eye shape, Nose shape, Mouth/Lip shape, Jawline, and Skin tone**.
       - Do NOT "beautify" or genericize the face. Do NOT change ethnicity.
       - If the person has glasses, a beard, or specific hair, KEEP THEM.
    2. **LIGHTING ON FACE**: Unless it is a silhouette shot, ensure the FACE IS BRIGHT AND WELL-LIT. Avoid heavy shadows on the eyes/face that distort identity.
    3. **INTEGRATION**: Blend the head seamlessly onto the new body/outfit, but prioritize the facial structure over artistic effects.
  `;

  parts.push({
    text: `
    ${identityPrompt}

    **SCENE GENERATION DETAILS**:
    - Mode: ${isCoupleMode ? "COUPLE" : "SOLO"}
    - Destination: ${destination.name}
    - Specific Context: "${selectedContext}"
    - Time/Lighting: ${selectedTime}
    - Camera Angle: ${selectedAngle}
    
    **GUIDELINES**:
    - **Outfit**: ${outfitGuidance}
    - **Pose**: ${poseGuidance}
    - **Atmosphere**: ${atmosphereGuidance}
    - **Face Visibility**: ${faceVisibilityRule}

    Generate the final image only, no text.
    `
  });

  try {
    const response = await ai.models.generateContent({
      model: modelName, 
      contents: { parts: parts },
      config: {
        imageConfig: imageConfig
      }
    });

    const candidates = response.candidates;
    if (candidates && candidates.length > 0) {
      const parts = candidates[0].content?.parts;
      if (parts) {
        for (const part of parts) {
          if (part.inlineData && part.inlineData.data) {
            return `data:image/png;base64,${part.inlineData.data}`;
          }
        }
      }
    }

    throw new Error("No image generated.");

  } catch (error) {
    console.error("Gemini API Error:", error);
    throw error;
  }
};