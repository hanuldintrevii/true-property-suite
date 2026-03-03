import { motion } from "framer-motion";
import { Shield, Award, Target, HeartHandshake, Users } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const About = () => (
  <>
    <Navbar />
    <main className="pt-20 bg-background min-h-screen">
      <div className="bg-dark-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
            Despre Noi
          </motion.h1>
          <p className="text-secondary-foreground/60">Descoperiți povestea True Imobiliare</p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="max-w-3xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }}>
            <h2 className="font-heading text-2xl font-bold mb-6">Cine suntem</h2>
            <p className="text-muted-foreground leading-relaxed mb-6">
              True Imobiliare este o agenție imobiliară premium, fondată cu viziunea de a transforma experiența imobiliară în România. Cu peste 15 ani de experiență, am construit relații de durată bazate pe încredere, transparență și profesionalism.
            </p>
            <p className="text-muted-foreground leading-relaxed mb-12">
              Echipa noastră de specialiști certificați oferă servicii complete de vânzare, închiriere și consultanță investițională, ghidând fiecare client spre cea mai bună decizie imobiliară.
            </p>
          </motion.div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {[
              { icon: Shield, title: "Integritate", desc: "Transparență totală în fiecare tranzacție." },
              { icon: Award, title: "Excelență", desc: "Standarde ridicate în tot ce facem." },
              { icon: Target, title: "Rezultate", desc: "Focusați pe obiectivele clienților noștri." },
              { icon: Users, title: "Echipă", desc: "Profesioniști dedicați cu experiență vastă." },
            ].map((v, i) => (
              <motion.div key={v.title} initial={{ opacity: 0, y: 15 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="flex gap-4 p-6 bg-card rounded-xl border border-border">
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <v.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h3 className="font-heading font-semibold text-foreground mb-1">{v.title}</h3>
                  <p className="text-muted-foreground text-sm">{v.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default About;
