import { useState } from "react";
import { motion } from "framer-motion";
import { Send, Home } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const SellProperty = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", propertyType: "", city: "", surface: "", rooms: "", price: "", description: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Completați câmpurile obligatorii.");
      return;
    }
    toast.success("Cererea a fost trimisă! Vă vom contacta în curând pentru evaluare.");
    setForm({ name: "", email: "", phone: "", propertyType: "", city: "", surface: "", rooms: "", price: "", description: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-card rounded-lg text-sm border border-border focus:outline-none focus:border-primary/50";

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="bg-dark-gradient py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
              Vinde Proprietatea
            </motion.h1>
            <p className="text-secondary-foreground/60">Listează-ți proprietatea cu True Imobiliare</p>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="max-w-2xl mx-auto">
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 mb-8 flex gap-4 items-start">
              <Home className="h-6 w-6 text-primary flex-shrink-0 mt-0.5" />
              <div>
                <h3 className="font-heading font-semibold text-foreground mb-1">Evaluare gratuită</h3>
                <p className="text-muted-foreground text-sm">Completați formularul și un agent vă va contacta pentru o evaluare gratuită a proprietății.</p>
              </div>
            </div>

            <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-4">
              <h2 className="font-heading text-xl font-semibold mb-2">Datele dvs.</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <input type="text" placeholder="Numele dvs. *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} maxLength={100} />
                <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
              </div>
              <input type="tel" placeholder="Telefon *" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={20} />

              <h2 className="font-heading text-xl font-semibold mb-2 pt-4">Detalii proprietate</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                <select value={form.propertyType} onChange={(e) => setForm({ ...form, propertyType: e.target.value })} className={inputClass}>
                  <option value="">Tip proprietate</option>
                  <option value="apartment">Apartament</option>
                  <option value="house">Casă / Vilă</option>
                  <option value="land">Teren</option>
                  <option value="commercial">Comercial</option>
                </select>
                <input type="text" placeholder="Oraș / Zonă" value={form.city} onChange={(e) => setForm({ ...form, city: e.target.value })} className={inputClass} maxLength={100} />
              </div>
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                <input type="text" placeholder="Suprafață (m²)" value={form.surface} onChange={(e) => setForm({ ...form, surface: e.target.value })} className={inputClass} maxLength={10} />
                <input type="text" placeholder="Nr. camere" value={form.rooms} onChange={(e) => setForm({ ...form, rooms: e.target.value })} className={inputClass} maxLength={5} />
                <input type="text" placeholder="Preț estimat (€)" value={form.price} onChange={(e) => setForm({ ...form, price: e.target.value })} className={inputClass} maxLength={15} />
              </div>
              <textarea placeholder="Descriere proprietate" rows={4} value={form.description} onChange={(e) => setForm({ ...form, description: e.target.value })} className={`${inputClass} resize-none`} maxLength={2000} />
              <button type="submit" className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors">
                <Send className="h-4 w-4" /> Trimite cererea
              </button>
            </form>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default SellProperty;
