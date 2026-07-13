import Hero from "@/components/home/Hero";
import Stats from "@/components/home/Stats";
import WhyChoose from "@/components/home/WhyChoose";
import Portfolio from "@/components/home/Portfolio";
import TechnicalExpertise from "@/components/home/TechnicalExpertise";
import WebDevelopment from "@/components/home/WebDevelopment";
import FeaturedProjects from "@/components/home/FeaturedProjects";
import Testimonials from "@/components/home/Testimonials";
import RelatedBlogs from "@/components/home/RelatedBlogs";
import AwardsRecognition from "@/components/home/AwardsRecognition";

export default function Home() {
  return (
    <div className="flex-1">
      <Hero />
      <Stats />
      <WhyChoose />
      <Portfolio />
      <TechnicalExpertise />
      <WebDevelopment />
      <FeaturedProjects />
      <Testimonials />
      <RelatedBlogs />
      <AwardsRecognition />
    </div>
  );
}
