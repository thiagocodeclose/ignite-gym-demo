'use client';

import { useEffect, useState } from 'react';
import { Reveal } from '@/components/Reveal';
import { koriva } from '@/lib/site-data';

const formats = [
  { num: '01', name: 'TREAD + FLOOR', desc: 'Treadmill intervals + functional strength floor — 50 min' },
  { num: '02', name: 'FULL BODY BURN', desc: 'Full body HIIT — barbell, kettlebell, bodyweight — 50 min' },
  { num: '03', name: 'POWER LIFT', desc: 'Strength + power — compound lifts + explosive finishers — 50 min' },
  { num: '04', name: 'BOOTCAMP', desc: 'Outdoor-style circuit · military intensity · no mercy — 55 min' },
  { num: '05', name: 'CORE & CONDITIONING', desc: 'Abs, stability, endurance — 30 min add-on or standalone' },
];

export function ClassesSection() {
  const [iframeHeight, setIframeHeight] = useState(540);

  useEffect(() => {
    const handler = (e: MessageEvent) => {
      if (e.origin !== koriva.baseUrl) return;
      const d = e.data;
      if (d?.source === 'codegym-widget' && d?.type === 'widget:resize' && d?.widget === 'schedule') {
        setIframeHeight(d.payload.height + 24);
      }
    };
    window.addEventListener('message', handler);
    return () => window.removeEventListener('message', handler);
  }, []);

  const src = `${koriva.baseUrl}/widgets/schedule/${koriva.gymSlug}?embed=1&cg_primary=E4002B&cg_bg=0A0A0A&cg_text=F5F5F5&cg_radius=0&cg_mode=dark`;

  return (
    <section id="classes" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Training</p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="red-line mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-white uppercase leading-none mb-12"
                style={{ fontSize: 'clamp(2.5rem, 6vw, 6rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
              >
                THE FORMATS
              </h2>
            </Reveal>
            <div className="space-y-0">
              {formats.map((f, i) => (
                <Reveal key={f.num} delay={0.06 * i}>
                  <div
                    className="flex gap-5 py-5 border-b group cursor-default"
                    style={{ borderColor: 'var(--border)' }}
                  >
                    <span
                      className="font-body shrink-0"
                      style={{ fontSize: '0.55rem', letterSpacing: '0.2em', color: 'var(--red)', marginTop: '0.45rem' }}
                    >
                      {f.num}
                    </span>
                    <div>
                      <p
                        className="font-heading text-white uppercase group-hover:text-red-500 transition-colors"
                        style={{ fontSize: '1.2rem', fontWeight: 800, letterSpacing: '0.06em', color: 'var(--text)' }}
                      >
                        {f.name}
                      </p>
                      <p className="font-body mt-1" style={{ fontSize: '0.85rem', color: 'var(--muted)' }}>
                        {f.desc}
                      </p>
                    </div>
                  </div>
                </Reveal>
              ))}
            </div>
          </div>
          <Reveal delay={0.1}>
            <iframe
              src={src}
              title="Ignite Class Schedule"
              className="koriva-widget-frame"
              style={{ height: `${iframeHeight}px` }}
              allow="clipboard-write"
              loading="lazy"
            />
          </Reveal>
        </div>
      </div>
    </section>
  );
}
