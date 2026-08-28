export type PricingPackage = {
  id: string;
  name: string;
  price: string;
  priceNote?: string;
  description: string;
  features: string[];
  highlighted?: boolean;
};

export const VENUE_PACKAGES: PricingPackage[] = [
  {
    id: 'kings-court',
    name: 'King\'s Court Room',
    price: '$2,000',
    description: 'Intimate space for up to 100 guests with elegant chandeliers and complimentary add-ons.',
    features: ["Up to 100 guests", "32 Chandeliers", "Magazine Photo Booth", "Champagne Wall", "On-site Parking"],
  },
  {
    id: 'bethel-ballroom',
    name: 'Bethel Ballroom',
    price: '$5,000',
    description: 'Grand ballroom for up to 250 guests — ideal for weddings and large celebrations.',
    highlighted: true,
    features: ["Up to 250 guests", "Two venues in one", "Stage options", "Open vendor policy", "Valet available"],
  },
  {
    id: 'both-spaces',
    name: 'Both Spaces',
    price: '$6,000',
    description: 'Book both King\'s Court and Bethel Ballroom for ceremony and reception in one location.',
    features: ["Ceremony + reception", "Up to 250 guests", "All complimentary add-ons", "Dedicated event manager", "160 parking spaces"],
  },
];

export const ADD_ONS: PricingPackage[] = [];

export const PRICING_NOTES = ["King's Court from $2,000 \u00b7 Bethel Ballroom from $5,000 \u00b7 Both spaces from $6,000", "Capacity up to 250 guests depending on layout.", "Contact us to schedule a tour and receive a detailed quote."];
