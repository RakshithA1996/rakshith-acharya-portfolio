export interface Experience {
  company: string;
  role: string;
  period: string;
  location: string;
  current: boolean;
  description: string;
  responsibilities: string[];
  technologies: string[];
}

export const experience: Experience[] = [
  {
    company: "ConnectM Technology Solutions Pvt. Ltd.",
    role: "Software Engineer (React Native Developer)",
    period: "Dec 2021 — Present",
    location: "Bangalore",
    current: true,
    description:
      "Own and maintain a portfolio of production React Native/TypeScript EV mobility applications, working across BLE, TCP, and OCPP protocol layers with hardware, backend, and OEM partner teams.",
    responsibilities: [
      "Own and maintain a portfolio of production React Native/TypeScript EV mobile applications covering ride statistics and history, roadside assistance, service booking, and issue reporting, with Bluetooth-based firmware update workflows.",
      "Built an EV charging application implementing the OCPP protocol for station discovery, booking, and charge-session initiation — including a Redux-driven charging flow with real-time meter-value polling, stop-transaction handling, and a custom PanResponder-based connector slider.",
      "Developed a wallet module with paginated, month-grouped transaction history, plus an OTP-based authentication flow (react-native-sms-retriever) with VIN validation and active-session checks.",
      "Diagnosed and resolved BLE integration issues via react-native-ble-plx, including a characteristic-UUID conflict where a single UUID served both write and notify operations.",
      "Delivered an EV rental app for vehicle reservation and remote lock/unlock via IoT integration, a battery-swapping app over Bluetooth, technician apps for two OEM partners handling real-time damage tickets, and a screen-mirroring app streaming navigation maps over TCP sockets to in-vehicle displays.",
      "Led a UI/design-system migration for an OEM scooter app (cream-themed React Native design system across 6+ screens, HTML-to-RN conversion) and built theming plus QR scanning (react-native-vision-camera v4) for another OEM's charging-connect app.",
      "Resolved recurring Android/Gradle/AGP compatibility issues across React Native version upgrades (e.g., pinning AGP 8.3.2 / Gradle 8.6 for RN 0.80.2) and integrated native SDKs (Eryanet BLE/AP/P2P, HMS Scan Kit, Baidu Maps).",
      "Collaborated cross-functionally with hardware, backend, and OEM partner teams to ship reliable, production-grade mobile features.",
    ],
    technologies: [
      "React Native",
      "TypeScript",
      "Redux",
      "BLE",
      "TCP Sockets",
      "OCPP",
      "Java",
      "Kotlin",
      "Gradle/AGP",
    ],
  },
  {
    company: "Zelp Technologies",
    role: "Frontend Developer",
    period: "Jan 2021 — Nov 2021",
    location: "",
    current: false,
    description:
      "Built and maintained responsive web applications, focused on UI optimization, modular components, and API-driven state management.",
    responsibilities: [
      "Built and maintained responsive web applications using React, JavaScript, HTML5, and CSS3, with a focus on UI optimization and modular, reusable components.",
      "Integrated RESTful APIs and implemented form validation, client-side routing, and state management.",
    ],
    technologies: ["React", "JavaScript", "HTML5", "CSS3", "REST APIs"],
  },
];

export interface EngineeringHighlight {
  title: string;
  description: string;
}

export const engineeringHighlightsRaw: EngineeringHighlight[] = [
  {
    title: "Real-time screen streaming",
    description:
      "Implemented real-time screen streaming between mobile devices and vehicle cluster displays using TCP sockets.",
  },
  {
    title: "Bluetooth IoT integrations",
    description:
      "Integrated multiple Bluetooth-based IoT features for EV firmware updates and vehicle connectivity.",
  },
  {
    title: "Performance optimization",
    description:
      "Recognized for optimizing app performance using advanced React patterns — hooks and memoization.",
  },
];
