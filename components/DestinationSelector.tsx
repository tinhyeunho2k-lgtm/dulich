import React, { useState } from 'react';
import { Destination, Country, ModelMode } from '../types';
import { COUNTRIES } from '../constants';

interface DestinationSelectorProps {
  onSelect: (destination: Destination) => void;
  onBack: () => void;
  userImage: string;
  modelMode: ModelMode;
}

const DestinationSelector: React.FC<DestinationSelectorProps> = ({ 
  onSelect, 
  onBack, 
  userImage,
  modelMode
}) => {
  const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

  const handleCountrySelect = (country: Country) => {
    setSelectedCountry(country);
  };

  const handleBackToCountries = () => {
    setSelectedCountry(null);
  };

  return (
    <div className="w-full max-w-6xl mx-auto animate-fade-in pb-12">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-end mb-6 gap-4">
        <div>
          <h2 className="text-2xl font-bold text-white">
            {selectedCountry ? `Du lịch ${selectedCountry.name}` : 'Chọn Quốc Gia'}
          </h2>
          <p className="text-gray-400">
            {selectedCountry 
              ? `Chọn một địa điểm nổi tiếng tại ${selectedCountry.name} để check-in.` 
              : 'Bạn muốn du lịch đến đất nước nào hôm nay?'}
          </p>
        </div>
        
        <div className="flex flex-col gap-3 items-end w-full md:w-auto">
           {/* Model Status Indicator */}
           <div className="flex items-center gap-2 bg-gray-800 text-gray-300 px-3 py-1.5 rounded-lg text-sm border border-gray-700">
              {modelMode === 'quality' ? (
                <>
                  <span>💎</span> <span className="font-medium text-indigo-400">Chế độ Chất lượng cao</span>
                </>
              ) : (
                <>
                  <span>⚡</span> <span className="font-medium text-yellow-400">Chế độ Nhanh</span>
                </>
              )}
           </div>

           <div className="flex gap-3">
              {selectedCountry && (
                <button 
                onClick={handleBackToCountries}
                className="px-4 py-2 text-sm font-medium text-indigo-400 bg-gray-800 border border-indigo-900/50 rounded-lg hover:bg-gray-700 transition-colors"
              >
                ← Chọn nước khác
              </button>
              )}
              <button 
                onClick={onBack}
                className="px-4 py-2 text-sm font-medium text-gray-300 bg-gray-800 border border-gray-600 rounded-lg hover:bg-gray-700 transition-colors"
              >
                Đổi ảnh gốc
              </button>
           </div>
        </div>
      </div>

      {/* VIEW 1: COUNTRY SELECTION */}
      {!selectedCountry && (
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {COUNTRIES.map((country) => (
            <div 
              key={country.id}
              onClick={() => handleCountrySelect(country)}
              className="group relative bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:border-indigo-500/50 hover:-translate-y-1 transition-all duration-300"
            >
              <div className="h-40 overflow-hidden relative">
                <img 
                  src={country.imageCover} 
                  alt={country.name}
                  className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                />
                 <div className="absolute top-2 right-2 bg-black/60 backdrop-blur-md px-2 py-1 rounded-full text-xl shadow-sm border border-white/10">
                  {country.flag}
                </div>
              </div>
              <div className="p-4 text-center">
                <h3 className="text-lg font-bold text-white group-hover:text-indigo-400 transition-colors">
                  {country.name}
                </h3>
                <p className="text-xs text-gray-500 mt-1">
                  {country.destinations.length} địa điểm
                </p>
              </div>
            </div>
          ))}
        </div>
      )}

      {/* VIEW 2: DESTINATION SELECTION */}
      {selectedCountry && (
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 animate-fade-in-up">
          {selectedCountry.destinations.map((dest) => (
            <div 
              key={dest.id}
              onClick={() => onSelect(dest)}
              className="group flex flex-col bg-gray-800 rounded-xl shadow-lg border border-gray-700 overflow-hidden cursor-pointer hover:shadow-xl hover:ring-2 hover:ring-indigo-500 transition-all duration-300"
            >
              <div className="h-56 overflow-hidden">
                <img 
                  src={dest.imageUrl} 
                  alt={dest.name}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-500 opacity-90 group-hover:opacity-100"
                />
              </div>
              <div className="p-5 flex-grow">
                <h3 className="text-xl font-bold text-white mb-2 group-hover:text-indigo-400">
                  {dest.name}
                </h3>
                <p className="text-sm text-gray-400 leading-relaxed">
                  {dest.description}
                </p>
              </div>
              <div className="px-5 pb-5 pt-0">
                  <span className="inline-block w-full text-center bg-gray-700 text-gray-300 py-2 rounded-lg text-sm font-medium group-hover:bg-indigo-600 group-hover:text-white transition-colors">
                      {modelMode === 'quality' ? 'Ghép ảnh chất lượng cao' : 'Ghép ảnh ngay'}
                  </span>
              </div>
            </div>
          ))}
        </div>
      )}
      
      {/* Preview of user image */}
      <div className="mt-12 border-t border-gray-800 pt-8">
        <h3 className="text-sm font-medium text-gray-500 mb-4 uppercase tracking-wider">Ảnh gốc của bạn</h3>
        <div className="w-24 h-24 rounded-lg overflow-hidden border border-gray-700 shadow-sm">
            <img src={userImage} alt="Original" className="w-full h-full object-cover" />
        </div>
      </div>
    </div>
  );
};

export default DestinationSelector;