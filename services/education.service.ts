import api from "./api";

import type { Education } from "@/types/education";

interface EducationResponse {
  success: boolean;
  data: Education[];
}

interface EducationItemResponse {
  success: boolean;
  data: Education;
}

export async function getEducation(): Promise<Education[]> {
  const response = await api.get<EducationResponse>("/education");

  return response.data.data;
}

export async function getEducationById(
  id: string,
): Promise<Education | undefined> {
  try {
    const response = await api.get<EducationItemResponse>(
      `/education/${id}`,
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