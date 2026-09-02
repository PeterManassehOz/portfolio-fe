import api from "@/services/api";

import type { Hero } from "@/types/hero";

export async function getHero(): Promise<Hero> {
  const response = await api.get("/hero");

  return response.data.data;
}