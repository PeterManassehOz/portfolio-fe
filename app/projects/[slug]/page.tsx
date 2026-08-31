import { notFound } from "next/navigation";

import {
  getProjects,
  getProjectBySlug,
} from "@/services/project.service";

import { getProjectShowcase } from "@/services/projectShowcase.service";
import ProjectCaseStudy from "@/components/sections/ProjectCaseStudy";


interface ProjectPageProps {
  params: Promise<{
    slug: string;
  }>;
}

export async function generateStaticParams() {
  const projects = await getProjects();

  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export default async function ProjectPage({
  params,
}: ProjectPageProps) {
  const { slug } = await params;

  const project = await getProjectBySlug(slug);
  const showcase = await getProjectShowcase(slug);

  if (!project || !showcase) {
    notFound();
  }

  return (
    <ProjectCaseStudy
      project={project}
      showcase={showcase}
    />
  );
}