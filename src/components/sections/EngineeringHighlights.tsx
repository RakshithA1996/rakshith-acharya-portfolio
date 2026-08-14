import {
  Bluetooth,
  Cable,
  Cpu,
  GaugeCircle,
  RefreshCcw,
  Smartphone,
} from "lucide-react";
import { SectionHeading } from "@/components/ui/SectionHeading";
import { AnimatedSection } from "@/components/ui/AnimatedSection";
import { GlassCard } from "@/components/ui/GlassCard";

const highlights = [
  {
    icon: Cable,
    title: "Cross-Layer Debugging",
    description:
      "Tracing issues across the JS bridge, native Android modules, and BLE/TCP hardware links to find true root causes.",
  },
  {
    icon: Cpu,
    title: "Native Android Integration",
    description:
      "Integrating hardware SDKs and background/foreground services, and resolving Gradle/AGP compatibility across RN upgrades.",
  },
  {
    icon: Smartphone,
    title: "Mobile Architecture",
    description:
      "Structuring Redux state, navigation, and design systems so production apps stay maintainable as scope grows.",
  },
  {
    icon: Bluetooth,
    title: "Complex Device Integrations",
    description:
      "Shipping BLE, OCPP, and TCP-socket features for EV charging, battery swapping, and in-vehicle streaming.",
  },
  {
    icon: RefreshCcw,
    title: "Application Modernization",
    description:
      "Leading UI/design-system migrations and framework upgrades across a portfolio of production applications.",
  },
  {
    icon: GaugeCircle,
    title: "Backend Engineering",
    description:
      "Expanding into full-stack ownership with Node.js, Express, PostgreSQL, Prisma, Redis, and Docker.",
  },
];

export function EngineeringHighlights() {
  return (
    <section id="highlights" className="py-24 sm:py-32">
      <div className="mx-auto max-w-6xl px-6">
        <SectionHeading
          index="04"
          eyebrow="Highlights"
          title="Where I add the most leverage."
        />

        <div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {highlights.map((item, i) => (
            <AnimatedSection key={item.title} delay={i * 0.06}>
              <GlassCard className="h-full">
                <div className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[var(--color-border)] bg-[var(--color-bg)]">
                  <item.icon className="h-5 w-5 text-[var(--color-accent-2)]" aria-hidden="true" />
                </div>
                <h3 className="mt-4 font-display text-base font-semibold text-[var(--color-text-primary)]">
                  {item.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-[var(--color-text-secondary)]">
                  {item.description}
                </p>
              </GlassCard>
            </AnimatedSection>
          ))}
        </div>
      </div>
    </section>
  );
}
