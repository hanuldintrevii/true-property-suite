import { useState } from "react";
import { motion } from "framer-motion";
import { Send } from "lucide-react";
import { toast } from "sonner";

const CTASection = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.phone.trim()) {
      toast.error("Vă rugăm completați toate câmpurile obligatorii.");
      return;
    }
    toast.success("Mesajul a fost trimis cu succes! Vă vom contacta în curând.");
    setForm({ name: "", email: "", phone: "", message: "" });
  };

  return (
    <section className="py-20 lg:py-28 bg-dark-gradient">
      <div className="container mx-auto px-4 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
          >
            <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Contact rapid</p>
            <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-6">
              Sunteți interesat de o proprietate?
            </h2>
            <p className="text-secondary-foreground/60 leading-relaxed mb-8">
              Completați formularul și un consultant dedicat vă va contacta în cel mai scurt timp pentru a vă ajuta să găsiți proprietatea ideală.
            </p>
            <div className="space-y-4 text-secondary-foreground/50 text-sm">
              <p>📞 +40 700 000 000</p>
              <p>✉️ contact@trueimobiliare.ro</p>
              <p>📍 Str. Exemplu 10, București</p>
            </div>
          </motion.div>

          <motion.form
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            onSubmit={handleSubmit}
            className="bg-dark-medium/80 backdrop-blur-sm rounded-xl p-8 border border-dark-light/30"
          >
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mb-4">
              <input
                type="text"
                placeholder="Numele dvs. *"
                value={form.name}
                onChange={(e) => setForm({ ...form, name: e.target.value })}
                className="w-full px-4 py-3 bg-dark/50 rounded-lg text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 border border-dark-light/30 focus:outline-none focus:border-primary/50"
                maxLength={100}
              />
              <input
                type="email"
                placeholder="Email *"
                value={form.email}
                onChange={(e) => setForm({ ...form, email: e.target.value })}
                className="w-full px-4 py-3 bg-dark/50 rounded-lg text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 border border-dark-light/30 focus:outline-none focus:border-primary/50"
                maxLength={255}
              />
            </div>
            <input
              type="tel"
              placeholder="Telefon *"
              value={form.phone}
              onChange={(e) => setForm({ ...form, phone: e.target.value })}
              className="w-full px-4 py-3 bg-dark/50 rounded-lg text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 border border-dark-light/30 focus:outline-none focus:border-primary/50 mb-4"
              maxLength={20}
            />
            <textarea
              placeholder="Mesajul dvs."
              rows={4}
              value={form.message}
              onChange={(e) => setForm({ ...form, message: e.target.value })}
              className="w-full px-4 py-3 bg-dark/50 rounded-lg text-sm text-secondary-foreground placeholder:text-secondary-foreground/30 border border-dark-light/30 focus:outline-none focus:border-primary/50 mb-6 resize-none"
              maxLength={1000}
            />
            <button
              type="submit"
              className="w-full bg-primary text-primary-foreground py-3.5 rounded-lg font-medium flex items-center justify-center gap-2 hover:bg-gold-dark transition-colors"
            >
              <Send className="h-4 w-4" /> Trimite mesajul
            </button>
          </motion.form>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
