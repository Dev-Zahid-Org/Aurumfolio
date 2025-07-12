import Link from "next/link";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";
import { MotionDiv } from "./motion-div";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <MotionDiv
      whileHover={{ y: -8 }}
      className="h-full"
    >
      <Card className="flex flex-col overflow-hidden bg-secondary/30 border-border hover:border-primary/50 transition-all duration-300 ease-in-out h-full">
        <Link href={`/projects/${project.slug}`} className="block overflow-hidden">
          <img
            src={project.coverImage}
            alt={project.title}
            width={600}
            height={400}
            className="h-60 w-full object-cover transition-transform duration-500 ease-in-out hover:scale-105"
            data-ai-hint={project.slug.replace(/-/g, ' ')}
          />
        </Link>
        <CardHeader>
          <CardTitle>
            <Link href={`/projects/${project.slug}`} className="hover:text-primary transition-colors">
              {project.title}
            </Link>
          </CardTitle>
        </CardHeader>
        <CardContent className="flex flex-col flex-grow">
          <p className="text-muted-foreground mb-4 flex-grow">{project.shortDescription}</p>
          <div className="flex flex-wrap gap-2 mb-4">
            {project.technologies.slice(0, 3).map((tech) => (
              <Badge key={tech} variant="secondary">
                {tech}
              </Badge>
            ))}
          </div>
          <div className="mt-auto pt-4">
            <Button asChild variant="link" className="p-0 h-auto text-primary">
              <Link href={`/projects/${project.slug}`}>
                View Details <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </CardContent>
      </Card>
    </MotionDiv>
  );
}
