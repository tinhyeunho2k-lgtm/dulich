import React, { useState, MouseEvent } from 'react';
import { UploadMode } from '../types';

interface ResultViewProps {
  resultImage: string;
  originalImage: string;
  partnerImage: string | null;
  destinationName: string;
  onRegenerate: () => void;
  onSelectNewDestination: () => void;
  onUploadNewImage: () => void;
  uploadMode: UploadMode;
}

const ResultView: React.FC<ResultViewProps> = ({ 
    resultImage, 
    originalImage, 
    partnerImage,
    destinationName, 
    onRegenerate, 
    onSelectNewDestination, 
    onUploadNewImage,
    uploadMode
}) => {
  const [zoomState, setZoomState] = useState({ x: 0, y: 0, show: false });

  const handleMouseMove = (e: MouseEvent<HTMLDivElement>) => {
    const { left, top, width, height } = e.currentTarget.getBoundingClientRect();
    const x = ((e.clientX - left) / width) * 100;
    const y = ((e.clientY - top) / height) * 100;

    setZoomState({ x, y, show: true });
  };

  const handleMouseLeave = () => {
    setZoomState((prev) => ({ ...prev, show: false }));
  };

  const handleDownload = () => {
    const link = document.createElement('a');
    link.href = resultImage;
    link.download = `travel-genie-${destinationName.toLowerCase().replace(/\s+/g, '-')}.png`;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
  };

  return (
    <div className="w-full max-w-7xl mx-auto animate-fade-in p-2 sm:p-4">
      <div className="text-center mb-6 sm:mb-8">
        <h2 className="text-3xl sm:text-4xl font-extrabold text-white tracking-tight">
            {uploadMode === 'couple' ? 'Lãng mạn quá! 💕' : 'Tuyệt vời! 🎉'}
        </h2>
        <p className="text-lg text-gray-400 mt-2">
            {uploadMode === 'couple' 
             ? <span>Hai bạn trông thật hạnh phúc tại <span className="font-semibold text-pink-400">{destinationName}</span>.</span>
             : <span>Bạn đã "có mặt" tại <span className="font-semibold text-indigo-400">{destinationName}</span>.</span>
            }
        </p>
      </div>

      <div className="bg-gray-800 p-4 sm:p-6 rounded-3xl shadow-2xl border border-gray-700">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
             {/* Main Result */}
            <div className="lg:col-span-9 space-y-6">
                 {/* Image Container with Zoom Logic */}
                 <div 
                    className="relative rounded-2xl overflow-hidden shadow-lg bg-gray-900 flex items-center justify-center border border-gray-700 cursor-zoom-in group"
                    onMouseMove={handleMouseMove}
                    onMouseLeave={handleMouseLeave}
                 >
                    <img 
                        src={resultImage} 
                        alt="Result" 
                        className="w-full h-auto max-h-[85vh] object-contain transition-transform duration-200 ease-out will-change-transform"
                        style={{
                            transformOrigin: `${zoomState.x}% ${zoomState.y}%`,
                            transform: zoomState.show ? 'scale(2.5)' : 'scale(1)',
                        }}
                    />
                    
                    {!zoomState.show && (
                        <div className="absolute bottom-4 right-4 bg-black/80 backdrop-blur-sm text-white px-3 py-1.5 rounded-full text-xs font-medium pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity border border-white/10">
                            🔍 Di chuột để phóng to
                        </div>
                    )}
                 </div>
                 
                 {/* Action Buttons */}
                 <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <button 
                        onClick={handleDownload}
                        className={`text-white px-6 py-4 rounded-xl font-bold text-lg transition-all shadow-md hover:shadow-lg flex items-center justify-center gap-2 transform hover:-translate-y-0.5 ${
                            uploadMode === 'couple' ? 'bg-pink-600 hover:bg-pink-700' : 'bg-indigo-600 hover:bg-indigo-700'
                        }`}
                    >
                        <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16v1a3 3 0 003 3h10a3 3 0 003-3v-1m-4-4l-4 4m0 0l-4-4m4 4V4" />
                        </svg>
                        Tải ảnh về
                    </button>
                    
                    <button 
                        onClick={onRegenerate}
                        className="bg-gray-700 text-indigo-300 border-2 border-indigo-900/50 px-6 py-4 rounded-xl font-bold text-lg hover:bg-gray-600 hover:border-indigo-500/50 transition-all flex items-center justify-center gap-2"
                    >
                         <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15" />
                        </svg>
                        Thử kiểu dáng khác
                    </button>
                 </div>

                 <div className="flex flex-col sm:flex-row justify-center gap-4 pt-2">
                    <button 
                        onClick={onSelectNewDestination}
                        className="text-gray-400 hover:text-white font-medium px-4 py-2 hover:bg-gray-700 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Chọn địa điểm khác (Giữ ảnh gốc)
                    </button>
                    <button 
                        onClick={onUploadNewImage}
                        className="text-gray-500 hover:text-red-400 font-medium px-4 py-2 hover:bg-red-900/20 rounded-lg transition-colors flex items-center gap-2"
                    >
                        <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Tải ảnh mới (Bắt đầu lại)
                    </button>
                 </div>
            </div>

            {/* Sidebar Comparison */}
            <div className="lg:col-span-3 space-y-6">
                <div className="bg-gray-900/50 rounded-2xl p-5 border border-gray-700 shadow-inner">
                    <h3 className="text-sm font-bold text-gray-500 uppercase tracking-wider mb-4 flex items-center gap-2">
                        <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                             <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        Ảnh gốc
                    </h3>
                    <div className="grid grid-cols-1 gap-4">
                         <div className="rounded-xl overflow-hidden border-2 border-gray-600 shadow-md aspect-square bg-gray-800 relative group">
                            <img src={originalImage} alt="User 1" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        </div>
                        {partnerImage && (
                            <div className="rounded-xl overflow-hidden border-2 border-gray-600 shadow-md aspect-square bg-gray-800 relative group">
                                <img src={partnerImage} alt="User 2" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                                <div className="absolute top-2 right-2 bg-pink-500/80 p-1 rounded-full">
                                    <svg className="w-4 h-4 text-white" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M3.172 5.172a4 4 0 015.656 0L10 6.343l1.172-1.171a4 4 0 115.656 5.656L10 17.657l-6.828-6.829a4 4 0 010-5.656z" clipRule="evenodd" /></svg>
                                </div>
                            </div>
                        )}
                    </div>
                </div>
                
                <div className="bg-blue-900/20 p-5 rounded-2xl border border-blue-800/30 text-blue-200">
                    <h4 className="font-bold mb-2 flex items-center gap-2">
                         <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
                        </svg>
                        Mẹo nhỏ
                    </h4>
                    <p className="text-sm leading-relaxed opacity-90 text-blue-100">
                        {uploadMode === 'couple' 
                        ? 'Nếu chưa thấy lãng mạn, hãy nhấn "Thử kiểu dáng khác" để AI tạo ra các tư thế ôm, nắm tay hoặc nhìn nhau tình tứ hơn.'
                        : 'Nếu kết quả chưa ưng ý, hãy thử nhấn nút "Thử kiểu dáng khác" để AI thử một biến thể khác.'}
                    </p>
                </div>
            </div>
          </div>
      </div>
    </div>
  );
};

export default ResultView;