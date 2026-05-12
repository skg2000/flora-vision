import heroBg   from '../assets/background.jpg';
import image1   from '../assets/image1.png';
import image2   from '../assets/image2.png';
import image6   from '../assets/image6.png';
import user1    from '../assets/user1.png';

function PlayIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5 ml-0.5">
      <path d="M8 5v14l11-7z" />
    </svg>
  );
}

function ChevronRightIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M9 18l6-6-6-6" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-4 h-4">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function StarIcon() {
  return (
    <svg viewBox="0 0 20 20" fill="#f59e0b" className="w-3.5 h-3.5">
      <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
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

export default function HeroBanner() {
  return (
    <section id="home" className="bg-[#1a2e1a]">

      {/* ── Hero ── */}
      <div
        className="relative min-h-screen overflow-hidden"
        style={{ backgroundImage: `url(${heroBg})`, backgroundSize: 'cover', backgroundPosition: 'center' }}
      >
        {/* Dark overlay */}
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
 {/* <PlantItem/> */}
          {/* Top-right: product card */}
          <div className="absolute top-24 right-8 lg:right-20 w-56 sm:w-64 bg-[#243324]/90 backdrop-blur-sm rounded-3xl overflow-hidden shadow-2xl">
            <div className="bg-[#1e2c1e] flex items-center justify-center h-44 px-4 pt-3">
              <img src={image1} alt="Aglaonema plant" className="h-full w-full object-contain" />
            </div>
            <div className="px-4 pb-5 pt-3">
              <p className="text-gray-400 text-xs mb-1">Indoor Plant</p>
              <div className="flex items-center justify-between">
                <h3 className="text-white text-base font-bold leading-tight">Aglaonema&nbsp;&nbsp;plant</h3>
                <button className="text-gray-400 hover:text-white transition-colors shrink-0">
                  <ChevronRightIcon />
                </button>
              </div>
              <button className="mt-3 w-full border border-white/20 text-white text-xs py-2 rounded-lg hover:bg-white/10 transition-colors">
                Buy Now
              </button>
              <div className="flex gap-1.5 mt-3 justify-start">
                <span className="h-1.5 w-5 rounded-full bg-white" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
                <span className="h-1.5 w-1.5 rounded-full bg-white/35" />
              </div>
            </div>
          </div>
         

          {/* Bottom-left: testimonial card */}
          <div className="absolute bottom-20 left-8 lg:left-20 w-60 sm:w-64 bg-[#1e2c1e]/85 backdrop-blur-sm rounded-2xl p-4 shadow-xl">
            <div className="flex items-center gap-2.5 mb-2.5">
              <img src={user1} alt="Ronnie Hamill" className="w-9 h-9 rounded-full object-cover shrink-0" />
              <div>
                <p className="text-white font-bold text-sm">Ronnie Hamill</p>
                <div className="flex gap-0.5 mt-0.5">
                  {Array.from({ length: 4 }, (_, i) => <StarIcon key={i} />)}
                  <svg viewBox="0 0 20 20" className="w-3.5 h-3.5 text-gray-500" fill="currentColor">
                    <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                  </svg>
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

        {/* Title */}
        <div className="flex justify-center mb-16">
          <h2 className="text-white text-3xl md:text-4xl font-bold px-4">
            <span className="relative">
              <span className="absolute -left-3 top-0 bottom-0 border-l-2 border-b-2 border-[#c8d87a] w-3" />
              Our Trendy plants
              <span className="absolute -right-3 top-0 bottom-0 border-r-2 border-b-2 border-[#c8d87a] w-3" />
            </span>
          </h2>
        </div>

        {/* Cards */}
        <div className="flex flex-col gap-8 max-w-5xl mx-auto">
          {trendyCards.map(card => (
            <div key={card.id} className="relative mt-16">
              <div className={`bg-[#243324] rounded-3xl grid grid-cols-2 min-h-[260px] ${
                card.imagePosition === 'right' ? '' : ''
              }`}>

                {card.imagePosition === 'left' ? (
                  <>
                    {/* Image left */}
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-[360px] w-auto object-contain"
                      />
                    </div>
                    {/* Text right */}
                    <div className="py-9 pr-10 pl-4 flex flex-col justify-center gap-3">
                      <h3 className="text-white text-xl font-bold">{card.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                      <span className="text-white text-lg font-semibold">Rs. {card.price}/-</span>
                      <div className="flex items-center gap-3">
                        <button className="border border-white/60 text-white text-sm px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                          Explore
                        </button>
                        <button className="w-9 h-9 border border-white/20 bg-[#1a2e1a] rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
                          <BagIcon />
                        </button>
                      </div>
                    </div>
                  </>
                ) : (
                  <>
                    {/* Text left */}
                    <div className="py-9 pl-10 pr-4 flex flex-col justify-center gap-3">
                      <h3 className="text-white text-xl font-bold">{card.title}</h3>
                      <p className="text-gray-400 text-sm leading-relaxed">{card.desc}</p>
                      <span className="text-white text-lg font-semibold">Rs. {card.price}/-</span>
                      <div className="flex items-center gap-3">
                        <button className="border border-white/60 text-white text-sm px-6 py-2 rounded-lg hover:bg-white hover:text-gray-900 transition-colors">
                          Explore
                        </button>
                        <button className="w-9 h-9 border border-white/20 bg-[#1a2e1a] rounded-lg flex items-center justify-center text-white hover:bg-white hover:text-gray-900 transition-colors">
                          <BagIcon />
                        </button>
                      </div>
                    </div>
                    {/* Image right */}
                    <div className="relative">
                      <img
                        src={card.image}
                        alt={card.title}
                        className="absolute -top-16 left-1/2 -translate-x-1/2 h-[360px] w-auto object-contain"
                      />
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
