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
    headText: "Melhores sites de casino online em Portugal — maio 2026",
    headParagraph: "Descubra os cassinos online mais bem avaliados. Seguro, protegido e totalmente licenciado. Obtenha os melhores bônus e comece a jogar hoje!",
    pageTitle: "Melhores Cassinos Online | CassinoFácil",
    isActive: true,
    order: 1,
  },
];

export const mockPartners: ApiPageBrand[] = [
  {
    id: "brand-1",
    name: "Barz Casino",
    logo: "/barz.webp",
    bonusText: "100% até R$1.500 + 50 Rodadas de Bônus",
    link: "https://www.barz.com/en/?clickid=",
    isMobile: false,
    order: 1,
    rating: 9.9,
  },
  {
    id: "brand-2",
    name: "Spinland",
    logo: "/spinland.png",
    bonusText: "100% até R$1.500 + 50 Rodadas de Bônus",
    link: "https://www.spinland.com/?btag=48778_727dd5c8eca042ac980fd8f21ef74b73&subid=Spinland-ST&asys=nr&clickid=",
    isMobile: false,
    order: 2,
    rating: 9.7,
  },
  {
    id: "brand-3",
    name: "Karamba",
    logo: "/karamba.svg",
    bonusText: "100% até R$250 + 100 Rodadas",
    link: "https://www.karamba.co.uk/?clickid=",
    isMobile: false,
    order: 3,
    rating: 9.5,
  },
];
