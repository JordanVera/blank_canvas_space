export type DayRate = {
  label: string;
  price: string;
  note?: string;
};

export type PricingPackage = {
  id: string;
  name: string;
  capacity: string;
  price: string;
  priceNote: string;
  description: string;
  duration: string[];
  rates: DayRate[];
  perfectFor: string[];
  features: string[];
  videoUrl: string;
  videoPoster: string;
  highlighted?: boolean;
};

const SQSP_VIDEO = 'https://video.squarespace-cdn.com/content/v1/633e3e89c60761036d8d69a5';

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'kings-court',
    name: "King's Court Room",
    capacity: 'Up to 100 guests',
    price: '$2,000',
    priceNote: 'Monday–Thursday starting rate',
    description:
      'A cozy, intimate atmosphere ideal for smaller, meaningful gatherings.',
    duration: [
      'Any 7 hours',
      'Must end on or before 12am',
      'Example: 2-hour set up, 4-hour event, 1-hour breakdown',
      'Sunday opens at 2pm',
    ],
    rates: [
      { label: 'Monday – Thursday', price: '$2,000' },
      { label: 'Friday', price: '$2,500' },
      { label: 'Saturday', price: '$3,000' },
      { label: 'Sunday', price: '$2,500', note: 'Opens at 2pm' },
    ],
    perfectFor: [
      'Micro weddings',
      'Baby showers',
      'Birthday dinners',
      'Bridal showers',
      'Intimate receptions',
      'Workshops',
    ],
    features: [
      'Up to 100 guests',
      'Any 7 hours (ends by midnight)',
      'Speaker & microphone included',
      'Open vendor policy',
      'Free add-ons included',
    ],
    videoUrl: 'https://www.theblankcanvasspace.com/kings-court-video',
    videoPoster: `${SQSP_VIDEO}/67afe81d-15df-4e09-b570-77647f1c707f/thumbnail`,
  },
  {
    id: 'bethel-ballroom',
    name: 'Bethel Ballroom',
    capacity: 'Up to 250 guests',
    price: '$5,000',
    priceNote: 'Monday–Thursday starting rate',
    description:
      'Grandeur and elegance for weddings, galas, and large celebrations.',
    highlighted: true,
    duration: ['10am – midnight (14 hours)', 'Sunday opens at 2pm'],
    rates: [
      { label: 'Monday – Thursday', price: '$5,000' },
      { label: 'Friday', price: '$5,500' },
      { label: 'Saturday', price: '$6,500' },
      { label: 'Sunday', price: '$5,500', note: 'Opens at 2pm' },
    ],
    perfectFor: [
      'Wedding receptions',
      'Gala dinners',
      'Milestone celebrations',
      'Corporate banquets',
    ],
    features: [
      'Up to 250 guests',
      '10am–midnight (14 hours)',
      '2 changing rooms',
      'Open vendor policy',
      'Free add-ons included',
    ],
    videoUrl: 'https://www.theblankcanvasspace.com/kings-court-video-1',
    videoPoster: `${SQSP_VIDEO}/a4d9165b-d3b5-48e9-9848-0ef128f066c3/thumbnail`,
  },
  {
    id: 'both-spaces',
    name: "King's Court + Bethel Ballroom",
    capacity: 'Up to 250 guests',
    price: '$6,000',
    priceNote: 'Monday–Thursday starting rate',
    description:
      'Book both spaces together — ceremony in King’s Court and reception in Bethel Ballroom.',
    duration: ['10am – midnight (14 hours)', 'Sunday opens at 2pm'],
    rates: [
      { label: 'Monday – Thursday', price: '$6,000' },
      { label: 'Friday', price: '$7,500' },
      { label: 'Saturday', price: '$8,500' },
      { label: 'Sunday', price: '$6,500', note: 'Opens at 2pm' },
    ],
    perfectFor: [
      'Wedding ceremony + reception',
      'Gala dinners',
      'Milestone celebrations',
      'Corporate banquets',
    ],
    features: [
      'Ceremony + reception',
      'Up to 250 guests',
      '10am–midnight (14 hours)',
      'Both connected spaces',
      'All complimentary add-ons',
    ],
    videoUrl: 'https://www.theblankcanvasspace.com/kings-court-video-1-1',
    videoPoster: `${SQSP_VIDEO}/fe6d4008-5f57-4065-9c0d-4156cd1480ae/thumbnail`,
  },
];

export const PRICING_INTRO = {
  lead: 'The Blank Canvas Space features two unique venues designed to match the tone of your celebration.',
  kings: 'The King’s Court Room offers a cozy, intimate atmosphere ideal for smaller, meaningful gatherings.',
  bethel:
    'The Bethel Room brings a sense of grandeur and elegance, perfect for weddings, galas, and large celebrations.',
  close: 'Two spaces. Endless possibilities. Your vision, beautifully hosted.',
};

export const INCLUDED_IN_RENTAL = [
  'Open vendor policy (no buy-out clause)',
  '22 wooden round tables — seats 10 each (220)',
  '10 wooden rectangle tables — seats 10 each (100)',
  '8 cocktail tables',
  'White and gold chairs',
  '2 changing rooms (Bethel Room booking only)',
  'On-site parking',
  'Magazine booth',
  'Backdrop options',
  'Champagne wall',
  'Bar',
  'Bride & groom table and chairs',
  'Speaker & microphone (King’s Court Room only)',
  '32 stunning chandeliers',
  'Venue clean up',
  'Free access to all our add-ons',
  'Curated vendors list to set you on the right path',
];

export const FREE_ADD_ONS = [
  'Magazine Booth',
  'Food Cart',
  'Backdrops',
  'Treat Wall',
  'Dessert Bar',
  'Wooden Cake Table',
  'Gold Cake Stand',
  'Champagne Wall',
  'Cocktail Tables',
  'Pedestals',
  'Bethel Ballroom Backdrop',
  'Bride & Groom Chair',
  'Bride & Groom Table',
  'Wavy Stage',
  'Rectangle Ripple Wall Backdrop',
  'Round Stage',
];

export const DECOR_PACKAGE = {
  price: '$35',
  unit: 'per guest',
  description:
    'Optional in-house décor package — mix and match items, or we can source new pieces to fit your theme.',
  includes: [
    'Velvet table linens (pressed, wrinkle-free)',
    'Napkins, chargers, plates, and silverware',
    'Champagne glasses and water goblets',
    'Candles and lamps',
    'High or low faux luxury floral centerpieces',
    'Seat numbers',
    'A focal-point backdrop to complete the space',
  ],
  example: '50 guests × $35 = $1,750 in décor, added to your venue rate.',
};

export const BOOKING_PROCESS = [
  {
    title: 'Tour the space (optional)',
    body: 'We’d love to show you around, but touring is completely optional — many clients book once they’ve seen our photos and details.',
  },
  {
    title: 'Secure your date',
    body: 'We’ll send you an invoice and our contract. Simply review, sign, and you’re on your way.',
  },
  {
    title: 'Reserve with a deposit',
    body: 'King’s Court: a 50% deposit locks in your date. The remaining balance is due 2 weeks before your event. Bethel Ballroom: a flexible 3-installment plan — 35% to reserve, 35% halfway to your event, and 30% due 20 days before.',
  },
];

export const PRICING_POLICIES = [
  'All payments are non-refundable. We allow a one-time reschedule, subject to availability.',
  'Events on public holidays may incur an additional fee.',
  'No hidden charges and no service fees. Taxes are already included.',
  'A 3% processing fee applies to card payments and is waived for cash or bank transfer (Zelle).',
];

export const HOLIDAY_PREMIUM = {
  title: 'Holiday premium dates',
  intro:
    'Select calendar dates carry a special event rate due to once-a-year demand and extended operational requirements.',
  dates: [
    "New Year’s Eve",
    'Christmas Day',
    'Boxing Day',
    'Independence Day (4th of July)',
  ],
  notes: [
    'Exclusive venue access',
    'Extended staffing availability',
    'Holiday scheduling accommodations',
  ],
  close:
    'Adjusted pricing applies. We’re happy to provide a custom quote based on your event details.',
};

export const PRICING_NOTES = [
  "King’s Court from $2,000 · Bethel Ballroom from $5,000 · Both spaces from $6,000",
  'Sunday events open at 2pm.',
  'Holiday premium dates (New Year’s Eve, Christmas, Boxing Day, and the 4th of July) require a custom quote.',
];
