export interface Skill {
  id: string;
  name: string;
  category:
    | "Frontend"
    | "Backend"
    | "Database"
    | "DevOps"
    | "Tools"
    | "Mobile";
  proficiency?: number;
  icon?: string;
}