export type Project = {
  title: string;
  slug: string;
  shortDescription: string;
  longDescription: string;
  technologies: string[];
  coverImage: string;
  images: string[];
};

export type Experience = {
  role: string;
  company: string;
  duration: string;
  description: string[];
};

export const projects: Project[] = [
  {
    title: "E-commerce Platform",
    slug: "ecommerce-platform",
    shortDescription: "A fully-featured online store with a modern design and seamless user experience.",
    longDescription:
      "This project is a comprehensive e-commerce solution built from the ground up. It features a product catalog, user authentication, a shopping cart, and a secure checkout process. The backend is powered by Node.js and the frontend is built with React and Next.js for optimal performance and SEO. The design is fully responsive, ensuring a seamless experience across all devices.",
    technologies: ["Next.js", "React", "TypeScript", "Node.js", "Stripe", "PostgreSQL"],
    coverImage: "https://placehold.co/600x400.png",
    images: [
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
    ],
  },
  {
    title: "Project Management Tool",
    slug: "project-management-tool",
    shortDescription: "A collaborative tool to manage tasks and projects with real-time updates.",
    longDescription:
      "A web application designed to help teams organize their work. It includes features like task creation, assignment, status tracking, and project timelines. Real-time updates are handled using WebSockets, and the interface is designed to be intuitive and user-friendly. The application also supports file attachments and commenting on tasks.",
    technologies: ["React", "Firebase", "Redux", "Framer Motion", "Tailwind CSS"],
    coverImage: "https://placehold.co/600x400.png",
    images: [
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
    ],
  },
  {
    title: "This Portfolio Website",
    slug: "portfolio-website",
    shortDescription: "A personal portfolio to showcase my work and skills, built with the latest tech.",
    longDescription:
      "This very website is a project in itself. Built with Next.js and styled with Tailwind CSS, it's designed to be a fast, modern, and visually appealing representation of my professional identity. It features a vibrant dark theme and is fully responsive. The code is open-source and available on my GitHub.",
    technologies: ["Next.js", "TypeScript", "Tailwind CSS", "Shadcn/UI", "Framer Motion"],
    coverImage: "https://placehold.co/600x400.png",
    images: [
      "https://placehold.co/1200x800.png",
    ],
  },
  {
    title: "Data Visualization Dashboard",
    slug: "data-visualization-dashboard",
    shortDescription: "An interactive dashboard for visualizing complex data sets with dynamic charts.",
    longDescription:
      "A powerful tool for data analysis, this dashboard allows users to upload datasets and generate various types of charts and graphs. It's built with D3.js for custom visualizations and React for a dynamic user interface. The backend processes large datasets efficiently, and users can save and share their dashboards.",
    technologies: ["React", "D3.js", "Python", "Flask", "Pandas"],
    coverImage: "https://placehold.co/600x400.png",
    images: [
      "https://placehold.co/1200x800.png",
      "https://placehold.co/1200x800.png",
    ],
  },
];

export const skills = {
  "Frontend": [
    "HTML5 & CSS3",
    "JavaScript (ES6+)",
    "TypeScript",
    "React & Next.js",
    "Tailwind CSS",
    "Framer Motion",
  ],
  "Backend": [
    "Node.js & Express",
    "Python & Django",
    "SQL (PostgreSQL)",
    "NoSQL (Firebase)",
    "REST & GraphQL APIs",
    "Authentication (OAuth, JWT)",
  ],
  "Tools & Platforms": [
    "Git & GitHub",
    "Docker",
    "Vercel & Netlify",
    "Google Cloud Platform",
    "Figma",
    "Agile Methodologies",
  ],
};

export const experience: Experience[] = [
  {
    role: "Senior Frontend Developer",
    company: "Innovate Inc.",
    duration: "2020 - Present",
    description: [
      "Led the development of a new client-facing dashboard, improving user engagement by 25%.",
      "Mentored junior developers and conducted code reviews to maintain high code quality.",
      "Collaborated with UI/UX designers to translate mockups into responsive, high-performance web pages.",
      "Optimized application performance, reducing load times by 40% through code splitting and lazy loading.",
    ],
  },
  {
    role: "Full-Stack Developer",
    company: "Tech Solutions LLC",
    duration: "2018 - 2020",
    description: [
      "Developed and maintained full-stack web applications for various clients.",
      "Designed and implemented RESTful APIs to support mobile and web clients.",
      "Managed database schemas and migrations for PostgreSQL databases.",
      "Worked in an agile team, participating in sprint planning, stand-ups, and retrospectives.",
    ],
  },
  {
    role: "Junior Web Developer",
    company: "Web Crafters",
    duration: "2016 - 2018",
    description: [
      "Assisted in building and maintaining WordPress websites for small businesses.",
      "Converted PSD designs into pixel-perfect, responsive HTML/CSS templates.",
      "Learned foundational skills in JavaScript, React, and Node.js.",
    ],
  },
];
