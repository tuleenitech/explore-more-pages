import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin, Users } from "lucide-react";
import { Button } from "@/components/ui/button";

const allTours = [
  {
    image: "/images/serengeti.jpg",
    title: "10 Days Best of Tanzania – Safari & Zanzibar Beach Escape",
    duration: "10 Days / 9 Nights",
    location: "Arusha",
    price: "$3,800",
    category: "Wildlife & Beach",
    groupSize: "2-8",
    description: "Experience the best of Tanzania with game drives through Serengeti, Ngorongoro Crater, and a tropical finale in Zanzibar.",
  },
  {
    image: "/images/lion.jpg",
    title: "7 Days Great Migration & Big Cats Safari",
    duration: "7 Days / 6 Nights",
    location: "Serengeti",
    price: "$3,200",
    category: "Wildlife Adventure",
    groupSize: "2-6",
    description: "Witness the Great Migration and track big cats across the Serengeti plains with expert guides.",
  },
  {
    image: "/images/kilimanjaro.jpg",
    title: "8 Days Kilimanjaro Machame Route Trek",
    duration: "8 Days / 7 Nights",
    location: "Kilimanjaro",
    price: "$2,500",
    category: "Mountain Trek",
    groupSize: "2-12",
    description: "Summit Africa's highest peak via the scenic Machame Route with experienced mountain guides.",
  },
  {
    image: "/images/beach-zanzibar.jpg",
    title: "5 Days Zanzibar Beach & Culture Escape",
    duration: "5 Days / 4 Nights",
    location: "Zanzibar",
    price: "$1,800",
    category: "Beach Holiday",
    groupSize: "2-10",
    description: "Relax on pristine beaches, explore Stone Town's rich history, and enjoy fresh seafood.",
  },
  {
    image: "/images/elephants-kilimanjaro.jpg",
    title: "6 Days Tanzania Big Five & Cultural Experience",
    duration: "6 Days / 5 Nights",
    location: "Arusha",
    price: "$2,800",
    category: "Wildlife & Culture",
    groupSize: "2-8",
    description: "Combine thrilling wildlife safaris with authentic Maasai cultural encounters.",
  },
  {
    image: "/images/safari-lodge.jpg",
    title: "12 Days Grand East Africa Safari",
    duration: "12 Days / 11 Nights",
    location: "Multi-Country",
    price: "$5,500",
    category: "Grand Tour",
    groupSize: "2-6",
    description: "The ultimate East African journey spanning Tanzania, Kenya with luxury lodges throughout.",
  },
];

const Tours = () => {
  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src="/images/serengeti.jpg" alt="Safari Tours" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            Safari Tours & Packages
          </motion.h1>
          <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            Handcrafted itineraries tested by our team
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {allTours.map((tour, i) => (
              <motion.div
                key={tour.title}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: i * 0.08 }}
                className="group bg-card rounded-lg overflow-hidden border border-border hover:shadow-warm transition-all duration-300"
              >
                <div className="relative overflow-hidden aspect-[16/10]">
                  <img src={tour.image} alt={tour.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" loading="lazy" />
                  <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                    {tour.category}
                  </span>
                </div>
                <div className="p-6">
                  <h3 className="font-display text-lg font-semibold text-foreground mb-2 leading-snug">{tour.title}</h3>
                  <p className="text-muted-foreground text-sm leading-relaxed mb-4">{tour.description}</p>
                  <div className="flex flex-wrap items-center gap-4 text-muted-foreground text-xs mb-5">
                    <span className="flex items-center gap-1"><Clock className="w-3.5 h-3.5" />{tour.duration}</span>
                    <span className="flex items-center gap-1"><MapPin className="w-3.5 h-3.5" />{tour.location}</span>
                    <span className="flex items-center gap-1"><Users className="w-3.5 h-3.5" />{tour.groupSize} people</span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-border">
                    <div>
                      <span className="text-xs text-muted-foreground">From</span>
                      <p className="font-display text-xl font-bold text-primary">{tour.price}</p>
                    </div>
                    <Button asChild size="sm">
                      <Link to="/contact">Get Quote</Link>
                    </Button>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Tours;
