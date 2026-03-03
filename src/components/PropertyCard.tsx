import { Link } from "react-router-dom";
import { MapPin, Bed, Bath, Maximize, Heart } from "lucide-react";
import { motion } from "framer-motion";
import { Property, formatPrice } from "@/data/properties";

interface PropertyCardProps {
  property: Property;
  index?: number;
}

const PropertyCard = ({ property, index = 0 }: PropertyCardProps) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.5, delay: index * 0.1 }}
  >
    <Link to={`/proprietati/${property.id}`} className="group block">
      <div className="bg-card rounded-lg overflow-hidden shadow-card hover:shadow-elegant transition-all duration-500">
        {/* Image */}
        <div className="relative aspect-[4/3] overflow-hidden">
          <img
            src={property.image}
            alt={property.title}
            className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
            loading="lazy"
          />
          <div className="absolute top-4 left-4 flex gap-2">
            <span className={`px-3 py-1 rounded-full text-xs font-medium ${
              property.status === "sale"
                ? "bg-primary text-primary-foreground"
                : "bg-secondary text-secondary-foreground"
            }`}>
              {property.status === "sale" ? "Vânzare" : "Închiriere"}
            </span>
          </div>
          <button className="absolute top-4 right-4 w-9 h-9 rounded-full bg-card/80 backdrop-blur-sm flex items-center justify-center text-muted-foreground hover:text-primary transition-colors">
            <Heart className="h-4 w-4" />
          </button>
        </div>

        {/* Content */}
        <div className="p-5">
          <p className="text-primary font-heading text-xl font-bold mb-1">
            {formatPrice(property.price, property.currency, property.status)}
          </p>
          <h3 className="font-heading text-base font-semibold text-card-foreground mb-2 line-clamp-1">
            {property.title}
          </h3>
          <div className="flex items-center gap-1.5 text-muted-foreground text-sm mb-4">
            <MapPin className="h-3.5 w-3.5" />
            {property.area}, {property.city}
          </div>
          <div className="flex items-center gap-4 pt-4 border-t border-border text-sm text-muted-foreground">
            <span className="flex items-center gap-1.5"><Bed className="h-4 w-4" /> {property.rooms}</span>
            <span className="flex items-center gap-1.5"><Bath className="h-4 w-4" /> {property.bathrooms}</span>
            <span className="flex items-center gap-1.5"><Maximize className="h-4 w-4" /> {property.surface} m²</span>
          </div>
        </div>
      </div>
    </Link>
  </motion.div>
);

export default PropertyCard;
