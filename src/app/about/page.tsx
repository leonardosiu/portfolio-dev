import AboutHero from "@/components/about/AboutHero";
import CorePhilosophies from "@/components/about/CorePhilosophies";
import AboutInterests from "@/components/about/AboutInterests";
import CreativePursuits from "@/components/about/CreativePursuits";
import MusicRotation from "@/components/about/MusicRotation";
import AboutPhilosophy from "@/components/about/AboutPhilosophy";
import LeoTwinSection from "@/components/about/LeoTwinSection";
import ConnectSection from "@/components/about/ConnectSection";
import Divider from "@/components/layout/Divider";

export default function About() {
  return (
    <div className="bg-background-light min-h-screen">
      <AboutHero />
      <Divider />
      <CorePhilosophies />
      <Divider />
      <AboutInterests />
      <Divider />
      <CreativePursuits />
      <Divider />
      <MusicRotation />
      <Divider />
      <AboutPhilosophy />
      <Divider />
      <LeoTwinSection />
      <Divider />
      <ConnectSection />
    </div>
  );
}
