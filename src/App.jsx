import { useCallback, useState } from "react";
import { Hero } from "./sections/Hero";
import { Story } from "./sections/Story";
import { MenuSection } from "./sections/Menu";
import { Locations } from "./sections/Locations";
import { Footer } from "./sections/Footer";
import { WaveDivider } from "./components/WaveDivider";
import { KitchenSmoke } from "./components/KitchenSmoke";

export default function App() {
  const [isLoading, setIsLoading] = useState(true);
  const finishLoading = useCallback(() => setIsLoading(false), []);

  return (
    <>
      <Hero />
      <WaveDivider from="transparent" to="#fffdf8" variant="dramatic" overlap />
      <Story />
      <WaveDivider from="#fffdf8" to="#f7f1e5" variant="rolling" />
      <MenuSection />
      <WaveDivider from="#f8f1d8" to="#4b8e02" variant="dramatic" flip />
      <Locations />
      <WaveDivider from="#4b8e02" to="#fffdf8" variant="gentle" />
      <Footer />
      {isLoading && <KitchenSmoke onComplete={finishLoading} duration={4600} />}
    </>
  );
}
