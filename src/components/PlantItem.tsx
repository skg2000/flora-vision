import { useState } from 'react';
import { o2Slides } from '../data/plants';
import { ChevronRightIcon } from './Icons';

export default function PlantItem() {
  const [current, setCurrent] = useState(0);
  const slide = o2Slides[current];

  return (
    <div className="w-56 sm:w-64 bg-[#243324]/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
      <div className="bg-[#1e2c1e] flex items-center justify-center h-44 px-4 pt-3">
        <img
          key={slide.id}
          src={slide.image}
          alt={slide.name}
          className="h-full w-full object-contain transition-opacity duration-300"
        />
      </div>
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
        <div className="flex gap-1.5 mt-3 justify-start">
          {o2Slides.map((_, i) => (
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
