import { motion } from "framer-motion";
import { Link } from "react-router-dom";
import { Clock, MapPin } from "lucide-react";
import { Button } from "./ui/button";

const tours = [
  {
    image: "/images/serengeti.jpg",
    title: "10 Days Best of Tanzania – Safari & Zanzibar",
    duration: "10 Days / 9 Nights",
    location: "Arusha",
    price: "$3,800",
    category: "Wildlife & Beach",
  },
  {
    image: "/images/lion.jpg",
    title: "7 Days Great Migration & Big Cats Safari",
    duration: "7 Days / 6 Nights",
    location: "Serengeti",
    price: "$3,200",
    category: "Wildlife Adventure",
  },
  {
    image: "/images/kilimanjaro.jpg",
    title: "8 Days Kilimanjaro Machame Route Trek",
    duration: "8 Days / 7 Nights",
    location: "Kilimanjaro",
    price: "$2,500",
    category: "Mountain Trek",
  },
  {
    image: "/images/beach-zanzibar.jpg",
    title: "5 Days Zanzibar Beach & Culture Escape",
    duration: "5 Days / 4 Nights",
    location: "Zanzibar",
    price: "$1,800",
    category: "Beach Holiday",
  },
];

const FeaturedTours = () => {
  return (
    <section className="py-20 md:py-28 bg-card">
      <div className="container">
        <div className="text-center mb-16">
          <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Self-Tested Itineraries</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold text-foreground">
            Our Signature Experiences
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {tours.map((tour, i) => (
            <motion.div
              key={tour.title}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group bg-background rounded-lg overflow-hidden shadow-deep hover:shadow-warm transition-all duration-300"
            >
              <div className="relative overflow-hidden aspect-[4/3]">
                <img
                  src={tour.image}
                  alt={tour.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
                <span className="absolute top-3 left-3 bg-primary text-primary-foreground text-xs font-medium px-3 py-1 rounded-full">
                  {tour.category}
                </span>
              </div>
              <div className="p-5">
                <h3 className="font-display text-base font-semibold text-foreground mb-3 leading-snug line-clamp-2">
                  {tour.title}
                </h3>
                <div className="flex items-center gap-4 text-muted-foreground text-xs mb-4">
                  <span className="flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5" />
                    {tour.duration}
                  </span>
                  <span className="flex items-center gap-1">
                    <MapPin className="w-3.5 h-3.5" />
                    {tour.location}
                  </span>
                </div>
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs text-muted-foreground">From</span>
                    <p className="font-display text-lg font-bold text-primary">{tour.price}</p>
                  </div>
                  <Button asChild size="sm" variant="outline" className="text-xs">
                    <Link to="/contact">Inquire</Link>
                  </Button>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default FeaturedTours;
