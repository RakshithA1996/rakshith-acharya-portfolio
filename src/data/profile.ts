export interface SocialLink {
  label: string;
  href: string;
  icon: "mail" | "linkedin" | "github" | "phone";
}

export interface NavigationItem {
  label: string;
  href: string;
}

export const profile = {
  name: "Rakshith Acharya",
  role: "Senior Software Engineer",
  tagline: "React Native · Android · TypeScript",
  location: "Mangaluru, India",
  yearsExperience: 5,
  summary:
    "Senior Software Engineer with 5+ years of experience building and maintaining production-grade React Native and React applications for the EV mobility sector, including OCPP-based charging apps, Bluetooth/IoT vehicle integrations, and real-time TCP-based streaming systems. Strong native Android expertise (Java/Kotlin) across build systems, background services, and hardware SDK integrations, paired with proven front-end web development experience (React, TypeScript, JavaScript). Skilled at owning complex mobile engineering problems end-to-end — from BLE protocol debugging and Gradle/AGP compatibility to Redux state architecture and UI/design-system migrations — while collaborating closely with hardware, backend, and OEM partner teams. Currently expanding into full-stack development with Node.js, Express, PostgreSQL, Prisma, Redis, JWT, and Docker.",
  email: "rakshithacharya75@gmail.com",
  phone: "+91 70198 92499",
  linkedin: "https://www.linkedin.com/in/rakshith-acharya-640000181",
  github: "https://github.com/RakshithA1996",
  targetRoles: [
    "Senior Software Engineer",
    "Senior React Native Engineer",
    "Senior Mobile Engineer",
  ],
  languages: ["English", "Kannada", "Hindi"],
} as const;

export const navigation: NavigationItem[] = [
  { label: "Home", href: "#home" },
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Skills", href: "#skills" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const socialLinks: SocialLink[] = [
  { label: "Email", href: `mailto:${profile.email}`, icon: "mail" },
  { label: "LinkedIn", href: profile.linkedin, icon: "linkedin" },
  { label: "GitHub", href: profile.github, icon: "github" },
];

export interface PipelineNode {
  label: string;
  detail: string;
}

/** Mirrors the real connectivity stack from the CV: device firmware through
 * to cloud services, the exact layers Rakshith debugs day to day. */
export const pipelineNodes: PipelineNode[] = [
  { label: "React Native", detail: "UI · Redux · Navigation" },
  { label: "Native Bridge", detail: "Java / Kotlin modules" },
  { label: "BLE / TCP", detail: "Device & vehicle link" },
  { label: "REST / OCPP", detail: "Charging protocol" },
  { label: "Node.js API", detail: "Express · Prisma" },
  { label: "PostgreSQL", detail: "Persistence layer" },
];

export const engineeringPhilosophy = [
  {
    title: "Root-cause debugging",
    description:
      "Tracing issues to their source across the JS bridge, native modules, and hardware layer rather than patching symptoms.",
  },
  {
    title: "Cross-layer engineering",
    description:
      "Comfortable moving between UI code, native Android services, and backend APIs on the same feature.",
  },
  {
    title: "Maintainable architecture",
    description:
      "Structuring state and navigation so a codebase stays predictable as OEM partners and feature scope grow.",
  },
  {
    title: "Continuous learning",
    description:
      "Actively expanding into backend engineering — Node.js, PostgreSQL, and Docker — to own features end-to-end.",
  },
];
