import { Code2, Mail, Users } from "lucide-react";
import { profile, socialLinks } from "@/data/profile";

const icons = { mail: Mail, linkedin: Users, github: Code2, phone: Mail };

export function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="border-t border-[var(--color-border)]">
      <div className="mx-auto flex max-w-6xl flex-col items-center gap-6 px-6 py-10 text-sm text-[var(--color-text-secondary)] sm:flex-row sm:justify-between">
        <p className="font-mono">
          © {year} {profile.name}. Built with React &amp; TypeScript.
        </p>
        <div className="flex items-center gap-3">
          {socialLinks.map((link) => {
            const Icon = icons[link.icon];
            return (
              <a
                key={link.label}
                href={link.href}
                target={link.href.startsWith("http") ? "_blank" : undefined}
                rel={link.href.startsWith("http") ? "noreferrer" : undefined}
                aria-label={link.label}
                className="inline-flex h-9 w-9 items-center justify-center rounded-full border border-[var(--color-border)] text-[var(--color-text-secondary)] transition-all duration-200 hover:-translate-y-0.5 hover:border-[var(--color-border-hover)] hover:text-[var(--color-text-primary)]"
              >
                <Icon className="h-4 w-4" aria-hidden="true" />
              </a>
            );
          })}
        </div>
      </div>
    </footer>
  );
}
