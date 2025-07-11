import { Github, Linkedin, Twitter } from "lucide-react";
import { Logo } from "@/components/icons";
import { Button } from "@/components/ui/button";
import Link from "next/link";

export function Footer() {
  return (
    <footer className="w-full border-t border-border/40 bg-background">
      <div className="container mx-auto flex flex-col items-center justify-between gap-4 py-10 md:h-24 md:flex-row md:py-0">
        <div className="flex flex-col items-center gap-4 px-8 md:flex-row md:gap-2 md:px-0">
          <Logo className="h-6 w-6 text-primary" />
          <p className="text-center text-sm leading-loose text-muted-foreground md:text-left">
            &copy; {new Date().getFullYear()} Aurumfolio. All rights reserved.
          </p>
        </div>
        <div className="flex items-center gap-2">
           <Button variant="ghost" size="icon" asChild>
            <Link href="https://github.com" target="_blank">
                <Github className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                <span className="sr-only">GitHub</span>
            </Link>
           </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://twitter.com" target="_blank">
                    <Twitter className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="sr-only">Twitter</span>
                </Link>
            </Button>
            <Button variant="ghost" size="icon" asChild>
                <Link href="https://linkedin.com" target="_blank">
                    <Linkedin className="h-5 w-5 text-muted-foreground hover:text-primary transition-colors" />
                    <span className="sr-only">LinkedIn</span>
                </Link>
            </Button>
        </div>
      </div>
    </footer>
  );
}
