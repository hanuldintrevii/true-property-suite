import { Link } from "react-router-dom";
import { Search, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import heroBg from "@/assets/hero-bg.jpg";

const HeroSection = () => (
  <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden">
    {/* Background */}
    <div className="absolute inset-0">
      <img src={heroBg} alt="" className="w-full h-full object-cover" />
      <div className="absolute inset-0 bg-dark/70" />
      <div className="absolute inset-0 bg-gradient-to-t from-dark via-dark/30 to-transparent" />
    </div>

    {/* Content */}
    <div className="relative container mx-auto px-4 lg:px-8 pt-20">
      <div className="max-w-3xl mx-auto text-center">
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-primary font-body text-sm uppercase tracking-[0.2em] mb-4"
        >
          Agenția ta imobiliară de încredere
        </motion.p>
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.1 }}
          className="font-heading text-4xl md:text-5xl lg:text-6xl font-bold text-secondary-foreground leading-tight mb-6"
        >
          Găsește proprietatea potrivită cu{" "}
          <span className="text-gradient-gold">True Imobiliare</span>
        </motion.h1>
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="text-secondary-foreground/70 text-lg mb-10 max-w-xl mx-auto"
        >
          Descoperă cele mai exclusive proprietăți din România. Consultanță personalizată și servicii premium.
        </motion.p>

        {/* Search Bar */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="bg-card/10 backdrop-blur-lg rounded-xl p-2 mb-8 border border-secondary-foreground/10"
        >
          <div className="flex flex-col md:flex-row gap-2">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-5 w-5 text-secondary-foreground/40" />
              <input
                type="text"
                placeholder="Caută după locație, tip proprietate..."
                className="w-full pl-12 pr-4 py-3.5 bg-secondary/80 rounded-lg text-sm text-secondary-foreground placeholder:text-secondary-foreground/40 focus:outline-none focus:ring-2 focus:ring-primary/50"
              />
            </div>
            <Link
              to="/proprietati"
              className="bg-primary text-primary-foreground px-8 py-3.5 rounded-lg text-sm font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
            >
              <Search className="h-4 w-4" /> Caută
            </Link>
          </div>
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="flex flex-col sm:flex-row gap-4 justify-center"
        >
          <Link
            to="/proprietati"
            className="inline-flex items-center justify-center gap-2 bg-primary text-primary-foreground px-8 py-3.5 rounded-md font-medium hover:bg-gold-dark transition-colors"
          >
            Vezi proprietăți <ArrowRight className="h-4 w-4" />
          </Link>
          <Link
            to="/contact"
            className="inline-flex items-center justify-center gap-2 border border-secondary-foreground/30 text-secondary-foreground px-8 py-3.5 rounded-md font-medium hover:border-primary hover:text-primary transition-colors"
          >
            Programează o vizionare
          </Link>
        </motion.div>

        {/* Stats */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="grid grid-cols-3 gap-8 mt-16 pt-8 border-t border-secondary-foreground/10 max-w-lg mx-auto"
        >
          {[
            { value: "500+", label: "Proprietăți" },
            { value: "300+", label: "Clienți fericiți" },
            { value: "15+", label: "Ani experiență" },
          ].map((stat) => (
            <div key={stat.label} className="text-center">
              <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{stat.value}</p>
              <p className="text-secondary-foreground/50 text-xs mt-1">{stat.label}</p>
            </div>
          ))}
        </motion.div>
      </div>
    </div>
  </section>
);

export default HeroSection;
