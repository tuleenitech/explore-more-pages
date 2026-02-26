import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Heart, Shield, TreePine, Users } from "lucide-react";

const values = [
  {
    icon: Heart,
    title: "Travel With Purpose",
    description: "Every journey gives back. We support local communities and conservation projects across East Africa.",
  },
  {
    icon: Shield,
    title: "Safety First",
    description: "Your safety is our top priority. All our guides are certified, and our vehicles are regularly maintained.",
  },
  {
    icon: TreePine,
    title: "Sustainable Tourism",
    description: "We practice responsible tourism that preserves wildlife habitats and empowers local communities.",
  },
  {
    icon: Users,
    title: "Expert Local Guides",
    description: "Our guides are born and raised in East Africa, bringing unmatched knowledge and passion to every safari.",
  },
];

const About = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src="/images/maasai-culture.jpg" alt="About Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            About Us
          </motion.h1>
          <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            Our heart is in Africa
          </p>
        </div>
      </section>

      {/* Story */}
      <section className="py-20">
        <div className="container">
          <div className="max-w-3xl mx-auto text-center">
            <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
              <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Our Story</p>
              <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-6">
                Born From a Love of the Wild
              </h2>
              <p className="text-muted-foreground leading-relaxed mb-4">
                Private Explorers was founded with a simple mission: to share the raw beauty of East Africa with the world while giving back to the communities and landscapes that make it all possible.
              </p>
              <p className="text-muted-foreground leading-relaxed mb-4">
                We've mapped every route, tested every itinerary, and built relationships with the best lodges and local communities across Tanzania, Kenya, Uganda, and Rwanda.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                Whether you're seeking the thrill of a self-drive safari, the expertise of a private guide, the challenge of summiting Kilimanjaro, or the tranquility of Zanzibar's beaches — we're here to make it unforgettable.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-card">
        <div className="container">
          <div className="text-center mb-16">
            <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Why Choose Us</p>
            <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground">Our Values</h2>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {values.map((v, i) => (
              <motion.div
                key={v.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.1 }}
                className="text-center"
              >
                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center mx-auto mb-5">
                  <v.icon className="w-7 h-7 text-primary" />
                </div>
                <h3 className="font-display text-lg font-semibold text-foreground mb-3">{v.title}</h3>
                <p className="text-muted-foreground text-sm leading-relaxed">{v.description}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Stats */}
      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { number: "15+", label: "Years Experience" },
              { number: "5,000+", label: "Happy Travelers" },
              { number: "200+", label: "Safari Routes" },
              { number: "4", label: "Countries" },
            ].map((stat, i) => (
              <motion.div
                key={stat.label}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
              >
                <p className="font-display text-4xl md:text-5xl font-bold text-primary">{stat.number}</p>
                <p className="text-muted-foreground text-sm mt-2">{stat.label}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default About;
