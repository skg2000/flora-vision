import type { Plant, Testimonial, O2Slide } from '../types';

import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';
import image5 from '../assets/image5.png';
import image6 from '../assets/image6.png';

import user1 from '../assets/user1.png';
import user2 from '../assets/user2.png';
import user3 from '../assets/user3.jpg';

export const topSellingPlants: Plant[] = [
  {
    id: 1,
    name: 'Aglaonema plant',
    category: 'Indoor',
    price: 300,
    image: image1,
    description: 'The Aglaonema plant, commonly known as Chinese Evergreen known for its attractive foliage and ease of care',
  },
  {
    id: 2,
    name: 'Plantain Lilies',
    category: 'Indoor',
    price: 380,
    image: image2,
    description: 'Hostas are primarily grown for their lush, decorative leaves, which come in a wide variety of shapes, sizes,',
  },
  {
    id: 3,
    name: 'Cactus',
    category: 'Outdoor',
    price: 259,
    image: image3,
    description: 'It is known for their ability to thrive in arid environments',
  },
  {
    id: 4,
    name: 'Swiss cheese Plant',
    category: 'Indoor',
    price: 400,
    image: image4,
    description: 'It is a popular tropical houseplant known for its distinctive, perforated leaves',
  },
  {
    id: 5,
    name: 'Sansevieria plant',
    category: 'Indoor',
    price: 450,
    image: image5,
    description: 'It is a popular indoor plant admired for its striking appearance and low-maintenance nature.',
  },
  {
    id: 6,
    name: 'Agave plant',
    category: 'Succulent',
    price: 359,
    image: image6,
    description: 'The Agave plant is a genus of succulent plants known for their striking rosette of thick, fleshy leaves and architectural forms.',
  },
];

export const o2Slides: O2Slide[] = [
  {
    id: 1,
    image: image1,
    category: 'Indoor Plant',
    name: 'Aglaonema plant',
    title: "We Have Small And Best O2 Plants Collection's",
    desc1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    desc2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
  },
  {
    id: 2,
    image: image2,
    category: 'Indoor Plant',
    name: 'Plantain Lilies',
    title: "Discover Nature's Finest Air-Purifying Plants",
    desc1: 'These plants are known for their ability to convert CO₂ into fresh oxygen, making them ideal for improving indoor air quality.',
    desc2: 'With minimal care requirements, these plants thrive in various indoor environments while continuously enhancing the air you breathe.',
  },
  {
    id: 3,
    image: image3,
    category: 'Outdoor Plant',
    name: 'Cactus',
    title: 'Hardy Plants That Thrive in Any Environment',
    desc1: 'Known for their resilience, these plants require very little water and can survive in dry, arid conditions.',
    desc2: 'Their unique ability to store water makes them perfect for busy plant owners who want greenery without the maintenance.',
  },
  {
    id: 4,
    image: image4,
    category: 'Indoor Plant',
    name: 'Swiss cheese Plant',
    title: 'Tropical Plants for a Lush Indoor Jungle',
    desc1: 'These stunning tropical plants bring a bold, architectural feel to any space with their distinctive leaf patterns.',
    desc2: 'Native to tropical forests, these plants are adapted to low-light conditions, making them perfect for indoor environments.',
  },
];

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: 'Shelly Russel',
    avatar: user1,
    rating: 4,
    review: "Just got my hands on some absolutely awesome plants, and I couldn't be happier!",
  },
  {
    id: 2,
    name: 'Lula Rolfson',
    avatar: user2,
    rating: 4,
    review: "Each one has its own unique charm and personality, and they've already started brightening up my space. The vibrant colors and fresh greenery make such a huge difference in my home.",
  },
  {
    id: 3,
    name: 'Carol Huels',
    avatar: user3,
    rating: 4,
    review: "It's like bringing a little piece of nature indoors. Definitely worth the investment—my plant collection has never looked better!",
  },
];
