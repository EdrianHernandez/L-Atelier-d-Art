
import React from 'react';
import { Artwork } from '../types';

interface ArtGridProps {
  artworks: Artwork[];
  onInquire: (artwork: Artwork) => void;
}

const ArtGrid: React.FC<ArtGridProps> = ({ artworks, onInquire }) => {
  if (artworks.length === 0) {
    return (
      <div className="flex flex-col items-center justify-center py-32 text-gray-400">
        <p className="serif text-2xl italic">No pieces currently listed in this category.</p>
      </div>
    );
  }

  return (
    <div className="gallery-grid-container px-6 md:px-12 lg:px-24 mb-24">
      <div className="columns-1 sm:columns-2 lg:columns-3 gap-12 space-y-12">
        {artworks.map((artwork) => (
          <div 
            key={artwork.id} 
            className="gallery-item group break-inside-avoid relative animate-in fade-in slide-in-from-bottom-4 duration-700"
          >
            <div className="relative overflow-hidden bg-gray-50">
              <img 
                src={artwork.imageUrl} 
                alt={artwork.title}
                loading="lazy"
                className="w-full h-auto grayscale hover:grayscale-0 transition-all duration-1000 ease-in-out scale-100 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/10 transition-colors duration-500" />
            </div>
            
            <div className="mt-6 space-y-2">
              <div className="flex justify-between items-baseline">
                <h3 className="serif text-2xl group-hover:italic transition-all duration-500">{artwork.title}</h3>
                <span className="text-[10px] tracking-widest text-gray-400 uppercase">{artwork.year}</span>
              </div>
              <p className="text-xs tracking-widest text-gray-500 uppercase">{artwork.artist}</p>
              <p className="text-[10px] text-gray-400 italic font-light">{artwork.dimensions}</p>
              
              <div className="pt-4 flex items-center justify-between opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                <span className="text-sm font-medium tracking-tight text-gray-900">{artwork.price}</span>
                <button 
                  onClick={() => onInquire(artwork)}
                  className="text-[10px] tracking-[0.2em] uppercase border-b border-black pb-0.5 hover:text-gray-500 hover:border-gray-500 transition-all"
                >
                  Inquire
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ArtGrid;
