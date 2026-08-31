import { experiences } from "@/data/experience";
import type { Experience } from "@/types/experience";

export async function getExperiences(): Promise<Experience[]> {
  return experiences;
}

export async function getCurrentExperience(): Promise<Experience | undefined> {
  const data = await getExperiences();

  return data.find((experience) => experience.current);
}