import { GitBranch, Layers, Puzzle, Sparkles } from "lucide-react";
import { profile, engineeringPhilosophy } from "@/data/profile";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

const icons = [GitBranch, Layers, Puzzle, Sparkles];

export function About() {
  return (
    <section id="about" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading index="01" eyebrow="About" title="Engineering beyond the UI" />

        <div className="grid grid-cols-1 gap-12 lg:grid-cols-[1fr_1fr]">
          <AnimatedSection delay={0.1}>
            <p className="text-balance leading-relaxed text-[var(--color-text-secondary)] sm:text-lg">
              {profile.summary}
            </p>
          </AnimatedSection>

          <div className="grid grid-cols-1 gap-4 sm:grid-cols-2">
            {engineeringPhilosophy.map((item, i) => {
              const Icon = icons[i % icons.length];
              return (
                <AnimatedSection key={item.title} delay={0.1 + i * 0.08}>
                  <GlassCard className="h-full">
                    <Icon className="h-5 w-5 text-[var(--color-accent-2)]" aria-hidden="true" />
                    <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-text-primary)]">
                      {item.title}
                    </h3>
                    <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                      {item.description}
                    </p>
                  </GlassCard>
                </AnimatedSection>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
}
