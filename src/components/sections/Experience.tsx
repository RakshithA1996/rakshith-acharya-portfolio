import { experience } from "@/data/experience";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { ExperienceCard } from "@/components/sections/ExperienceCard";

export function Experience() {
  return (
    <section id="experience" className="py-24 sm:py-32">
      <div className="mx-auto max-w-4xl px-6">
        <SectionHeading
          index="02"
          eyebrow="Experience"
          title="Building software that works in the real world."
        />

        <div className="relative">
          <div
            className="absolute left-4 top-2 bottom-10 w-px bg-[var(--color-border)] sm:left-[1.15rem]"
            aria-hidden="true"
          />
          {experience.map((exp, i) => (
            <ExperienceCard key={exp.company} experience={exp} index={i} />
          ))}
        </div>
      </div>
    </section>
  );
}
