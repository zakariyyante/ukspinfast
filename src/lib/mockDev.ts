export interface ApiLandingPage {
  id: string;
  headText: string;
  headParagraph: string;
  pageTitle: string;
  isActive: boolean;
  order: number;
}

export interface ApiPageBrand {
  id: string;
  name: string;
  logo: string;
  bonusText: string;
  link: string;
  isMobile: boolean;
  order: number;
  rating?: number;
  isBonusTextOverridden?: boolean;
  overrideBonusText?: string;
  overrideLink?: string;
}

export const mockLandingPages: ApiLandingPage[] = [
  {
    id: "lp-1",
    headText: "Top-Rated Online Casino Sites in the UK",
    headParagraph: "Discover the top-rated online casinos. Safe, secure, and fully licensed. Get the best bonuses and start playing today!",
    pageTitle: "Top Online Casinos | UKSpinFast",
    isActive: true,
    order: 1,
  },
];

export const mockPartners: ApiPageBrand[] = [
  {
    id: "brand-1",
    name: "Barz Casino",
    logo: "/barz.webp",
    bonusText: "100% up to £300 + 50 Bonus Spins",
    link: "https://www.barz.com/en/?clickid=",
    isMobile: false,
    order: 1,
    rating: 9.9,
  },
  {
    id: "brand-2",
    name: "Spinland",
    logo: "/spinland.png",
    bonusText: "100% up to £300 + 50 Bonus Spins",
    link: "https://www.spinland.com/?btag=48778_727dd5c8eca042ac980fd8f21ef74b73&subid=Spinland-ST&asys=nr&clickid=",
    isMobile: false,
    order: 2,
    rating: 9.7,
  },
  {
    id: "brand-3",
    name: "Karamba",
    logo: "/karamba.svg",
    bonusText: "100% up to £50 + 100 Spins",
    link: "https://www.karamba.co.uk/?clickid=",
    isMobile: false,
    order: 3,
    rating: 9.5,
  },
];
