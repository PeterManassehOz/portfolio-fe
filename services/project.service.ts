import { projects } from "@/data/projects";

import type { Project } from "@/types/project";

export async function getProjects(): Promise<Project[]> {
  return projects;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const data = await getProjects();

  return data
    .filter((project) => project.featured)
    .slice(0, 2);
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  const data = await getProjects();

  return data.find((project) => project.slug === slug);
}