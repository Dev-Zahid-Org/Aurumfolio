import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { ProjectCard } from "@/components/project-card";
import { projects, skills } from "@/lib/data";
import { ArrowRight, Briefcase, Mail, Code, Star, Check } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { MotionDiv } from "@/components/motion-div";

export default function Home() {
  const featuredProjects = projects.slice(0, 3);

  const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <div className="flex flex-col items-center">
      <section id="hero" className="w-full py-20 md:py-32 bg-background">
        <div className="container mx-auto px-4 md:px-6 text-center">
          <MotionDiv
            initial="hidden"
            animate="visible"
            variants={{
              visible: {
                transition: {
                  staggerChildren: 0.2,
                },
              },
            }}
            className="mx-auto max-w-3xl space-y-6"
          >
            <MotionDiv variants={variants}>
              <h1 className="text-5xl font-bold tracking-tighter text-primary sm:text-6xl md:text-7xl lg:text-8xl bg-clip-text text-transparent bg-gradient-to-r from-primary to-accent">
                Aurumfolio
              </h1>
            </MotionDiv>
            <MotionDiv variants={variants}>
              <p className="text-lg text-foreground/80 md:text-xl">
                A showcase of my professional journey, skills, and creative projects.
              </p>
            </MotionDiv>
            <MotionDiv variants={variants} className="flex flex-col gap-4 min-[400px]:flex-row justify-center">
              <Button asChild size="lg">
                <Link href="/projects">
                  View My Work <ArrowRight className="ml-2 h-4 w-4" />
                </Link>
              </Button>
              <Button asChild size="lg" variant="secondary">
                <Link href="/contact">
                  Get in Touch <Mail className="ml-2 h-4 w-4" />
                </Link>
              </Button>
            </MotionDiv>
          </MotionDiv>
        </div>
      </section>

      <section id="featured-projects" className="w-full py-16 md:py-24 bg-secondary/30">
        <div className="container mx-auto px-4 md:px-6">
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={variants} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">Featured Projects</h2>
            <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg mt-2">A selection of my recent work.</p>
          </MotionDiv>
          <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
            {featuredProjects.map((project, i) => (
               <MotionDiv key={project.slug} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }} variants={variants}>
                <ProjectCard project={project} />
               </MotionDiv>
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
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={variants} className="mb-12 text-center">
            <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl">My Skills & Expertise</h2>
            <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg mt-2">The tools and technologies I use to bring ideas to life.</p>
          </MotionDiv>
          <div className="grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
            {Object.entries(skills).map(([category, skillList], i) => (
              <MotionDiv key={category} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: i * 0.1 }} variants={variants}>
                <Card className="bg-card border-border hover:border-primary transition-colors h-full">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-3 text-xl text-primary">
                      {category === "Frontend" && <Code />}
                      {category === "Backend" && <Briefcase />}
                      {category === "Tools & Platforms" && <Star />}
                      {category}
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ul className="space-y-3">
                      {skillList.map(skill => (
                        <li key={skill} className="text-foreground/80 flex items-center gap-2">
                          <Check className="h-4 w-4 text-accent" />
                          {skill}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              </MotionDiv>
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

      <section id="cta" className="w-full py-16 md:py-24 bg-secondary/30">
         <div className="container mx-auto grid items-center justify-center gap-4 px-4 text-center md:px-6">
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} variants={variants} className="space-y-3">
            <h2 className="text-3xl font-bold tracking-tighter text-primary md:text-4xl/tight">
              Let's Create Something Amazing
            </h2>
            <p className="mx-auto max-w-[600px] text-foreground/80 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
              Have a project in mind or just want to connect? I'd love to hear from you.
            </p>
          </MotionDiv>
          <MotionDiv initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.3 }} transition={{ delay: 0.1 }} variants={variants} className="mx-auto w-full max-w-sm space-y-2">
             <Button asChild size="lg" className="w-full">
                <Link href="/contact">
                  Contact Me
                </Link>
              </Button>
          </MotionDiv>
        </div>
      </section>
    </div>
  );
}
