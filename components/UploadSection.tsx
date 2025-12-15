import React, { useRef, useState } from 'react';
import { ModelMode, UploadMode } from '../types';

interface UploadSectionProps {
  onImagesSelected: (image1: string, image2: string | null, mode: UploadMode) => void;
  modelMode: ModelMode;
  onModelChange: (mode: ModelMode) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onImagesSelected, modelMode, onModelChange }) => {
  const fileInputRef1 = useRef<HTMLInputElement>(null);
  const fileInputRef2 = useRef<HTMLInputElement>(null);
  
  const [uploadMode, setUploadMode] = useState<UploadMode>('solo');
  const [image1, setImage1] = useState<string | null>(null);
  const [image2, setImage2] = useState<string | null>(null);
  const [isDragging1, setIsDragging1] = useState(false);
  const [isDragging2, setIsDragging2] = useState(false);

  const processFile = (file: File, isFirstImage: boolean) => {
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh hợp lệ.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      if (isFirstImage) {
        setImage1(base64String);
        // Nếu ở chế độ Solo, submit luôn khi có ảnh
        if (uploadMode === 'solo') {
             onImagesSelected(base64String, null, 'solo');
        }
      } else {
        setImage2(base64String);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>, isFirstImage: boolean) => {
    const file = e.target.files?.[0];
    if (file) processFile(file, isFirstImage);
  };

  const handleContinue = () => {
      if (uploadMode === 'solo' && image1) {
          onImagesSelected(image1, null, 'solo');
      } else if (uploadMode === 'couple' && image1 && image2) {
          onImagesSelected(image1, image2, 'couple');
      } else {
          alert("Vui lòng tải đủ ảnh trước khi tiếp tục.");
      }
  };

  // Drag & Drop handlers helper
  const handleDrag = (e: React.DragEvent, setDrag: (v: boolean) => void, isDragOver: boolean) => {
      e.preventDefault();
      setDrag(isDragOver);
  };
  const handleDrop = (e: React.DragEvent, isFirstImage: boolean) => {
      e.preventDefault();
      isFirstImage ? setIsDragging1(false) : setIsDragging2(false);
      const file = e.dataTransfer.files?.[0];
      if (file) processFile(file, isFirstImage);
  };

  // Render Single Upload Box
  const renderUploadBox = (
      imageState: string | null, 
      isDragging: boolean, 
      ref: React.RefObject<HTMLInputElement | null>, 
      isFirst: boolean,
      label: string
    ) => (
    <div
        className={`group relative min-h-[280px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900/50
            ${isDragging 
            ? 'border-indigo-500 bg-indigo-500/10 scale-[0.99] shadow-inner' 
            : 'border-gray-600 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10'
            }
            ${imageState ? 'border-green-500/50' : ''}
        `}
        onDragOver={(e) => handleDrag(e, isFirst ? setIsDragging1 : setIsDragging2, true)}
        onDragLeave={(e) => handleDrag(e, isFirst ? setIsDragging1 : setIsDragging2, false)}
        onDrop={(e) => handleDrop(e, isFirst)}
        onClick={() => ref.current?.click()}
    >
        <input
            type="file"
            ref={ref}
            className="hidden"
            accept="image/*"
            onChange={(e) => handleFileChange(e, isFirst)}
        />

        {imageState ? (
            <div className="absolute inset-0 w-full h-full">
                <img src={imageState} alt="Preview" className="w-full h-full object-cover opacity-60 group-hover:opacity-40 transition-opacity" />
                <div className="absolute inset-0 flex flex-col items-center justify-center bg-black/20">
                     <div className="w-12 h-12 bg-green-500 rounded-full flex items-center justify-center mb-2 shadow-lg">
                        <svg className="w-6 h-6 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                        </svg>
                     </div>
                     <span className="font-bold text-white drop-shadow-md">Đã chọn ảnh</span>
                     <span className="text-xs text-gray-200 mt-1">Nhấn để thay đổi</span>
                </div>
            </div>
        ) : (
            <>
                <div className="w-16 h-16 bg-gray-700 rounded-full shadow-lg flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300 ring-4 ring-gray-800 group-hover:ring-indigo-500/30">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        {isFirst ? (
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M16 7a4 4 0 11-8 0 4 4 0 018 0zM12 14a7 7 0 00-7 7h14a7 7 0 00-7-7z" />
                        ) : (
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
                        )}
                    </svg>
                </div>

                <h3 className="text-lg font-bold text-white mb-1">{label}</h3>
                <p className="text-gray-400 text-xs max-w-xs mx-auto mb-4 px-4">
                    Kéo thả hoặc nhấn để chọn ảnh
                </p>
            </>
        )}
    </div>
  );

  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in-up pb-10">
      
      {/* HEADER CONTENT */}
      <div className="text-center mb-8 pt-4">
         <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-indigo-900/30 border border-indigo-500/30 text-indigo-300 text-xs font-medium mb-4 tracking-wide shadow-sm">
          <span>✨ Developed by Văn Khánh</span>
        </div>
        <h1 className="text-4xl sm:text-6xl font-extrabold text-white tracking-tight mb-4 drop-shadow-lg">
          TravelGenie AI
        </h1>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto font-light">
           Tải ảnh của bạn lên và để AI đưa bạn đi khắp thế giới trong tích tắc.
        </p>
      </div>

      <div className="flex flex-col lg:flex-row gap-8 items-stretch">
          
          {/* LEFT COLUMN: MAIN UPLOAD CARD */}
          <div className="flex-1 bg-gray-800 rounded-3xl shadow-2xl border border-gray-700 overflow-hidden relative z-10">
            
            {/* Top Controls: Mode & Quality */}
            <div className="bg-gray-900/50 border-b border-gray-700 p-4 flex flex-col sm:flex-row justify-between items-center gap-4">
                
                {/* Mode Selector (Solo/Couple) */}
                <div className="bg-gray-700/50 p-1 rounded-xl flex">
                     <button
                        onClick={() => { setUploadMode('solo'); setImage1(null); setImage2(null); }}
                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                            uploadMode === 'solo' 
                            ? 'bg-blue-600 text-white shadow-md' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        👤 Đi một mình
                    </button>
                    <button
                        onClick={() => { setUploadMode('couple'); setImage1(null); setImage2(null); }}
                        className={`px-5 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                            uploadMode === 'couple' 
                            ? 'bg-pink-600 text-white shadow-md' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        💑 Cặp đôi (Couple)
                    </button>
                </div>

                {/* Quality Selector */}
                <div className="bg-gray-700/50 p-1 rounded-xl flex">
                    <button
                        onClick={() => onModelChange('quality')}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                            modelMode === 'quality' 
                            ? 'bg-gray-600 text-white shadow-sm' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        💎 Pro
                    </button>
                    <button
                        onClick={() => onModelChange('fast')}
                        className={`px-4 py-2 rounded-lg text-xs font-semibold transition-all duration-300 ${
                            modelMode === 'fast' 
                            ? 'bg-gray-600 text-white shadow-sm' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        ⚡ Nhanh
                    </button>
                </div>
            </div>

            {/* Upload Area */}
            <div className="p-8">
                {uploadMode === 'solo' ? (
                     <div className="max-w-md mx-auto">
                        {renderUploadBox(image1, isDragging1, fileInputRef1, true, "Tải ảnh của bạn")}
                     </div>
                ) : (
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {renderUploadBox(image1, isDragging1, fileInputRef1, true, "Bạn (Nam/Nữ)")}
                        {renderUploadBox(image2, isDragging2, fileInputRef2, false, "Người ấy (Nam/Nữ)")}
                    </div>
                )}

                {/* Confirm Button for Couple Mode */}
                {uploadMode === 'couple' && (
                    <div className="mt-8 text-center">
                        <button 
                            onClick={handleContinue}
                            disabled={!image1 || !image2}
                            className={`px-8 py-3 rounded-xl font-bold text-lg transition-all transform hover:-translate-y-1 shadow-lg ${
                                image1 && image2 
                                ? 'bg-gradient-to-r from-pink-600 to-purple-600 text-white hover:shadow-pink-500/30 cursor-pointer' 
                                : 'bg-gray-700 text-gray-500 cursor-not-allowed'
                            }`}
                        >
                            Tiếp tục ghép ảnh 💕
                        </button>
                        {!image1 || !image2 ? (
                            <p className="text-gray-500 text-sm mt-2">Vui lòng chọn đủ 2 ảnh</p>
                        ) : null}
                    </div>
                )}
            </div>
          </div>

          {/* RIGHT COLUMN: VERTICAL STEPS */}
          <div className="w-full lg:w-80 flex flex-col justify-center space-y-6 lg:border-l lg:border-gray-800 lg:pl-8">
             <h3 className="text-gray-300 font-semibold uppercase tracking-wider text-sm mb-2 hidden lg:block">Hướng dẫn sử dụng</h3>
             
             {/* Step 1 */}
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-blue-900/50 border border-blue-500/30 text-blue-400 flex items-center justify-center font-bold">1</div>
                <div>
                   <h4 className="font-semibold text-white mb-1">Tải ảnh lên</h4>
                   <p className="text-sm text-gray-500 leading-snug">
                       {uploadMode === 'solo' 
                        ? 'Chọn ảnh chân dung rõ mặt, ánh sáng tốt.' 
                        : 'Tải lên 2 ảnh riêng biệt của bạn và người ấy.'}
                   </p>
                </div>
             </div>

             {/* Connecting Line */}
             <div className="w-[1px] h-8 bg-gray-800 ml-5"></div>

             {/* Step 2 */}
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-purple-900/50 border border-purple-500/30 text-purple-400 flex items-center justify-center font-bold">2</div>
                <div>
                   <h4 className="font-semibold text-white mb-1">Chọn địa điểm</h4>
                   <p className="text-sm text-gray-500 leading-snug">Khám phá hơn 100+ địa danh nổi tiếng từ thư viện.</p>
                </div>
             </div>

             {/* Connecting Line */}
             <div className="w-[1px] h-8 bg-gray-800 ml-5"></div>

             {/* Step 3 */}
             <div className="flex items-start gap-4">
                <div className="flex-shrink-0 w-10 h-10 rounded-full bg-indigo-900/50 border border-indigo-500/30 text-indigo-400 flex items-center justify-center font-bold">3</div>
                <div>
                   <h4 className="font-semibold text-white mb-1">Nhận kết quả</h4>
                   <p className="text-sm text-gray-500 leading-snug">
                       {uploadMode === 'solo'
                       ? 'AI tự động xử lý trang phục và tạo dáng chuyên nghiệp.'
                       : 'AI sẽ tạo ra khoảnh khắc trăng mật lãng mạn cho hai bạn.'}
                   </p>
                </div>
             </div>
          </div>
      </div>
    </div>
  );
};

export default UploadSection;