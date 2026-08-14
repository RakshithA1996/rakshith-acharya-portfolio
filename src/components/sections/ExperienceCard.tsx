import { motion } from "framer-motion";
import { Briefcase } from "lucide-react";
import type { Experience } from "@/data/experience";
import { SkillBadge } from "@/components/ui/SkillBadge";
import { GlassCard } from "@/components/ui/GlassCard";

interface ExperienceCardProps {
  experience: Experience;
  index: number;
}

export function ExperienceCard({ experience, index }: ExperienceCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 32 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.6, delay: index * 0.05, ease: [0.22, 1, 0.36, 1] }}
      className="relative pl-10 sm:pl-14"
    >
      <span
        className="absolute left-0 top-1 flex h-8 w-8 items-center justify-center rounded-full border border-[var(--color-border-hover)] bg-[var(--color-surface)] sm:h-9 sm:w-9"
        aria-hidden="true"
      >
        <Briefcase className="h-4 w-4 text-[var(--color-accent-2)]" />
      </span>

      <GlassCard className="mb-10">
        <div className="flex flex-col justify-between gap-2 sm:flex-row sm:items-start">
          <div>
            <h3 className="font-display text-lg font-semibold text-[var(--color-text-primary)]">
              {experience.role}
            </h3>
            <p className="mt-1 text-sm text-[var(--color-accent-soft)]">
              {experience.company}
              {experience.location ? ` · ${experience.location}` : ""}
            </p>
          </div>
          <div className="flex items-center gap-2">
            {experience.current && (
              <span className="inline-flex items-center gap-1.5 rounded-full border border-[var(--color-accent-dim)] bg-[var(--color-accent-dim)]/20 px-2.5 py-1 font-mono text-[10px] uppercase tracking-wider text-[var(--color-accent-2)]">
                <span className="h-1.5 w-1.5 rounded-full bg-[var(--color-accent-2)] animate-pulse-slow" />
                Current
              </span>
            )}
            <span className="whitespace-nowrap font-mono text-xs text-[var(--color-text-muted)]">
              {experience.period}
            </span>
          </div>
        </div>

        <p className="mt-4 text-sm leading-relaxed text-[var(--color-text-secondary)]">
          {experience.description}
        </p>

        <ul className="mt-4 space-y-2.5">
          {experience.responsibilities.map((item) => (
            <li
              key={item}
              className="flex gap-2.5 text-sm leading-relaxed text-[var(--color-text-secondary)]"
            >
              <span className="mt-2 h-1 w-1 shrink-0 rounded-full bg-[var(--color-border-hover)]" aria-hidden="true" />
              <span>{item}</span>
            </li>
          ))}
        </ul>

        <div className="mt-5 flex flex-wrap gap-2">
          {experience.technologies.map((tech) => (
            <SkillBadge key={tech} label={tech} />
          ))}
        </div>
      </GlassCard>
    </motion.div>
  );
}
