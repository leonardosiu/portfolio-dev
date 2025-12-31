export type Project = {
  id: string;
  title: string;
  description: string;
  category: string;
  tech: string[];
  imageSrc: string; // Mobile image (16:9)
  desktopImageSrc?: string; // Desktop image (21:9), falls back to imageSrc if not provided
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
    desktopImageSrc: "/images/selected-work/retinova-[21-9].png",
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
    nextProject: "human-proximity",
  },
  {
    id: "human-proximity",
    title: "BeesEye @ Human Proximity",
    description:
      "A real-time networking platform for in-person events, built around proximity-aware interactions. I designed and implemented the backend APIs and AI microservices powering matchmaking, messaging, and event logic.",
    category: "Backend",
    tech: ["Backend", "APIs", "AI Systems", "Microservices", "Mobile App"],
    imageSrc: "/images/selected-work/human-proximity-[16-9].png",
    desktopImageSrc: "/images/selected-work/human-proximity-[21-9].png",
    imageAlt: "Human Proximity",
    longDescription: "BeesEye is a mobile-first networking platform that uses real-time systems and AI services to facilitate meaningful connections at in-person events.",
    role: "Backend & AI Systems Engineer",
    timeline: "Aug 2025 - Present",
    domain: "Social Networking / AI",
    demoUrl: "",
    sections: {
        whatItIs: "BeesEye is an in-progress mobile application developed at Human Proximity that focuses on enabling real-time, AI-assisted networking during live events. The platform integrates mobile clients with backend services and AI-driven workflows to support dynamic, context-aware interactions between users. Due to the project’s active development status, specific product details and algorithms are not publicly disclosed.",
        myRole: "I worked as a backend and AI systems engineer, owning the design and implementation of core service infrastructure that powers the application. My responsibilities included building the backend API layer that interfaces with mobile clients, designing service boundaries between application logic and AI components, and implementing AI-facing microservices that could be reliably invoked from production workflows. I focused on ensuring that the system could support real-time interactions while remaining modular and extensible as product requirements evolved. In addition to backend ownership, I collaborated closely with frontend and product teams to define API contracts, align data models, and ensure that system behavior remained predictable under live usage conditions.",
        constraints: [
            {
                number: "01",
                text: "Cross‑platform consistency: ensure responsive, smooth UI/UX across iOS and Android with predictable flows and minimal friction."
            },
            {
                number: "02",
                text: "Event onboarding flow: joining an event must be intuitive and non‑disruptive, with clear steps."
            },
            {
                number: "03",
                text: "AI-assisted matchmaking: the system needs to dynamically suggest connections based on user profiles, networking goals, and event context."
            },
            {
                number: "04",
                text: "Real‑time scale: support 100+ concurrent attendees with simultaneous matching and low‑latency updates."
            }
        ],
        learnings: [
            "Multi‑provider authentication should feel seamless: align identity flows across email/password, Sign in with Apple, and LinkedIn on iOS and Android.",
            "Load testing informs reality: use Locust to validate 300+ concurrent attendees to capture latency, throughput, response times, and failure modes before live events.",
            "Context-aware matchmaking requires dynamic data: store event metadata, user profiles, and real‑time interaction history to personalize matches.",
            "Event‑driven pipelines scale cleanly: use Firebase Cloud Functions and database triggers to orchestrate matching as decoupled, idempotent handlers with retries and observability."
        ]
    },
    previousProject: "retinova",
    nextProject: "nlp-bias-detection",
  },
  {
    id: "nlp-bias-detection",
    title: "NLP Bias Detection",
    description:
      "An NLP system for detecting bias in large-scale social datasets, built by preprocessing tens of thousands of samples and fine-tuning transformer models. I worked across data pipelines, model training, and deployment to make the system usable end-to-end.",
    category: "NLP",
    tech: [
      "Python",
      "PyTorch",
      "scikit-learn",
      "pandas",
      "numpy",
      "matplotlib",
      "seaborn",
      "Transformers",
      "Weights & Biases",
      "Vercel",
      "Docker",
      "FastAPI",
      "Node.js",
      "Express.js"
    ],
    imageSrc: "/images/selected-work/meta1b-[16-9].png",
    desktopImageSrc: "/images/selected-work/meta1b-[21-9].png",
    imageAlt: "Meta 1B",
    longDescription: "An end‑to‑end NLP system that detects demographic bias in large social datasets by preprocessing tens of thousands of samples and fine‑tuning transformer models for reliable, actionable signals.",
    role: "ML Engineer",
    timeline: "Aug 2025 - Present",
    domain: "NLP / AI",
    repoUrl: "https://github.com/Rytham1/Meta-NLP-Bias",
    demoUrl: "https://nlp-bias-detection.vercel.app/",
    sections: {
        whatItIs: "This project investigates how bias present in real-world text datasets influences language model behavior. Using the RedditBias dataset, we built a pipeline that cleans noisy social data, engineers bias-aware features, and fine-tunes a transformer-based classifier (BERT) to identify biased content. The goal was not just model performance, but understanding where bias emerges, how it manifests, and how reliably it can be detected.",
        myRole: "I led data preprocessing and exploration to make the dataset usable and trustworthy: addressing class imbalance, cleaning and standardizing text, engineering features, and handling unique characters via regex. I also instrumented runs with Weights & Biases to handle hyperparameter tuning and model tracking. This involved tweaking hyperparameters like learning rate, batch size, learning rate scheduler, weight decay, while adding dropout for early stopping. The tuning was pivotal: the fine‑tuned model initially overfit with validation loss >150% despite good precision/recall/F1/accuracy. Through disciplined tuning and run tracking, we reduced validation loss to ~45% while maintaining or improving core metrics. I additionally helped implement a lightweight inference service so users could interact with the model via the project website.",
        constraints: [
            {
                number: "01",
                text: "Real-world data noise: Reddit comments contained inconsistent formatting, ambiguous labels, and missing values.",
            },
            {
                number: "02",
                text: "Moderate class imbalance: More biased samples than non-biased, requiring careful evaluation."
            },
            {
                number: "03",
                text: "Overfitting risk: Early training runs showed divergence between training and validation loss."
            }
        ],
        learnings: [
            "Data quality drives outcomes: robust cleaning, label hygiene, and stratified splits matter as much as model choice.",
            "Tune for generalization: hyperparameters and regularization are levers to reduce validation loss without sacrificing core metrics.",
            "Ship the interface: a lightweight inference service with clear contracts turns models into usable products."
        ]
    },
    previousProject: "human-proximity",
    nextProject: "grad-cam-tumor",
  },
  {
    id: "grad-cam-tumor",
    title: "Grad-CAM Tumor Classification",
    description: "An applied computer vision study using CNNs and ResNet models to classify brain tumors from CT and MRI scans, with Grad-CAM used to evaluate model interpretability and clinical trustworthiness. This project was a final project for the CS 184A Course at UC Irvine.",
    category: "Computer Vision / Machine Learning",
    tech: [
        "Python",
        "PyTorch",
        "torchvision",
        "scikit-learn",
        "pandas",
        "numpy",
        "matplotlib",
        "seaborn",
        "Grad-CAM",
        "ResNet"
    ],
    imageSrc: "/images/projects/grad-cam-[16-9].png",
    desktopImageSrc: "/images/projects/grad-cam-[21-9].png",
    imageAlt: "Grad-CAM Tumor Classification",
    longDescription: "An applied computer vision study using CNNs and ResNet models to classify brain tumors from CT and MRI scans, with Grad-CAM used to evaluate model interpretability and clinical trustworthiness.",
    role: "ML Engineer",
    timeline: "Aug 2025 - Present",
    domain: "Computer Vision / Machine Learning",
    repoUrl: "https://github.com/Rytham1/Grad-CAM-Tumor-Classification",
    sections: {
        whatItIs: "We built a two‑modal pipeline (CT and MRI) that trains CNN and ResNet classifiers and generates Grad‑CAM heatmaps to visualize what the models attend to. Datasets were cleaned, normalized per modality, and split with stratified sampling. Baselines established reliable classification performance, while transfer‑learned ResNet models pushed accuracy and F1 to near‑perfect on MRI. Grad‑CAM overlays then tested whether high confidence aligned with plausible tumor regions, revealing stronger spatial localization for MRI and highlighting CT failure modes where attention drifted toward non‑lesion areas or boundaries.",
        myRole: "I implemented the MRI CNN baseline end‑to‑end: modality‑specific preprocessing (resize to 224×224, per‑dataset normalization, channel stacking), light augmentation (flip/rotate), class‑weighted training, and stratified k‑fold cross‑validation to validate generalization. The baseline achieved high accuracy and balanced precision/recall across splits, establishing a credible reference for ResNet improvements and subsequent Grad‑CAM analysis. I also contributed to the report—curating results tables/plots, documenting metrics, and helping synthesize findings across models and modalities.",
        constraints: [
            {
                number: "01",
                text: "Modality differences: MRI and CT have distinct resolution, contrast, and texture distributions; preprocessing and normalization must be per‑modality to avoid spurious signals.",
            },
            {
                number: "02",
                text: "Class balance and sampling: moderate imbalance (especially in MRI) requires stratified splits and class‑aware training to keep recall strong and reduce false negatives."
            },
            {
                number: "03",
                text: "CT artifacts and text: CT variability and corner annotations can bias attention. Consequently filters were applied toreduce text visibility, but attention drift still appears in some models."
            },
            {
                number: "04",
                text: "Interpretability gap: strong quantitative metrics do not guarantee clinically meaningful attention. Grad‑CAM must correlate with confidence and localize plausible regions."
            }
        ],
        learnings: [
            "Data quality drives outcomes: per‑modality normalization, label hygiene, and stratified splits matter as much as architecture.",
            "Baselines before complexity: a well‑regularized CNN baseline establishes truth anchors and reveals where transfer learning adds value.",
            "Evaluate what you ship: pair accuracy/F1 with Grad‑CAM alignment as confidence without localized attention is a warning in medical contexts.",
            "Cross‑validation builds trust: stratified k‑fold with consistent preprocessing makes results reproducible and interpretations defensible."
        ]
    },
    previousProject: "nlp-bias-detection",
  }
];

export function getProjectById(id: string): Project | undefined {
  return projects.find((p) => p.id === id);
}

export function getProjectSlug(title: string): string {
  return title.toLowerCase().replace(/\s+/g, "-");
}

