import Layout from "@/components/Layout";
import HeroSection from "@/components/HeroSection";
import ServicesSection from "@/components/ServicesSection";
import FeaturedTours from "@/components/FeaturedTours";
import DestinationsPreview from "@/components/DestinationsPreview";
import TestimonialsSection from "@/components/TestimonialsSection";
import CTASection from "@/components/CTASection";

const Index = () => {
  return (
    <Layout>
      <HeroSection />
      <ServicesSection />
      <FeaturedTours />
      <DestinationsPreview />
      <TestimonialsSection />
      <CTASection />
    </Layout>
  );
};

export default Index;
