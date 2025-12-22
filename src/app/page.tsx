import Hero from "@/components/home/Hero";
import Current from "@/components/home/Current";
import AboutPreview from "@/components/home/AboutPreview";
import SelectedWork from "@/components/home/SelectedWork";
import ArtPreview from "@/components/home/ArtPreview";
import LeoTwinPreview from "@/components/home/LeoTwinPreview";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-24">
      <Hero />
      <Current />
      <AboutPreview />
      <SelectedWork />
      <ArtPreview />
      <LeoTwinPreview />
    </div>
  );
}
