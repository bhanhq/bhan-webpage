export type Locale = 'no' | 'en';

export interface LocalizedString {
  no: string;
  en: string;
}

export interface TeamMember {
  slug: string;
  name: string;
  title: LocalizedString;
  photo: string;
  bio: LocalizedString;
  linkedin?: string;
  github?: string;
}

export interface Project {
  slug: string;
  name: string;
  type: 'mobile-app' | 'web-app' | 'saas' | 'other';
  icon?: string;
  description: LocalizedString;
  technologies: string[];
  link?: string;
  featured: boolean;
  status?: 'in-development' | 'live' | 'completed';
}

export interface Service {
  id: string;
  icon: string;
  title: LocalizedString;
  description: LocalizedString;
  highlights: string[];
}

export interface Company {
  name: string;
  tagline: LocalizedString;
  email: string;
  orgNumber: string;
  social: {
    linkedin?: string;
    github?: string;
  };
}
