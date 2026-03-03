import { motion } from "framer-motion";
import { Star, Quote } from "lucide-react";

const testimonials = [
  {
    name: "Alexandru M.",
    role: "Cumpărător",
    text: "Echipa True Imobiliare ne-a ajutat să găsim apartamentul perfect. Profesionalism desăvârșit și atenție la fiecare detaliu.",
    rating: 5,
  },
  {
    name: "Ioana D.",
    role: "Vânzătoare",
    text: "Am vândut casa în doar 3 săptămâni la un preț excelent. Recomand cu încredere serviciile lor!",
    rating: 5,
  },
  {
    name: "Cristian P.",
    role: "Investitor",
    text: "Consultanța lor în materie de investiții imobiliare a fost de neprețuit. Randamente excelente datorită recomandărilor lor.",
    rating: 5,
  },
];

const TestimonialsSection = () => (
  <section className="py-20 lg:py-28 bg-cream">
    <div className="container mx-auto px-4 lg:px-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        className="text-center mb-14"
      >
        <p className="text-primary text-sm uppercase tracking-[0.2em] mb-2">Testimoniale</p>
        <h2 className="font-heading text-3xl md:text-4xl font-bold text-foreground mb-4">
          Ce spun clienții noștri
        </h2>
      </motion.div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        {testimonials.map((t, i) => (
          <motion.div
            key={t.name}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: i * 0.1 }}
            className="bg-card rounded-xl p-8 shadow-card relative"
          >
            <Quote className="h-8 w-8 text-primary/20 mb-4" />
            <p className="text-foreground/80 text-sm leading-relaxed mb-6">{t.text}</p>
            <div className="flex gap-1 mb-4">
              {Array.from({ length: t.rating }).map((_, j) => (
                <Star key={j} className="h-4 w-4 fill-primary text-primary" />
              ))}
            </div>
            <div>
              <p className="font-heading font-semibold text-foreground">{t.name}</p>
              <p className="text-muted-foreground text-sm">{t.role}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  </section>
);

export default TestimonialsSection;
