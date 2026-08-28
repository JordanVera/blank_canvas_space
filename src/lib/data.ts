export const COMPANY = {
  name: 'The Blank Canvas Space',
  shortName: 'Blank Canvas Space',
  tagline: 'A memory in the making',
  phone: '(409) 216-4547',
  phoneHref: '+14092164547',
  email: 'CONTACT@THEBLANKCANVASSPACE.COM',
  address: '2955 Gulf Freeway',
  city: 'Houston, TX 77003',
  serviceArea: 'East Houston',
  maxGuests: 250,
  instagram: 'https://www.instagram.com/theblankcanvasspace',
  instagramHandle: '@theblankcanvasspace',
  facebook: '',
  website: 'https://www.theblankcanvasspace.com',
  googleUrl: 'https://www.google.com/maps/place/?q=place_id:ChIJN6ihYP6KVUIRVjqzTz_8Sas',
  googleReviewsUrl: 'https://search.google.com/local/reviews?placeid=ChIJN6ihYP6KVUIRVjqzTz_8Sas',
  googleRating: 5.0,
  reviewCount: 97,
};

export const ACCENT = '#C5A572';
export const ACCENT_HOVER = '#D4B888';

export const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'About', href: '/about' },
  { label: 'Gallery', href: '/gallery' },
  { label: 'Reviews', href: '/reviews' },
  { label: 'Pricing', href: '/pricing' },
  { label: 'FAQ', href: '/faq' },
  { label: 'Contact', href: '/contact' },
];

export const GALLERY_CATEGORIES = [
  { id: 'all', label: 'All' },
  { id: 'ceremony', label: 'Ceremony' },
  { id: 'reception', label: 'Reception' },
  { id: 'details', label: 'Details' },
] as const;

export type GalleryCategory = (typeof GALLERY_CATEGORIES)[number]['id'];

export {
  GALLERY_IMAGES,
  type GalleryImage,
} from './gallery-images';

export const ABOUT_CONTENT = {
  intro: 'Every celebration deserves more than just four walls — it deserves a space where dreams can unfold, love can linger, and memories can take root.',
  body: 'The Blank Canvas Space offers two versatile event spaces — King\'s Court Room and Bethel Ballroom — with 32 stunning chandeliers, white-and-gold chairs, and loads of complimentary add-ons.',
  evolution: 'A husband-and-wife team creating a warm, family-run venue where people feel welcomed, cared for, and free to celebrate life\'s most beautiful moments.',
};

export const VENUE_HIGHLIGHTS = [
  {
    title: 'Two Venues in One',
    description: 'King\'s Court Room (up to 100) and Bethel Ballroom (up to 250) — book one or both for ceremony and reception.',
  },
  {
    title: '32 Chandeliers',
    description: 'Crystal chandeliers and elegant lighting create a photography-friendly, luxury atmosphere.',
  },
  {
    title: 'Free Add-Ons',
    description: 'Magazine photo booth, champagne wall, backdrop options, stages, and more included with every booking.',
  },
  {
    title: 'Open Vendor Policy',
    description: 'Bring your own vendors or choose from our trusted recommendations — no buy-out clause.',
  },
];

export const AMENITIES = [
  '32 Chandeliers',
  'King\'s Court Room',
  'Bethel Ballroom',
  'On-site Parking (160 cars)',
  'Magazine Photo Booth',
  'Champagne Wall',
  'Open Vendor Policy',
  'Changing Rooms',
  'Valet Available',
];

export const REVIEWS = [
  { id: 1, name: 'Joy O.', event: 'Google Review', rating: 5, text: "Thoroughly enjoyed my experience at The Blank Canvas Space! The venue was clean, well-ventilated, & good parking. Owner Tayo was extremely kind and personable. 10/10 recommend!" },
  { id: 2, name: 'Aliyah N.', event: 'Nikah · Google Review', rating: 5, text: "We came from London for our sister\'s Nikah and were blown away. The space is beautiful and what you got for your money was way more than expected. Timi and his assistant were very helpful and professional." },
  { id: 3, name: 'Theodor U.', event: 'Google Review', rating: 5, text: "Recently attended a beautiful event here! This venue is next level with 2 venues in 1. I will definitely be booking for future events." },
  { id: 4, name: 'Axel A.', event: 'Google Review', rating: 5, text: "The atmosphere and ambience of this location was phenomenal. I would definitely recommend gathering family and friends for any celebratory event." },
  { id: 5, name: 'Sherif O.', event: 'Google Review', rating: 5, text: "Amazing venue! And the owner was super nice, and responsive to our needs, truly enjoyed my time there." },
  { id: 6, name: 'Rathea H.', event: 'Google Review', rating: 5, text: "I recently hosted an event at this venue and had an incredible experience. Temi was absolutely amazing — communicative, professional, and genuinely invested in making sure everything went smoothly." },
  { id: 7, name: 'Tobi I.', event: 'Graduation Party · Google Review', rating: 5, text: "My family used this venue for a surprise Graduation party and it was great! Tayo was a great communicator and very accommodating. The magazine Photo Booth was a hit. Definitely will be booking again!!" },
  { id: 8, name: 'Anonymous', event: 'Google Review', rating: 5, text: "We had our event at The Blank Canvas and I can\'t say enough good things! The space is stunning, and our event manager was the BEST I\'ve ever worked with. They offer valet which was such a great touch." },
] as const;

export type FaqItem = {
  question: string;
  answer: string;
  link?: { href: string; label: string };
};

export const FAQS: FaqItem[] = [
  {
    question: 'What are your rental rates?',
    answer: 'King\'s Court from $2,000 · Bethel Ballroom from $5,000 · Both spaces from $6,000',
  },
  {
    question: 'What is your guest capacity?',
    answer: 'Our venue accommodates up to 250 guests depending on layout and event type.',
  },
  {
    question: 'Where are you located?',
    answer: 'We are located at 2955 Gulf Freeway, Houston, TX 77003.',
  },
  {
    question: 'How do I book a tour?',
    answer: 'Contact us through the inquiry form or call us directly to schedule a private tour of the space.',
  },
  {
    question: 'Do you offer parking?',
    answer: 'Yes — on-site and/or street parking is available. Contact us for details specific to your event date.',
  },
];

export { VIDEOS_DATA as VIDEOS, EMBEDS_DATA as EMBEDS } from './videos';
