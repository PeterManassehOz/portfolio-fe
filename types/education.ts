export type EducationType = "Academic" | "Professional Development";

export interface Education {
  _id: string;
  institution: string;
  qualification: string;
  field: string;
  startDate: string;
  endDate: string;
  type: EducationType;
  description?: string;
}