export interface SkillItem {
  name: string;
  category: 'languages' | 'frontend' | 'backend' | 'databases' | 'ai-data' | 'tools';
  level?: 'Proficient' | 'Familiar' | 'Exploring';
  icon?: string;
  description?: string;
}

export interface SkillCategory {
  id: 'languages' | 'frontend' | 'backend' | 'databases' | 'ai-data' | 'tools';
  name: string;
  description: string;
  skills: SkillItem[];
}

export interface ProjectSimulationFeature {
  title: string;
  description: string;
  isSimulated: boolean;
}

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: 'AI & ML' | 'Full Stack' | 'IoT / Simulation' | 'AR / 3D' | 'Web Apps';
  status: 'Software Simulation' | 'Traffic Simulation' | 'Full-Stack Prototype' | 'Web Concept' | 'AR 3D Experience';
  badgeColor: string;
  problemStatement: string;
  solution: string;
  keyFeatures: string[];
  simulationFeatures?: ProjectSimulationFeature[];
  technologies: string[];
  githubUrl: string; // Configurable placeholder
  demoUrl?: string; // Configurable placeholder
  hasInteractiveDemo: boolean;
  demoType?: 'smartbin' | 'ambuclear' | 'mindlink' | 'ar' | 'onehood';
  previewNote?: string;
  imageAlt: string;
  accentGlow: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  roleOrTeam?: string;
  dateOrYear: string;
  category: 'Competition Award' | 'Hackathon' | 'Community & Leadership' | 'Event Coordination';
  highlightBadge?: string;
  description: string;
  impactOrLearnings: string[];
  certificateAvailable?: boolean;
}

export interface EducationItem {
  degree: string;
  institution: string;
  location: string;
  period: string;
  status: string;
  cgpa?: string;
  cgpaMax?: string;
  coursework: string[];
  highlights: string[];
}

export interface SocialLink {
  platform: 'GitHub' | 'LinkedIn' | 'Email' | 'Twitter' | 'Portfolio';
  url: string;
  label: string;
  handle: string;
}

export interface PortfolioData {
  personal: {
    name: string;
    headline: string;
    tagline: string;
    university: string;
    department: string;
    graduationYear: number;
    location: string;
    bioShort: string;
    bioLong: string[];
    availableFor: string[];
    avatarUrl: string;
    resumeUrl: string;
  };
  socials: SocialLink[];
  skills: SkillCategory[];
  projects: ProjectItem[];
  achievements: AchievementItem[];
  education: EducationItem;
}
