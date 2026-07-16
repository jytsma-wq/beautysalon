export interface VideoItem {
  id: string;
  title: string;
  description: string;
  src: string;
  thumbnail: string;
  category: 'treatment' | 'testimonial' | 'behind-scenes' | 'facility' | 'promo';
  duration?: string;
}

export interface ImageGallery {
  id: string;
  title: string;
  description: string;
  images: string[];
  category: 'treatments' | 'facility' | 'team' | 'results';
}

// Add only salon-owned or permission-cleared media with verified captions.
export const heroVideos: VideoItem[] = [];
export const treatmentVideos: VideoItem[] = [];
export const testimonialVideos: VideoItem[] = [];
export const behindTheScenesVideos: VideoItem[] = [];
export const allVideos: VideoItem[] = [];
export const imageGalleries: ImageGallery[] = [];
