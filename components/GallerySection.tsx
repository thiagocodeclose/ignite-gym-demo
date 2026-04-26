import Image from 'next/image';
import { Reveal } from '@/components/Reveal';

const photos = [
  { src: 'https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?w=900&h=1200&fit=crop&q=80', alt: 'Treadmill floor' },
  { src: 'https://images.unsplash.com/photo-1517963879433-6ad2b056d712?w=900&h=600&fit=crop&q=80', alt: 'Strength training' },
  { src: 'https://images.unsplash.com/photo-1519311965067-36d3e5f33d39?w=900&h=600&fit=crop&q=80', alt: 'Group class energy' },
  { src: 'https://images.unsplash.com/photo-1574680096145-d05b474e2155?w=1800&h=600&fit=crop&q=80', alt: 'Ignite gym floor wide shot' },
];

export function GallerySection() {
  return (
    <section id="gym" className="section-padding" style={{ backgroundColor: 'var(--surface)' }}>
      <div className="container-wide">
        <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6 mb-12">
          <div>
            <Reveal>
              <p className="eyebrow mb-4">The Facility</p>
            </Reveal>
            <Reveal delay={0.05}>
              <div className="red-line mb-6" />
            </Reveal>
            <Reveal delay={0.1}>
              <h2
                className="font-heading text-white uppercase leading-none"
                style={{ fontSize: 'clamp(2.5rem, 5vw, 5rem)', fontWeight: 900, letterSpacing: '-0.01em' }}
              >
                THE FLOOR
              </h2>
            </Reveal>
          </div>
          <Reveal delay={0.1}>
            <p className="font-body" style={{ color: 'var(--muted)', fontSize: '0.85rem' }}>
              219 W Erie St · Chicago, IL 60654
            </p>
          </Reveal>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-px" style={{ backgroundColor: 'var(--border)' }}>
          <Reveal className="md:col-span-5 relative h-72 md:h-full min-h-64" delay={0}>
            <div className="relative w-full h-full min-h-64">
              <Image src={photos[0].src} alt={photos[0].alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 40vw" />
            </div>
          </Reveal>
          <div className="md:col-span-7 flex flex-col gap-px">
            {[photos[1], photos[2]].map((p, i) => (
              <Reveal key={p.alt} className="relative h-52 md:h-auto md:flex-1" delay={0.1 * (i + 1)}>
                <div className="relative w-full h-full min-h-52">
                  <Image src={p.src} alt={p.alt} fill className="object-cover" sizes="(max-width:768px) 100vw, 60vw" />
                </div>
              </Reveal>
            ))}
          </div>
        </div>

        <Reveal delay={0.15}>
          <div className="relative h-48 md:h-64 mt-px overflow-hidden">
            <Image src={photos[3].src} alt={photos[3].alt} fill className="object-cover" sizes="100vw" />
            <div
              className="absolute inset-0 flex flex-col items-center justify-center"
              style={{ background: 'rgba(10,10,10,0.55)' }}
            >
              <p
                className="font-heading text-white uppercase tracking-widest"
                style={{ fontSize: 'clamp(1.5rem, 4vw, 3.5rem)', fontWeight: 900, letterSpacing: '0.1em' }}
              >
                No mirrors.
                <span style={{ color: 'var(--red)' }}> Just results.</span>
              </p>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
