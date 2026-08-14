import { skills } from "@/data/skills";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";
import { SkillBadge } from "@/components/ui/SkillBadge";

export function Skills() {
  return (
    <section id="skills" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="03" eyebrow="Skills" title="The stack, end to end." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {skills.map((category, i) => (
            <AnimatedSection key={category.id} delay={i * 0.06}>
              <GlassCard className="h-full">
                <p className="font-mono text-[11px] uppercase tracking-[0.2em] text-[var(--color-accent-2)]">
                  {category.eyebrow}
                </p>
                <h3 className="mt-2 font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {category.label}
                </h3>
                <div className="mt-4 flex flex-wrap gap-2">
                  {category.skills.map((skill) => (
                    <SkillBadge key={skill} label={skill} />
                  ))}
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
