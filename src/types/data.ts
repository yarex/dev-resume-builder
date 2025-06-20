export interface ResumeDataType {
  name: string;
  title: string;
  location: string;
  contact: string;
  linkedin: string;
  photo: string;
  about: string;
  skills: SkillGroup[];
  languages: Language[];
  experience: Experience[];
  education: Education[];
  gdpr?: string;
}

export interface Education {
  degree: string;
  university: string;
  dates: string;
  details: string;
}

export interface Experience {
  company: string;
  location: string;
  dates: string;
  roles: ExperienceRole[];
}

export interface ExperienceRole {
  title: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface Language {
  name: string;
  level: string;
}

export interface SkillGroup {
  category: string;
  color: string;
  skills: Skill[];
}

export interface Skill {
  name: string;
  level: number;
}
