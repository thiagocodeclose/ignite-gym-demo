import Image from 'next/image';
import { Reveal } from '@/components/Reveal';
import { testimonials } from '@/lib/site-data';

export function TestimonialsSection() {
  return (
    <section className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container-wide">
        <div className="mb-16">
          <Reveal>
            <p className="eyebrow mb-4">Results</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="red-line mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
            >
              REAL MEMBERS.
              <br />
              <span style={{ color: 'var(--red)' }}>REAL RESULTS.</span>
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {testimonials.map((t, i) => (
            <Reveal key={t.name} delay={0.1 * i}>
              <div className="p-8 space-y-5" style={{ backgroundColor: 'var(--surface)' }}>
                <div className="flex gap-3 items-center">
                  <div className="relative w-11 h-11 overflow-hidden shrink-0">
                    <Image
                      src={t.image}
                      alt={t.name}
                      fill
                      className="object-cover grayscale"
                      sizes="44px"
                    />
                  </div>
                  <div>
                    <p className="font-heading text-white uppercase" style={{ fontSize: '0.95rem', fontWeight: 800 }}>
                      {t.name}
                    </p>
                    <p className="font-body uppercase tracking-widest" style={{ fontSize: '0.5rem', color: 'var(--red)' }}>
                      {t.title}
                    </p>
                  </div>
                </div>
                <div className="flex gap-0.5" style={{ color: 'var(--red)' }}>
                  {'★★★★★'.split('').map((s, j) => <span key={j} style={{ fontSize: '0.9rem' }}>{s}</span>)}
                </div>
                <blockquote
                  className="font-body leading-relaxed"
                  style={{ color: 'rgba(245,245,245,0.6)', fontSize: '0.9rem' }}
                >
                  "{t.quote}"
                </blockquote>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
