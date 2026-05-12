import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/plants';

export default function CustomerReviews() {
  return (
    <section className="py-16 lg:py-24 bg-[#1a2e1a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        {/* Title */}
        <div className="flex justify-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold px-4">
            <span className="relative">
              <span className="absolute -left-3 top-0 bottom-0 border-l-2 border-b-2 border-[#c8d87a] w-3" />
              Customer Review
              <span className="absolute -right-3 top-0 bottom-0 border-r-2 border-b-2 border-[#c8d87a] w-3" />
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
