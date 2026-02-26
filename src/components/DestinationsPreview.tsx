import { motion } from "framer-motion";
import { Link } from "react-router-dom";

const destinations = [
  {
    name: "Tanzania",
    image: "/images/elephants-kilimanjaro.jpg",
    description: "Home to the Serengeti, Kilimanjaro, and Zanzibar",
  },
  {
    name: "Kenya",
    image: "/images/lion.jpg",
    description: "The Masai Mara and iconic Great Migration",
  },
  {
    name: "Zanzibar",
    image: "/images/beach-zanzibar.jpg",
    description: "Pristine beaches and rich Swahili culture",
  },
  {
    name: "Kilimanjaro",
    image: "/images/kilimanjaro.jpg",
    description: "Africa's highest peak — a trek of a lifetime",
  },
];

const DestinationsPreview = () => {
  return (
    <section className="py-20 md:py-28 bg-background">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Where to Go</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Explore Our Destinations
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
            >
              <Link
                to="/destinations"
                className="group relative block rounded-lg overflow-hidden aspect-[16/9]"
              >
                <img
                  src={dest.image}
                  alt={dest.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-foreground/80 via-foreground/20 to-transparent" />
                <div className="absolute bottom-0 left-0 right-0 p-6">
                  <h3 className="font-display text-2xl md:text-3xl font-bold text-primary-foreground">{dest.name}</h3>
                  <p className="text-primary-foreground/70 text-sm mt-1">{dest.description}</p>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default DestinationsPreview;
