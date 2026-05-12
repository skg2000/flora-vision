import { useState, useEffect, useRef } from 'react';

function SearchIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5 shrink-0">
      <circle cx="11" cy="11" r="8" strokeLinecap="round" />
      <path d="m21 21-4.35-4.35" strokeLinecap="round" />
    </svg>
  );
}

function BagIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2} className="w-5 h-5">
      <path d="M6 2L3 6v14a2 2 0 002 2h14a2 2 0 002-2V6l-3-4z" strokeLinecap="round" strokeLinejoin="round" />
      <line x1="3" y1="6" x2="21" y2="6" />
      <path d="M16 10a4 4 0 01-8 0" strokeLinecap="round" strokeLinejoin="round" />
    </svg>
  );
}

function HamburgerIcon() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2.5} className="w-5 h-5">
      <line x1="3" y1="8"  x2="21" y2="8"  strokeLinecap="round" />
      <line x1="3" y1="16" x2="21" y2="16" strokeLinecap="round" />
    </svg>
  );
}

const plantTypes = [
  { label: 'Indoor Plants',   href: '#trending' },
  { label: 'Outdoor Plants',  href: '#trending' },
  { label: 'Succulents',      href: '#trending' },
  { label: 'Air Purifying',   href: '#trending' },
  { label: 'Tropical Plants', href: '#trending' },
];

export default function Navbar() {
  const [mobileOpen, setMobileOpen]   = useState(false);
  const [scrolled, setScrolled]       = useState(false);
  const [dropdownOpen, setDropdownOpen] = useState(false);
  const [searchOpen, setSearchOpen]   = useState(false);
  const [searchQuery, setSearchQuery] = useState('');

  const dropdownRef = useRef<HTMLLIElement>(null);
  const searchRef   = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    function onOutsideClick(e: MouseEvent) {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target as Node)) {
        setDropdownOpen(false);
      }
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchOpen(false);
        setSearchQuery('');
      }
    }
    document.addEventListener('mousedown', onOutsideClick);
    return () => document.removeEventListener('mousedown', onOutsideClick);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-[#1a2e1a]/95 backdrop-blur-sm shadow-sm' : 'bg-[#1a2e1a]'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-6 sm:px-10 lg:px-16 flex items-center justify-between h-16 lg:h-[72px]">

        {/* Logo */}
        <a href="#home" className="flex items-center gap-2.5 select-none shrink-0">
          <span className="text-3xl">🪴</span>
          <span className="text-white font-bold text-xl tracking-tight">FloraVision.</span>
        </a>

        {/* Desktop nav — no border */}
        <ul className="hidden md:flex items-center gap-8">

          <li>
            <a href="#home" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Home
            </a>
          </li>

          {/* Plants Type with dropdown */}
          <li ref={dropdownRef} className="relative">
            <button
              onClick={() => setDropdownOpen(o => !o)}
              className="flex items-center gap-1 text-white/90 hover:text-white text-sm font-medium transition-colors"
            >
              Plants Type
              <svg
                viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}
              >
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>

            {dropdownOpen && (
              <div className="absolute top-full left-1/2 -translate-x-1/2 mt-3 w-48 bg-[#243324] rounded-xl shadow-2xl border border-white/10 py-1.5 overflow-hidden">
                {plantTypes.map(type => (
                  <a
                    key={type.label}
                    href={type.href}
                    onClick={() => setDropdownOpen(false)}
                    className="block px-4 py-2.5 text-white/80 hover:text-white hover:bg-white/10 text-sm transition-colors"
                  >
                    {type.label}
                  </a>
                ))}
              </div>
            )}
          </li>

          <li>
            <a href="#o2" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              More
            </a>
          </li>
          <li>
            <a href="#footer" className="text-white/90 hover:text-white text-sm font-medium transition-colors">
              Contact
            </a>
          </li>
        </ul>

        {/* Right icons */}
        <div className="hidden md:flex items-center gap-5 text-white/80">

          {/* Search — expands on click, closes on outside click */}
          <div ref={searchRef} className="flex items-center">
            {searchOpen ? (
              <div className="flex items-center gap-2 bg-[#243324] border border-white/20 rounded-lg px-3 py-1.5">
                <SearchIcon />
                <input
                  autoFocus
                  type="text"
                  value={searchQuery}
                  onChange={e => setSearchQuery(e.target.value)}
                  placeholder="Search plants..."
                  className="bg-transparent text-white text-sm placeholder-white/40 focus:outline-none w-36"
                />
              </div>
            ) : (
              <button
                aria-label="Open search"
                onClick={() => setSearchOpen(true)}
                className="hover:text-white transition-colors"
              >
                <SearchIcon />
              </button>
            )}
          </div>

          <button aria-label="Cart" className="hover:text-white transition-colors">
            <BagIcon />
          </button>
          <button
            aria-label="Menu"
            onClick={() => setMobileOpen(o => !o)}
            className="hover:text-white transition-colors"
          >
            <HamburgerIcon />
          </button>
        </div>

        {/* Mobile toggle */}
        <button
          className="md:hidden text-white/80 hover:text-white transition-colors"
          onClick={() => setMobileOpen(o => !o)}
          aria-label="Toggle menu"
        >
          <HamburgerIcon />
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`overflow-hidden transition-all duration-300 ${
          mobileOpen ? 'max-h-96 opacity-100' : 'max-h-0 opacity-0'
        } bg-[#1a2e1a] border-t border-white/10`}
      >
        <ul className="flex flex-col px-6 py-4 gap-1">
          <li>
            <a href="#home" onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
              Home
            </a>
          </li>
          <li>
            <button
              onClick={() => setDropdownOpen(o => !o)}
              className="w-full flex items-center justify-between px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors"
            >
              Plants Type
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={2}
                className={`w-3.5 h-3.5 transition-transform duration-200 ${dropdownOpen ? 'rotate-180' : ''}`}>
                <path d="M6 9l6 6 6-6" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
            {dropdownOpen && (
              <ul className="pl-4 mt-1 flex flex-col gap-0.5">
                {plantTypes.map(type => (
                  <li key={type.label}>
                    <a href={type.href}
                      onClick={() => { setDropdownOpen(false); setMobileOpen(false); }}
                      className="block px-3 py-2 rounded-lg text-white/60 hover:text-white hover:bg-white/10 text-sm transition-colors">
                      {type.label}
                    </a>
                  </li>
                ))}
              </ul>
            )}
          </li>
          <li>
            <a href="#o2" onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
              More
            </a>
          </li>
          <li>
            <a href="#footer" onClick={() => setMobileOpen(false)}
              className="block px-3 py-2.5 rounded-lg text-white/80 hover:text-white hover:bg-white/10 text-sm font-medium transition-colors">
              Contact
            </a>
          </li>
        </ul>
        <div className="flex items-center gap-2 px-6 pb-4">
          <div className="flex items-center gap-2 bg-[#243324] border border-white/20 rounded-lg px-3 py-1.5 flex-1">
            <SearchIcon />
            <input
              type="text"
              placeholder="Search plants..."
              className="bg-transparent text-white text-sm placeholder-white/40 focus:outline-none w-full"
            />
          </div>
        </div>
      </div>
    </header>
  );
}
