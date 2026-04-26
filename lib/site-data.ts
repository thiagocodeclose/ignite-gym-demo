export const studio = {
  name: 'Ignite',
  tagline: 'Train Like It Matters.',
  description: "Chicago's most intense HIIT and bootcamp gym. Treadmill + floor. Every rep. Every day.",
  phone: '+1 (312) 555-0147',
  email: 'train@ignitegym.com',
  address: {
    street: '219 W Erie St',
    city: 'Chicago',
    state: 'IL',
    zip: '60654',
  },
  hours: {
    'Mon–Fri': '5 AM – 10 PM',
    Saturday: '6 AM – 6 PM',
    Sunday: '7 AM – 5 PM',
  },
  social: {
    instagram: 'https://instagram.com/ignitegym',
    youtube: 'https://youtube.com/@ignitegym',
  },
} as const;

export const instructors = [
  {
    name: 'Marcus Webb',
    specialty: 'HIIT · Treadmill · Strength',
    bio: "Marcus is a former collegiate sprinter who turned his speed into a calling. His class floors hit different. Every session is designed to break your limits — not your body.",
    years: 11,
    image: 'https://images.unsplash.com/photo-1534438327276-14e5300c3a48?w=600&h=750&fit=crop&q=80',
  },
  {
    name: 'Jade Torres',
    specialty: 'Bootcamp · Plyometrics · Core',
    bio: "Jade trains athletes and regular humans with the same relentless energy. If you finish her class without leaving everything on the floor, she's not done with you.",
    years: 8,
    image: 'https://images.unsplash.com/photo-1605296867304-46d5465a13f1?w=600&h=750&fit=crop&q=80',
  },
  {
    name: 'Drew Navarro',
    specialty: 'Strength · Functional Training',
    bio: "Drew built his coaching philosophy in military service and competitive CrossFit. He brings precision, intensity and an unmatched eye for form to every session.",
    years: 13,
    image: 'https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?w=600&h=750&fit=crop&q=80',
  },
] as const;

export const stats = [
  { value: '50', unit: 'min', label: 'Max heart rate sessions' },
  { value: '1000', unit: '+', label: 'Calories per class avg.' },
  { value: '3', unit: 'x', label: 'Faster results vs solo training' },
  { value: '200', unit: '+', label: 'Classes per month' },
] as const;

export const testimonials = [
  {
    quote: "I have tried every gym in Chicago. None of them come close. Ignite is the only place that actually makes me better, every single week.",
    name: 'Ryan K.',
    title: 'Member since 2021',
    image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=120&h=120&fit=crop&q=80',
  },
  {
    quote: "Marcus pushed me through a wall I didn't even know I had. Down 28 lbs in 3 months. This is the real thing.",
    name: 'Alicia M.',
    title: 'Bootcamp member',
    image: 'https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?w=120&h=120&fit=crop&q=80',
  },
  {
    quote: "The energy in this place is unlike anything I have ever experienced. You do not need motivation when you walk through these doors — the room gives it to you.",
    name: 'Carlos D.',
    title: 'Training 4x/week',
    image: 'https://images.unsplash.com/photo-1568602471122-7832951cc4c5?w=120&h=120&fit=crop&q=80',
  },
] as const;

export const koriva = {
  gymSlug: 'ignite-gym',
  widgetKey: 'demo',
  baseUrl: 'https://app.codegyms.com',
} as const;
