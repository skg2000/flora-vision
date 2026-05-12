import SectionTitle from './SectionTitle';
import PlantCard from './PlantCard';
import { trendingPlants } from '../data/plants';

function ArrowRightIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="currentColor" className="w-4 h-4">
      <path fillRule="evenodd" d="M10.293 5.293a1 1 0 011.414 0l4 4a1 1 0 010 1.414l-4 4a1 1 0 01-1.414-1.414L12.586 11H5a1 1 0 110-2h7.586l-2.293-2.293a1 1 0 010-1.414z" clipRule="evenodd" />
    </svg>
  );
}

export default function TrendingPlants() {
  return (
    <section id="trending" className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header row */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <SectionTitle
            badge="Trending"
            title="Popular This Week"
            subtitle="Our most-loved plants picked by plant enthusiasts like you."
          />
          <a
            href="#"
            className="inline-flex items-center gap-1.5 text-green-600 font-semibold text-sm hover:text-green-800 transition-colors shrink-0"
          >
            View All Plants <ArrowRightIcon />
          </a>
        </div>

        {/* Cards grid */}
        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {trendingPlants.map(plant => (
            <PlantCard key={plant.id} plant={plant} />
          ))}
        </div>
      </div>
    </section>
  );
}
