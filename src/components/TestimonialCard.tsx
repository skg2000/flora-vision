import type { Testimonial } from '../types';

function StarIcon({ filled }: { filled: boolean }) {
  return (
    <svg viewBox="0 0 20 20" className={`w-4 h-4 ${filled ? 'text-yellow-400' : 'text-gray-600'}`} fill="currentColor">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
    </svg>
  );
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export default function TestimonialCard({ testimonial }: TestimonialCardProps) {
  return (
    <div className="relative pt-8">
      <article className="bg-[#243324] rounded-2xl pt-10 px-6 pb-7 transition-transform duration-200 ease-out hover:scale-105 active:scale-100 cursor-pointer">
        {/* User row */}
        <div className="flex items-center gap-4 mb-6">
          <img
            src={testimonial.avatar}
            alt={testimonial.name}
            className="w-16 h-16 rounded-full object-cover shrink-0"
          />
          <div>
            <h3 className="text-white text-xl font-bold leading-tight">{testimonial.name}</h3>
            <div className="flex gap-0.5 mt-1.5">
              {Array.from({ length: 5 }, (_, i) => (
                <StarIcon key={i} filled={i < testimonial.rating} />
              ))}
            </div>
          </div>
        </div>

        {/* Review */}
        <p className="text-gray-400 text-sm leading-relaxed">{testimonial.review}</p>
      </article>
    </div>
  );
}
