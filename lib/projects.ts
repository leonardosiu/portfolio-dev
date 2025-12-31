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
      "Rust",
      "Tokio",
      "Kafka",
      "ClickHouse",
      "Kubernetes",
      "gRPC",
    ],
    imageSrc: "/images/selected-work/retinova-[16-9].png",
    imageAlt: "RetiNova",
    longDescription:
      "A distributed ingestion engine for high-frequency financial data, processing over 2 million events per second with sub-millisecond latency.",
    role: "Systems Architect",
    timeline: "Q3 2023 — Q1 2024",
    domain: "FinTech / Infra",
    repoUrl: "#",
    leoTwinUrl: "https://twin.leo.dev?q=Tell%20me%20about%20the%20RetiNova%20project",
    sections: {
      whatItIs:
        "RetiNova was conceived to solve a data freshness problem. Existing ETL pipelines had a lag of ~5 minutes, which was unacceptable for the client's algorithmic trading models. RetiNova replaces the batch process with a stream-first architecture, ingesting WebSocket feeds from multiple exchanges, normalizing the data, and persisting it to a time-series database while simultaneously broadcasting updates to connected clients via gRPC.",
      myRole:
        "As the lead architect, I designed the core event loop in Rust and implemented the custom serialization protocol that reduced payload size by 40% compared to JSON. I also managed the Kubernetes deployment strategy, ensuring zero-downtime updates for the stateful consumers and coordinating with the frontend team for real-time dashboard integration.",
      constraints: [
        {
          number: "01",
          text: "Garbage collection pauses had to be kept strictly under 10ms to prevent order book desynchronization across distributed nodes.",
        },
        {
          number: "02",
          text: "The system needed to handle sudden burst traffic of up to 5x baseline during market open/close without any auto-scaling lag.",
        },
      ],
      learnings: [
        "Zero-copy deserialization in Rust can significantly reduce CPU pressure but requires careful lifetime management.",
        "Using UDP for internal cluster gossip is faster but requires robust application-level acknowledgement logic.",
        "Observability is not optional; structured logs saved us hours of debugging distributed race conditions.",
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

