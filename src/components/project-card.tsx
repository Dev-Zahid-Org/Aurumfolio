import Link from "next/link";
import Image from "next/image";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";
import type { Project } from "@/lib/data";

type ProjectCardProps = {
  project: Project;
};

export function ProjectCard({ project }: ProjectCardProps) {
  return (
    <Card className="flex flex-col overflow-hidden bg-card border-border hover:border-primary transition-all duration-300 ease-in-out hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1">
      <Link href={`/projects/${project.slug}`} className="block">
        <Image
          src={project.coverImage}
          alt={project.title}
          width={600}
          height={400}
          className="h-60 w-full object-cover"
          data-ai-hint="abstract technology"
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
        <p className="text-muted-foreground mb-4">{project.shortDescription}</p>
        <div className="flex flex-wrap gap-2 mb-4">
          {project.technologies.slice(0, 3).map((tech) => (
            <Badge key={tech} variant="secondary" className="bg-accent/20 text-accent-foreground/80">
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
  );
}
