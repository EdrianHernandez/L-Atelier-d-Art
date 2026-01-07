
export type ExhibitionStatus = 'current' | 'upcoming' | 'past';

export interface Artwork {
  id: string;
  title: string;
  artist: string;
  year: string;
  dimensions: string;
  price: string;
  imageUrl: string;
  status: ExhibitionStatus;
  description: string;
}

export interface InquiryFormData {
  fullName: string;
  email: string;
  message: string;
  artworkTitle: string;
}
