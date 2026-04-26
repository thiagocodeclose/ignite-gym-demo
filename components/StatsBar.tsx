import { Reveal } from '@/components/Reveal';
import { stats } from '@/lib/site-data';

export function StatsBar() {
  return (
    <div style={{ backgroundColor: 'var(--red)', color: '#fff' }}>
      <div className="container-wide py-8">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-px" style={{ backgroundColor: 'rgba(255,255,255,0.2)' }}>
          {stats.map((s, i) => (
            <Reveal key={s.label} delay={0.07 * i}>
              <div className="text-center py-6 px-4" style={{ backgroundColor: 'var(--red)' }}>
                <p
                  className="font-heading text-white leading-none"
                  style={{ fontSize: 'clamp(2.5rem, 5vw, 4.5rem)', fontWeight: 900, letterSpacing: '-0.02em' }}
                >
                  {s.value}
                  <span style={{ fontSize: '60%', marginLeft: '0.1em', opacity: 0.7 }}>{s.unit}</span>
                </p>
                <p
                  className="font-body text-white mt-2 uppercase tracking-widest"
                  style={{ fontSize: '0.6rem', opacity: 0.8 }}
                >
                  {s.label}
                </p>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </div>
  );
}
