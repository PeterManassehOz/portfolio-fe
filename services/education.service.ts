import { education } from "@/data/education";

import type { Education } from "@/types/education";

export async function getEducation(): Promise<Education[]> {
  return education;
}

export async function getEducationById(
  id: string,
): Promise<Education | undefined> {
  const data = await getEducation();

  return data.find((item) => item.id === id);
}