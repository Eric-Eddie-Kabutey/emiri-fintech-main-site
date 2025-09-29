import HeroSection from "@/components/home/hero/hero-section";
import Insights from "@/components/home/insights";
// import Resources from "@/components/home/resources";
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

      {/* Testimonials */}
      <Testimonials />

      {/* Testimonials Sec */}
      <TestimonialsSec />

      {/* Insights */}
      <Insights />

      {/* <Resources /> */}

      {/* Section 2 */}
      <section className="min-h-screen bg-green-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-green-800 mb-4">Section 2</h2>
          <p className="text-green-600">Green section - min-h-screen</p>
        </div>
      </section>

      {/* Section 3 */}
      <section className="min-h-screen bg-purple-100 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-4xl font-bold text-purple-800 mb-4">Section 3</h2>
          <p className="text-purple-600">Purple section - min-h-screen</p>
        </div>
      </section>
    </main>
  );
}
