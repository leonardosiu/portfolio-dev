import Hero from "@/components/home/Hero";
import SelectedWork from "@/components/home/SelectedWork";
import CreativeBridge from "@/components/home/CreativeBridge";
import LeoTwinPreview from "@/components/home/LeoTwinPreview";
import Divider from "@/components/layout/Divider";

export default function Home() {
  return (
    <div className="flex flex-col gap-32 py-24 bg-background-light">
      <Hero />

      <Divider />

      <SelectedWork />

      <Divider />

      <CreativeBridge />

      <Divider />
      
      <LeoTwinPreview />
    </div>
  );
}
