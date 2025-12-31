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
  description: string;
  highlights: string[];
  technologies: string[];
  links?: ExperienceLink[];
};

export const professionalExperiences: Experience[] = [
  {
    title: "Senior Systems Engineer",
    company: "Datadog",
    period: "2024 — Present",
    location: "New York, NY",
    category: "System Architect",
    description:
      "Leading the architectural shift to memory-safe languages for core ingestion pipelines, balancing throughput with reliability.",
    highlights: [
      "Leading the migration of the core metrics ingestion pipeline to Rust, reducing p99 latency by 45ms and improving throughput by 3x.",
      "Designed a distributed rate-limiting service handling 2M+ RPM using Redis and Lua scripts, protecting downstream services from cascading failures.",
      "Mentoring 3 junior engineers on systems programming, memory safety, and concurrency patterns in high-scale environments.",
    ],
    technologies: ["Rust", "Kafka", "Kubernetes"],
  },
  {
    title: "Data Engineer II",
    company: "Spotify",
    period: "2023 — 2024",
    location: "Stockholm, SE",
    category: "Scale & Data",
    description:
      "Optimizing petabyte-scale data infrastructure to support high-visibility user campaigns with zero downtime.",
    highlights: [
      'Optimized data pipelines for the "Wrapped" campaign, processing 5PB of user interaction data with zero downtime during peak traffic.',
      "Reduced cloud infrastructure costs by 25% ($1.2M annualized) through intelligent spot instance orchestration and resource bin-packing.",
      "Implemented a custom dbt adapter for internal data lake access control, enforcing granular security policies automatically.",
    ],
    technologies: ["Scala", "GCP Dataflow", "BigQuery"],
    links: [
      {
        label: "Tech Blog Post",
        href: "#",
        icon: "arrow_outward",
      },
    ],
  },
  {
    title: "Backend Developer",
    company: "Shopify",
    period: "2022 — 2023",
    location: "Toronto, ON",
    category: "First Production",
    description:
      "Decomposing monolithic architectures to enable independent scaling during record-breaking commerce events.",
    highlights: [
      "Scaled the core checkout service to handle Black Friday traffic peaks of 100k requests/second, ensuring 99.999% availability.",
      "Decomposed the legacy monolithic inventory system into domain-bounded microservices, enabling independent deployment cycles.",
      "Authored the internal RFC for asynchronous job processing standards adopted by 40+ engineering teams.",
    ],
    technologies: ["Ruby on Rails", "MySQL", "Kafka"],
  },
  {
    title: "Software Engineer, Systems",
    company: "Mozilla",
    period: "2021 — 2022",
    location: "San Francisco, CA",
    category: "Browser Internals",
    description:
      "Improving browser performance and security standards within the Gecko rendering engine.",
    highlights: [
      "Contributed to the Gecko rendering engine, improving CSS grid layout performance by 15% through optimized C++ data structures.",
      "Implemented WebAuthn support for Firefox Relay, enhancing user security and adoption of passwordless authentication.",
      "Participated in the Rust community working group to improve compiler error messages for async await.",
    ],
    technologies: ["C++", "Rust", "WebAssembly"],
    links: [
      {
        label: "Gecko Commit Log",
        href: "#",
        icon: "code",
      },
    ],
  },
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

