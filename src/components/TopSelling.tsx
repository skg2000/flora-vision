import { BracketTitle } from './SectionTitle';
import PlantCard from './PlantCard';
import { topSellingPlants } from '../data/plants';

export default function TopSelling() {
  return (
    <section id="trending" className="py-16 lg:py-24 bg-[#1a2e1a]">
      <div className="max-w-6xl mx-auto px-6 sm:px-10 lg:px-16">
        <div className="mb-12">
          <BracketTitle>Our Top Selling Plants</BracketTitle>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
          {topSellingPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
