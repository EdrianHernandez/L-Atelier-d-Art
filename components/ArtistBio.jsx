import React from 'react';

const ArtistBio = () => {
  return (
    <section className="artist-bio-container max-w-4xl mx-auto py-24 px-6 border-t border-gray-100">
      <div className="grid grid-cols-1 md:grid-cols-12 gap-12 items-start">
        <div className="md:col-span-5">
          <span className="text-[10px] tracking-[0.4em] uppercase text-gray-400 block mb-6">Featured Artist</span>
          <h2 className="serif text-5xl mb-6">Elena Vance</h2>
          <div className="flex gap-6 mt-8">
            <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs tracking-widest">INSTAGRAM</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs tracking-widest">TWITTER</a>
            <a href="#" className="text-gray-400 hover:text-black transition-colors text-xs tracking-widest">BEHANCE</a>
          </div>
        </div>
        <div className="md:col-span-7">
          <p className="text-lg leading-relaxed font-light text-gray-600 mb-6">
            Elena Vance is a multi-disciplinary digital artist based in Berlin. Her work explores the synthesis between traditional structural forms and the fluid, often chaotic nature of digital processing.
          </p>
          <p className="text-lg leading-relaxed font-light text-gray-600">
            By deconstructing the boundary between the viewer and the medium, Vance creates immersive visual environments that challenge our perception of permanence. Her latest series, "Ephemeral Echoes," investigates the lifecycle of digital data as a sentient organism.
          </p>
          <div className="mt-12 pt-8 border-t border-gray-50 flex items-center justify-between">
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400">Current Residence</p>
              <p className="text-sm font-light mt-1 text-gray-800">Berlin, Germany</p>
            </div>
            <div>
              <p className="text-[10px] tracking-widest uppercase text-gray-400">Representation</p>
              <p className="text-sm font-light mt-1 text-gray-800">L'Atelier d'Art</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ArtistBio;
