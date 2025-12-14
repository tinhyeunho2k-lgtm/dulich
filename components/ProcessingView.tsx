import React, { useEffect, useState } from 'react';

const ProcessingView: React.FC = () => {
  const [dots, setDots] = useState('');

  useEffect(() => {
    const interval = setInterval(() => {
      setDots(prev => prev.length >= 3 ? '' : prev + '.');
    }, 500);
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-[400px] w-full text-center">
      <div className="relative w-24 h-24 mb-8">
        <div className="absolute inset-0 border-4 border-indigo-900 rounded-full animate-ping opacity-75"></div>
        <div className="absolute inset-0 border-4 border-t-indigo-500 border-r-transparent border-b-transparent border-l-transparent rounded-full animate-spin"></div>
        <div className="absolute inset-0 flex items-center justify-center">
            <svg className="w-8 h-8 text-indigo-500" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19.428 15.428a2 2 0 00-1.022-.547l-2.384-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z" />
            </svg>
        </div>
      </div>
      
      <h3 className="text-2xl font-bold text-white mb-2">
        Đang tạo ảnh{dots}
      </h3>
      <p className="text-gray-400 max-w-md">
        AI đang cẩn thận ghép bạn vào địa điểm đã chọn. Quá trình này sẽ diễn ra rất nhanh.
      </p>
    </div>
  );
};

export default ProcessingView;