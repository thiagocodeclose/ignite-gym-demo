'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { koriva } from '@/lib/site-data';

export function CTASection() {
  const [iframeHeight, setIframeHeight] = useState(320);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== koriva.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'lead') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${koriva.baseUrl}/widgets/lead/${koriva.gymSlug}?embed=1&cg_primary=E4002B&cg_bg=0A0A0A&cg_text=F5F5F5&cg_radius=0&cg_mode=dark`;

  return (
    <section
      id="contact"
      className="relative overflow-hidden"
      style={{ backgroundColor: 'var(--bg)' }}
    >
      {/* Red top line */}
      <div style={{ height: 4, backgroundColor: 'var(--red)' }} />

      <div className="py-24 md:py-36">
        <div className="container-tight text-center">
          <Reveal>
            <p className="eyebrow mb-6">Your first class is free</p>
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-white uppercase leading-none mb-4"
              style={{ fontSize: 'clamp(3.5rem, 10vw, 10rem)', fontWeight: 900, letterSpacing: '-0.02em' }}
            >
              BOOK
              <br />
              <span style={{ color: 'var(--red)' }}>NOW</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p
              className="font-body uppercase tracking-widest mb-14"
              style={{ fontSize: '0.6rem', color: 'var(--muted)' }}
            >
              No credit card. No commitment. Just show up.
            </p>
          </Reveal>

          <Reveal delay={0.2}>
            <div className="max-w-md mx-auto">
              <iframe
                src={src}
                title="Book your first class at Ignite"
                className="koriva-widget-frame"
                style={{ height: `${iframeHeight}px` }}
                allow="clipboard-write"
                loading="lazy"
              />
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
