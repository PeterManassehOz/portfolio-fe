import api from "./api";
import type { Project } from "@/types/project";

interface ProjectsResponse {
  success: boolean;
  data: Project[];
}

interface ProjectResponse {
  success: boolean;
  data: Project;
}

export async function getProjects(): Promise<Project[]> {
  const response = await api.get<ProjectsResponse>("/projects");

  return response.data.data;
}

export async function getFeaturedProjects(): Promise<Project[]> {
  const response = await api.get<ProjectsResponse>("/projects/featured");

  return response.data.data;
}

export async function getProjectBySlug(
  slug: string,
): Promise<Project | undefined> {
  try {
    const response = await api.get<ProjectResponse>(
      `/projects/${slug}`,
    );

    return response.data.data;
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      (error as { response?: { status?: number } }).response?.status === 404
    ) {
      return undefined;
    }

    throw error;
  }
}