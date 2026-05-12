import { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const slides = [
  { id: 1, image: image1, category: 'Indoor Plant',  name: 'Aglaonema plant'    },
  { id: 2, image: image2, category: 'Indoor Plant',  name: 'Plantain Lilies'    },
  { id: 3, image: image3, category: 'Outdoor Plant', name: 'Cactus'             },
  { id: 4, image: image4, category: 'Indoor Plant',  name: 'Swiss cheese Plant' },
];

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlantItem() {
  const [current, setCurrent] = useState(0);
  const slide = slides[current];

  return (
    <div className="w-56 sm:w-64 bg-[#243324]/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
      {/* Image */}
      <div className="bg-[#1e2c1e] flex items-center justify-center h-44 px-4 pt-3">
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.name}
          className="h-full w-full object-contain transition-opacity duration-300"
        />
      </div>

      {/* Content */}
      <div className="px-4 pb-5 pt-3">
        <p className="text-gray-400 text-xs mb-1">{slide.category}</p>
        <div className="flex items-center justify-between">
          <h3 className="text-white text-base font-bold leading-tight">{slide.name}</h3>
          <button className="text-gray-400 hover:text-white transition-colors shrink-0">
            <ChevronRightIcon />
          </button>
        </div>

        <button className="mt-3 w-full border border-white/20 text-white text-xs py-2 rounded-lg hover:bg-white/10 transition-colors">
          Buy Now
        </button>

        {/* Dot indicators */}
        <div className="flex gap-1.5 mt-3 justify-start">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Slide ${i + 1}`}
              className={`h-1.5 rounded-full transition-all duration-300 ${
                i === current ? 'w-5 bg-white' : 'w-1.5 bg-white/35'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
