export interface Plant {
  id: number;
  name: string;
  category: string;
  price: number;
  originalPrice?: number;
  image: string;
  badge?: string;
  rating?: number;
  reviews?: number;
  description?: string;
}

export interface Testimonial {
  id: number;
  name: string;
  location?: string;
  avatar: string;
  rating: number;
  review: string;
}

export interface O2Slide {
  id: number;
  image: string;
  category: string;
  name: string;
  title: string;
  desc1: string;
  desc2: string;
}
