import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import { Calendar, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const posts = [
  { id: "1", title: "Tendințe pe piața imobiliară în 2026", excerpt: "Analiză completă a tendințelor și previziunilor pentru piața imobiliară românească.", date: "28 Feb 2026", category: "Analiză" },
  { id: "2", title: "Ghid complet: Cum să cumperi primul apartament", excerpt: "Tot ce trebuie să știi înainte de a face cea mai importantă achiziție din viață.", date: "20 Feb 2026", category: "Ghid" },
  { id: "3", title: "Investiții imobiliare: Randamente în 2026", excerpt: "Care sunt cele mai profitabile zone și tipuri de proprietăți pentru investiții.", date: "15 Feb 2026", category: "Investiții" },
  { id: "4", title: "Cum să îți pregătești proprietatea pentru vânzare", excerpt: "Sfaturi practice pentru a maximiza valoarea proprietății tale la vânzare.", date: "10 Feb 2026", category: "Sfaturi" },
];

const Blog = () => (
  <>
    <Navbar />
    <main className="pt-20 bg-background min-h-screen">
      <div className="bg-dark-gradient py-16">
        <div className="container mx-auto px-4 lg:px-8">
          <motion.h1 initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2">
            Blog & Insights
          </motion.h1>
          <p className="text-secondary-foreground/60">Știri, analize și sfaturi din piața imobiliară</p>
        </div>
      </div>
      <div className="container mx-auto px-4 lg:px-8 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
          {posts.map((post, i) => (
            <motion.article key={post.id} initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: i * 0.1 }} className="bg-card rounded-xl p-8 border border-border hover:shadow-elegant transition-shadow group">
              <span className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs rounded-full mb-4">{post.category}</span>
              <h2 className="font-heading text-xl font-semibold text-foreground mb-3 group-hover:text-primary transition-colors">{post.title}</h2>
              <p className="text-muted-foreground text-sm leading-relaxed mb-4">{post.excerpt}</p>
              <div className="flex items-center justify-between">
                <span className="flex items-center gap-1.5 text-xs text-muted-foreground"><Calendar className="h-3.5 w-3.5" /> {post.date}</span>
                <span className="text-primary text-sm flex items-center gap-1 group-hover:gap-2 transition-all">Citește <ArrowRight className="h-3.5 w-3.5" /></span>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default Blog;
