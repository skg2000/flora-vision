import type { Testimonial } from '../types';
import { StarIcon } from './Icons';

export default function TestimonialCard({ testimonial }: { testimonial: Testimonial }) {
  return (
    <div className="relative pt-8">
      <article className="bg-[#243324] rounded-2xl pt-10 px-6 pb-7 transition-transform duration-200 ease-out hover:scale-105 active:scale-100 cursor-pointer">
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
        <p className="text-gray-400 text-sm leading-relaxed">{testimonial.review}</p>
      </article>
    </div>
  );
}
