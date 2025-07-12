import { experience } from "@/lib/data";
import { Briefcase, Check } from "lucide-react";
import { MotionDiv } from "@/components/motion-div";

export const metadata = {
  title: "About Me - Aurumfolio",
  description: "Learn more about my background, skills, and professional experience.",
};

export default function AboutPage() {
    const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.1 } },
  };

  return (
    <div className="container mx-auto max-w-4xl px-4 py-16 md:px-6 md:py-24">
      <MotionDiv 
        initial="hidden"
        animate="visible"
        variants={variants}
        id="about-me" 
        className="grid grid-cols-1 md:grid-cols-3 gap-8 md:gap-12 items-center mb-16"
      >
        <MotionDiv variants={variants} className="md:col-span-1">
          <img
            src="https://placehold.co/400x400.png"
            alt="My Portrait"
            width={400}
            height={400}
            className="rounded-lg aspect-square object-cover border-2 border-primary/50 shadow-lg"
            data-ai-hint="professional portrait"
          />
        </MotionDiv>
        <MotionDiv variants={variants} className="md:col-span-2 space-y-4">
          <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">About Me</h1>
          <div className="text-lg text-foreground/80 space-y-4">
            <p>
              I'm a passionate and results-oriented developer with a knack for creating elegant, efficient, and user-friendly digital experiences. With a foundation in modern web technologies, I thrive on solving complex problems and turning ideas into reality.
            </p>
            <p>
              My journey in web development began with a fascination for how things work on the internet, which quickly grew into a full-fledged career. I am a lifelong learner, always eager to explore new technologies and improve my craft.
            </p>
          </div>
        </MotionDiv>
      </MotionDiv>

      <MotionDiv
        initial="hidden"
        whileInView="visible"
        viewport={{ once: true, amount: 0.2 }}
        variants={variants}
        id="experience"
       >
        <h2 className="text-3xl font-bold tracking-tighter text-primary sm:text-4xl mb-8 text-center">Work Experience</h2>
        <div className="relative border-l-2 border-primary/30 pl-8 space-y-12">
          <div className="absolute left-0 top-0 h-full w-2 -translate-x-1/2 bg-gradient-to-b from-primary to-accent rounded-full"></div>
          {experience.map((job, index) => (
            <MotionDiv key={index} variants={variants} className="relative">
              <div className="absolute -left-10 h-8 w-8 bg-background border-2 border-primary rounded-full flex items-center justify-center">
                <Briefcase className="h-4 w-4 text-primary" />
              </div>
              <div className="p-6 rounded-lg bg-secondary/30 border border-border hover:border-primary/50 transition-colors">
                <p className="text-sm text-muted-foreground">{job.duration}</p>
                <h3 className="text-xl font-bold text-primary mt-1">{job.role}</h3>
                <p className="text-md font-semibold text-foreground/90 mb-3">{job.company}</p>
                <ul className="space-y-2 text-foreground/80">
                  {job.description.map((item, i) => (
                    <li key={i} className="flex items-start gap-2">
                        <Check className="h-4 w-4 mt-1 text-accent flex-shrink-0" />
                        <span>{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </MotionDiv>
          ))}
        </div>
      </MotionDiv>
    </div>
  );
}
