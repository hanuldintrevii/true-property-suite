import { useParams, Link } from "react-router-dom";
import { ArrowLeft, MapPin, Bed, Bath, Maximize, Calendar, Building, Zap, Car, Phone, Mail, Heart, Share2 } from "lucide-react";
import { motion } from "framer-motion";
import { useState } from "react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, formatPrice } from "@/data/properties";

const PropertyDetail = () => {
  const { id } = useParams();
  const property = properties.find((p) => p.id === id);
  const [activeImage, setActiveImage] = useState(0);
  const [contactForm, setContactForm] = useState({ name: "", email: "", phone: "", message: "" });

  if (!property) {
    return (
      <>
        <Navbar />
        <main className="pt-20 min-h-screen flex items-center justify-center bg-background">
          <div className="text-center">
            <h1 className="font-heading text-2xl font-bold mb-4">Proprietatea nu a fost găsită</h1>
            <Link to="/proprietati" className="text-primary hover:underline">← Înapoi la proprietăți</Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  const similar = properties.filter((p) => p.id !== property.id && p.type === property.type).slice(0, 3);

  const handleContact = (e: React.FormEvent) => {
    e.preventDefault();
    if (!contactForm.name.trim() || !contactForm.email.trim()) {
      toast.error("Completați câmpurile obligatorii.");
      return;
    }
    toast.success("Cererea a fost trimisă! Agentul vă va contacta în curând.");
    setContactForm({ name: "", email: "", phone: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-muted rounded-lg text-sm border border-border focus:outline-none focus:border-primary/50";

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="container mx-auto px-4 lg:px-8 py-8">
          {/* Breadcrumb */}
          <Link to="/proprietati" className="inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-primary transition-colors mb-6">
            <ArrowLeft className="h-4 w-4" /> Toate proprietățile
          </Link>

          <div className="grid lg:grid-cols-3 gap-10">
            {/* Main Content */}
            <div className="lg:col-span-2">
              {/* Gallery */}
              <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="mb-8">
                <div className="aspect-[16/10] rounded-xl overflow-hidden mb-3">
                  <img src={property.images[activeImage]} alt={property.title} className="w-full h-full object-cover" />
                </div>
                <div className="flex gap-3">
                  {property.images.map((img, i) => (
                    <button key={i} onClick={() => setActiveImage(i)} className={`w-24 h-16 rounded-lg overflow-hidden border-2 transition-colors ${i === activeImage ? "border-primary" : "border-transparent opacity-60"}`}>
                      <img src={img} alt="" className="w-full h-full object-cover" />
                    </button>
                  ))}
                </div>
              </motion.div>

              {/* Info */}
              <div className="flex flex-wrap items-start justify-between gap-4 mb-6">
                <div>
                  <h1 className="font-heading text-2xl md:text-3xl font-bold text-foreground mb-2">{property.title}</h1>
                  <div className="flex items-center gap-2 text-muted-foreground">
                    <MapPin className="h-4 w-4 text-primary" /> {property.area}, {property.city}
                  </div>
                </div>
                <div className="text-right">
                  <p className="font-heading text-2xl md:text-3xl font-bold text-primary">{formatPrice(property.price, property.currency, property.status)}</p>
                  <span className={`inline-block mt-1 px-3 py-1 rounded-full text-xs font-medium ${property.status === "sale" ? "bg-primary/10 text-primary" : "bg-secondary text-secondary-foreground"}`}>
                    {property.status === "sale" ? "Vânzare" : "Închiriere"}
                  </span>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8">
                {[
                  { icon: Bed, label: "Camere", value: property.rooms },
                  { icon: Bath, label: "Băi", value: property.bathrooms },
                  { icon: Maximize, label: "Suprafață", value: `${property.surface} m²` },
                  { icon: Calendar, label: "An", value: property.year },
                ].map((s) => (
                  <div key={s.label} className="bg-muted rounded-lg p-4 text-center">
                    <s.icon className="h-5 w-5 text-primary mx-auto mb-2" />
                    <p className="text-xs text-muted-foreground">{s.label}</p>
                    <p className="font-semibold text-foreground">{s.value}</p>
                  </div>
                ))}
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Descriere</h2>
                <p className="text-muted-foreground leading-relaxed">{property.description}</p>
              </div>

              {/* Details */}
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Detalii</h2>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
                  {[
                    { icon: Building, label: "Etaj", value: property.floor ? `${property.floor} / ${property.totalFloors}` : "N/A" },
                    { icon: Car, label: "Parcare", value: property.parking ? "Da" : "Nu" },
                    { icon: Zap, label: "Clasă energetică", value: property.energyClass },
                  ].map((d) => (
                    <div key={d.label} className="flex items-center gap-3 p-3 bg-muted rounded-lg">
                      <d.icon className="h-4 w-4 text-primary" />
                      <div>
                        <p className="text-xs text-muted-foreground">{d.label}</p>
                        <p className="text-sm font-medium text-foreground">{d.value}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Amenities */}
              <div className="mb-8">
                <h2 className="font-heading text-xl font-semibold mb-4">Facilități</h2>
                <div className="flex flex-wrap gap-2">
                  {property.amenities.map((a) => (
                    <span key={a} className="px-4 py-2 bg-primary/10 text-primary rounded-full text-sm">{a}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-1">
              <div className="sticky top-28 space-y-6">
                {/* Actions */}
                <div className="flex gap-3">
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-muted rounded-lg text-sm hover:bg-accent transition-colors">
                    <Heart className="h-4 w-4" /> Salvează
                  </button>
                  <button className="flex-1 flex items-center justify-center gap-2 py-3 bg-muted rounded-lg text-sm hover:bg-accent transition-colors">
                    <Share2 className="h-4 w-4" /> Distribuie
                  </button>
                </div>

                {/* Agent */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <p className="text-xs text-muted-foreground mb-1">Agent</p>
                  <p className="font-heading font-semibold text-foreground mb-4">{property.agent}</p>
                  <div className="flex flex-col gap-2">
                    <a href="tel:+40700000000" className="flex items-center justify-center gap-2 py-2.5 bg-primary text-primary-foreground rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
                      <Phone className="h-4 w-4" /> Sună agentul
                    </a>
                    <a href="https://wa.me/40700000000" target="_blank" rel="noopener noreferrer" className="flex items-center justify-center gap-2 py-2.5 border border-border rounded-lg text-sm hover:border-primary hover:text-primary transition-colors">
                      WhatsApp
                    </a>
                  </div>
                </div>

                {/* Contact Form */}
                <div className="bg-card rounded-xl p-6 border border-border">
                  <h3 className="font-heading text-lg font-semibold mb-4">Trimite o întrebare</h3>
                  <form onSubmit={handleContact} className="space-y-3">
                    <input type="text" placeholder="Numele dvs. *" value={contactForm.name} onChange={(e) => setContactForm({ ...contactForm, name: e.target.value })} className={inputClass} maxLength={100} />
                    <input type="email" placeholder="Email *" value={contactForm.email} onChange={(e) => setContactForm({ ...contactForm, email: e.target.value })} className={inputClass} maxLength={255} />
                    <input type="tel" placeholder="Telefon" value={contactForm.phone} onChange={(e) => setContactForm({ ...contactForm, phone: e.target.value })} className={inputClass} maxLength={20} />
                    <textarea placeholder="Mesaj" rows={3} value={contactForm.message} onChange={(e) => setContactForm({ ...contactForm, message: e.target.value })} className={`${inputClass} resize-none`} maxLength={1000} />
                    <button type="submit" className="w-full bg-primary text-primary-foreground py-3 rounded-lg text-sm font-medium hover:bg-gold-dark transition-colors">
                      Trimite
                    </button>
                  </form>
                </div>
              </div>
            </div>
          </div>

          {/* Similar */}
          {similar.length > 0 && (
            <section className="mt-16 pt-16 border-t border-border">
              <h2 className="font-heading text-2xl font-bold mb-8">Proprietăți similare</h2>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {similar.map((p, i) => <PropertyCard key={p.id} property={p} index={i} />)}
              </div>
            </section>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default PropertyDetail;
