import profilePic from '../assets/images/unnamed.jpg';
import malayanLogo from '../assets/images/malayan.png';
import globeBuilding from '../assets/images/img-globe-1.jpg';

// Project Screenshots
import wizpool1 from '../assets/images/Media (4).jfif';
import wizpool2 from '../assets/images/image.png';
import wizpool3 from '../assets/images/image2.png';
import wizpool4 from '../assets/images/Media (5).jfif';

import wasp1 from '../assets/images/Media (7).jfif';
import wasp2 from '../assets/images/Media (14).jfif';
import wasp3 from '../assets/images/Media (15).jfif';

import owl1 from '../assets/images/game_screenshot.png';
import owl2 from '../assets/images/game_screenshot2.png';
import owl3 from '../assets/images/game_screenshot3.png';
import resumePdf from '../assets/resume.pdf';

export const PERSONAL_INFO = {
  name: "Isaiah Quejadas",
  role: "Full-Stack Software Engineer",
  tagline: "Architecting high-performance web systems, distributed backends, and AI-driven solutions.",
  bio: "B.S. in Computer Science graduate with 6+ years of coding experience. Proven track record developing resilient enterprise microservices, real-time client applications, and machine learning pipelines. Experienced in cross-functional agile teams, including quality assurance and data automation at Globe Telecom.",
  location: "Laguna, Philippines",
  timezone: "UTC+8",
  status: "Open to Full-Time & Forward Deployed Roles",
  email: "isaiahquejadas@gmail.com",
  github: "https://github.com/WanDayMore",
  linkedin: "https://linkedin.com",
  profileImage: profilePic,
  resumeUrl: resumePdf
};

export const METRICS = [
  { label: "Coding Experience", value: "6+ Years", description: "Hands-on software development" },
  { label: "Core Degree", value: "B.S. CS", description: "Mapúa Malayan Colleges Laguna" },
  { label: "Systems Built", value: "3+", description: "Web, Mobile & AI/IoT Solutions" },
];

export const PROJECTS = [
  {
    id: "wizpool-express",
    title: "WizPool Express",
    category: "Full-Stack & Web",
    subtitle: "Enterprise Campus Car-Pooling Platform",
    shortDesc: "A campus carpooling mobile and web application designed for students and faculty of MMCL to streamline shared rides and reduce commute congestion.",
    technologies: ["React", ".NET Core", "PostgreSQL", "WebSockets", "Microsoft OAuth", "Docker"],
    badge: "Production Ready",
    featured: true,
    thumbnail: wizpool2,
    images: [
      { url: wizpool2, title: "Available Rides Feed" },
      { url: wizpool3, title: "Ride Publishing & Routing" },
      { url: wizpool1, title: "Slot Reservation Dashboard" },
      { url: wizpool4, title: "Real-time Notifications" }
    ],
    architecture: "Three-tier architecture with React client, ASP.NET Core REST & WebSocket gateway, and PostgreSQL relational database with OAuth identity provider.",
    highlights: [
      "Designed full relational schema and Entity Framework models with optimized indexing for rapid retrieval.",
      "Engineered real-time ride tracking, seat reservation, and live in-app messaging utilizing WebSockets.",
      "Integrated Microsoft Single Sign-On (SSO) adhering to MMCL institutional security protocols.",
      "Achieved high Lighthouse performance ratings through aggressive frontend bundle splitting and cached API responses."
    ],
    demoUrl: "https://github.com/WanDayMore",
    codeUrl: "https://github.com/WanDayMore",
   // Example demo link, update with actual project walkthrough
  },
  {
    id: "wasp-mobile",
    title: "WASP Mobile",
    category: "Mobile & AI / IoT",
    subtitle: "Smart City Waste Optimization System via Hybrid PSO - Neural Network",
    shortDesc: "An AI and IoT-driven municipal waste collection management platform featuring route optimization, dynamic fill-level monitoring, and citizen reporting.",
    technologies: ["Kotlin / Java", "Machine Learning", "Particle Swarm Optimization", "OpenStreetMap", "IoT Sensors", "WebSockets"],
    badge: "AI & Smart City",
    featured: true,
    thumbnail: wasp1,
    images: [
      { url: wasp1, title: "Live Bin Navigation & Fill Levels" },
      { url: wasp2, title: "Optimized Collection Route Planning" },
      { url: wasp3, title: "Driver Task Completion & Weight Logging" }
    ],
    architecture: "Edge IoT ultrasonic + GPS modules sending telemetry to a centralized dispatch engine powering Hybrid PSO-NN route optimization algorithms.",
    highlights: [
      "Created multi-tier mobile experience in Kotlin tailored for CENRO dispatchers, field waste collectors, and Cabuyao City residents.",
      "Formulated a Hybrid Particle Swarm Optimization (PSO) and Neural Network pipeline to predict fill rates and compute optimal routing paths.",
      "Interfaced hardware IoT ultrasonic depth sensors with cellular GPS units providing live bin status updates.",
      "Localized native UI workflow for collection crews with offline-first state persistence and validation checks."
    ],
    demoUrl: "https://github.com/WanDayMore",
    codeUrl: "https://github.com/WanDayMore",
    videoLink: "https://youtu.be/Usan-rIF4Gc"
  },
  {
    id: "owl-jungle-survival",
    title: "Owl Jungle Survival",
    category: "Game & Interactive",
    subtitle: "Custom 2D Endless Runner Engine",
    shortDesc: "A responsive 2D endless runner game featuring custom parallax physics, procedural obstacle placement, and reactive sound engineering.",
    technologies: ["Unity", "C#", "Object-Oriented Design", "Procedural Generation"],
    badge: "Interactive Engine",
    featured: false,
    thumbnail: owl1,
    images: [
      { url: owl1, title: "Gameplay in Motion" },
      { url: owl2, title: "Obstacle Obstruction Mechanics" },
      { url: owl3, title: "Dynamic Score & Level Scaling" }
    ],
    architecture: "Component-based architecture utilizing design patterns including Object Pooling for infinite running performance and decoupled event dispatchers.",
    highlights: [
      "Built custom object pooling systems to guarantee smooth 60+ FPS rendering without garbage collector spikes.",
      "Engineered multi-layered parallax scrolling and responsive physics-based jump mechanics.",
      "Designed clean modular state machines handling animation cycles, difficulty curves, and high score tracking."
    ],
    demoUrl: "https://github.com/WanDayMore",
    codeUrl: "https://github.com/WanDayMore",
    videoLink: ""
  }
];

export const EXPERIENCE = [
  {
    id: "globe-telecom",
    role: "Service Quality Assurance Intern",
    company: "Globe Telecom",
    department: "Network Technology Group",
    location: "Valero, Makati City",
    period: "Apr 2026 – Jul 2026",
    image: globeBuilding,
    type: "Internship",
    supervisor: "Jose Mari Garing",
    description: "Automation solutions, operational intelligence dashboards, and internal system modernizations to enhance telecom service quality and monitoring.",
    deliverables: [
      {
        title: "Dashboard Modernization",
        desc: "Replaced rigid legacy Looker Studio dashboards with responsive, dynamic Google AppScript web applications, giving teams custom interactive controls and instant report updates."
      },
      {
        title: "Data Engineering & Pipeline Unification",
        desc: "Built scalable data ingestion and ETL scripts extracting data from disparate outside sources and normalizing them into unified BigQuery analytical tables."
      },
      {
        title: "Enterprise Internal Tool Deployment",
        desc: "Developed internal operational tools adopted by Globe customer service agents nationwide, significantly cutting inquiry resolution time."
      }
    ],
    techStack: ["Google Cloud Platform", "BigQuery SQL", "Python", "JavaScript", "Google Apps Script", "ETL Pipelines"]
  },
  {
    id: "mmcl-sao",
    role: "Student Assistant & Systems Digitizer",
    company: "Mapúa Malayan Colleges Laguna",
    department: "Student Affairs Office",
    location: "Cabuyao, Laguna",
    period: "Apr 2024 – Apr 2026",
    image: malayanLogo,
    type: "Part-Time / Student Assistant",
    description: "Managed office workflows and spearheaded the digital transformation of manual administrative and scholarship processes.",
    deliverables: [
      {
        title: "Scholarship Workflow Digitization",
        desc: "Modernized legacy paper-based scholarship applications into an online automated submission and tracking pipeline, reducing review cycles by over 60%."
      },
      {
        title: "Data Management & Verification",
        desc: "Organized student database records, verified eligibility documentation, and coordinated student applicant status communications."
      }
    ],
    techStack: ["Google Workspace Automation", "Database Management", "Process Optimization", "Technical Documentation"]
  }
];

export const SKILL_CATEGORIES = [
  {
    title: "Frontend Engineering",
    icon: "Layout",
    skills: [
      "React 19",
      "JavaScript (ES6+)",
      "TypeScript",
      "Tailwind CSS",
      "HTML5 / CSS3",
      "Vite",
      "Responsive UI/UX"
    ]
  },
  {
    title: "Backend & Systems",
    icon: "Server",
    skills: [
      ".NET Core (C#)",
      "Python",
      "Node.js & Express",
      "RESTful APIs",
      "WebSockets",
      "Authentication / OAuth"
    ]
  },
  {
    title: "Data & Cloud Infrastructure",
    icon: "Database",
    skills: [
      "PostgreSQL",
      "SQL BigQuery",
      "Google Cloud Platform",
      "ETL & Data Pipelines",
      "Google Apps Script",
      "Docker"
    ]
  },
  {
    title: "Mobile, AI & Specialized",
    icon: "Cpu",
    skills: [
      "Kotlin (Android)",
      "Java",
      "Particle Swarm Optimization",
      "Neural Networks",
      "IoT Sensors (Ultrasonic / GPS)",
      "Unity Engine (C#)",
      "Git & Version Control"
    ]
  }
];

export const EDUCATION = {
  institution: "Mapúa Malayan Colleges Laguna (MMCL)",
  degree: "Bachelor of Science in Computer Science",
  logo: malayanLogo,
  status: "Completed",
  highlights: [
    "Comprehensive 4-year curriculum focusing on core software engineering principles, algorithm optimization, Object-Oriented Design (OOD), and distributed systems.",
    "Led capstone engineering project integrating Particle Swarm Optimization and Neural Networks for smart city infrastructure.",
    "Represented department across technical initiatives and campus developer projects."
  ],
  coursework: [
    "Data Structures & Algorithms",
    "Software Architecture & Design",
    "Database Management Systems",
    "Operating Systems & Concurrency",
    "Web Engineering & Cloud Systems",
    "Machine Learning & Artificial Intelligence",
    "Object-Oriented Programming (OOP)",
    "Distributed Networks"
  ]
};
