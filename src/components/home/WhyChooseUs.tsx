import { motion } from "framer-motion";
import { Shield, Award, Target, HeartHandshake } from "lucide-react";

const reasons = [
  { icon: Shield, title: "Încredere", desc: "Peste 15 ani de experiență și sute de tranzacții reușite." },
  { icon: Award, title: "Agenți Profesioniști", desc: "Echipă de specialiști certificați în domeniul imobiliar." },
  { icon: Target, title: "Expertiză de Piață", desc: "Cunoaștere profundă a pieței imobiliare românești." },
  { icon: HeartHandshake, title: "Consultanță Personalizată", desc: "Fiecare client beneficiază de atenție individualizată." },
];

const WhyChooseUs = () => (
  <section className="py-20 lg:py-28 bg-background">
    <div className="container mx-auto px-4 lg:px-8">
      <div className="grid lg:grid-cols-2 gap-16 items-center">
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
        >
          <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">De ce noi</p>
          <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-6">
            De ce să alegi True Imobiliare?
          </h2>
          <p className="text-muted-foreground mb-10 leading-relaxed">
            Suntem dedicați excelenței în imobiliare. Combinăm expertiza locală cu standarde internaționale pentru a oferi o experiență de neegalat.
          </p>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {reasons.map((r, i) => (
              <motion.div
                key={r.title}
                initial={{ opacity: 0, y: 15 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.1 }}
                className="flex gap-4"
              >
                <div className="w-12 h-12 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                  <r.icon className="h-5 w-5 text-primary" />
                </div>
                <div>
                  <h4 className="font-heading text-base font-semibold text-foreground mb-1">{r.title}</h4>
                  <p className="text-muted-foreground text-sm">{r.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 30 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="relative"
        >
          <div className="bg-dark-gradient rounded-2xl p-10 text-center">
            <p className="text-primary text-sm uppercase tracking-widest mb-6">Rezultate</p>
            <div className="grid grid-cols-2 gap-8">
              {[
                { val: "500+", label: "Proprietăți listate" },
                { val: "98%", label: "Clienți mulțumiți" },
                { val: "€2M+", label: "Valoare tranzacții" },
                { val: "15+", label: "Ani pe piață" },
              ].map((s) => (
                <div key={s.label}>
                  <p className="font-heading text-3xl font-bold text-primary mb-1">{s.val}</p>
                  <p className="text-secondary-foreground/50 text-xs">{s.label}</p>
                </div>
              ))}
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  </section>
);

export default WhyChooseUs;
