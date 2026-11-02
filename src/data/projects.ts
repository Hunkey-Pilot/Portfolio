import { ProjectData } from "@/lib/types";

export const projectsData: ProjectData[] = [
  {
    slug: "craftybay",
    number: "01",
    title: "CraftyBay",
    category: "E-commerce Mobile Application",
    year: "2025",
    technologies: ["Flutter", "GetX", "HTTP", "REST API"],
    techBadges: [
      { name: "Flutter", brandColor: "#02569B" },
      { name: "GetX", brandColor: "#8012EB" },
      { name: "HTTP", brandColor: "#0284C7" },
      { name: "REST API", brandColor: "#10B981" },
    ],
    description:
      "An e-commerce mobile application featuring product discovery, category filtering, cart functionality, and user authentication. Integrated REST APIs to connect the application interface with backend services.",
    highlights: [
      "Product search and discovery",
      "Category-based filtering",
      "Shopping cart functionality",
      "User authentication",
      "REST API integration",
    ],
    features: [
      "Modern home storefront with dynamic promotion banners and special offer carousels",
      "Multi-level category exploration and refined product catalog filtering",
      "Interactive shopping cart with item quantity adjustments and cost calculation",
      "Secure token-based user authentication and profile state management using GetX",
      "Resilient network error handling and loading skeletons across all API endpoints",
    ],
    visualDirection:
      "Refined mobile-device mockup displaying an e-commerce interface with category chips, product cards, and cart actions.",
    githubUrl: null, // Repository URL will be configured once publicly published
    liveDemoUrl: null,
    placeholderPrompt: "Add CraftyBay Home Screenshot (e.g. public/images/projects/craftybay/home.png)",
  },
  {
    slug: "task-management",
    number: "02",
    title: "Task Management",
    category: "Task Management Mobile Application",
    year: "2025",
    technologies: ["Flutter", "GetX", "HTTP", "CRUD"],
    techBadges: [
      { name: "Flutter", brandColor: "#02569B" },
      { name: "GetX", brandColor: "#8012EB" },
      { name: "HTTP", brandColor: "#0284C7" },
      { name: "REST API", brandColor: "#10B981" },
    ],
    description:
      "A task management application designed to simplify everyday task handling through a responsive interface, CRUD operations, and authentication.",
    highlights: [
      "Create, read, update, and delete tasks",
      "Task organization",
      "Authentication",
      "Responsive interface",
      "API communication",
    ],
    features: [
      "Comprehensive CRUD workflows: create, edit, prioritize, and delete tasks seamlessly",
      "Status-driven categorization (Pending, In Progress, Completed, Cancelled)",
      "Secure user login and registration with session persistence",
      "Fluid, responsive mobile layout optimized across varying screen densities",
      "Asynchronous REST API synchronization with optimistic UI updates via GetX",
    ],
    visualDirection:
      "Clean task-list interface with status chips, priority indicators, and responsive card layouts.",
    githubUrl: null, // Repository URL will be configured once publicly published
    liveDemoUrl: null,
    placeholderPrompt: "Add Task Management Dashboard Screenshot (e.g. public/images/projects/task-management/dashboard.png)",
  },
  {
    slug: "tourde",
    number: "03",
    title: "TourDe",
    category: "Travel Management App UI Design",
    year: "2025",
    technologies: ["Flutter", "GetX", "UI/UX Design"],
    techBadges: [
      { name: "Flutter", brandColor: "#02569B" },
      { name: "GetX", brandColor: "#8012EB" },
      { name: "UI/UX", brandColor: "#F43F5E" },
    ],
    description:
      "A travel management mobile application UI concept focused on visual appeal, usability, and a clear mobile navigation experience.",
    highlights: [
      "Travel-focused interface design",
      "Mobile UI development",
      "Reusable Flutter components",
      "User-centered visual hierarchy",
    ],
    features: [
      "Destination discovery feed with high-contrast scenery cards and rating badges",
      "Interactive itinerary exploration with date pickers and location tags",
      "Custom reusable Flutter UI widgets for consistent travel booking layouts",
      "Smooth micro-interactions and page transitions adhering to Material 3 standards",
      "Clean visual architecture presented honestly as a dedicated mobile UI concept",
    ],
    visualDirection:
      "Travel-inspired mobile interface showcasing destination cards, search bar, and refined typography.",
    githubUrl: null, // Repository URL will be configured once publicly published
    liveDemoUrl: null,
    placeholderPrompt: "Add TourDe Destination Screenshot (e.g. public/images/projects/tourde/home.png)",
  },
];
