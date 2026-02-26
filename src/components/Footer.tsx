import { Link } from "react-router-dom";
import { Phone, Mail, MapPin } from "lucide-react";

const Footer = () => {
  return (
    <footer className="bg-foreground text-background">
      <div className="container py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
          {/* Brand */}
          <div>
            <h3 className="font-display text-2xl font-bold mb-4">
              Private<span className="text-primary">Explorers</span>
            </h3>
            <p className="text-sm opacity-70 leading-relaxed">
              Your gateway to unforgettable African safari experiences. We craft personalized journeys through East Africa's most breathtaking landscapes.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Explore</h4>
            <ul className="space-y-2">
              {[
                { label: "Destinations", to: "/destinations" },
                { label: "Safari Tours", to: "/tours" },
                { label: "About Us", to: "/about" },
                { label: "Contact", to: "/contact" },
              ].map((link) => (
                <li key={link.to}>
                  <Link to={link.to} className="text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Services */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Services</h4>
            <ul className="space-y-2">
              {["Self-Drive Safaris", "Guided Tours", "Mountain Trekking", "Beach Holidays"].map((item) => (
                <li key={item}>
                  <span className="text-sm opacity-70">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-display text-lg font-semibold mb-4">Contact Us</h4>
            <div className="space-y-3">
              <a href="tel:+255685808332" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                <Phone className="w-4 h-4 shrink-0" />
                +255 685 808332
              </a>
              <a href="mailto:info@privateexplorers.com" className="flex items-center gap-3 text-sm opacity-70 hover:opacity-100 hover:text-primary transition-all">
                <Mail className="w-4 h-4 shrink-0" />
                info@privateexplorers.com
              </a>
              <div className="flex items-start gap-3 text-sm opacity-70">
                <MapPin className="w-4 h-4 shrink-0 mt-0.5" />
                Arusha, Tanzania
              </div>
            </div>
          </div>
        </div>

        <div className="border-t border-background/10 mt-12 pt-8 text-center">
          <p className="text-sm opacity-50">
            © {new Date().getFullYear()} Private Explorers. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
