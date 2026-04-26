import { studio } from '@/lib/site-data';
const BASE_URL = process.env.NEXT_PUBLIC_SITE_URL || 'https://ignite-gym-demo.vercel.app';
export function JsonLd() {
  const schema = {
    '@context': 'https://schema.org',
    '@graph': [
      {
        '@type': ['HealthClub', 'SportsActivityLocation', 'LocalBusiness'],
        '@id': `${BASE_URL}/#business`,
        name: studio.name,
        description: studio.description,
        url: BASE_URL,
        telephone: studio.phone,
        email: studio.email,
        priceRange: '$$',
        image: ['https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=1200&h=630&fit=crop&q=85'],
        address: { '@type': 'PostalAddress', streetAddress: studio.address.street, addressLocality: studio.address.city, addressRegion: studio.address.state, postalCode: studio.address.zip, addressCountry: 'US' },
        geo: { '@type': 'GeoCoordinates', latitude: 41.8941, longitude: -87.6367 },
        sameAs: Object.values(studio.social).filter(Boolean),
        aggregateRating: { '@type': 'AggregateRating', ratingValue: '4.9', reviewCount: '312', bestRating: '5' },
        hasOfferCatalog: {
          '@type': 'OfferCatalog',
          name: 'Classes',
          itemListElement: [
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'TREAD + FLOOR' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Full Body Burn' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Bootcamp' } },
            { '@type': 'Offer', itemOffered: { '@type': 'Service', name: 'Power Lift' } },
          ],
        },
      },
      { '@type': 'WebSite', '@id': `${BASE_URL}/#website`, url: BASE_URL, name: studio.name, publisher: { '@id': `${BASE_URL}/#business` } },
    ],
  };
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(schema) }} />;
}
