export interface SiteContent {
  meta: {
    title: string;
    description: string;
  };
  nav: {
    about: string;
    skills: string;
    experience: string;
    contact: string;
    resume: string;
  };
  hero: {
    greeting: string;
    name: string;
    title: string;
    subtitle: string;
    cta: string;
    ctaSecondary: string;
    stats: { value: string; label: string }[];
  };
  about: {
    label: string;
    title: string;
    paragraphs: string[];
    highlights: { value: string; label: string }[];
  };
  skills: {
    label: string;
    title: string;
    subtitle: string;
    categories: {
      name: string;
      items: { name: string; level: number }[];
    }[];
  };
  experience: {
    label: string;
    title: string;
    jobs: {
      company: string;
      role: string;
      period: string;
      type: string;
      bullets: string[];
    }[];
  };
  other: {
    label: string;
    title: string;
    items: {
      title: string;
      period: string;
      bullets: string[];
    }[];
  };
  contact: {
    label: string;
    title: string;
    subtitle: string;
    email: string;
    phone: string;
    github: string;
    cta: string;
  };
  footer: {
    copyright: string;
    status: string;
  };
}
