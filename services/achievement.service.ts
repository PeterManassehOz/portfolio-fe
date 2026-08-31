import { achievements } from "@/data/achievements";

import type { Achievement } from "@/types/achievements";

export async function getAchievements(): Promise<Achievement[]> {
  return achievements;
}

export async function getAchievementById(
  id: string,
): Promise<Achievement | undefined> {
  const data = await getAchievements();

  return data.find((achievement) => achievement.id === id);
}