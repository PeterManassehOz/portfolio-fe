import { skills } from "@/data/skills";
import type { Skill } from "@/types/skill";

export async function getSkills(): Promise<Skill[]> {
  return skills;
}

export async function getSkillsByCategory(
  category: Skill["category"],
): Promise<Skill[]> {
  const data = await getSkills();

  return data.filter((skill) => skill.category === category);
}