import { SkillCategory } from "@/lib/types";

export const skillsData: SkillCategory[] = [
  {
    categoryKey: "mobile",
    title: "Mobile Development",
    description: "Core specialization in cross-platform mobile architecture with Flutter and Dart.",
    skills: [
      {
        name: "Flutter",
        iconId: "flutter",
        isPrimary: true,
        brandColor: "#54C5F8",
        note: "Primary Core Framework",
      },
      {
        name: "Dart",
        iconId: "dart",
        isPrimary: true,
        brandColor: "#0175C2",
        note: "Object-oriented language",
      },
      {
        name: "Custom Widgets",
        iconId: "widgets",
        isPrimary: false,
        brandColor: "#A855F7",
        note: "Reusable UI components",
      },
    ],
  },
  {
    categoryKey: "state",
    title: "State Management",
    description: "Predictable application state and reactive UI updates.",
    skills: [
      {
        name: "GetX",
        iconId: "getx",
        isPrimary: true,
        brandColor: "#8012EB",
        note: "Reactive state & routing",
      },
      {
        name: "Provider",
        iconId: "provider",
        isPrimary: false,
        brandColor: "#38BDF8",
        note: "InheritedWidget wrapper",
      },
    ],
  },
  {
    categoryKey: "languages",
    title: "Programming Languages",
    description: "Foundational computer science and software development languages.",
    skills: [
      {
        name: "Dart",
        iconId: "dart",
        isPrimary: true,
        brandColor: "#0175C2",
      },
      {
        name: "TypeScript",
        iconId: "typescript",
        isPrimary: false,
        brandColor: "#3178C6",
      },
      {
        name: "JavaScript",
        iconId: "javascript",
        isPrimary: false,
        brandColor: "#F7DF1E",
      },
      {
        name: "C++",
        iconId: "cplusplus",
        isPrimary: false,
        brandColor: "#00599C",
      },
      {
        name: "C",
        iconId: "c",
        isPrimary: false,
        brandColor: "#A8B9CC",
      },
      {
        name: "Java",
        iconId: "java",
        isPrimary: false,
        brandColor: "#ED8B00",
      },
      {
        name: "Bash",
        iconId: "bash",
        isPrimary: false,
        brandColor: "#4EAA25",
      },
    ],
  },
  {
    categoryKey: "backend",
    title: "Backend & APIs",
    description: "Server-side technologies and data handling to support mobile applications.",
    skills: [
      {
        name: "REST API Integration",
        iconId: "rest",
        isPrimary: true,
        brandColor: "#10B981",
        note: "API Consumption & Parsing",
      },
      {
        name: "Node.js",
        iconId: "nodejs",
        isPrimary: false,
        brandColor: "#5FA04E",
      },
      {
        name: "NestJS",
        iconId: "nestjs",
        isPrimary: false,
        brandColor: "#E0234E",
      },
      {
        name: "Flask",
        iconId: "flask",
        isPrimary: false,
        brandColor: "#FFFFFF",
      },
      {
        name: "HTTP / Networking",
        iconId: "http",
        isPrimary: false,
        brandColor: "#0284C7",
      },
      {
        name: "Data Handling",
        iconId: "data",
        isPrimary: false,
        brandColor: "#8B5CF6",
      },
    ],
  },
  {
    categoryKey: "databases",
    title: "Databases & Backend Services",
    description: "Cloud backends, relational databases, and NoSQL stores.",
    skills: [
      {
        name: "Firebase",
        iconId: "firebase",
        isPrimary: false,
        brandColor: "#FFCA28",
        note: "Auth & Cloud Firestore",
      },
      {
        name: "Supabase",
        iconId: "supabase",
        isPrimary: false,
        brandColor: "#3ECF8E",
        note: "PostgreSQL & Auth",
      },
      {
        name: "PostgreSQL",
        iconId: "postgresql",
        isPrimary: false,
        brandColor: "#4169E1",
      },
      {
        name: "MySQL",
        iconId: "mysql",
        isPrimary: false,
        brandColor: "#4479A1",
      },
      {
        name: "MongoDB",
        iconId: "mongodb",
        isPrimary: false,
        brandColor: "#47A248",
      },
    ],
  },
];
