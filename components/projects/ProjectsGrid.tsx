import { ProjectCard } from "./ProjectCard";

const projects = [
  {
    title: "RetiNova",
    description:
      "A hackathon-winning healthcare application that detects eye conditions using computer vision, integrating model inference into a real, user-facing product. I focused on system integration including ML inference to frontend delivery, challenging under tight time constraints.",
    category: "Applied AI",
    tech: ["Applied ML", "Computer Vision", "Healthcare", "Full-Stack", "Hackathon"],
    imageSrc: "/images/selected-work/retinova-[16-9].png",
    imageAlt: "RetiNova",
  },
  {
    title: "BeesEye @ Human Proximity",
    description:
      "A real-time networking platform for in-person events, built around proximity-aware interactions. I designed and implemented the backend APIs and AI microservices powering matchmaking, messaging, and event logic.",
    category: "Backend",
    tech: ["Backend", "APIs", "AI Systems", "Microservices", "Mobile App"],
    imageSrc: "/images/selected-work/human-proximity-[16-9].png",
    imageAlt: "Human Proximity",
  },
  {
    title: "NLP Bias Detection",
    description:
      "An NLP system for detecting bias in large-scale social datasets, built by preprocessing tens of thousands of samples and fine-tuning transformer models. I worked across data pipelines, model training, and deployment to make the system usable end-to-end.",
    category: "Systems",
    tech: ["NLP", "Applied AI", "Data Pipelines", "Model Deployment", "ML Systems"],
    imageSrc: "/images/selected-work/meta1b-[16-9].png",
    imageAlt: "Meta 1B",
  },
  {
    title: "Grad-CAM Tumor Classification",
    description:
      "A computer vision project exploring tumor classification in medical imaging, with a focus on interpretability using Grad-CAM visualizations. Emphasized model evaluation, explainability, and responsible ML decision-making.",
    category: "Systems",
    tech: ["Computer Vision", "Machine Learning", "Healthcare", "Interpretability"],
    imageSrc: "/images/projects/grad-cam.png",
    imageAlt: "Grad-CAM Tumor Classification",
  },
];

export default function ProjectsGrid() {
  return (
    <div className="mt-16">
      <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-6 border-b border-gray-100 pb-6">
        <div className="flex flex-wrap gap-2">
          <button className="px-4 py-1.5 rounded-full bg-text-light text-background-light text-xs font-mono font-medium transition-all">
            All
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            AI/ML
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-lig hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Backend
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Frontend
          </button>
          <button className="px-4 py-1.5 rounded-full bg-surface-light hover:bg-gray-200 text-muted-light hover:text-text-light border border-transparent hover:border-gray-300 text-xs font-mono transition-all">
            Full-Stack
          </button>
        </div>

        {/* TODO: add sort by date button */}
        {/* <div className="relative group">
          <button className="flex items-center gap-2 text-xs font-mono uppercase tracking-wider text-muted-light hover:text-text-light transition-colors">
            Sort by: Date
            <span className="material-symbols-outlined text-sm">expand_more</span>
          </button>
        </div> */}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mt-12">
        {projects.map((project) => (
          <ProjectCard key={project.title} {...project} />
        ))}
      </div>

    {/* TODO: add load archived projects button */}
    {/* <div className="mt-16 flex justify-center">
        <button className="px-6 py-3 rounded border border-gray-200 text-sm font-mono text-muted-light hover:text-primary hover:border-primary transition-colors">
        LOAD ARCHIVED PROJECTS
        </button>
    </div> */}
    </div>
  );
}


