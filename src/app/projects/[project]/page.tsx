import { notFound } from "next/navigation";
import { getProjectById } from "@/lib/projects";
import ProjectHeader from "@/components/projects/ProjectHeader";
import ProjectContent from "@/components/projects/ProjectContent";
import ProjectSidebar from "@/components/projects/ProjectSidebar";
import ProjectNavigation from "@/components/projects/ProjectNavigation";

type ProjectPageProps = {
  params: Promise<{
    project: string;
  }>;
};

export async function generateMetadata({ params }: ProjectPageProps) {
  const { project: projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    return {
      title: "Project Not Found",
    };
  }

  return {
    title: `${project.title} - Project Detail`,
    description: project.longDescription || project.description,
  };
}

export default async function ProjectPage({ params }: ProjectPageProps) {
  const { project: projectId } = await params;
  const project = getProjectById(projectId);

  if (!project) {
    notFound();
  }

  return (
    <main className="flex-1 w-full min-h-screen flex flex-col pt-20 md:pt-0">
      <ProjectHeader project={project} />
      <section className="px-6 md:px-12 max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-12 gap-12 pb-24 relative">
        <ProjectContent project={project} />
        <ProjectSidebar project={project} />
      </section>
      <ProjectNavigation project={project} />
    </main>
  );
}

