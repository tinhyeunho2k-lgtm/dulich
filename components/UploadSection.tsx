import React, { useRef, useState } from 'react';
import { ModelMode } from '../types';

interface UploadSectionProps {
  onImageSelected: (base64: string) => void;
  modelMode: ModelMode;
  onModelChange: (mode: ModelMode) => void;
}

const UploadSection: React.FC<UploadSectionProps> = ({ onImageSelected, modelMode, onModelChange }) => {
  const fileInputRef = useRef<HTMLInputElement>(null);
  const [isDragging, setIsDragging] = useState(false);

  const handleFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (file) processFile(file);
  };

  const processFile = (file: File) => {
    if (!file.type.startsWith('image/')) {
      alert('Vui lòng chọn file ảnh hợp lệ.');
      return;
    }

    const reader = new FileReader();
    reader.onloadend = () => {
      const base64String = reader.result as string;
      onImageSelected(base64String);
    };
    reader.readAsDataURL(file);
  };

  const handleDragOver = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(true);
  };

  const handleDragLeave = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
  };

  const handleDrop = (e: React.DragEvent) => {
    e.preventDefault();
    setIsDragging(false);
    const file = e.dataTransfer.files?.[0];
    if (file) processFile(file);
  };

  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in-up pb-10">
      
      {/* HEADER CONTENT */}
      <div className="text-center mb-10 pt-4">
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
            
            {/* Model Selection Tabs */}
            <div className="bg-gray-900/50 border-b border-gray-700 p-3 flex justify-center">
                <div className="bg-gray-700/50 p-1 rounded-xl inline-flex relative">
                    <button
                        onClick={() => onModelChange('quality')}
                        className={`relative z-10 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                            modelMode === 'quality' 
                            ? 'bg-gray-600 text-white shadow-sm ring-1 ring-white/10' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        <span className="text-base">💎</span> Chất lượng cao (Pro)
                    </button>
                    <button
                        onClick={() => onModelChange('fast')}
                        className={`relative z-10 px-6 py-2 rounded-lg text-sm font-semibold transition-all duration-300 flex items-center gap-2 ${
                            modelMode === 'fast' 
                            ? 'bg-gray-600 text-white shadow-sm ring-1 ring-white/10' 
                            : 'text-gray-400 hover:text-gray-200'
                        }`}
                    >
                        <span className="text-base">⚡</span> Tốc độ nhanh
                    </button>
                </div>
            </div>

            {/* Upload Area */}
            <div className="p-8 sm:p-12 h-full flex flex-col justify-center">
                <div
                className={`group relative min-h-[320px] rounded-2xl border-2 border-dashed transition-all duration-300 flex flex-col items-center justify-center text-center cursor-pointer overflow-hidden bg-gradient-to-b from-gray-800 to-gray-900/50
                    ${isDragging 
                    ? 'border-indigo-500 bg-indigo-500/10 scale-[0.99] shadow-inner' 
                    : 'border-gray-600 hover:border-indigo-400 hover:shadow-lg hover:shadow-indigo-500/10'
                    }`}
                onDragOver={handleDragOver}
                onDragLeave={handleDragLeave}
                onDrop={handleDrop}
                onClick={() => fileInputRef.current?.click()}
                >
                <input
                    type="file"
                    ref={fileInputRef}
                    className="hidden"
                    accept="image/*"
                    onChange={handleFileChange}
                />

                <div className="w-20 h-20 bg-gray-700 rounded-full shadow-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-transform duration-300 ring-4 ring-gray-800 group-hover:ring-indigo-500/30">
                    <svg className="w-8 h-8 text-indigo-400" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                    </svg>
                </div>

                <h3 className="text-xl font-bold text-white mb-2">
                    Tải ảnh lên
                </h3>
                <p className="text-gray-400 text-sm max-w-xs mx-auto mb-6">
                    Kéo thả ảnh vào đây hoặc nhấn để chọn từ thư viện. Hỗ trợ JPG, PNG.
                </p>

                <button className="px-6 py-2.5 bg-indigo-600 text-white text-sm font-medium rounded-lg shadow-lg hover:bg-indigo-500 transition-colors transform group-hover:-translate-y-0.5">
                    Chọn ảnh từ máy
                </button>
                </div>
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
                   <p className="text-sm text-gray-500 leading-snug">Chọn ảnh chân dung rõ mặt, ánh sáng tốt để AI dễ nhận diện.</p>
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
                   <p className="text-sm text-gray-500 leading-snug">AI tự động xử lý trang phục, ánh sáng và tạo dáng trong vài giây.</p>
                </div>
             </div>

             <div className="mt-6 p-4 bg-gray-800/50 rounded-xl border border-gray-700/50">
                 <p className="text-xs text-gray-400 italic">
                     "Mẹo: Dùng chế độ 💎 <strong>Chất lượng cao</strong> để ảnh trông thật nhất."
                 </p>
             </div>
          </div>
      </div>
    </div>
  );
};

export default UploadSection;