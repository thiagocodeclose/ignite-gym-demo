'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { koriva } from '@/lib/site-data';

export function PricingSection() {
  const [iframeHeight, setIframeHeight] = useState(520);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== koriva.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'pricing') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${koriva.baseUrl}/widgets/pricing/${koriva.gymSlug}?embed=1&cg_primary=E4002B&cg_bg=0A0A0A&cg_text=F5F5F5&cg_radius=0&cg_mode=dark`;

  return (
    <section id="pricing" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-tight">
        <div className="text-center mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Membership</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="red-line red-line-center mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
            >
              NO EXCUSES
              <br />
              <span style={{ color: 'var(--red)' }}>PRICING</span>
            </h2>
          </Reveal>
          <Reveal delay={0.15}>
            <p className="font-body mt-6 max-w-sm mx-auto leading-relaxed" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              First class is free. After that, choose the plan that keeps you coming back.
            </p>
          </Reveal>
        </div>

        <Reveal delay={0.1}>
          <iframe
            src={src}
            title="Ignite Membership"
            className="koriva-widget-frame"
            style={{ height: `${iframeHeight}px` }}
            allow="clipboard-write"
            loading="lazy"
          />
        </Reveal>

        <Reveal delay={0.2}>
          <div className="flex flex-wrap justify-center gap-8 mt-10">
            {['✓ First class free', '✓ No long-term contract', '✓ Unlimited classes available'].map((item) => (
              <span key={item} className="font-body uppercase tracking-widest" style={{ fontSize: '0.6rem', color: 'var(--muted)' }}>
                {item}
              </span>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
