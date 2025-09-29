import HeroSection from "@/components/home/hero/hero-section";
import Insights from "@/components/home/insights";
import Resources from "@/components/home/resources";
import ScrollingCards from "@/components/home/scrolling-cards";
import Testimonials from "@/components/home/testimonials";
import TestimonialsSec from "@/components/home/testimonials-sec";
import UnifiedPlatform from "@/components/home/unified-platform";

export default function Home() {
  return (
    <main>
       {/* home page hero section with carousel */}
      <HeroSection />

      {/* Unified Platform Section  */}
      <UnifiedPlatform />
      
      {/* Scrolling Cards section */}
      <ScrollingCards />

      {/* resources */}
      <Resources />        

      {/* Testimonials Sec */}
      <TestimonialsSec />

      {/* Insights */}
      <Insights />       
    </main>
  );
}
