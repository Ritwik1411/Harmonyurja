import { AboutSection } from "@/components/about-section";
import { AnimatedMetricsSection } from "@/components/animated-metrics-section";
import { FeaturedProjectSection } from "@/components/featured-project-section";
import { HeroSection } from "@/components/hero-section";
import { HomeContactSection } from "@/components/home-contact-section";
import { ServicesSection } from "@/components/services-section";
import { WhyChooseUs } from "@/components/why-choose-us";

export default function Home() {
  return (
    <>
      <HeroSection />
      <AboutSection />
      <ServicesSection />
      <FeaturedProjectSection />
      <WhyChooseUs />
      <AnimatedMetricsSection />
      <HomeContactSection />
    </>
  );
}
