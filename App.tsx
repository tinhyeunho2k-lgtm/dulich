import React, { useState, useCallback } from 'react';
import Header from './components/Header';
import UploadSection from './components/UploadSection';
import DestinationSelector from './components/DestinationSelector';
import ProcessingView from './components/ProcessingView';
import ResultView from './components/ResultView';
import { AppStep, Destination, ModelMode } from './types';
import { generateTravelPhoto } from './services/geminiService';

const App: React.FC = () => {
  const [currentStep, setCurrentStep] = useState<AppStep>(AppStep.UPLOAD);
  const [userImage, setUserImage] = useState<string | null>(null);
  const [selectedDestination, setSelectedDestination] = useState<Destination | null>(null);
  const [resultImage, setResultImage] = useState<string | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [modelMode, setModelMode] = useState<ModelMode>('quality');

  const handleImageSelected = useCallback((base64: string) => {
    setUserImage(base64);
    setCurrentStep(AppStep.SELECT_DESTINATION);
    setError(null);
  }, []);

  const handleDestinationSelected = useCallback(async (destination: Destination) => {
    if (!userImage) return;

    setSelectedDestination(destination);
    setCurrentStep(AppStep.PROCESSING);
    setError(null);

    try {
      // Call Gemini API with the full destination object AND the selected model mode
      const generatedImageBase64 = await generateTravelPhoto(userImage, destination, modelMode);
      setResultImage(generatedImageBase64);
      setCurrentStep(AppStep.RESULT);
    } catch (err: any) {
      console.error("Error generating image:", err);
      let errorMessage = "Rất tiếc, đã xảy ra lỗi khi tạo ảnh.";
      
      // Gợi ý chuyển model nếu lỗi 4xx
      if (err.message && (err.message.includes('400') || err.message.includes('403') || err.message.includes('404'))) {
         if (modelMode === 'quality') {
             errorMessage += " Có vẻ Model Pro không khả dụng với Key của bạn. Hãy thử chuyển sang chế độ 'Tiêu chuẩn'.";
         }
      }
      
      setError(errorMessage);
      setCurrentStep(AppStep.SELECT_DESTINATION);
    }
  }, [userImage, modelMode]);

  // Logic 1: Tải ảnh mới hoàn toàn (Reset All)
  const handleStartOver = useCallback(() => {
    setUserImage(null);
    setSelectedDestination(null);
    setResultImage(null);
    setCurrentStep(AppStep.UPLOAD);
    setError(null);
  }, []);

  // Logic 2: Giữ ảnh gốc, chọn địa điểm khác
  const handleSelectNewDestination = useCallback(() => {
    setResultImage(null);
    setSelectedDestination(null);
    setCurrentStep(AppStep.SELECT_DESTINATION);
    setError(null);
  }, []);

  // Logic 3: Tạo lại với cùng địa điểm và ảnh gốc
  const handleRegenerate = useCallback(() => {
    if (selectedDestination && userImage) {
        handleDestinationSelected(selectedDestination);
    }
  }, [selectedDestination, userImage, handleDestinationSelected]);

  // Nút Back ở màn hình chọn địa điểm
  const handleBackToUpload = useCallback(() => {
     setUserImage(null);
     setCurrentStep(AppStep.UPLOAD);
  }, []);

  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-gray-100">
      <Header />

      <main className="flex-grow flex flex-col items-center justify-start pt-12 pb-20 px-4 sm:px-6">
        
        {/* Error Notification */}
        {error && (
            <div className="w-full max-w-2xl mb-6 bg-red-900/50 border-l-4 border-red-500 p-4 rounded-r-md shadow-sm">
                <div className="flex">
                    <div className="flex-shrink-0">
                        <svg className="h-5 w-5 text-red-400" viewBox="0 0 20 20" fill="currentColor">
                            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
                        </svg>
                    </div>
                    <div className="ml-3">
                        <p className="text-sm text-red-200">{error}</p>
                    </div>
                </div>
            </div>
        )}

        {currentStep === AppStep.UPLOAD && (
          <UploadSection 
            onImageSelected={handleImageSelected} 
            modelMode={modelMode}
            onModelChange={setModelMode}
          />
        )}

        {currentStep === AppStep.SELECT_DESTINATION && userImage && (
          <DestinationSelector 
            onSelect={handleDestinationSelected}
            onBack={handleBackToUpload}
            userImage={userImage}
            modelMode={modelMode}
          />
        )}

        {currentStep === AppStep.PROCESSING && (
          <ProcessingView />
        )}

        {currentStep === AppStep.RESULT && resultImage && userImage && selectedDestination && (
          <ResultView 
            resultImage={resultImage}
            originalImage={userImage}
            destinationName={selectedDestination.name}
            onRegenerate={handleRegenerate}
            onSelectNewDestination={handleSelectNewDestination}
            onUploadNewImage={handleStartOver}
          />
        )}
      </main>

      <footer className="bg-gray-900 border-t border-gray-800 py-6">
        <div className="max-w-7xl mx-auto px-4 text-center text-gray-500 text-sm">
          &copy; {new Date().getFullYear()} TravelGenie AI. Powered by Google Gemini.
        </div>
      </footer>
    </div>
  );
};

export default App;