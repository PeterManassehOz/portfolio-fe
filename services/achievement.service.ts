import api from "./api";
import type { Achievement } from "@/types/achievements";

interface AchievementsResponse {
  success: boolean;
  data: Achievement[];
}

interface AchievementResponse {
  success: boolean;
  data: Achievement;
}

export async function getAchievements(): Promise<Achievement[]> {
  const response =
    await api.get<AchievementsResponse>("/achievements");

  return response.data.data;
}

export async function getAchievementById(
  id: string
): Promise<Achievement | undefined> {
  try {
    const response =
      await api.get<AchievementResponse>(
        `/achievements/${id}`
      );

    return response.data.data;
  } catch (error: unknown) {
    if (
      typeof error === "object" &&
      error !== null &&
      "response" in error &&
      (error as { response?: { status?: number } }).response
        ?.status === 404
    ) {
      return undefined;
    }

    throw error;
  }
}