import { useState } from "react";
import { motion } from "framer-motion";
import { MapPin, Phone, Mail, Clock, Send } from "lucide-react";
import { toast } from "sonner";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const Contact = () => {
  const [form, setForm] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!form.name.trim() || !form.email.trim() || !form.message.trim()) {
      toast.error("Completați câmpurile obligatorii.");
      return;
    }
    toast.success("Mesajul a fost trimis cu succes!");
    setForm({ name: "", email: "", phone: "", subject: "", message: "" });
  };

  const inputClass = "w-full px-4 py-3 bg-card rounded-lg text-sm border border-border focus:outline-none focus:border-primary/50";

  return (
    <>
      <Navbar />
      <main className="pt-20 bg-background min-h-screen">
        <div className="bg-dark-gradient py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
              Contact
            </motion.h1>
            <p className="text-secondary-foreground/60">Suntem aici pentru dumneavoastră</p>
          </div>
        </div>
        <div className="container mx-auto px-4 lg:px-8 py-16">
          <div className="grid lg:grid-cols-3 gap-10 max-w-5xl mx-auto">
            {/* Info */}
            <div className="space-y-6">
              {[
                { icon: MapPin, title: "Adresă", text: "Str. Exemplu 10, Sector 1, București" },
                { icon: Phone, title: "Telefon", text: "+40 700 000 000" },
                { icon: Mail, title: "Email", text: "contact@trueimobiliare.ro" },
                { icon: Clock, title: "Program", text: "Luni - Vineri: 9:00 - 18:00" },
              ].map((item) => (
                <div key={item.title} className="flex gap-4">
                  <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                    <item.icon className="h-5 w-5 text-primary" />
                  </div>
                  <div>
                    <p className="font-semibold text-foreground text-sm">{item.title}</p>
                    <p className="text-muted-foreground text-sm">{item.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Form */}
            <div className="lg:col-span-2">
              <form onSubmit={handleSubmit} className="bg-card rounded-xl p-8 border border-border space-y-4">
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="text" placeholder="Numele dvs. *" value={form.name} onChange={(e) => setForm({ ...form, name: e.target.value })} className={inputClass} maxLength={100} />
                  <input type="email" placeholder="Email *" value={form.email} onChange={(e) => setForm({ ...form, email: e.target.value })} className={inputClass} maxLength={255} />
                </div>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                  <input type="tel" placeholder="Telefon" value={form.phone} onChange={(e) => setForm({ ...form, phone: e.target.value })} className={inputClass} maxLength={20} />
                  <input type="text" placeholder="Subiect" value={form.subject} onChange={(e) => setForm({ ...form, subject: e.target.value })} className={inputClass} maxLength={200} />
                </div>
                <textarea placeholder="Mesajul dvs. *" rows={5} value={form.message} onChange={(e) => setForm({ ...form, message: e.target.value })} className={`${inputClass} resize-none`} maxLength={1000} />
                <button type="submit" className="bg-primary text-primary-foreground px-8 py-3 rounded-lg font-medium flex items-center gap-2 hover:bg-gold-dark transition-colors">
                  <Send className="h-4 w-4" /> Trimite mesajul
                </button>
              </form>
            </div>
          </div>
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Contact;
