import ExperienceEntry from "./ExperienceEntry";
import ExperienceSection from "./ExperienceSection";

type ExperienceLink = {
  label: string;
  href: string;
  icon?: "arrow_outward" | "code";
};

type Experience = {
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

type ExperienceTimelineProps = {
  sectionId: string;
  sectionTitle: string;
  sectionDescription: string;
  experiences: Experience[];
  isLastSection?: boolean;
};

export default function ExperienceTimeline({
  sectionId,
  sectionTitle,
  sectionDescription,
  experiences,
  isLastSection = false,
}: ExperienceTimelineProps) {
  return (
    <div className="flex-1 max-w-7xl mx-auto w-full">
      <ExperienceSection
        id={sectionId}
        title={sectionTitle}
        description={sectionDescription}
      />
      {experiences.map((experience, index) => (
        <ExperienceEntry
          key={index}
          {...experience}
          isLast={
            isLastSection && index === experiences.length - 1
          }
        />
      ))}
    </div>
  );
}

