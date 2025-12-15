import { GoogleGenAI } from "@google/genai";
import { Destination, ModelMode } from "../types";

const getClient = () => {
  const apiKey = process.env.GEMINI_API_KEY;
  if (!apiKey) {
    throw new Error("API Key is missing. Please set process.env.GEMINI_API_KEY.""API Key is missing. Please set process.env.GEMINI_API_KEY.""API Key is missing. Please set p  base64Image: string, 
  destination: Destination,
  modelMode: ModelMode = 'quality'
): Promise<string> => {
  const ai = getClient();
  
  // Clean up the base64 string if it contains headers
  const cleanBase64 = base64Image.replace(/^data:image\/(png|jpeg|jpg|webp);base64,/, '');
  
  // Logic prompt: Trang phục
  let outfitGuidance = "Analyze the destination description provided below (weather, activity, setting). AUTOMATICALLY CHANGE the person's outfit to match this context perfectly.";
  
  if (destination.isBeach) {
    outfitGuidance += " Since this is a beach/resort location, generate swimwear, bikini, or light summer beach attire.";
  } else {
    outfitGuidance += " Examples: If it's snowy/cold, wear a winter coat. If it's a temple, wear respectful clothing. If it's a hiking trail, wear outdoor gear. If it's a city street, wear stylish casual clothes.";
  }

  // Logic prompt: Tạo dáng (Mới)
  const poseGuidance = "CORRECT and IMPROVE the subject's pose. Make the pose look CONFIDENT, RELAXED, and PROFESSIONAL (like a travel influencer). Ensure good posture (straight back), natural hand placement, and a welcoming expression. Avoid stiff or awkward 'passport photo' stances.";

  // Logic prompt: Môi trường & Xóa phông (Mới)
  const atmosphereGuidance = "Add a few BLURRED tourists or locals in the background to create a lively, authentic travel atmosphere. Apply a CINEMATIC BOKEH EFFECT (Shallow Depth of Field): Keep the main subject in Razor-Sharp Focus, while artistically blurring the background people and scenery to make the subject pop.";

  // Xác định Model và Config dựa trên lựa chọn của người dùng
  const modelName = modelMode === 'quality' ? 'gemini-3-pro-image-preview' : 'gemini-2.5-flash-image';
  
  // Cấu hình hình ảnh
  const imageConfig: any = {
    aspectRatio: '3:4',
  };

  if (modelMode === 'quality') {
    imageConfig.imageSize = '2K';
  }

  try {
    const response = await ai.models.generateContent({
      model: modelName, 
      contents: {
        parts: [
          {
            inlineData: {
              data: cleanBase64,
              mimeType: 'image/jpeg', 
            },
          },
          {
            text: `Output a Masterpiece, High-Fidelity, ${modelMode === 'quality' ? '8K Resolution ' : ''}Photorealistic image.
            
            **INPUT INFO**:
            - Destination: ${destination.name}
            - Context Description: "${destination.promptContext}"

            **STRICT GENERATION RULES**:

            1. **IDENTITY PRESERVATION (CRITICAL)**: 
               - You MUST PRESERVE the face features of the person from the input image EXACTLY. 
               - The output face must be immediately recognizable.
               
            2. **SMART OUTFIT ADAPTATION**:
               - ${outfitGuidance}
               - Fabric textures must be visible and react realistically to light.

            3. **PROFESSIONAL POSE & ATTITUDE**:
               - ${poseGuidance}

            4. **CINEMATIC COMPOSITION & ATMOSPHERE**:
               - ${atmosphereGuidance}
               - Seamlessly integrate the person into the scene described.
               - **Lighting**: Global illumination match. Sun flare or ambient light should interact naturally with the subject.
               - **Color Grading**: Match the color temperature and contrast of a high-end travel magazine photo.

            Generate the final image only, no explanations.`,
          },
        ],
      },
      config: {
        imageConfig: imageConfig
      }
    });

    // Check for inline data (image) in the response
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
