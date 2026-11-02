import { EducationData } from "@/lib/types";

export const educationData: EducationData = {
  institution: "Daffodil International University",
  degree: "Bachelor of Science in Computer Science and Engineering",
  status: "Ongoing",
  cgpa: "3.95",
  location: "Dhaka, Bangladesh",
  academicAwards: [
    {
      title: "Dean's List Award",
      term: "Spring",
      year: "2025",
    },
    {
      title: "Dean's List Award",
      term: "Summer",
      year: "2025",
    },
  ],
  certificate: {
    title: "App Development with Flutter",
    issuer: "Ostad",
    description:
      "Comprehensive training covering Flutter widget architecture, state management (Provider & GetX), REST API integration, local persistence, and production application standards.",
  },
};
