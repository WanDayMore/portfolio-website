export const PROJECTS_DATA = [
  {
    title: "WizPool Express",
    description: "A car-pooling mobile application designed for the use of MMCL students to go to and from campus.",
    bullets: [
      "Integrated with existing MMCL IT infrastructure",
      "React Frontend and DOTNET Backend/Postgres SQL",

    ],
    technologies: ["DOTNET Core", "Postgres SQL", "Websockets", "Microsoft OAuth", "Backend Development"],
    metricLabel: "PERFORMANCE",
    metricValue: "100% Lighthouse Score",
    hasDetails: true,
    details: `Designed the backend system and integrated it with the existing MMCL IT architecture.' 

    Key technical highlights include:
      • Designed the backend database and every entity relationship
      • Created CRUD API endpoints and optimized database queries for retrieval
      • Implemented Microsoft Single Sign On
      • Implemented WebSockets for live updates and live chat features`,
    imgLinks: [
      "src/assets/images/Media (4).jfif",
      "src/assets/images/image.png",
      "src/assets/images/Media (5).jfif"
    ],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/example"
  },
  {
    title: "WASP Mobile",
    description: "An Optimized Waste Collection System via Hybrid Particle Swarm Optimization - Neural Network for Smart City Eco Initiatives",
    bullets: [
      "Machine Learning and IOT integrated system",
      "Divided into three usable parts: CENRO, Waste Collectors, and Residents"
    ],
    technologies: ["Kotlin/Java", "OpenStreetMap", "Machine Learning", "Swarm Algorithm", "Neural Network", "Mobile Development"],
    metricLabel: "OPTIMIZATION",
    metricValue: "40% Query Speedup",
    hasDetails: true,
    details: `Smart bins provide waste collectors and Cabuyao City Residents with live data of nearby waste bins as well as ongoing waste collection.

    Key technical highlights include:
    • Designed the frontend design in Kotlin for both waste collectors and Cabuyao City Residents
    • Enabled live server UI Updates through WebSockets
    • Connected trash bins with IOT ultrasound sensor with GPS that provides hourly updates to the database`,
    imgLinks: [
      "src/assets/images/Media (7).jfif",
      "src/assets/images/Media (14).jfif",
      "src/assets/images/Media (15).jfif"
    ],
    demoUrl: "https://example.com/demo",
    codeUrl: "https://github.com/example/repo"
  }, 
  {
    title: "Owl Jungle Survival",
    description: "A simple endless runner game using a jungle theme design",
    bullets: [
      "Implemented custom HTML5 Canvas retro dragons and mascots.",
      "Engineered global audio provider with circular-dependency prevention."
    ],
    technologies: ["Unity", "Game Development", "Software Development"],
    metricLabel: "PERFORMANCE",
    metricValue: "100% Lighthouse Score",
    hasDetails: true,

    imgLinks: [
      "src/assets/images/game_screenshot.png",
      "src/assets/images/game_screenshot2.png",
      "src/assets/images/game_screenshot3.png"
    ],
    demoUrl: "https://example.com",
    codeUrl: "https://github.com/example"
  }
];
