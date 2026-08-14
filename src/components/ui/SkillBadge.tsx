import { cn } from "@/lib/utils";

interface SkillBadgeProps {
  label: string;
  className?: string;
}

export function SkillBadge({ label, className }: SkillBadgeProps) {
  return (
    <span
      className={cn(
        "inline-flex items-center rounded-full border border-[var(--color-border)] bg-[var(--color-surface)] px-3.5 py-1.5 font-mono text-xs text-[var(--color-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-accent-dim)] hover:text-[var(--color-text-primary)] hover:shadow-[0_6px_16px_-8px_var(--color-accent)]",
        className,
      )}
    >
      {label}
    </span>
  );
}
