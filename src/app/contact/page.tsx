import { ContactForm } from "./contact-form";
import { MotionDiv } from "@/components/motion-div";

export const metadata = {
  title: "Contact - Aurumfolio",
  description: "Get in touch with me for collaborations, questions, or just to say hi.",
};

export default function ContactPage() {
    const variants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { staggerChildren: 0.2 } },
  };

  return (
    <MotionDiv 
        initial="hidden"
        animate="visible"
        variants={variants}
        className="container mx-auto max-w-2xl px-4 py-16 md:px-6 md:py-24"
    >
      <MotionDiv variants={variants} className="mb-12 text-center">
        <h1 className="text-4xl font-bold tracking-tighter text-primary sm:text-5xl">Contact Me</h1>
        <p className="mx-auto max-w-2xl text-foreground/80 md:text-lg mt-4">
          I'm always open to discussing new projects, creative ideas, or opportunities to be part of an amazing team. Feel free to reach out.
        </p>
      </MotionDiv>
      <MotionDiv variants={variants}>
        <ContactForm />
      </MotionDiv>
    </MotionDiv>
  );
}
