import ExperienceHero from "@/components/experience/ExperienceHero";
import ExperienceTimeline from "@/components/experience/ExperienceTimeline";
import {
  professionalExperiences,
  leadershipExperiences,
} from "@/lib/experience";
import { ChevronDown } from "lucide-react";

export default function Experience() {
  return (
    <div className="min-h-screen bg-background-light">
      <ExperienceHero />
      <section className="px-6 md:px-12 pb-24 max-w-7xl mx-auto flex flex-col gap-12 relative">
        <ExperienceTimeline
          sectionId="professional"
          sectionTitle="Professional & Industry"
          sectionDescription="Building backend systems and applied AI products under real-world constraints."
          experiences={professionalExperiences}
          isLastSection={false}
        />

        {/* Navigation link to next section */}
        <div className="relative grid grid-cols-1 md:grid-cols-[160px_48px_1fr] gap-0 mb-6">
          <div className="hidden md:block"></div>
          <div className="hidden md:flex flex-col items-center">
            <div className="h-12 w-px bg-gradient-to-b from-gray-200/80 to-transparent"></div>
          </div>
          <div className="pt-6 md:pl-2">
            <a
              className="inline-flex items-center gap-2 group"
              href="#leadership"
            >
              <span className="text-xs font-mono text-muted-light uppercase tracking-widest group-hover:text-indigo-500 transition-colors">
                Next: Student Leadership
              </span>
              <ChevronDown className="w-4 h-4 text-muted-light group-hover:text-indigo-500 group-hover:translate-y-1 transition-all" />
            </a>
          </div>
        </div>

        <div className="mt-8">
          <ExperienceTimeline
            sectionId="leadership"
            sectionTitle="Student Leadership & Organizations"
            sectionDescription="Student-led engineering and leadership roles focused on building real products, mentoring peers, and applying software to social impact."
            experiences={leadershipExperiences}
            isLastSection={true}
          />
        </div>
      </section>
    </div>
  );
}
