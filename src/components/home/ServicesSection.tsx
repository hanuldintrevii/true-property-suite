import { motion } from "framer-motion";
import { Home, Key, TrendingUp, BarChart3, Users } from "lucide-react";

const services = [
  { icon: Home, title: "Vânzare Proprietăți", desc: "Strategii de vânzare personalizate pentru a obține cel mai bun preț pentru proprietatea dumneavoastră." },
  { icon: Key, title: "Închiriere", desc: "Găsim chiriași de încredere și gestionăm întregul proces de închiriere." },
  { icon: TrendingUp, title: "Consultanță Investiții", desc: "Analize de piață și recomandări pentru investiții imobiliare profitabile." },
  { icon: BarChart3, title: "Evaluare Proprietăți", desc: "Evaluări profesionale bazate pe datele actuale ale pieței imobiliare." },
  { icon: Users, title: "Consultanță Imobiliară", desc: "Ghidare expertă în fiecare etapă a tranzacției imobiliare." },
];

const ServicesSection = () => (
  <section className="py-20 lg:py-28 bg-dark-gradient">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Servicii</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-4">
          Servicii Profesionale
        </h2>
        <p className="text-secondary-foreground/60 max-w-xl mx-auto">
          Oferim o gamă completă de servicii imobiliare, adaptate nevoilor dumneavoastră.
        </p>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {services.map((s, i) => (
          <motion.div
            key={s.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="group p-8 rounded-xl border border-dark-light/30 hover:border-primary/40 transition-all duration-500 bg-dark-medium/50 hover:bg-dark-medium"
          >
            <div className="w-14 h-14 rounded-xl bg-primary/10 flex items-center justify-center mb-5 group-hover:bg-primary/20 transition-colors">
              <s.icon className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-heading text-xl font-semibold text-secondary-foreground mb-3">{s.title}</h3>
            <p className="text-secondary-foreground/50 text-sm leading-relaxed">{s.desc}</p>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default ServicesSection;
