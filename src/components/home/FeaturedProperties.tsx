import { Link } from "react-router-dom";
import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import PropertyCard from "@/components/PropertyCard";
import { properties } from "@/data/properties";

const FeaturedProperties = () => {
  const featured = properties.filter((p) => p.featured).slice(0, 6);

  return (
    <section className="py-20 lg:py-28 bg-background">
      <div className="container mx-auto px-4 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-14"
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2 font-body">Portofoliu</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
            Proprietăți de Top
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Selecție exclusivă de proprietăți premium din cele mai căutate zone din România.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {featured.map((property, i) => (
            <PropertyCard key={property.id} property={property} index={i} />
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <Link
            to="/proprietati"
            className="inline-flex items-center gap-2 text-primary font-medium hover:gap-3 transition-all"
          >
            Vezi toate proprietățile <ArrowRight className="h-4 w-4" />
          </Link>
        </motion.div>
      </div>
    </section>
  );
};

export default FeaturedProperties;
