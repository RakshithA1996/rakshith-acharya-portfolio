type ClassValue = string | number | false | null | undefined;

/** Joins truthy class-name fragments together. A tiny dependency-free clsx. */
export function cn(...classes: ClassValue[]): string {
  return classes.filter(Boolean).join(" ");
}
