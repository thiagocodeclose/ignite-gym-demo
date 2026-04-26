'use client';

import Link from 'next/link';
import { Instagram, Youtube } from 'lucide-react';
import { studio } from '@/lib/site-data';
import { useSiteData } from '@/components/SiteDataProvider';

export function Footer() {
  const siteData = useSiteData();
  const gymName = siteData?.gym?.name?.toUpperCase() || 'IGNITE';
  const instagram = siteData?.gym?.instagram || studio.social.instagram;

  return (
    <footer style={{ backgroundColor: 'var(--surface)', borderTop: '2px solid var(--red)' }}>
      <div className="container-wide py-16 md:py-20">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 md:gap-8">
          <div className="md:col-span-2">
            <Link href="/">
              <span
                className="font-heading text-white uppercase tracking-widest"
                style={{ fontSize: '1.3rem', fontWeight: 900, letterSpacing: '0.2em' }}
              >
                {gymName}
              </span>
            </Link>
            <p className="font-body mt-5 leading-relaxed max-w-xs" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              {studio.description}
            </p>
            <div className="flex gap-5 mt-6">
              {instagram && (
                <a href={instagram} className="transition-colors" style={{ color: 'var(--muted)' }} aria-label="Instagram">
                  <Instagram size={18} />
                </a>
              )}
              {studio.social.youtube && (
                <a href={studio.social.youtube} className="transition-colors" style={{ color: 'var(--muted)' }} aria-label="YouTube">
                  <Youtube size={18} />
                </a>
              )}
            </div>
          </div>

          <div>
            <p className="font-body text-white uppercase tracking-widest mb-6" style={{ fontSize: '0.6rem', fontWeight: 700 }}>
              Navigate
            </p>
            <ul className="space-y-4">
              {[
                { label: 'Classes', href: '#classes' },
                { label: 'Coaches', href: '#trainers' },
                { label: 'The Gym', href: '#gym' },
                { label: 'Membership', href: '#pricing' },
                { label: 'Book Free Class', href: '#contact' },
              ].map((link) => (
                <li key={link.label}>
                  <Link href={link.href} className="font-body transition-colors" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <p className="font-body text-white uppercase tracking-widest mb-6" style={{ fontSize: '0.6rem', fontWeight: 700 }}>
              Find Us
            </p>
            <address className="not-italic space-y-3">
              <p className="font-body leading-relaxed" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                {studio.address.street}<br />
                {studio.address.city}, {studio.address.state} {studio.address.zip}
              </p>
              <div className="space-y-1 pt-2">
                {Object.entries(studio.hours).map(([day, hours]) => (
                  <div key={day} className="flex justify-between gap-4 font-body" style={{ fontSize: '0.75rem' }}>
                    <span className="uppercase tracking-widest" style={{ color: 'var(--red)', opacity: 0.6 }}>{day}</span>
                    <span style={{ color: 'var(--muted)' }}>{hours}</span>
                  </div>
                ))}
              </div>
            </address>
          </div>
        </div>
      </div>

      <div style={{ borderTop: '1px solid var(--border)' }}>
        <div className="container-wide py-5 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="font-body" style={{ color: 'var(--muted)', fontSize: '0.75rem' }}>
            © {new Date().getFullYear()} Ignite. All rights reserved.
          </p>
          <a
            href="https://codegyms.com"
            target="_blank"
            rel="noopener noreferrer"
            className="font-body transition-colors"
            style={{ color: 'var(--red)', opacity: 0.5, fontSize: '0.75rem' }}
          >
            Powered by Koriva
          </a>
        </div>
      </div>
    </footer>
  );
}
