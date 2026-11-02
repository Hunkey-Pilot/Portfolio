export interface DiscoveredImage {
  src: string;
  alt: string;
  caption: string;
  filename: string;
}

export interface ProfileAsset {
  hasImage: boolean;
  src: string;
  alt: string;
}

export interface ProjectData {
  slug: "craftybay" | "task-management" | "tourde";
  number: string;
  title: string;
  category: string;
  year: string;
  technologies: string[];
  techBadges: { name: string; brandColor?: string }[];
  description: string;
  highlights: string[];
  features: string[];
  visualDirection: string;
  githubUrl: string | null;
  liveDemoUrl: string | null;
  placeholderPrompt: string;
}

export interface SkillCategory {
  title: string;
  categoryKey: string;
  description?: string;
  skills: {
    name: string;
    iconId: string;
    isPrimary?: boolean;
    brandColor?: string;
    note?: string;
  }[];
}

export interface ExperienceItem {
  role: string;
  period: string;
  employmentType: string;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export interface HackathonAchievement {
  title: string;
  subtitle: string;
  competition: string;
  organizer: string;
  track: string;
  projectName: string;
  projectDescription: string;
  rank: number;
  totalTeams: number;
  year: number;
  keyPoints: string[];
}

export interface EducationData {
  institution: string;
  degree: string;
  status: string;
  cgpa: string;
  location: string;
  academicAwards: {
    title: string;
    term: string;
    year: string;
  }[];
  certificate: {
    title: string;
    issuer: string;
    description: string;
  };
}
