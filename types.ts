export enum Language {
  ID = 'id',
  EN = 'en'
}

export interface LocationDetail {
  title: string;
  address: string;
  phone?: string;
  fax?: string;
  wa: string[];
  email: string[];
}

export interface LegalDocument {
  title: string;
  content: string;
}

export interface TranslationContent {
  nav: {
    home: string;
    about: string;
    vision: string;
    machinery: string;
    products: string;
    customers: string;
    contact: string;
  };
  hero: {
    title: string;
    subtitle: string;
    cta: string;
  };
  about: {
    title: string;
    historyLabel: string;
    content: string[];
    slogan: string;
  };
  visionMission: {
    introSlogan: string;
    vision: {
      title: string;
      items: string[];
    };
    mission: {
      title: string;
      items: string[];
    };
  };
  machinery: {
    title: string;
    intro: string;
    quote: string;
    production: {
      title: string;
      items: string[];
    };
    supporting: {
      title: string;
      items: string[];
    };
  };
  products: {
    title: string;
    label: string;
    items: string[];
    specs: {
      width: { label: string; value: string };
      thickness: { label: string; value: string };
      length: { label: string; value: string };
    };
    footer: string;
  };
  customers: {
    title: string;
    subtitle: string;
    types: string[];
    clientNames: string[][];
    logos: string[];
  };
  askOffer: {
    title: string;
    subtitle: string;
    namePlaceholder: string;
    waPlaceholder: string;
    buttonText: string;
    successMessage: string;
  };
  contact: {
    title: string;
    subtitle: string;
    slogan: string;
    locations: {
      headquarter: LocationDetail;
      branch: LocationDetail;
    };
    form: {
      name: string;
      email: string;
      message: string;
      submit: string;
    };
  };
  legal: {
    privacy: LegalDocument;
    terms: LegalDocument;
    close: string;
  };
}