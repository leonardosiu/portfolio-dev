import Hero from "@/components/home/Hero";
import Current from "@/components/home/Current";
import AboutPreview from "@/components/home/AboutPreview";
import SelectedWork from "@/components/home/SelectedWork";
import ArtPreview from "@/components/home/ArtPreview";
import LeoTwinPreview from "@/components/home/LeoTwinPreview";
import FontPreview from "@/components/home/FontPreview";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-24 bg-background-light">
      <Hero />

      <div className="w-full h-px bg-gray-300" />

      {/* <Current />
      <AboutPreview /> */}
      <SelectedWork />
      <ArtPreview />
      <LeoTwinPreview />
    </div>
  );
}
