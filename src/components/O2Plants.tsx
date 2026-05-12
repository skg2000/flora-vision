import { useState } from 'react';
import { BracketTitle } from './SectionTitle';
import { o2Slides } from '../data/plants';

function PrevIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path d="M15 18l-6-6 6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function NextIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

export default function O2Plants() {
  const [current, setCurrent] = useState(0);

  const slide = o2Slides[current];
  const counter = `${String(current + 1).padStart(2, '0')}/${String(o2Slides.length).padStart(2, '0')}`;

  function prev() { setCurrent(c => (c - 1 + o2Slides.length) % o2Slides.length); }
  function next() { setCurrent(c => (c + 1) % o2Slides.length); }

  return (
    <section id="o2" className="py-16 lg:py-20 bg-[#1a2e1a]">
      <div className="max-w-5xl mx-auto px-6 sm:px-10 lg:px-16">

        <div className="mb-16">
          <BracketTitle>Our Best o2</BracketTitle>
        </div>

        <div className="relative mt-20">
          <div className="bg-[#243324] rounded-3xl grid grid-cols-2 min-h-[340px]">
            <div className="relative">
              <img
                key={slide.id}
                src={slide.image}
                alt={slide.title}
                className="absolute -top-20 left-1/2 -translate-x-1/2 h-[420px] w-auto object-contain"
              />
            </div>
            <div className="py-10 pr-10 pl-4 flex flex-col justify-center gap-4">
              <h3 className="text-white text-xl font-bold leading-snug">{slide.title}</h3>
              <p className="text-gray-300 text-sm leading-relaxed">{slide.desc1}</p>
              <p className="text-gray-300 text-sm leading-relaxed">{slide.desc2}</p>
              <div className="flex items-center justify-between mt-2">
                <button className="border border-white/70 text-white text-sm px-7 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                  Explore
                </button>
                <div className="flex items-center gap-3 text-white">
                  <button onClick={prev} aria-label="Previous" className="text-gray-300 hover:text-white transition-colors">
                    <PrevIcon />
                  </button>
                  <span className="text-sm font-medium tabular-nums">{counter}</span>
                  <button onClick={next} aria-label="Next" className="text-gray-300 hover:text-white transition-colors">
                    <NextIcon />
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>

        <div className="flex justify-center gap-2 mt-8">
          {o2Slides.map((_, i) => (
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
