import { motion } from "framer-motion";
import { Car, Compass, Mountain, Palmtree } from "lucide-react";
import { Link } from "react-router-dom";

const services = [
  {
    icon: Car,
    title: "Self-Drive Safaris",
    description: "Plan your own route. We provide the 4×4, maps, support, and insider tips.",
  },
  {
    icon: Compass,
    title: "Private Guided Safaris",
    description: "Travel with an experienced guide for a richer and more relaxed safari experience.",
  },
  {
    icon: Mountain,
    title: "Mountain Climbing",
    description: "Whether it's your first trek or next summit, we'll help you reach the top.",
  },
  {
    icon: Palmtree,
    title: "Beach Holidays",
    description: "Unwind on the white sands of Zanzibar, Mafia Island, or the Kenyan coast.",
  },
];

const ServicesSection = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary text-xs tracking-[0.3em] uppercase mb-3 font-semibold">What We Offer</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Meaningful Safaris, Lasting Impact
          </h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {services.map((service, i) => (
            <motion.div
              key={service.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-card p-8 border border-border hover:border-foreground/20 transition-all duration-300"
            >
              <div className="w-14 h-14 bg-foreground flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <service.icon className="w-6 h-6 text-background" />
              </div>
              <h3 className="font-display text-xl font-semibold text-foreground mb-3">{service.title}</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">{service.description}</p>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link
            to="/tours"
            className="inline-flex items-center text-foreground font-semibold text-xs tracking-[0.2em] uppercase hover:text-primary transition-colors"
          >
            Explore All Tours →
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
