import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";

export const metadata = {
  title: "Projects - Aurumfolio",
  description: "A showcase of all my professional and personal projects.",
};

export default function ProjectsPage() {
  return (
    <div className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">My Work</h1>
        <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg">Here's a collection of projects I've worked on.</p>
      </div>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project) => (
          <ProjectCard key={project.slug} project={project} />
        ))}
      </div>
    </div>
  );
}
