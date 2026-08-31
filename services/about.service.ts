import { about } from "@/data/about";

import type { About } from "@/types/about";

export async function getAbout(): Promise<About> {
  return about;
}