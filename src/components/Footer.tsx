import { useState } from 'react';

const quickLinks = [
  { label: 'Home',              href: '#home'     },
  { label: "Type's Of plant's", href: '#trending' },
  { label: 'Contact',           href: '#footer'   },
  { label: 'Privacy',           href: '#'         },
];

export default function Footer() {
  const [email, setEmail] = useState('');

  function handleSubscribe(e: React.FormEvent) {
    e.preventDefault();
    setEmail('');
  }

  return (
    <footer id="footer" className="bg-[#1a2e1a] text-white">
      {/* Main grid */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pt-16 pb-10">
        <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr_2fr] gap-12 lg:gap-16">

          {/* Brand */}
          <div className="flex flex-col gap-5">
            <div className="flex items-center gap-3">
              <span className="text-4xl">🪴</span>
              <span className="text-2xl font-bold tracking-tight">FloraVision.</span>
            </div>
            <p className="text-sm leading-relaxed text-gray-300">
              "From lush indoor greens to vibrant outdoor blooms, our plants are crafted to thrive and elevate your living environment."
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold text-lg mb-6">Quick Link's</h4>
            <ul className="flex flex-col gap-4">
              {quickLinks.map(l => (
                <li key={l.label}>
                  <a
                    href={l.href}
                    className="text-sm underline underline-offset-2 hover:text-green-300 transition-colors"
                  >
                    {l.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h4 className="font-bold text-lg mb-6">For Every Update.</h4>
            <form onSubmit={handleSubscribe} className="flex border border-white/30">
              <input
                type="email"
                value={email}
                onChange={e => setEmail(e.target.value)}
                placeholder="Enter Email"
                className="flex-1 min-w-0 bg-white text-gray-800 placeholder-gray-400 px-4 py-3 text-sm focus:outline-none"
              />
              <button
                type="submit"
                className="shrink-0 bg-white text-gray-900 font-bold px-5 py-3 text-sm border-l border-gray-300 hover:bg-gray-100 transition-colors"
              >
                SUBSCRIBE
              </button>
            </form>
          </div>

        </div>
      </div>

      {/* Bottom bar */}
      <div className="max-w-7xl mx-auto px-8 sm:px-12 lg:px-20 pb-8 flex items-center justify-between">
        <div className="flex gap-6">
          {(['FB', 'TW', 'LI'] as const).map(s => (
            <a key={s} href="#" className="font-bold text-sm hover:text-green-300 transition-colors">
              {s}
            </a>
          ))}
        </div>
        <p className="text-sm text-gray-300">FloraVision © all right reserve</p>
      </div>
    </footer>
  );
}
