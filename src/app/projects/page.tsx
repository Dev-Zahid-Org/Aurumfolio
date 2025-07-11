import { ProjectCard } from "@/components/project-card";
import { projects } from "@/lib/data";
import { MotionDiv } from "@/components/motion-div";

export const metadata = {
  title: "Projects - Aurumfolio",
  description: "A showcase of all my professional and personal projects.",
};

export default function ProjectsPage() {
    const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };
  return (
    <MotionDiv 
        initial="hidden"
        animate="visible"
        variants={variants}
        className="container mx-auto px-4 py-16 md:px-6 md:py-24"
    >
      <MotionDiv variants={variants} className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">My Work</h1>
        <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg mt-4">Here's a collection of projects I've worked on.</p>
      </MotionDiv>
      <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, i) => (
           <MotionDiv key={project.slug} variants={variants}>
            <ProjectCard project={project} />
           </MotionDiv>
        ))}
      </div>
    </MotionDiv>
  );
}
