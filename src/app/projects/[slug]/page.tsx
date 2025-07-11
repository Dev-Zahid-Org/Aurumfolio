import { notFound } from "next/navigation";
import { projects } from "@/lib/data";
import Image from "next/image";
import { Badge } from "@/components/ui/badge";
import { Carousel, CarouselContent, CarouselItem, CarouselNext, CarouselPrevious } from "@/components/ui/carousel";

type ProjectPageProps = {
  params: {
    slug: string;
  };
};

export async function generateStaticParams() {
  return projects.map((project) => ({
    slug: project.slug,
  }));
}

export async function generateMetadata({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);
  if (!project) {
    return {};
  }
  return {
    title: `${project.title} - Aurumfolio`,
    description: project.shortDescription,
  };
}


export default function ProjectPage({ params }: ProjectPageProps) {
  const project = projects.find((p) => p.slug === params.slug);

  if (!project) {
    notFound();
  }

  return (
    <article className="container mx-auto px-4 py-16 md:px-6 md:py-24">
      <div className="mx-auto max-w-4xl">
        <div className="mb-8 text-center">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">{project.title}</h1>
        </div>
        
        <Carousel className="w-full mb-12" opts={{ loop: true }}>
          <CarouselContent>
            {project.images.map((img, index) => (
              <CarouselItem key={index}>
                <Image
                  src={img}
                  alt={`${project.title} screenshot ${index + 1}`}
                  width={1200}
                  height={800}
                  className="w-full h-auto rounded-lg object-cover border border-border"
                  data-ai-hint="project screenshot"
                />
              </CarouselItem>
            ))}
          </CarouselContent>
          <CarouselPrevious className="ml-16" />
          <CarouselNext className="mr-16" />
        </Carousel>

        <div className="prose prose-invert max-w-none prose-p:text-foreground/80 prose-headings:text-primary mx-auto">
          <p className="lead text-xl text-foreground/90 mb-8">{project.shortDescription}</p>
          <p>{project.longDescription}</p>
        </div>

        <div className="mt-12">
          <h2 className="text-2xl font-bold text-primary mb-4">Technologies Used</h2>
          <div className="flex flex-wrap gap-3">
            {project.technologies.map((tech) => (
              <Badge key={tech} variant="secondary" className="text-lg px-4 py-2 bg-accent/20 text-accent-foreground/80">
                {tech}
              </Badge>
            ))}
          </div>
        </div>
      </div>
    </article>
  );
}
