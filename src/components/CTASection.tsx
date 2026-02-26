import { Link } from "react-router-dom";
import { Button } from "./ui/button";
import { motion } from "framer-motion";

const CTASection = () => {
  return (
    <section className="relative py-24 md:py-32 overflow-hidden">
      <img
        src="/images/safari-lodge.jpg"
        alt="Safari lodge at sunset"
        className="absolute inset-0 w-full h-full object-cover"
        loading="lazy"
      />
      <div className="absolute inset-0 bg-hero-overlay" />
      <div className="relative z-10 container text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.7 }}
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold text-primary-foreground max-w-3xl mx-auto leading-tight">
            Ready to Start Your <span className="text-primary italic">African Adventure</span>?
          </h2>
          <p className="text-primary-foreground/70 mt-6 max-w-xl mx-auto">
            Let us craft the perfect safari experience tailored just for you. 
            No two journeys are the same.
          </p>
          <Button asChild size="lg" className="mt-8 text-base px-10">
            <Link to="/contact">Plan Your Dream Safari</Link>
          </Button>
        </motion.div>
      </div>
    </section>
  );
};

export default CTASection;
