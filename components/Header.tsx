'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import { Menu, X } from 'lucide-react';
import { useSiteData } from '@/components/SiteDataProvider';

const navLinks = [
  { label: 'Classes', href: '#classes' },
  { label: 'Coaches', href: '#trainers' },
  { label: 'Gym', href: '#gym' },
  { label: 'Membership', href: '#pricing' },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'IGNITE';
  const logoUrl = siteData?.brand?.logo_url;

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  return (
    <header
      className="fixed top-0 left-0 right-0 z-50 transition-all duration-300"
      style={{
        backgroundColor: scrolled ? 'rgba(10,10,10,0.95)' : 'transparent',
        borderBottom: scrolled ? '1px solid rgba(228,0,43,0.2)' : '1px solid transparent',
        backdropFilter: scrolled ? 'blur(12px)' : 'none',
      }}
    >
      <div className="container-wide">
        <div
          className="flex items-center justify-between transition-all duration-300"
          style={{ height: scrolled ? '4rem' : '5.5rem' }}
        >
          <Link href="/">
            {logoUrl ? (
              <img src={logoUrl} alt={gymName} className="h-8 w-auto object-contain" />
            ) : (
              <span
                className="font-heading text-white uppercase tracking-widest"
                style={{ fontSize: '1.1rem', fontWeight: 900, letterSpacing: '0.2em' }}
              >
                {gymName}
              </span>
            )}
          </Link>

          <nav className="hidden md:flex items-center gap-10">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                className="font-body text-white/40 hover:text-white transition-colors duration-200 uppercase"
                style={{ fontSize: '0.6rem', letterSpacing: '0.2em', fontWeight: 700 }}
              >
                {link.label}
              </Link>
            ))}
          </nav>

          <div className="hidden md:block">
            <Link href="#contact" className="btn-red">
              Book Free Class
            </Link>
          </div>

          <button
            className="md:hidden text-white/50 hover:text-white transition-colors"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuOpen ? 'Close menu' : 'Open menu'}
          >
            {menuOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>

      {menuOpen && (
        <div style={{ backgroundColor: 'var(--surface)', borderTop: '2px solid var(--red)' }}>
          <div className="container-wide py-8 flex flex-col gap-6">
            {navLinks.map((link) => (
              <Link
                key={link.label}
                href={link.href}
                onClick={() => setMenuOpen(false)}
                className="font-body text-white/40 hover:text-white transition-colors uppercase"
                style={{ fontSize: '0.65rem', letterSpacing: '0.2em', fontWeight: 700 }}
              >
                {link.label}
              </Link>
            ))}
            <Link href="#contact" onClick={() => setMenuOpen(false)} className="btn-red mt-2 text-center justify-center">
              Book Free Class
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
