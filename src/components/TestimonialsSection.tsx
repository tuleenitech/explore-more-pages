import { motion } from "framer-motion";
import { Star } from "lucide-react";

const testimonials = [
  {
    name: "Sarah & Michael",
    location: "United Kingdom",
    text: "An absolutely magical experience! Our guide was incredibly knowledgeable, and we saw the Big Five within the first two days. The Zanzibar extension was the perfect way to end our trip.",
    rating: 5,
  },
  {
    name: "Hans Mueller",
    location: "Germany",
    text: "The self-drive safari was the adventure of a lifetime. Private Explorers provided excellent support with detailed maps and a well-maintained 4x4. Highly recommended!",
    rating: 5,
  },
  {
    name: "Marie Dubois",
    location: "France",
    text: "Climbing Kilimanjaro with Private Explorers was a dream come true. The team was professional, encouraging, and made sure we were safe every step of the way.",
    rating: 5,
  },
];

const TestimonialsSection = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Testimonials</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            What Our Travelers Say
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {testimonials.map((t, i) => (
            <motion.div
              key={t.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="bg-background rounded-lg p-8 shadow-warm"
            >
              <div className="flex gap-1 mb-4">
                {Array.from({ length: t.rating }).map((_, j) => (
                  <Star key={j} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>
              <p className="text-foreground/80 text-sm leading-relaxed italic mb-6">"{t.text}"</p>
              <div>
                <p className="font-display font-semibold text-foreground">{t.name}</p>
                <p className="text-muted-foreground text-xs">{t.location}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
