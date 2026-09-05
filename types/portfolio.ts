export interface BilingualText {
  en: string;
  es: string;
}

export interface BilingualList {
  en: string[];
  es: string[];
}

export interface Project {
  id: string;
  title: BilingualText;
  role: BilingualText;
  description: BilingualText;
  longDescription?: BilingualText;
  techStack: string[];
  category: 'Backend' | 'Fullstack' | 'Architecture' | 'Python';
  link?: string;
  github?: string;
  featured: boolean;
  screenshots?: string[];
  videoDemo?: string;
  status?: BilingualText;
}

export interface Experience {
  id: string;
  company: string;
  role: BilingualText;
  period: string;
  location: string;
  description: BilingualList;
  skills: string[];
}

export interface PersonalInfo {
  name: string;
  title: BilingualText;
  location: string;
  relocationTarget: BilingualText;
  email: string;
  phone: string;
  linkedin: string;
  github: string;
  summary: BilingualText;
  experienceYears: number;
}