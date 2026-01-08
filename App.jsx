import React, { useState, useMemo } from 'react';
import { ARTWORKS } from './constants';
import ArtGrid from './components/ArtGrid';
import ArtistBio from './components/ArtistBio';
import ExhibitionTabs from './components/ExhibitionTabs';
import InquiryModal from './components/InquiryModal';

const App = () => {
  const [currentStatus, setCurrentStatus] = useState('current');
  const [selectedArtwork, setSelectedArtwork] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const filteredArtworks = useMemo(() => {
    return ARTWORKS.filter((art) => art.status === currentStatus);
  }, [currentStatus]);

  const handleInquire = (artwork) => {
    setSelectedArtwork(artwork);
    setIsModalOpen(true);
  };

  return (
    <div className="min-h-screen flex flex-col selection:bg-gray-100 selection:text-black">
      {/* Header */}
      <header className="py-12 px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-8 sticky top-0 bg-white/95 backdrop-blur-md z-40">
        <div className="flex-1 hidden md:block">
          <span className="text-[10px] tracking-[0.5em] uppercase text-gray-400">Curated Digital Art</span>
        </div>
        
        <div className="text-center">
          <h1 className="serif text-4xl md:text-5xl tracking-tight leading-none">
            L'Atelier d'Art
          </h1>
        </div>

        <div className="flex-1 flex justify-end gap-8">
          <nav className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-500">
            <a href="#" className="hover:text-black transition-colors">Exhibitions</a>
            <a href="#" className="hover:text-black transition-colors">Archive</a>
            <a href="#" className="hover:text-black transition-colors">Contact</a>
          </nav>
        </div>
      </header>

      {/* Main Content */}
      <main className="flex-grow pt-12">
        <section className="mb-20 text-center px-6">
          <h2 className="serif text-5xl md:text-7xl lg:text-8xl mb-4 leading-tight">
            The Shape of Silence
          </h2>
          <p className="text-xs md:text-sm tracking-[0.4em] uppercase text-gray-400 font-light">
            New works by Elena Vance & Guest Artists
          </p>
        </section>

        <ExhibitionTabs 
          currentStatus={currentStatus} 
          onStatusChange={setCurrentStatus} 
        />

        <ArtGrid 
          artworks={filteredArtworks} 
          onInquire={handleInquire} 
        />

        <ArtistBio />
      </main>

      {/* Footer */}
      <footer className="py-16 px-6 md:px-12 border-t border-gray-100 text-center">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center justify-between gap-8">
          <div className="text-[10px] tracking-[0.3em] uppercase text-gray-400 order-2 md:order-1">
            © 2024 L'Atelier d'Art. All rights reserved.
          </div>
          
          <div className="order-1 md:order-2">
             <h3 className="serif text-2xl tracking-tight">L'Atelier d'Art</h3>
          </div>

          <div className="flex gap-8 text-[10px] tracking-[0.2em] uppercase text-gray-400 order-3">
            <a href="#" className="hover:text-black transition-colors">Instagram</a>
            <a href="#" className="hover:text-black transition-colors">Journal</a>
            <a href="#" className="hover:text-black transition-colors">Newsletter</a>
          </div>
        </div>
      </footer>

      {/* Inquiry Modal */}
      <InquiryModal 
        artwork={selectedArtwork}
        isOpen={isModalOpen}
        onClose={() => {
          setIsModalOpen(false);
          setSelectedArtwork(null);
        }}
      />
    </div>
  );
};

export default App;
