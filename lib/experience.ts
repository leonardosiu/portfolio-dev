export type ExperienceLink = {
  label: string;
  href: string;
  icon?: "arrow_outward" | "code";
};

export type Experience = {
  title: string;
  company: string;
  period: string;
  location?: string;
  category?: string;
  note?: string;
  description: string;
  highlights: string[];
  technologies: string[];
  links?: ExperienceLink[];
};

export const professionalExperiences: Experience[] = [
  {
    title: "Backend and AI Systems Engineer",
    company: "Human Proximity",
    period: "Aug 2025 — Present",
    location: "Irvine, CA",
    category: "System Architect",
    note: "This is professional R&D with NDA constraints, so we’ll keep it high-level and impact-focused.",
    description:
      "Working on backend systems and AI-powered services for a mobile-first proximity and matchmaking platform, focused on scalable inference, real-time interactions, and production-ready AI infrastructure.",
    highlights: [
      "Architected backend services that power AI-driven matching, prioritizing low-latency inference while keeping the system flexible for rapid product iteration.",
      "Designed AI service layers around embedding-based retrieval, focusing on clean interfaces between model inference, vector search, and application logic.",
      "Built scalable API infrastructure for mobile clients, handling authentication, async workloads, and real-time data orchestration.",
      "Collaborated closely with product and frontend teams to translate ambiguous product ideas into stable backend and AI service abstractions."
    ],
    technologies: ["Applied AI", "Systems Engineering", "Early-Stage R&D"],
  },
  {
    title: "Meta AI Studio Fellow",
    company: "Break Through Tech × Meta",
    period: "Aug 2025 - Dec 2025",
    location: "Remote",
    category: "NLP + ML",
    description:
      "AI Studio Fellow focused on applied NLP systems, model evaluation, and deployment-oriented ML workflows.",
    highlights: [
      'Built an end-to-end NLP system to analyze and surface bias in large-scale online discourse, spanning data preprocessing, model fine-tuning, evaluation, and user-facing interaction.',
      "Led the ML pipeline design for preprocessing and labeling ~28k Reddit comments, emphasizing data quality, bias representation, and reproducibility across experiments.",
      "Fine-tuned transformer-based language models (BERT) for bias detection, iterating on loss functions, class imbalance strategies, and evaluation metrics to understand model behavior beyond accuracy.",
      "Developed a full-stack interface that allows users to interact with the deployed model, translating abstract ML outputs into interpretable, real-world feedback."
    ],
    technologies: ["Applied AI", "NLP", "ML Systems", "Model Evaluation", "Full-Stack Engineering"],
    links: [
      {
        label: "NLP Bias Detection Repo",
        href: "https://github.com/Rytham1/Meta-NLP-Bias",
        icon: "arrow_outward",
      },
      {
        label: "Live Demo",
        href: "https://nlp-bias-detection.vercel.app/",
        icon: "arrow_outward",
      }
    ],
  },
  {
    title: "AI/ML Fellow",
    company: "Break Through Tech × Cornell Tech",
    period: "May 2025 - Present",
    location: "Remote",
    category: "AI/ML",
    description:
      "AI/ML Fellow in a selective, industry-aligned program focused on applied machine learning, responsible AI, and professional engineering practice.",
    highlights: [
      "Selected into a competitive national fellowship focused on preparing engineers to apply machine learning in real-world, industry contexts.",
      "Developed a strong foundation in end-to-end ML workflows, including data preprocessing, model training, evaluation, and deployment considerations.",
      "Collaborated with peers across universities on applied ML projects, emphasizing reproducibility, ethical considerations, and clear technical communication.",
      "Participated in technical workshops, industry talks, and mentorship sessions that emphasized translating ML research into production-ready systems."
    ],
    technologies: ["Applied ML", "NLP", "Computer Vision", "Data-Centric ML", "Industry Fellowship"],
  },
  {
    title: "Backend Engineer Intern",
    company: "Rooh | Berkeley SkyDeck Pad-13 Incubator",
    period: "Aug 2025 — Dec 2025",
    location: "Berkeley, CA",
    category: "Backend and AI Systems Engineering",
    description:
      "Worked on core backend and AI infrastructure for an early-stage startup building tools to help users gain confidence in their own voice through guided, conversational practice.",
    highlights: [
      "Co-developed RoohPlay, a core MVP feature enabling users to practice custom scenarios (interviews, standups, meetings) through a real-time conversational AI experience.",
      "Designed and implemented a custom end-to-end audio pipeline (VAD → STT → LLM → TTS), built from scratch to support low-latency, multi-turn voice interactions.",
      "Engineered backend APIs to orchestrate speech processing, LLM inference, and session state, prioritizing responsiveness and reliability under real-time constraints.",
      "Built AI-driven evaluation workflows that analyze completed sessions across multiple dimensions, translating raw interaction data into actionable feedback for users.",
      "Collaborated in a small, fast-moving intern cohort (2 engineers), working closely with founders to scope, build, and ship production features end-to-end."
    ],
    technologies: ["Next.js", "React", "TypeScript", "Supabase", "GCP", "Speech-to-Text", "Text-to-Speech", "LLM APIs"],
  },
  {
    title: "Full-Stack Software Engineer Intern",
    company: "Vulcan Engineering Solutions",
    period: "Feb 2025 - May 2025",
    location: "Laguna Niguel, CA",
    category: "Full-Stack Development",
    description: "Engineering agentic, AI-powered workspaces. Think less busywork, more brainpower, and a lot of learning on the fly.",
    highlights: [
      "Migrated backend infrastructure from a monolithic Next.js API to a dedicated NestJS service, improving reliability and production stability.",
      "Implemented backend APIs and state management with TanStack Query and Redux to support real-time job workflows and bid lifecycle transitions.",
      "Diagnosed and resolved production bugs and environment issues, contributing to smoother deployments and reduced runtime errors.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "NestJS", "PostgreSQL", "Redis", "Azure App Services"]
  },
  {
    title: "Frontend Developer (Contract)",
    company: "Vulcan Engineering Solutions",
    period: "Oct 2024 - Feb 2025",
    location: "Laguna Niguel, CA",
    category: "Full-Stack Development",
    description: "Contributed to building and stabilizing an AI-powered engineering marketplace, progressing from frontend MVP development to full-stack infrastructure ownership.",
    highlights: [
      "Built the initial MVP frontend from scratch, including a job posting marketplace, engineer workspaces, and a bid-based matching workflow between clients and engineers.",
      "Designed and implemented job workspaces with file viewing, job context, location metadata, and threaded collaboration features.",
      "Delivered a performant, production-ready UI with strong UX fundamentals, earning 95+ Lighthouse scores across core pages.",
    ],
    technologies: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Supabase", "Stripe", "SendGrid"]
  },
  {
    title: "Student Software Developer (Part-Time)",
    company: "Office of Information Technology, UC Irvine",
    period: "Apr 2024 - Present",
    location: "Irvine, CA",
    category: "Full-Stack Development",
    description: "Building and shipping student and advisor-facing systems used at scale across the university.",
    highlights: [
      "Developed and maintained core features for UCI Spark and ScoreShare, supporting 10k+ active users across students, advisors, and administrators.",
      "Designed backend workflows to reduce unnecessary data load, introducing scheduled batch processing and background services in .NET/C# to replace costly real-time queries.",
      "Implemented automated data ingestion pipelines from sources like Canvas Data API and BigQuery, replacing manual data entry and improving reliability of downstream features.",
      "Worked within a cross-functional Agile team to ship and iterate on features using .NET, SQL Server, Blazor, React, and AWS, balancing delivery speed with system stability.",
      "Helped improve deployment confidence by maintaining CI/CD pipelines and supporting production debugging and QA workflows."
    ],
    technologies: [".NET", "C#", "SQL Server", "Blazor", "React", "AWS", "CI/CD", "Agile"]
  }
];

export const leadershipExperiences: Experience[] = [
  {
    title: "President",
    company: "Computer Science Society",
    period: "2019 — 2021",
    category: "Community Lead",
    description:
      "Fostering a collaborative learning environment for 500+ computer science undergraduates.",
    highlights: [
      'Organized "Hack the Valley", a 36-hour hackathon with 300+ participants, securing $20k in corporate sponsorship.',
      "Launched a peer mentorship program connecting 1st-year students with senior industry interns.",
    ],
    technologies: [],
  },
  {
    title: "Embedded Systems Lead",
    company: "University Robotics Team",
    period: "2018 — 2020",
    category: "Embedded Roots",
    description:
      "Designing autonomous navigation firmware for disaster relief scenarios.",
    highlights: [
      "Developed real-time sensor fusion algorithms in C++ for autonomous path planning on ARM Cortex-M microcontrollers.",
      "Led a team of 5 mechanical and electrical engineering students to place 2nd in the National Design Competition.",
    ],
    technologies: ["C++", "FreeRTOS"],
  },
];

