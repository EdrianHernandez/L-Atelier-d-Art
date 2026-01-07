
import React, { useState } from 'react';
import { Artwork, InquiryFormData } from '../types';

interface InquiryModalProps {
  artwork: Artwork | null;
  isOpen: boolean;
  onClose: () => void;
}

const InquiryModal: React.FC<InquiryModalProps> = ({ artwork, isOpen, onClose }) => {
  const [formData, setFormData] = useState<InquiryFormData>({
    fullName: '',
    email: '',
    message: '',
    artworkTitle: artwork?.title || '',
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  if (!isOpen || !artwork) return null;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    // Simulate API call
    setTimeout(() => {
      setIsSubmitting(false);
      setIsSuccess(true);
      setTimeout(() => {
        setIsSuccess(false);
        onClose();
        setFormData({ fullName: '', email: '', message: '', artworkTitle: '' });
      }, 2000);
    }, 1500);
  };

  return (
    <div className="modal-overlay fixed inset-0 z-50 flex items-center justify-center bg-white/80 backdrop-blur-sm px-4">
      <div className="modal-container bg-white border border-gray-100 w-full max-w-xl p-8 md:p-12 relative shadow-2xl animate-in fade-in zoom-in duration-300">
        <button 
          onClick={onClose}
          className="absolute top-6 right-6 text-gray-400 hover:text-black transition-colors"
        >
          <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1" strokeLinecap="round" strokeLinejoin="round"><line x1="18" y1="6" x2="6" y2="18"></line><line x1="6" y1="6" x2="18" y2="18"></line></svg>
        </button>

        {isSuccess ? (
          <div className="text-center py-12">
            <h3 className="serif text-3xl mb-4">Inquiry Received</h3>
            <p className="text-gray-500 font-light">Our gallery consultant will contact you shortly.</p>
          </div>
        ) : (
          <>
            <div className="mb-10 text-center">
              <span className="text-[10px] tracking-[0.3em] uppercase text-gray-400 block mb-2">Acquisition Inquiry</span>
              <h2 className="serif text-4xl">{artwork.title}</h2>
              <p className="text-gray-500 italic mt-2">by {artwork.artist}</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-8">
              <div className="space-y-6">
                <div className="border-b border-gray-200">
                  <input
                    type="text"
                    required
                    placeholder="FULL NAME"
                    className="w-full py-2 text-xs tracking-widest outline-none focus:placeholder:text-gray-300"
                    value={formData.fullName}
                    onChange={(e) => setFormData({ ...formData, fullName: e.target.value })}
                  />
                </div>
                <div className="border-b border-gray-200">
                  <input
                    type="email"
                    required
                    placeholder="EMAIL ADDRESS"
                    className="w-full py-2 text-xs tracking-widest outline-none focus:placeholder:text-gray-300"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  />
                </div>
                <div className="border-b border-gray-200">
                  <textarea
                    rows={4}
                    placeholder="MESSAGE (OPTIONAL)"
                    className="w-full py-2 text-xs tracking-widest outline-none resize-none focus:placeholder:text-gray-300"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                  />
                </div>
              </div>

              <button
                type="submit"
                disabled={isSubmitting}
                className={`
                  w-full py-5 text-xs tracking-[0.3em] uppercase transition-all duration-500
                  ${isSubmitting ? 'bg-gray-100 text-gray-400' : 'bg-black text-white hover:bg-gray-900'}
                `}
              >
                {isSubmitting ? 'Processing...' : 'Submit Inquiry'}
              </button>
            </form>
          </>
        )}
      </div>
    </div>
  );
};

export default InquiryModal;
