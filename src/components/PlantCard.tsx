import { useState } from 'react';
import type { Plant } from '../types';

interface PlantCardProps {
  plant: Plant;
  compact?: boolean;
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.8} className="w-5 h-5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function PlantCard({ plant }: PlantCardProps) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="bg-[#243324]/70 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col">
      {/* Image */}
      <div className="flex items-end justify-center bg-transparent pt-6 px-6 h-60">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          className="h-full w-full object-contain drop-shadow-xl"
        />
      </div>

      {/* Content */}
      <div className="px-5 pb-6 pt-5 flex flex-col gap-2.5 flex-1">
        <h3 className="text-white text-2xl font-normal leading-snug">{plant.name}</h3>
        {plant.description && (
          <p className="text-gray-400 text-sm leading-relaxed">{plant.description}</p>
        )}
        <div className="flex items-center justify-between mt-auto pt-3">
          <span className="text-white text-xl font-medium">Rs. {plant.price}/-</span>
          <button
            aria-label={`Add ${plant.name} to cart`}
            onClick={handleAdd}
            className={`w-11 h-11 rounded-xl border flex items-center justify-center transition-colors duration-200 ${
              added
                ? 'bg-white text-gray-900 border-white'
                : 'border-white/40 text-white hover:bg-white hover:text-gray-900'
            }`}
          >
            <BagIcon />
          </button>
        </div>
      </div>
    </article>
  );
}
