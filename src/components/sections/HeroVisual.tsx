import { motion } from "framer-motion";
import { pipelineNodes } from "@/data/profile";

/**
 * Signature hero visual: the actual connectivity stack Rakshith debugs day
 * to day, from the RN UI layer down through the native bridge, the BLE/TCP
 * device link, and into the backend — with a signal pulse continuously
 * travelling the line to represent live data moving through that stack.
 */
export function HeroVisual() {
  return (
    <div className="relative mx-auto w-full max-w-xs">
      <div className="pointer-events-none absolute inset-0 -z-10 blur-3xl" aria-hidden="true">
        <div className="absolute right-0 top-1/4 h-56 w-56 rounded-full bg-[var(--color-accent-dim)] opacity-40" />
      </div>

      <div className="relative pl-8">
        {/* connecting spine */}
        <div
          className="absolute left-[11px] top-2 bottom-2 w-px bg-gradient-to-b from-[var(--color-accent)] via-[var(--color-border-hover)] to-transparent"
          aria-hidden="true"
        />
        {/* travelling signal pulse */}
        <motion.div
          aria-hidden="true"
          className="absolute left-[7px] h-2 w-2 rounded-full bg-[var(--color-accent-2)] shadow-[0_0_12px_2px_var(--color-accent-2)]"
          animate={{ top: ["2%", "98%"], opacity: [0, 1, 1, 0] }}
          transition={{ duration: 3.2, repeat: Infinity, ease: "linear" }}
        />

        <ul className="flex flex-col gap-6">
          {pipelineNodes.map((node, i) => (
            <motion.li
              key={node.label}
              initial={{ opacity: 0, x: 24 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.15 * i, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <span
                className="absolute -left-8 top-1.5 h-[9px] w-[9px] rounded-full border-2 border-[var(--color-accent)] bg-[var(--color-bg)]"
                aria-hidden="true"
              />
              <div className="rounded-xl border border-[var(--color-border)] bg-[var(--color-surface)]/80 px-4 py-3 backdrop-blur-sm transition-colors duration-300 hover:border-[var(--color-accent-dim)]">
                <p className="font-mono text-sm font-medium text-[var(--color-text-primary)]">
                  {node.label}
                </p>
                <p className="mt-0.5 text-xs text-[var(--color-text-secondary)]">{node.detail}</p>
              </div>
            </motion.li>
          ))}
        </ul>
      </div>
    </div>
  );
}
