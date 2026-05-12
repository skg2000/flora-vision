import { useState } from 'react';
import type { Plant } from '../types';
import { BagIcon } from './Icons';

export default function PlantCard({ plant }: { plant: Plant }) {
  const [added, setAdded] = useState(false);

  function handleAdd() {
    setAdded(true);
    setTimeout(() => setAdded(false), 1500);
  }

  return (
    <article className="bg-[#243324]/70 backdrop-blur-sm border border-white/10 rounded-3xl overflow-hidden flex flex-col">
      <div className="flex items-end justify-center bg-transparent pt-6 px-6 h-60">
        <img
          src={plant.image}
          alt={plant.name}
          loading="lazy"
          className="h-full w-full object-contain drop-shadow-xl"
        />
      </div>
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
            <BagIcon className="w-5 h-5" />
          </button>
        </div>
      </div>
    </article>
  );
}
