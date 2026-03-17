import { useState } from 'react';
import { Menu, X } from 'lucide-react';

const links = [
  { label: 'About', href: '#about' },
  { label: 'Publications', href: '#publications' },
  { label: 'Research', href: '#research' },
  { label: 'Experience', href: '#experience' },
];

const NavBar = () => {
  const [open, setOpen] = useState(false);

  return (
    <nav className="fixed top-[3px] left-0 right-0 z-40 bg-white border-b border-[#D5D1C8]">
      <div className="max-w-5xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between" style={{ height: '56px' }}>
        <a
          href="#"
          className="text-base font-black tracking-[0.2em] uppercase text-[#111] hover:text-orange-600 transition-colors"
        >
          Aaditya Khanal
        </a>

        {/* Desktop */}
        <div className="hidden sm:flex items-center gap-7">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="text-sm font-bold uppercase tracking-[0.15em] text-stone-500 hover:text-orange-600 transition-colors"
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="text-sm font-black uppercase tracking-[0.15em] text-orange-600 border border-orange-600 px-3 py-1.5 hover:bg-orange-600 hover:text-white transition-colors"
          >
            Scholar ↗
          </a>
        </div>

        {/* Mobile toggle */}
        <button
          className="sm:hidden text-[#111] hover:text-orange-600 transition-colors"
          onClick={() => setOpen(o => !o)}
          aria-label="Toggle menu"
        >
          {open ? <X size={20} /> : <Menu size={20} />}
        </button>
      </div>

      {open && (
        <div className="sm:hidden border-t border-[#D5D1C8] bg-white px-4 py-4 space-y-3">
          {links.map(l => (
            <a
              key={l.label}
              href={l.href}
              className="block text-xs font-bold uppercase tracking-[0.15em] text-stone-600 hover:text-orange-600 transition-colors"
              onClick={() => setOpen(false)}
            >
              {l.label}
            </a>
          ))}
          <a
            href="https://scholar.google.com/citations?user=nF17wMAAAAAJ&hl=en"
            target="_blank"
            rel="noopener noreferrer"
            className="block text-xs font-black uppercase tracking-[0.15em] text-orange-600"
          >
            Scholar ↗
          </a>
        </div>
      )}
    </nav>
  );
};

export default NavBar;
