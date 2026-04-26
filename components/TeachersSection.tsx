import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { instructors } from '@/lib/site-data';

export function TeachersSection() {
  return (
    <section id="trainers" className="section-padding" style={{ backgroundColor: 'var(--bg)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-14">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">Coaches</p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="red-line mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-white uppercase leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
              >
                THE TEAM
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body max-w-xs leading-relaxed" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
              Each coach brings professional-level expertise and a refusal to let you settle.
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {instructors.map((t, i) => (
            <Reveal key={t.name} delay={0.1 * i}>
              <div className="group relative overflow-hidden" style={{ backgroundColor: 'var(--bg)' }}>
                <div className="relative h-80 overflow-hidden">
                  <Image
                    src={t.image}
                    alt={t.name}
                    fill
                    className="object-cover grayscale group-hover:grayscale-0 transition-all duration-700 group-hover:scale-105"
                    sizes="(max-width: 768px) 100vw, 33vw"
                  />
                  {/* Red bottom gradient on hover */}
                  <div
                    className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500"
                    style={{ background: 'linear-gradient(to top, rgba(228,0,43,0.5) 0%, transparent 50%)' }}
                  />
                  {/* Years badge */}
                  <div
                    className="absolute top-4 right-4 font-body text-white text-xs font-bold tracking-widest uppercase px-2 py-1"
                    style={{ backgroundColor: 'var(--red)', fontSize: '0.55rem' }}
                  >
                    {t.years}Y
                  </div>
                </div>
                <div className="p-6" style={{ backgroundColor: 'var(--surface)' }}>
                  <p
                    className="font-heading text-white uppercase"
                    style={{ fontSize: '1.3rem', fontWeight: 800, letterSpacing: '0.05em' }}
                  >
                    {t.name}
                  </p>
                  <p
                    className="font-body uppercase tracking-widest mt-1 mb-4"
                    style={{ fontSize: '0.55rem', color: 'var(--red)', letterSpacing: '0.2em' }}
                  >
                    {t.specialty}
                  </p>
                  <p className="font-body leading-relaxed" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
                    {t.bio}
                  </p>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
