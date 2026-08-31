import {
  projectShowcase,
  type ProjectShowcase,
} from "@/data/projectShowcase";

export type { ProjectShowcase };

export async function getProjectShowcase(
  slug: string,
): Promise<ProjectShowcase | undefined> {
  return projectShowcase[slug];
}