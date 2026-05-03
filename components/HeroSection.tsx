'use client';

import Image from 'next/image';
import Link from 'next/link';
import { Reveal } from '@/components/Reveal';
import { studio } from '@/lib/site-data';
import { useKorivaElement } from '@/hooks/useKorivaElement';
import { useSiteData } from '@/components/SiteDataProvider';

export function HeroSection() {
  
  const siteData = typeof useSiteData === 'function' ? useSiteData() : null;

  const eyebrow = useKorivaElement('hero_eyebrow',
    { content: 'IGNITE', visible: true },
    { section: 'Hero', label: 'Eyebrow', type: 'eyebrow' });

  const hl1 = useKorivaElement('hero_headline_1',
    { content: 'IGNITE', visible: true },
    { section: 'Hero', label: 'Headline', type: 'text' });

  const tagline = useKorivaElement('hero_headline_2',
    { content: 'Train Like It Matters.', visible: true },
    { section: 'Hero', label: 'Tagline', type: 'text' });

  const subtitle = useKorivaElement('hero_subtitle',
    { content: 'Chicago's most intense HIIT and bootcamp gym.', visible: true },
    { section: 'Hero', label: 'Description', type: 'text' });

  const cta1 = useKorivaElement('hero_cta_primary',
    { content: 'Book a Class', visible: true },
    { section: 'Hero', label: 'CTA Primary', type: 'button' });

  const cta2 = useKorivaElement('hero_cta_secondary',
    { content: 'See the Training', visible: true },
    { section: 'Hero', label: 'CTA Secondary', type: 'button' });

  const heroBg = useKorivaElement('hero_bg',
    { content: '', mediaType: 'image', visible: true },
    { section: 'Hero', label: 'Background Image', type: 'image' });

return (
    <section className="relative min-h-screen flex items-end overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
      {/* Background image */}
      <div className="absolute inset-0">
        <Image
          src="https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1600&h=1067&fit=crop&q=80"
          alt="Ignite training floor"
          fill
          className="object-cover"
          style={{ opacity: 0.35 }}
          priority
          sizes="100vw"
        />
        {/* Dark gradient bottom */}
        <div
          className="absolute inset-0"
          style={{ background: 'linear-gradient(to top, rgba(10,10,10,1) 25%, rgba(10,10,10,0.7) 60%, rgba(10,10,10,0.2) 100%)' }}
        />
        {/* Red glow at center */}
        <div
          className="absolute inset-0"
          style={{ background: 'radial-gradient(ellipse at 50% 80%, rgba(228,0,43,0.15) 0%, transparent 55%)' }}
        />
      </div>

      {/* Content — bottom-anchored */}
      <div className="relative z-10 w-full pb-20 md:pb-28">
        <div className="container-wide">
          <Reveal>
            <p className="eyebrow mb-6">{studio.address.city} · {studio.address.state}</p>
          </Reveal>
          <Reveal delay={0.05}>
            <h1
              className="font-heading text-white leading-none mb-6"
              style={{ fontSize: 'clamp(5rem, 16vw, 18rem)', fontWeight: 900, letterSpacing: '-0.02em', lineHeight: 0.88 }}
            >
              IGNITE
            </h1>
          </Reveal>
          <Reveal delay={0.12}>
            <p
              className="font-heading italic uppercase mb-10"
              style={{
                fontSize: 'clamp(1.4rem, 4vw, 4rem)',
                fontWeight: 700,
                color: 'var(--red)',
                letterSpacing: '0.04em',
              }}
            >
              {studio.tagline}
            </p>
          </Reveal>
          <Reveal delay={0.2}>
            <div className="flex flex-wrap gap-4">
              <Link href="#classes" className="btn-red">
                Book a Class
              </Link>
              <Link href="#about" className="btn-ghost-white">
                See the Training
              </Link>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
