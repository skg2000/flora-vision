import { useState } from 'react';
import image1 from '../assets/image1.png';
import image2 from '../assets/image2.png';
import image3 from '../assets/image3.png';
import image4 from '../assets/image4.png';

const slides = [
  {
    id: 1,
    image: image1,
    title: "We Have Small And Best O2 Plants Collection's",
    desc1: 'Oxygen-producing plants, often referred to as "O2 plants," are those that release oxygen into the atmosphere through the process of photosynthesis.',
    desc2: 'Many plants can help filter out pollutants and toxins from the air, such as formaldehyde, benzene, and trichloroethylene. This makes the air cleaner and healthier to breathe.',
  },
  {
    id: 2,
    image: image2,
    title: "Discover Nature's Finest Air-Purifying Plants",
    desc1: 'These plants are known for their ability to convert CO₂ into fresh oxygen, making them ideal for improving indoor air quality.',
    desc2: 'With minimal care requirements, these plants thrive in various indoor environments while continuously enhancing the air you breathe.',
  },
  {
    id: 3,
    image: image3,
    title: 'Hardy Plants That Thrive in Any Environment',
    desc1: 'Known for their resilience, these plants require very little water and can survive in dry, arid conditions.',
    desc2: 'Their unique ability to store water makes them perfect for busy plant owners who want greenery without the maintenance.',
  },
  {
    id: 4,
    image: image4,
    title: 'Tropical Plants for a Lush Indoor Jungle',
    desc1: 'These stunning tropical plants bring a bold, architectural feel to any space with their distinctive leaf patterns.',
    desc2: 'Native to tropical forests, these plants are adapted to low-light conditions, making them perfect for indoor environments.',
  },
];

export default function O2Plants() {
  const [current, setCurrent] = useState(0);

  const slide = slides[current];
  const counter = `${String(current + 1).padStart(2, '0')}/${String(slides.length).padStart(2, '0')}`;

  function prev() {
    setCurrent(c => (c - 1 + slides.length) % slides.length);
  }

  function next() {
    setCurrent(c => (c + 1) % slides.length);
  }

  return (
    <section id="o2" className="py-16 lg:py-20 bg-[#1a2e1a]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">

        {/* Title */}
        <div className="flex justify-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold px-4">
            <span className="relative">
              <span className="absolute -left-3 top-0 bottom-0 border-l-2 border-b-2 border-[#c8d87a] w-3" />
              Our Best o2
              <span className="absolute -right-3 top-0 bottom-0 border-r-2 border-b-2 border-[#c8d87a] w-3" />
            </span>
          </h2>
        </div>

        {/* Card — extra top margin to give room for overflowing image */}
        <div className="relative mt-20">
          <div className="bg-[#243324] rounded-3xl grid grid-cols-2 min-h-[340px]">

            {/* Left: plant image overflowing above the card */}
            <div className="relative">
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-auto object-contain"
              />
            </div>

            {/* Right: content */}
            <div className="py-10 pr-10 pl-4 flex flex-col justify-center gap-4">
              <h3 className="text-white text-xl font-bold leading-snug">{slide.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{slide.desc1}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{slide.desc2}</p>

              <div className="flex items-center justify-between mt-2">
                <button className="border border-white/70 text-white text-sm px-7 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Explore
                </button>

                <div className="flex items-center gap-3 text-white">
                  <button
                    onClick={prev}
                    aria-label="Previous"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                  <span className="text-sm font-medium tabular-nums">{counter}</span>
                  <button
                    onClick={next}
                    aria-label="Next"
                    className="text-gray-300 hover:text-white transition-colors"
                  >
                    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
                      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
                    </svg>
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>

        {/* Dot indicators */}
        <div className="flex justify-center gap-2 mt-8">
          {slides.map((_, i) => (
            <button
              key={i}
              onClick={() => setCurrent(i)}
              aria-label={`Go to slide ${i + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                i === current ? 'w-6 bg-white' : 'w-2 bg-white/35'
              }`}
            />
          ))}
        </div>

      </div>
    </section>
  );
}
