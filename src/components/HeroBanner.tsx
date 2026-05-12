import heroBg from '../assets/background.jpg';
import image2  from '../assets/image2.png';
import image6  from '../assets/image6.png';
import user1   from '../assets/user1.png';
import PlantItem from './PlantItem';
import { BracketTitle } from './SectionTitle';
import { BagIcon, StarIcon } from './Icons';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

const trendyCards = [
  {
    id: 1,
    image: image2,
    imagePosition: 'left' as const,
    title: 'For Your Desks Decorations',
    desc: 'I recently added a beautiful desk decoration plant to my workspace, and it has made such a positive difference!',
    price: 599,
  },
  {
    id: 2,
    image: image6,
    imagePosition: 'right' as const,
    title: 'For Your Desks Decorations',
    desc: 'The greenery adds a touch of nature and serenity to my desk, making it feel more inviting and calming',
    price: 399,
  },
];

function TrendyCardContent({ card }: { card: typeof trendyCards[number] }) {
  return (
    <div className="py-9 flex flex-col justify-center gap-3">
      <h3 className="text-white text-xl font-bold">{card.title}</h3>
      <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
      <span className="text-white text-lg font-semibold">Rs. {card.price}/-</span>
      <div className="flex items-center gap-3">
        <button className="border border-white/60 text-white text-sm px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
          Explore
        </button>
        <button className="w-9 h-9 border border-white/20 bg-[#1a2e1a] rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
          <BagIcon className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
}

export default function HeroBanner() {
  return (
    <section id="home" className="bg-[#1a2e1a]">

      {/* ── Hero ── */}
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        <div className="absolute inset-0 bg-[#0d1f0d]/65" />

        <div className="relative z-10 max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-28 min-h-screen">

          {/* Left: headline + buttons */}
          <div className="flex flex-col gap-5 max-w-xs sm:max-w-sm">
            <h1 className="text-white text-5xl sm:text-6xl font-bold leading-tight">
              Earth's Exhale
            </h1>
            <p className="text-gray-300 text-sm leading-relaxed">
              "Earth Exhale" symbolizes the purity and vitality of the Earth's natural environment and its essential role in sustaining life.
            </p>
            <div className="flex items-center gap-4 flex-wrap">
              <button className="border border-white text-white text-sm px-5 py-2.5 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                Buy Now
              </button>
              <button className="flex items-center gap-2 text-white/80 hover:text-white text-sm transition-colors">
                <span className="w-8 h-8 rounded-full border border-white/50 flex items-center justify-center">
                  <PlayIcon />
                </span>
                Live Demo...
              </button>
            </div>
          </div>

          {/* Top-right: product card (PlantItem) */}
          <div className="absolute top-24 right-8 lg:right-20">
            <PlantItem />
          </div>

          {/* Bottom-left: testimonial card */}
          <div className="absolute bottom-20 left-8 lg:left-20 w-60 sm:w-64 bg-[#1e2c1e]/85 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <img src={user1} alt="Ronnie Hamill" className="w-9 h-9 rounded-full object-cover shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Ronnie Hamill</p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 5 }, (_, i) => (
                    <StarIcon key={i} filled={i < 4} className="w-3.5 h-3.5" />
                  ))}
                </div>
              </div>
            </div>
            <p className="text-gray-300 text-xs leading-relaxed">
              I can't express how thrilled I am with my new natural plants! They bring such a fresh and vibrant energy to my home.
            </p>
          </div>

        </div>
      </div>

      {/* ── Our Trendy Plants ── */}
      <div className="py-16 px-6 sm:px-12 lg:px-20">
        <div className="mb-16">
          <BracketTitle>Our Trendy plants</BracketTitle>
        </div>

        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {trendyCards.map(card => (
            <div key={card.id} className="relative mt-16">
              <div className="bg-[#243324] rounded-3xl grid grid-cols-2 min-h-[260px]">
                {card.imagePosition === 'left' ? (
                  <>
                    <div className="relative">
                      <img src={card.image} alt={card.title}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-[360px] w-auto object-contain" />
                    </div>
                    <div className="pr-10 pl-4">
                      <TrendyCardContent card={card} />
                    </div>
                  </>
                ) : (
                  <>
                    <div className="pl-10 pr-4">
                      <TrendyCardContent card={card} />
                    </div>
                    <div className="relative">
                      <img src={card.image} alt={card.title}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-[360px] w-auto object-contain" />
                    </div>
                  </>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>

    </section>
  );
}
