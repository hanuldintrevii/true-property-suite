import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Facebook, Instagram, Linkedin } from "lucide-react";
import logo from "@/assets/logo.png";

const Footer = () => (
  <footer className="bg-secondary text-secondary-foreground">
    <div className="container mx-auto px-4 lg:px-8 py-16">
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
        {/* Brand */}
        <div>
          <img src={logo} alt="True Imobiliare" className="h-10 mb-4" />
          <p className="text-secondary-foreground/60 text-sm leading-relaxed">
            Agenție imobiliară premium din România. Oferim servicii profesionale de vânzare, închiriere și consultanță investițională.
          </p>
          <div className="flex gap-3 mt-6">
            {[Facebook, Instagram, Linkedin].map((Icon, i) => (
              <a key={i} href="#" className="w-10 h-10 rounded-full border border-dark-light/40 flex items-center justify-center text-secondary-foreground/60 hover:border-primary hover:text-primary transition-colors">
                <Icon className="h-4 w-4" />
              </a>
            ))}
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Link-uri rapide</h4>
          <div className="flex flex-col gap-2.5">
            {[
              { href: "/proprietati", label: "Proprietăți" },
              { href: "/servicii", label: "Servicii" },
              { href: "/despre", label: "Despre noi" },
              { href: "/blog", label: "Blog" },
              { href: "/contact", label: "Contact" },
              { href: "/vinde-proprietate", label: "Vinde Proprietatea" },
            ].map((link) => (
              <Link key={link.href} to={link.href} className="text-sm text-secondary-foreground/60 hover:text-primary transition-colors">
                {link.label}
              </Link>
            ))}
          </div>
        </div>

        {/* Services */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Servicii</h4>
          <div className="flex flex-col gap-2.5 text-sm text-secondary-foreground/60">
            <span>Vânzare Proprietăți</span>
            <span>Închiriere</span>
            <span>Consultanță Investiții</span>
            <span>Evaluare Proprietăți</span>
            <span>Consultanță Imobiliară</span>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className="font-heading text-lg font-semibold mb-4 text-primary">Contact</h4>
          <div className="flex flex-col gap-3">
            {[
              { icon: MapPin, text: "Str. Exemplu 10, București, România" },
              { icon: Phone, text: "+40 700 000 000" },
              { icon: Mail, text: "contact@trueimobiliare.ro" },
            ].map(({ icon: Icon, text }, i) => (
              <div key={i} className="flex items-start gap-3 text-sm text-secondary-foreground/60">
                <Icon className="h-4 w-4 mt-0.5 text-primary flex-shrink-0" />
                {text}
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
    <div className="border-t border-dark-light/30">
      <div className="container mx-auto px-4 lg:px-8 py-6 flex flex-col md:flex-row justify-between items-center gap-4">
        <p className="text-xs text-secondary-foreground/40">
          © {new Date().getFullYear()} True Imobiliare. Toate drepturile rezervate.
        </p>
        <div className="flex gap-6 text-xs text-secondary-foreground/40">
          <a href="#" className="hover:text-primary transition-colors">Politica de Confidențialitate</a>
          <a href="#" className="hover:text-primary transition-colors">Termeni și Condiții</a>
          <a href="#" className="hover:text-primary transition-colors">Cookies</a>
        </div>
      </div>
    </div>
  </footer>
);

export default Footer;
