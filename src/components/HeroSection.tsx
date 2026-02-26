import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="relative h-[90vh] min-h-[600px] flex items-center justify-center overflow-hidden">
      <img
        src="/images/hero-safari.jpg"
        alt="African savanna safari at golden hour"
        className="absolute inset-0 w-full h-full object-cover"
        loading="eager"
      />
      <div className="absolute inset-0 bg-hero-overlay" />

      <div className="relative z-10 container text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm md:text-base tracking-[0.3em] uppercase mb-4"
        >
          East Africa Safari Adventure & Island Bliss
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, delay: 0.15 }}
          className="font-display text-4xl md:text-6xl lg:text-7xl font-bold text-primary-foreground leading-tight max-w-4xl mx-auto"
        >
          Where Every Sunrise Brings a{" "}
          <span className="text-primary italic">New Adventure</span>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="text-primary-foreground/80 mt-6 text-base md:text-lg max-w-2xl mx-auto leading-relaxed"
        >
          We craft personalized safaris through Tanzania, Kenya, Uganda & Rwanda — 
          from wildlife encounters to mountain summits and island escapes.
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.45 }}
          className="flex flex-col sm:flex-row gap-4 justify-center mt-10"
        >
          <Button asChild size="lg" variant="default" className="text-base px-8">
            <Link to="/tours">
              View Signature Tours
              <ArrowRight className="ml-2 w-4 h-4" />
            </Link>
          </Button>
          <Button asChild size="lg" variant="outline" className="text-base px-8 border-primary-foreground/30 text-primary-foreground hover:bg-primary-foreground/10 hover:text-primary-foreground">
            <Link to="/contact">Plan Your Safari</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default HeroSection;
