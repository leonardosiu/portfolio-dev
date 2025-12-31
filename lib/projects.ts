export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  imageSrc: string;
  imageAlt: string;
  // Detail page fields
  longDescription?: string;
  role?: string;
  timeline?: string;
  domain?: string;
  repoUrl?: string;
  demoUrl?: string;
  leoTwinUrl?: string;
  sections?: {
    whatItIs?: string;
    myRole?: string;
    constraints?: Array<{
      number: string;
      text: string;
    }>;
    learnings?: string[];
  };
  previousProject?: string;
  nextProject?: string;
};

export const projects: Project[] = [
  {
    id: "retinova",
    title: "RetiNova",
    description:
      "A hackathon-winning healthcare application that detects eye conditions using computer vision, integrating model inference into a real, user-facing product. I focused on system integration including ML inference to frontend delivery, challenging under tight time constraints.",
    category: "Applied AI",
    tech: [
      "React",
      "Next.js",
      "Tailwind CSS",
      "Python",
      "PyTorch",
      "OpenCV",
      "FastAPI",
      "Node.js",
      "Express.js",
      "Docker"
    ],
    imageSrc: "/images/selected-work/retinova-[16-9].png",
    imageAlt: "RetiNova",
    longDescription:
      "RetiNova is a healthcare-focused computer vision application that detects eye conditions from retinal images, designed and shipped end-to-end within a 36-hour hackathon.",
    role: "Backend Developer / Lead",
    timeline: "IrvineHacks 2025 | Jan 2025",
    domain: "Healthcare / Computer Vision",
    repoUrl: "https://github.com/RetiNova/retinova",
    demoUrl: "https://devpost.com/software/retinova",
    // leoTwinUrl: "https://twin.leo.dev?q=Tell%20me%20about%20the%20RetiNova%20project",
    sections: {
      whatItIs:
        "RetiNova is an AI-powered healthcare application that enables users to upload retinal images and receive real-time predictions for potential eye conditions like cataracts or uveitis. The system ties a trained computer vision model (OpenCV/PyTorch) to a production‑ready web frontend and a lightweight API layer, focusing on turning raw ML outputs into a usable screening workflow under tight hackathon constraints. The goal was practical accessibility: fast feedback, simple UX, and a bridge from detection to care.",
      myRole:
        "I led backend and ML integration. I implemented the inference API that connects PyTorch models to the UI, built the geolocation and clinic search feature (Nominatim/Overpass), and containerized the frontend, backend, and model services for smoother deployment. I also coordinated with teammates on UI polish and motion to keep the interface clear and responsive while we iterated quickly.",
      constraints: [
        {
          number: "01",
          text: "Training data was limited and fragmented so we had to source, clean, and balance datasets quickly to avoid biased predictions.",
        },
        {
          number: "02",
          text: "Real‑time feedback meant minimizing inference latency and API overhead so results felt instantaneous.",
        },
      ],
      learnings: [
        "Practical ML in products lives at the interface: clean APIs, fast inference, and unambiguous UI matter as much as model metrics.",
        "Containerizing the whole pipeline early (model + API + UI) reduces integration risk and accelerates iteration.",
        "Planning and tight task delegation are critical in hackathons. Having clear boundaries and priorities keep shipping speed high.",
      ],
    },
    previousProject: "vortex-engine",
    nextProject: "triage-protocol",
  },
  {
    id: "human-proximity",
    title: "BeesEye @ Human Proximity",
    description:
      "A real-time networking platform for in-person events, built around proximity-aware interactions. I designed and implemented the backend APIs and AI microservices powering matchmaking, messaging, and event logic.",
    category: "Backend",
    tech: ["Backend", "APIs", "AI Systems", "Microservices", "Mobile App"],
    imageSrc: "/images/selected-work/human-proximity-[16-9].png",
    imageAlt: "Human Proximity",
  },
  {
    id: "nlp-bias-detection",
    title: "NLP Bias Detection",
    description:
      "An NLP system for detecting bias in large-scale social datasets, built by preprocessing tens of thousands of samples and fine-tuning transformer models. I worked across data pipelines, model training, and deployment to make the system usable end-to-end.",
    category: "Systems",
    tech: [
      "NLP",
      "Applied AI",
      "Data Pipelines",
      "Model Deployment",
      "ML Systems",
    ],
    imageSrc: "/images/selected-work/meta1b-[16-9].png",
    imageAlt: "Meta 1B",
  },
  {
    id: "grad-cam-tumor",
    title: "Grad-CAM Tumor Classification",
    description:
      "A computer vision project exploring tumor classification in medical imaging, with a focus on interpretability using Grad-CAM visualizations. Emphasized model evaluation, explainability, and responsible ML decision-making.",
    category: "Systems",
    tech: [
      "Computer Vision",
      "Machine Learning",
      "Healthcare",
      "Interpretability",
    ],
    imageSrc: "/images/projects/grad-cam.png",
    imageAlt: "Grad-CAM Tumor Classification",
  },
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

