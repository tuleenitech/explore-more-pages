import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Button } from "@/components/ui/button";

const destinations = [
  {
    name: "Tanzania",
    image: "/images/elephants-kilimanjaro.jpg",
    description: "Tanzania is East Africa's largest country and a safari paradise. From the endless plains of the Serengeti to the pristine beaches of Zanzibar, it offers an unmatched diversity of experiences.",
    highlights: ["Serengeti National Park", "Ngorongoro Crater", "Zanzibar", "Mount Kilimanjaro"],
  },
  {
    name: "Kenya",
    image: "/images/lion.jpg",
    description: "Kenya is the birthplace of the safari. The Masai Mara offers front-row seats to the Great Migration, while Amboseli provides stunning views of Kilimanjaro.",
    highlights: ["Masai Mara", "Amboseli", "Lake Nakuru", "Tsavo"],
  },
  {
    name: "Uganda",
    image: "/images/maasai-culture.jpg",
    description: "Known as the Pearl of Africa, Uganda is famous for gorilla trekking in Bwindi Impenetrable Forest and the stunning landscapes of Queen Elizabeth National Park.",
    highlights: ["Bwindi Forest", "Queen Elizabeth NP", "Murchison Falls", "Lake Bunyonyi"],
  },
  {
    name: "Rwanda",
    image: "/images/kilimanjaro.jpg",
    description: "The Land of a Thousand Hills offers incredible mountain gorilla encounters in Volcanoes National Park, along with vibrant culture and stunning scenery.",
    highlights: ["Volcanoes National Park", "Nyungwe Forest", "Lake Kivu", "Akagera NP"],
  },
];

const Destinations = () => {
  return (
    <Layout>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src="/images/elephants-kilimanjaro.jpg" alt="Destinations" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            Our Destinations
          </motion.h1>
          <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            Explore the most breathtaking corners of East Africa
          </p>
        </div>
      </section>

      {/* Destinations list */}
      <section className="py-20">
        <div className="container space-y-20">
          {destinations.map((dest, i) => (
            <motion.div
              key={dest.name}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className={`flex flex-col ${i % 2 === 1 ? "lg:flex-row-reverse" : "lg:flex-row"} gap-10 items-center`}
            >
              <div className="lg:w-1/2">
                <div className="rounded-lg overflow-hidden aspect-[16/10]">
                  <img src={dest.image} alt={dest.name} className="w-full h-full object-cover" loading="lazy" />
                </div>
              </div>
              <div className="lg:w-1/2">
                <h2 className="font-display text-3xl md:text-4xl font-bold text-foreground mb-4">{dest.name}</h2>
                <p className="text-muted-foreground leading-relaxed mb-6">{dest.description}</p>
                <div className="flex flex-wrap gap-2 mb-6">
                  {dest.highlights.map((h) => (
                    <span key={h} className="bg-primary/10 text-primary text-xs font-medium px-3 py-1.5 rounded-full">
                      {h}
                    </span>
                  ))}
                </div>
                <Button asChild variant="default" size="sm">
                  <Link to="/contact">Plan a Trip to {dest.name}</Link>
                </Button>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </Layout>
  );
};

export default Destinations;
