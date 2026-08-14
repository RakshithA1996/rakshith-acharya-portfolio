import { GraduationCap } from "lucide-react";
import { education } from "@/data/education";
import { profile } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

export function Education() {
  return (
    <section id="education" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="05" eyebrow="Education" title="Academic foundation." />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2">
          {education.map((item, i) => (
            <AnimatedSection key={item.degree} delay={i * 0.08}>
              <GlassCard className="h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <GraduationCap className="h-5 w-5 text-[var(--color-accent-2)]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {item.degree}
                </h3>
                <p className="mt-1 text-sm text-[var(--color-text-secondary)]">{item.institution}</p>
                <div className="mt-4 flex items-center justify-between font-mono text-xs text-[var(--color-text-muted)]">
                  <span>{item.period}</span>
                  <span className="text-[var(--color-accent-soft)]">{item.result}</span>
                </div>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>

        <AnimatedSection delay={0.2} className="mt-8">
          <p className="font-mono text-xs text-[var(--color-text-muted)]">
            Languages — {profile.languages.join(", ")}
          </p>
        </AnimatedSection>
      </div>
    </section>
  );
}
