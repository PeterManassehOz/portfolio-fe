import api from "@/services/api";

import type { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  const response = await api.get("/experience");

  return response.data.data;
}

export async function getCurrentExperience(): Promise<
  Experience | undefined
> {
  const data = await getExperiences();

  return data.find((experience) => experience.current);
}