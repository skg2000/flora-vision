import type { Plant, Testimonial } from '../types';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.jpg';

export const trendingPlants: Plant[] = [
  {
    id: 1,
    name: 'Monstera Deliciosa',
    category: 'Indoor Plant',
    price: 29.99,
    originalPrice: 39.99,
    image: 'https://images.unsplash.com/photo-1614594975525-e45190c55d0b?w=400&h=400&fit=crop&auto=format',
    badge: 'Best Seller',
    rating: 4.8,
    reviews: 124,
  },
  {
    id: 2,
    name: 'Peace Lily',
    category: 'Air Purifying',
    price: 19.99,
    image: 'https://images.unsplash.com/photo-1593482892290-f54927ae2b7a?w=400&h=400&fit=crop&auto=format',
    badge: 'Trending',
    rating: 4.7,
    reviews: 98,
  },
  {
    id: 3,
    name: 'Snake Plant',
    category: 'Low Maintenance',
    price: 24.99,
    originalPrice: 34.99,
    image: 'https://images.unsplash.com/photo-1598880940371-c756e015fea1?w=400&h=400&fit=crop&auto=format',
    badge: 'New',
    rating: 4.9,
    reviews: 211,
  },
  {
    id: 4,
    name: 'Fiddle Leaf Fig',
    category: 'Indoor Plant',
    price: 34.99,
    image: 'https://images.unsplash.com/photo-1574116959590-9c70eb7765b9?w=400&h=400&fit=crop&auto=format',
    rating: 4.6,
    reviews: 77,
  },
];

export const topSellingPlants: Plant[] = [
  {
    id: 5,
    name: 'Aglaonema plant',
    category: 'Indoor',
    price: 300,
    image: image1,
    rating: 4.7,
    reviews: 88,
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
  },
  {
    id: 6,
    name: 'Plantain Lilies',
    category: 'Indoor',
    price: 380,
    image: image2,
    rating: 4.8,
    reviews: 134,
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
  },
  {
    id: 7,
    name: 'Cactus',
    category: 'Outdoor',
    price: 259,
    image: image3,
    rating: 4.5,
    reviews: 56,
    description: 'It is known for their ability to thrive in arid environments',
  },
  {
    id: 8,
    name: 'Swiss cheese Plant',
    category: 'Indoor',
    price: 400,
    image: image4,
    rating: 4.9,
    reviews: 290,
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
  },
  {
    id: 9,
    name: 'Sansevieria plant',
    category: 'Indoor',
    price: 450,
    image: image5,
    rating: 4.7,
    reviews: 67,
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
  },
  {
    id: 10,
    name: 'Agave plant',
    category: 'Succulent',
    price: 359,
    image: image6,
    rating: 4.6,
    reviews: 43,
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Shelly Russel',
    location: '',
    avatar: user1,
    rating: 4,
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    location: '',
    avatar: user2,
    rating: 4,
    review:
      "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: 'Carol Huels',
    location: '',
    avatar: user3,
    rating: 4,
    review:
      "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];
