export type ProjectStatus =
  | "Completed"
  | "In Progress"
  | "Maintained"
  | "Coming Soon";

export interface Project {
  id: string;
  slug: string;

  title: string;
  shortDescription: string;
  description: string;

  image: string;
  category: string;

  technologies: string[];
  features: string[];

  role: string;
  status: ProjectStatus;

  githubUrl?: string;
  liveUrl?: string;

  featured: boolean;
}