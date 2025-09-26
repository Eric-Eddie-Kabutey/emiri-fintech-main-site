import { features } from "@/data/platform-features-data";
import { PlatformFeature } from "@/types/platform-features-type";
import Image from "next/image";
import Link from "next/link";

const UnifiedPlatform = () => {
  return (
    <section className="bg-white py-16 sm:py-24">
      <div className="container mx-auto px-4">
        {/* Header Content */}
        <div className="mx-auto text-start">
          <span className="inline-block bg-[#1E3A8A] text-[#FFF] font-semibold px-3 py-1 rounded-full text-sm">
            Unified platform
          </span>
          <h2 className="mt-4 text-3xl font-semibold tracking-tight text-gray-900 sm:text-4xl">
            Everything you need to custody and manage any digital asset.
          </h2>
        </div>

        {/* Features Grid */}
        <div className="mt-16 grid grid-cols-1 gap-y-12 md:grid-cols-2 md:gap-x-8 lg:grid-cols-3 lg:gap-x-12">
          {features.map((feature) => (
            <FeatureCard key={feature.title} {...feature} />
          ))}
        </div>
      </div>
    </section>
  );
};


const FeatureCard = ({ icon, title, description, href }: PlatformFeature) => {
  return (
    <div className="relative pl-12">
      {/* Decorative vertical line */}
      <div className="absolute left-1 top-0 h-full w-px bg-gray-200" />
      
      {/* Pink highlight on the line */}
      <div className="absolute left-1 top-2 h-10 w-px bg-[#1E3A8A]" />


      {/* Card Content */}
          <div className="flex flex-col gap-2 h-full">
      {/* Icon positioned over the line */}      
              <div className="mb-2">
                  <Image src={icon} alt={title} width={80} height={60} className="w-8 h-auto" />
              </div>
        <h3 className="text-xl font-semibold text-gray-900">{title}</h3>
        <p className="mt-4 text-base text-gray-600 flex-grow">{description}</p>
        <Link
          href={href}
          className="mt-6 text-sm font-semibold text-[#1E3A8A] group"
        >
                  FIND OUT MORE <span>{ `>` }</span>
          <span className="block max-w-0 group-hover:max-w-30 transition-all duration-300 h-0.5 bg-[#1E3A8A]"></span>
        </Link>
      </div>
    </div>
  );
};

export default UnifiedPlatform;