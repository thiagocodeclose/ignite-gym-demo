import { Reveal } from '@/components/Reveal';

const tenets = [
  { num: '01', title: 'Show up.', body: 'No excuses. No rescheduling. The hardest part is walking through the door.' },
  { num: '02', title: 'Go all in.', body: 'Half-effort is practice for failure. When you are here, you are all in.' },
  { num: '03', title: 'Trust the process.', body: 'Consistency beats intensity every time. Keep coming back and the results come with you.' },
];

export function ManifestoSection() {
  return (
    <section
      id="about"
      className="section-padding relative overflow-hidden"
      style={{ backgroundColor: 'var(--surface)' }}
    >
      {/* Huge watermark */}
      <div
        className="absolute inset-0 flex items-center justify-center pointer-events-none select-none"
        aria-hidden
      >
        <span
          className="font-heading text-white uppercase"
          style={{ fontSize: '22vw', fontWeight: 900, opacity: 0.025, letterSpacing: '-0.05em' }}
        >
          IGNITE
        </span>
      </div>

      <div className="relative z-10 container-wide">
        <div className="max-w-2xl mb-20">
          <Reveal>
            <p className="eyebrow mb-4">Our Philosophy</p>
          </Reveal>
          <Reveal delay={0.05}>
            <div className="red-line mb-6" />
          </Reveal>
          <Reveal delay={0.1}>
            <h2
              className="font-heading text-white uppercase leading-none"
              style={{ fontSize: 'clamp(2.5rem, 6vw, 5.5rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
            >
              WE DON'T
              <br />
              <span style={{ color: 'var(--red)' }}>BUILD BODIES.</span>
              <br />
              WE BUILD
              <br />
              PEOPLE.
            </h2>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          {tenets.map((t, i) => (
            <Reveal key={t.num} delay={0.08 * i}>
              <div className="p-8 space-y-4" style={{ backgroundColor: 'var(--surface)' }}>
                <p
                  className="font-heading text-red-500"
                  style={{ fontSize: '2rem', fontWeight: 900, color: 'var(--red)', opacity: 0.5 }}
                >
                  {t.num}
                </p>
                <p
                  className="font-heading text-white uppercase"
                  style={{ fontSize: '1.4rem', fontWeight: 900, letterSpacing: '0.03em' }}
                >
                  {t.title}
                </p>
                <p className="font-body leading-relaxed" style={{ color: 'var(--muted)', fontSize: '0.9rem' }}>
                  {t.body}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
