import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { cn } from "@/lib/utils";

interface SectionHeadingProps {
  index: string;
  eyebrow: string;
  title: string;
  align?: "left" | "center";
  className?: string;
}

export function SectionHeading({
  index,
  eyebrow,
  title,
  align = "left",
  className,
}: SectionHeadingProps) {
  return (
    <AnimatedSection
      className={cn(
        "mb-12 md:mb-16",
        align === "center" && "text-center",
        className,
      )}
    >
      <div
        className={cn(
          "flex items-center gap-3 font-mono text-xs tracking-[0.25em] text-[var(--color-accent-2)]",
          align === "center" && "justify-center",
        )}
      >
        <span>{index}</span>
        <span className="h-px w-8 bg-[var(--color-border-hover)]" aria-hidden="true" />
        <span className="uppercase text-[var(--color-text-secondary)]">{eyebrow}</span>
      </div>
      <h2 className="mt-4 max-w-2xl font-display text-3xl font-semibold text-balance text-[var(--color-text-primary)] sm:text-4xl">
        {title}
      </h2>
    </AnimatedSection>
  );
}
