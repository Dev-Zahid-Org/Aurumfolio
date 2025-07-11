import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { projects, skills } from "@/lib/data";
import { ArrowRight, Briefcase, Mail, Code, Star } from "lucide-react";
import Link from "next/link";
import Image from "next/image";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  return (
    <div className="flex flex-col items-center">
      <section id="hero" className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <div className="mx-auto max-w-3xl space-y-4">
            <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl md:text-6xl lg:text-7xl">
              Aurumfolio
            </h1>
            <p className="text-lg text-foreground/80 md:text-xl">
              A showcase of my professional journey, skills, and creative projects.
            </p>
            <div className="flex flex-col gap-2 min-[400px]:flex-row justify-center">
              <Button asChild size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="outline" className="border-primary text-primary hover:bg-primary/10">
                <Link href="/contact">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section id="featured-projects" className="w-full py-16 md:py-24 bg-card">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg">A selection of my recent work.</p>
          </div>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project) => (
              <ProjectCard key={project.slug} project={project} />
            ))}
          </div>
          <div className="mt-12 text-center">
            <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/projects">
                See all projects <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>
      
      <section id="skills" className="w-full py-16 md:py-24 bg-background">
        <div className="container mx-auto px-4 md:px-6">
          <div className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">My Skills & Expertise</h2>
            <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg">The tools and technologies I use to bring ideas to life.</p>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList]) => (
              <Card key={category} className="bg-card border-border hover:border-primary transition-colors">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2 text-xl text-primary">
                    {category === "Frontend" && <Code />}
                    {category === "Backend" && <Briefcase />}
                    {category === "Tools & Platforms" && <Star />}
                    {category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2">
                    {skillList.map(skill => (
                      <li key={skill} className="text-foreground/80">{skill}</li>
                    ))}
                  </ul>
                </CardContent>
              </Card>
            ))}
          </div>
          <div className="mt-12 text-center">
             <Button asChild variant="link" className="text-lg text-primary">
              <Link href="/about">
                Learn more about my experience <ArrowRight className="ml-2 h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <section id="cta" className="w-full py-16 md:py-24 bg-card">
         <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <div className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
              Let's Create Something Amazing
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>
          </div>
          <div className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg" className="w-full bg-primary text-primary-foreground hover:bg-primary/90">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
          </div>
        </div>
      </section>
    </div>
  );
}
