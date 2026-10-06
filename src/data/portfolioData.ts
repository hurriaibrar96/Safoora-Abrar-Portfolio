export interface Project {
  id: string;
  title: string;
  type: string;
  category: 'web' | 'ai' | 'mobile';
  description: string;
  longDescription: string;
  repoUrl: string;
  liveUrl?: string;
  technologies: string[];
  highlights: string[];
  featured?: boolean;
  accentColor: string;
  badgeClass: string;
  tagColorClass: string;
  borderHoverClass: string;
  gradientClass: string;
}

export interface Experience {
  id: string;
  role: string;
  company: string;
  location: string;
  period: string;
  description: string;
  achievements: string[];
  accentColor: string;
  documents: {
    title: string;
    url: string;
    badge?: string;
  }[];
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  period: string;
  details?: string;
  accentColor: string;
}

export interface SkillCategory {
  title: string;
  description: string;
  skills: string[];
  accentColor: string;
  iconName: 'ai' | 'frontend' | 'backend' | 'database' | 'architecture';
}

export const PERSONAL_INFO = {
  name: "Safoora Abrar",
  title: "Software Developer",
  specialization: "Python & AI Developer · Digital Marketing",
  email: "abrarsafoora161@gmail.com",
  phone: "+92 323 8451912",
  phoneDisplay: "+92 323 8451912",
  location: "Mughalpura, Lahore, Pakistan",
  github: "https://github.com/hurriaibrar96",
  linkedin: "https://www.linkedin.com/in/safoora-abrar-985369396",
  profileImage: "/profile.png",
  availability: "Open to Full-Time & Collaborative Opportunities",
  summary: `Software Developer and Information Engineering & Technology student specializing in Python & AI Development, Full-Stack Web Architecture, and Digital Marketing. Proven track record delivering production-ready applications spanning interactive web experiences, e-commerce applications, and campus-wide navigation tools. With verified remote AI engineering experience at NexaSecure Tech and full-stack software development at Khizex, I combine disciplined engineering practices with clean architectural design to build performant, user-centric software.`,
};

export const CAREER_INTERESTS = [
  {
    title: "Python & AI Development",
    description: "Architecting machine learning pipelines, LLM-powered applications, prompt engineering workflows, and automated backend data processing using Python, FastAPI, and modern AI frameworks.",
    caption: "Machine Learning, LLM Workflows, Prompt Engineering, Python & FastAPI",
    accentColor: "violet",
    tagline: "Core Focus · AI Engineering",
    gradient: "from-violet-500/10 via-purple-500/5 to-transparent",
    borderHover: "hover:border-violet-400 hover:shadow-violet-100",
    badge: "bg-violet-950 text-cyan-300 border-blue-600/60"
  },
  {
    title: "Full-Stack Software Engineering",
    description: "Building responsive, resilient web architectures using React, TypeScript, Node.js, and modern REST APIs with rigorous standards for accessibility, clean modular code, and high performance.",
    caption: "React, TypeScript, Node.js, REST APIs, Modular Systems",
    accentColor: "blue",
    tagline: "Core Focus · Web Systems",
    gradient: "from-blue-500/10 via-sky-500/5 to-transparent",
    borderHover: "hover:border-blue-400 hover:shadow-blue-100",
    badge: "bg-blue-950 text-cyan-300 border-blue-600/60"
  },
  {
    title: "Digital Marketing",
    description: "Strong career interest in modern digital marketing, web traffic growth, content marketing, and generative engine optimization (GEO) to optimize reach and audience engagement.",
    caption: "Web Traffic, Content Marketing, GEO (Generative Engine Optimization), Analytics",
    accentColor: "cyan",
    tagline: "Career Interest · Digital Marketing",
    gradient: "from-cyan-500/10 via-sky-500/5 to-transparent",
    borderHover: "hover:border-cyan-400 hover:shadow-cyan-100",
    badge: "bg-indigo-950 text-cyan-300 border-indigo-600/60"
  }
];

export const PROJECTS: Project[] = [
  {
    id: "3d-model-showcase",
    title: "3D Model Showcase",
    type: "Interactive Web Experience",
    category: "ai",
    description: "An interactive web experience engineered for real-time 3D model visualization and user-driven asset inspection.",
    longDescription: "Engineered to deliver high-performance 3D rendering within standard web browsers. Features orbital camera manipulation, responsive lighting controls, and optimized mesh delivery designed for fluid spatial interactions.",
    repoUrl: "https://github.com/hurriaibrar96/3D-Model-Showcase",
    liveUrl: "https://formae-frontend.vercel.app",
    technologies: ["Three.js", "WebGL", "React", "Tailwind CSS", "Vite"],
    highlights: [
      "Smooth 60 FPS real-time rendering in browser",
      "Intuitive orbit, pan, and zoom camera manipulation",
      "Dynamic material preview and mesh loader",
      "Fully responsive viewport across desktop and mobile"
    ],
    featured: true,
    accentColor: "violet",
    badgeClass: "bg-violet-950 text-cyan-300 border border-violet-500/40",
    tagColorClass: "hover:text-cyan-300",
    borderHoverClass: "hover:border-cyan-400",
    gradientClass: "from-violet-500/20 via-purple-500/10 to-transparent"
  },
  {
    id: "freshcart",
    title: "FreshCart",
    type: "Full-Stack E-Commerce",
    category: "web",
    description: "A complete full-stack e-commerce web application delivering intuitive product discovery and checkout flows.",
    longDescription: "A modern commercial storefront architected with a decoupled frontend and backend. Implements instant catalog search, responsive basket state persistence, category filtering, and structured checkout form validation.",
    repoUrl: "https://github.com/hurriaibrar96/freshcart-fullstack",
    liveUrl: "https://freshcart-store-eight.vercel.app",
    technologies: ["React", "Node.js", "Express", "RESTful API", "Tailwind CSS"],
    highlights: [
      "Client-side state management for cart persistence",
      "Dynamic product querying and instant filtering",
      "Clean, distraction-free order checkout interface",
      "Mobile-optimized shopping cart interaction"
    ],
    featured: true,
    accentColor: "emerald",
    badgeClass: "bg-emerald-950 text-emerald-300 border border-emerald-500/40",
    tagColorClass: "hover:text-emerald-300",
    borderHoverClass: "hover:border-emerald-400",
    gradientClass: "from-emerald-500/20 via-teal-500/10 to-transparent"
  },
  {
    id: "superior-xr",
    title: "SuperiorXR",
    type: "Mobile & XR Development",
    category: "mobile",
    description: "An extended-reality (XR) mobile application created for immersive spatial visualization and practical usability.",
    longDescription: "Developed as a mobile application to explore practical XR implementation on handheld devices. Emphasizes intuitive spatial anchoring, touch-to-manipulate interactions, and lightweight APK packaging for fast loading.",
    repoUrl: "https://github.com/hurriaibrar96/SuperiorXR-apk",
    technologies: ["Mobile Dev", "Android APK", "XR SDK", "Spatial UI", "C# / Flutter"],
    highlights: [
      "Lightweight standalone Android APK build",
      "Spatial scene tracking and interactive model anchors",
      "Optimized battery and thermal footprint on handheld devices",
      "Comprehensive repository documentation for reproduction"
    ],
    featured: true,
    accentColor: "cyan",
    badgeClass: "bg-cyan-950 text-cyan-300 border border-cyan-500/40",
    tagColorClass: "hover:text-cyan-300",
    borderHoverClass: "hover:border-cyan-400",
    gradientClass: "from-cyan-500/20 via-sky-500/10 to-transparent"
  },
  {
    id: "campus-navigation",
    title: "Campus Navigation",
    type: "Web Application & Geospatial",
    category: "web",
    description: "A campus navigation application guiding students and visitors across academic facilities with clarity.",
    longDescription: "Built to resolve wayfinding challenges in expansive educational environments. Provides interactive building directories, route planning between departments, and accessible landmark navigation.",
    repoUrl: "https://github.com/hurriaibrar96/campus-nav",
    liveUrl: "https://superior-campus.vercel.app",
    technologies: ["React", "JavaScript", "Leaflet / Maps", "CSS Modules", "Vercel"],
    highlights: [
      "Interactive building index and searchable department database",
      "Step-by-step route visualization between campus sectors",
      "Fast zero-lag map rendering on low-bandwidth connections",
      "Clear mobile navigation layout for students on the move"
    ],
    featured: false,
    accentColor: "amber",
    badgeClass: "bg-amber-950 text-amber-300 border border-amber-500/40",
    tagColorClass: "hover:text-amber-300",
    borderHoverClass: "hover:border-amber-400",
    gradientClass: "from-amber-500/20 via-orange-500/10 to-transparent"
  },
  {
    id: "orbit-habit-tracker",
    title: "Orbit Habit Tracker",
    type: "Productivity Web Application",
    category: "web",
    description: "A habit-tracking application designed to help individuals build positive routines and monitor daily progress.",
    longDescription: "Focused on behavioral consistency through micro-feedback. Enables users to define custom habits, record streaks, view weekly completion metrics, and retain data securely via browser storage.",
    repoUrl: "https://github.com/hurriaibrar96/Orbit-Habbit-training-webapp",
    liveUrl: "https://orbit-habit-tracker-six.vercel.app",
    technologies: ["React", "State Management", "LocalStorage", "Tailwind CSS"],
    highlights: [
      "Streak calculation engine with milestone rewards",
      "Visual weekly and monthly completion matrices",
      "Client-side persistence with zero backend latency",
      "Accessible touch-first interface for quick daily check-ins"
    ],
    featured: false,
    accentColor: "rose",
    badgeClass: "bg-rose-950 text-rose-300 border border-rose-500/40",
    tagColorClass: "hover:text-rose-300",
    borderHoverClass: "hover:border-rose-400",
    gradientClass: "from-rose-500/20 via-pink-500/10 to-transparent"
  }
];

export const EXPERIENCES: Experience[] = [
  {
    id: "nexasecure",
    role: "Python AI Development Intern",
    company: "NexaSecure Tech",
    location: "Remote",
    period: "June 16, 2026 – July 16, 2026",
    accentColor: "violet",
    description: "Contributed to internal AI asset development, algorithmic workflows, and digital tools while strictly adhering to enterprise cybersecurity protocols.",
    achievements: [
      "Developed Python scripts for automated data handling and AI tool integration",
      "Followed strict cybersecurity compliance standards across digital asset repositories",
      "Collaborated remotely with engineering leads to validate model accuracy and performance"
    ],
    documents: [
      {
        title: "Experience Certificate",
        url: "/documents/internship/nexasecure-experience-certificate.pdf",
        badge: "Verified"
      },
      {
        title: "Internship Accomplishment Certificate",
        url: "/documents/internship/nexasecure-internship-certificate.pdf",
        badge: "Verified"
      }
    ]
  },
  {
    id: "khizex",
    role: "Full Stack Intern",
    company: "Khizex",
    location: "Lahore, Pakistan",
    period: "Internship",
    accentColor: "blue",
    description: "Supported full-stack application lifecycle including frontend interface implementation, API endpoint integration, and quality assurance.",
    achievements: [
      "Constructed modular UI components adhering to modern frontend best practices",
      "Integrated backend endpoints with client-side state managers and error boundaries",
      "Received formal letter of recommendation and certificate of completion for outstanding work"
    ],
    documents: [
      {
        title: "Experience Certificate",
        url: "/documents/internship/experience-certificate-safoora.pdf",
        badge: "Verified"
      },
      {
        title: "Letter of Recommendation",
        url: "/documents/internship/letter-of-recommendation-safoora.pdf",
        badge: "Verified"
      },
      {
        title: "Certificate of Completion",
        url: "/documents/internship/certificate-of-completion-safoora.pdf",
        badge: "Verified"
      }
    ]
  },
  {
    id: "alkhidmat",
    role: "Community Volunteer",
    company: "Alkhidmat Foundation Pakistan",
    location: "Lahore, Pakistan",
    period: "18 Volunteer Hours",
    accentColor: "emerald",
    description: "Engaged in humanitarian community initiatives covering project coordination, community event planning, fundraising drives, and capacity-building training.",
    achievements: [
      "Dedicated 18 verified volunteer hours supporting social relief and community development",
      "Collaborated in organized event logistics, public outreach, and fundraising activities",
      "Acquired practical experience in grassroots project execution and civic leadership"
    ],
    documents: [
      {
        title: "Volunteer Experience Letter",
        url: "/documents/internship/safoora-internship-letter.pdf",
        badge: "Verified"
      }
    ]
  }
];

export const EDUCATION_LIST: Education[] = [
  {
    id: "bs-iet",
    degree: "Bachelor of Information Engineering & Technology",
    institution: "Superior University, Lahore",
    period: "2023 – 2027",
    details: "Core focus: Software Engineering, Data Structures, Algorithms, AI Systems, Web & Database Engineering.",
    accentColor: "violet"
  },
  {
    id: "fsc-pre-eng",
    degree: "Intermediate (FSc Pre-Engineering)",
    institution: "Lahore College for Women University",
    period: "2020 – 2022",
    details: "Mathematics, Physics, Chemistry, and analytical problem-solving foundation.",
    accentColor: "blue"
  },
  {
    id: "matric",
    degree: "Matriculation (Science)",
    institution: "Society Public School",
    period: "2008 – 2020",
    details: "Secondary school education with high academic achievement.",
    accentColor: "emerald"
  }
];

export const SKILL_CATEGORIES: SkillCategory[] = [
  {
    title: "AI & Python Engineering",
    description: "Core algorithms, machine learning workflows, prompt engineering, and modern generative AI tools.",
    skills: ["Python", "Machine Learning", "Deep Learning", "Prompt Engineering", "FastAPI", "Data Analysis"],
    accentColor: "violet",
    iconName: "ai"
  },
  {
    title: "Frontend Engineering",
    description: "Accessible, high-performance interfaces built for modern responsive web browsers.",
    skills: ["React", "JavaScript (ES6+)", "TypeScript", "HTML5 & CSS3", "Tailwind CSS", "Bootstrap", "Flutter"],
    accentColor: "blue",
    iconName: "frontend"
  },
  {
    title: "Backend & Systems",
    description: "Scalable server architectures, RESTful API design, and web backend runtimes.",
    skills: ["Node.js", "Express", "Django", "FastAPI", "REST APIs", "JSON Architecture"],
    accentColor: "amber",
    iconName: "backend"
  },
  {
    title: "Databases & DevOps Tools",
    description: "Data modeling, distributed version control, and continuous deployment platforms.",
    skills: ["MySQL", "PostgreSQL", "Git & GitHub", "Vercel", "Postman", "Linux Basics"],
    accentColor: "teal",
    iconName: "database"
  },
  {
    title: "Software Engineering & Architecture",
    description: "System design patterns, object-oriented programming, clean code, and API architecture.",
    skills: ["Object-Oriented Design", "Data Structures", "Algorithms", "RESTful Architecture", "Software Testing", "Agile & Git"],
    accentColor: "emerald",
    iconName: "architecture"
  }
];
