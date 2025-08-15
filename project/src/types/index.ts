export interface Project {
  id: number;
  title: string;
  description: string;
  image: string;
  techStack: string[];
  githubUrl: string;
  demoUrl: string;
  featured: boolean;
}

export interface Experience {
  id: number;
  title: string;
  company: string;
  location: string;
  startDate: string;
  endDate: string;
  description: string[];
  type: 'work' | 'education';
}

export interface Skill {
  name: string;
  category: 'frontend' | 'backend' | 'tools' | 'languages';
  proficiency: number;
}

export interface ContactFormData {
  name: string;
  email: string;
  subject: string;
  message: string;
}