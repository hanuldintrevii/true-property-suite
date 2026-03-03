import { motion } from "framer-motion";
import { Home, Key, TrendingUp, BarChart3, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const services = [
  { icon: Home, title: "Vânzare Proprietăți", desc: "Strategii personalizate de marketing și vânzare pentru a maximiza valoarea proprietății dumneavoastră. Evaluare profesională, fotografii de calitate și promovare pe platformele de top." },
  { icon: Key, title: "Închiriere", desc: "Gestionăm complet procesul de închiriere: de la selecția chiriașilor și negocierea contractului până la administrarea proprietății." },
  { icon: TrendingUp, title: "Consultanță Investiții", desc: "Analize aprofundate ale pieței și identificarea celor mai profitabile oportunități de investiții imobiliare din România." },
  { icon: BarChart3, title: "Evaluare Proprietăți", desc: "Rapoarte de evaluare profesionale bazate pe date actualizate ale pieței, comparabile și tendințe locale." },
  { icon: Users, title: "Consultanță Imobiliară", desc: "Asistență completă în toate aspectele tranzacției: juridic, financiar, tehnic. Vă ghidăm de la prima vizionare până la semnarea contractului." },
];

const Services = () => (
  <>
    <Navbar />
    <main className="pt-20 bg-background min-h-screen">
      <div className="bg-dark-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
            Serviciile Noastre
          </motion.h1>
          <p className="text-secondary-foreground/60">Soluții complete pentru nevoile dumneavoastră imobiliare</p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid gap-8 max-w-4xl mx-auto">
          {services.map((s, i) => (
            <motion.div key={s.title} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex flex-col md:flex-row gap-6 p-8 bg-card rounded-xl border border-border">
              <div className="w-16 h-16 rounded-xl bg-primary/10 flex items-center justify-center flex-shrink-0">
                <s.icon className="h-7 w-7 text-primary" />
              </div>
              <div>
                <h2 className="font-heading text-xl font-semibold text-foreground mb-3">{s.title}</h2>
                <p className="text-muted-foreground leading-relaxed">{s.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Services;
