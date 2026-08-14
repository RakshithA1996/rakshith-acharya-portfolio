export interface SkillCategory {
  id: string;
  label: string;
  eyebrow: string;
  skills: string[];
}

export const skills: SkillCategory[] = [
  {
    id: "mobile",
    label: "Mobile Engineering",
    eyebrow: "Client",
    skills: [
      "React Native",
      "React",
      "TypeScript",
      "JavaScript",
      "React Navigation",
      "Redux",
      "Redux Toolkit",
      "Context API",
      "Hooks & Memoization",
    ],
  },
  {
    id: "android",
    label: "Android",
    eyebrow: "Native",
    skills: [
      "Android SDK",
      "Java",
      "Kotlin",
      "Gradle / AGP",
      "Android Studio",
      "Native Modules",
      "Background & Foreground Services",
    ],
  },
  {
    id: "connectivity",
    label: "Connectivity & IoT",
    eyebrow: "Protocols",
    skills: [
      "Bluetooth (BLE)",
      "react-native-ble-plx",
      "TCP Sockets",
      "OCPP Protocol",
      "Firmware Updates",
      "Location Services",
      "Push Notifications",
    ],
  },
  {
    id: "backend",
    label: "Backend & Cloud",
    eyebrow: "Server",
    skills: [
      "Node.js",
      "Express.js",
      "PostgreSQL",
      "Prisma ORM",
      "Redis",
      "JWT Auth",
      "Docker",
      "Swagger / OpenAPI",
      "AWS Amplify",
      "REST APIs",
    ],
  },
  {
    id: "practice",
    label: "Engineering Practice",
    eyebrow: "Process",
    skills: [
      "Debugging & Root-Cause Analysis",
      "Performance Optimization",
      "Dependency & Framework Upgrades",
      "App Architecture",
      "Production Support",
    ],
  },
  {
    id: "tools",
    label: "Tools",
    eyebrow: "Workflow",
    skills: ["Git", "GitHub", "VS Code", "Android Studio", "Ubuntu / Linux"],
  },
];
