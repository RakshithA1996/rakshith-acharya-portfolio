import { Code2, Mail, Users } from "lucide-react";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { Button } from "@/components/ui/Button";

export function Contact() {
  return (
    <section id="contact" className="py-24 sm:py-32">
      <div className="mx-auto max-w-3xl px-6 text-center">
        <SectionHeading
          index="06"
          eyebrow="Contact"
          title="Let's build something great."
          align="center"
        />

        <AnimatedSection delay={0.1}>
          <p className="mx-auto max-w-xl text-balance text-[var(--color-text-secondary)] sm:text-lg">
            Interested in working together? I'm always open to discussing
            mobile engineering, EV connectivity, or full-stack opportunities.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2} className="mt-10 flex flex-wrap items-center justify-center gap-3">
          <Button href={`mailto:${profile.email}`} icon={<Mail className="h-4 w-4" />} iconPosition="left">
            Email Me
          </Button>
          <Button
            href={profile.linkedin}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<Users className="h-4 w-4" />}
            iconPosition="left"
          >
            LinkedIn
          </Button>
          <Button
            href={profile.github}
            target="_blank"
            rel="noreferrer"
            variant="secondary"
            icon={<Code2 className="h-4 w-4" />}
            iconPosition="left"
          >
            GitHub
          </Button>
        </AnimatedSection>
      </div>
    </section>
  );
}
