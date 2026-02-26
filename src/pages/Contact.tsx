import Layout from "@/components/Layout";
import { motion } from "framer-motion";
import { Phone, Mail, MapPin, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { useState } from "react";
import { useToast } from "@/hooks/use-toast";

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", destination: "", travelers: "", message: "",
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({ title: "Quote Request Sent!", description: "We'll get back to you within 24 hours." });
    setFormData({ name: "", email: "", phone: "", destination: "", travelers: "", message: "" });
  };

  return (
    <Layout>
      <section className="relative h-[50vh] min-h-[400px] flex items-center justify-center">
        <img src="/images/safari-lodge.jpg" alt="Contact Us" className="absolute inset-0 w-full h-full object-cover" />
        <div className="absolute inset-0 bg-hero-overlay" />
        <div className="relative z-10 text-center">
          <motion.h1
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="font-display text-4xl md:text-6xl font-bold text-primary-foreground"
          >
            Get In Touch
          </motion.h1>
          <p className="text-primary-foreground/70 mt-4 max-w-lg mx-auto">
            Let us plan your dream African adventure
          </p>
        </div>
      </section>

      <section className="py-20">
        <div className="container">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Contact Info */}
            <div className="space-y-8">
              <div>
                <p className="text-primary text-sm tracking-[0.2em] uppercase mb-3 font-medium">Contact Info</p>
                <h2 className="font-display text-2xl font-bold text-foreground mb-6">We'd Love to Hear From You</h2>
              </div>
              {[
                { icon: Phone, label: "Phone / WhatsApp", value: "+255 685 808332", href: "tel:+255685808332" },
                { icon: Mail, label: "Email", value: "info@privateexplorers.com", href: "mailto:info@privateexplorers.com" },
                { icon: MapPin, label: "Office", value: "Arusha, Tanzania" },
                { icon: Clock, label: "Response Time", value: "Within 24 hours" },
              ].map((item) => (
                <div key={item.label} className="flex items-start gap-4">
                  <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center shrink-0">
                    <item.icon className="w-4 h-4 text-primary" />
                  </div>
                  <div>
                    <p className="text-xs text-muted-foreground uppercase tracking-wide">{item.label}</p>
                    {item.href ? (
                      <a href={item.href} className="text-foreground font-medium hover:text-primary transition-colors">{item.value}</a>
                    ) : (
                      <p className="text-foreground font-medium">{item.value}</p>
                    )}
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-lg p-8 border border-border space-y-6">
                <h3 className="font-display text-xl font-semibold text-foreground mb-2">Request a Safari Quote</h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Full Name *</label>
                    <Input
                      required
                      value={formData.name}
                      onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Email *</label>
                    <Input
                      required
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                      placeholder="your@email.com"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Phone</label>
                    <Input
                      value={formData.phone}
                      onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                      placeholder="+1 234 567 890"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Preferred Destination</label>
                    <Input
                      value={formData.destination}
                      onChange={(e) => setFormData({ ...formData, destination: e.target.value })}
                      placeholder="e.g. Serengeti, Zanzibar"
                    />
                  </div>
                  <div>
                    <label className="text-sm font-medium text-foreground mb-1.5 block">Number of Travelers</label>
                    <Input
                      value={formData.travelers}
                      onChange={(e) => setFormData({ ...formData, travelers: e.target.value })}
                      placeholder="e.g. 2 adults, 1 child"
                    />
                  </div>
                </div>
                <div>
                  <label className="text-sm font-medium text-foreground mb-1.5 block">Tell Us About Your Dream Safari</label>
                  <Textarea
                    rows={5}
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Share your travel dates, interests, budget, and any special requirements..."
                  />
                </div>
                <Button type="submit" size="lg" className="w-full md:w-auto px-10">
                  Send Quote Request
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
