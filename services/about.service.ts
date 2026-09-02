import api from "./api";
import type { About } from "@/types/about";

interface AboutResponse {
  success: boolean;
  data: About;
}

export async function getAbout(): Promise<About> {
  const response = await api.get<AboutResponse>("/about");

  return response.data.data;
}