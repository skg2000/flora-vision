import { BracketTitle } from './SectionTitle';
import TestimonialCard from './TestimonialCard';
import { testimonials } from '../data/plants';

export default function CustomerReviews() {
  return (
    <section className="py-16 lg:py-24 bg-[#1a2e1a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-16">
          <BracketTitle>Customer Review</BracketTitle>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          {testimonials.map(t => (
            <TestimonialCard key={t.id} testimonial={t} />
          ))}
        </div>
      </div>
    </section>
  );
}
