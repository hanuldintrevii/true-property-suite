import { useState, useMemo } from "react";
import { Link } from "react-router-dom";
import { Search, SlidersHorizontal, Grid3X3, List } from "lucide-react";
import { motion } from "framer-motion";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PropertyCard from "@/components/PropertyCard";
import { properties, propertyTypes, cities } from "@/data/properties";

const Properties = () => {
  const [search, setSearch] = useState("");
  const [type, setType] = useState("");
  const [city, setCity] = useState("");
  const [status, setStatus] = useState("");
  const [sortBy, setSortBy] = useState("newest");
  const [view, setView] = useState<"grid" | "list">("grid");
  const [showFilters, setShowFilters] = useState(false);

  const filtered = useMemo(() => {
    let result = properties.filter((p) => {
      if (search && !p.title.toLowerCase().includes(search.toLowerCase()) && !p.area.toLowerCase().includes(search.toLowerCase())) return false;
      if (type && p.type !== type) return false;
      if (city && p.city !== city) return false;
      if (status && p.status !== status) return false;
      return true;
    });
    if (sortBy === "price-asc") result.sort((a, b) => a.price - b.price);
    if (sortBy === "price-desc") result.sort((a, b) => b.price - a.price);
    return result;
  }, [search, type, city, status, sortBy]);

  const selectClass = "px-4 py-2.5 bg-card rounded-lg text-sm border border-border focus:outline-none focus:border-primary/50 text-foreground";

  return (
    <>
      <Navbar />
      <main className="pt-20 min-h-screen bg-background">
        {/* Header */}
        <div className="bg-dark-gradient py-16">
          <div className="container mx-auto px-4 lg:px-8">
            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="font-heading text-3xl md:text-4xl font-bold text-secondary-foreground mb-2"
            >
              Proprietăți
            </motion.h1>
            <p className="text-secondary-foreground/60">Descoperă proprietăți premium din România</p>
          </div>
        </div>

        <div className="container mx-auto px-4 lg:px-8 py-10">
          {/* Search + Controls */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            <div className="flex-1 relative">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Caută proprietăți..."
                value={search}
                onChange={(e) => setSearch(e.target.value)}
                className="w-full pl-11 pr-4 py-2.5 bg-card rounded-lg text-sm border border-border focus:outline-none focus:border-primary/50"
              />
            </div>
            <button onClick={() => setShowFilters(!showFilters)} className="flex items-center gap-2 px-4 py-2.5 bg-card rounded-lg text-sm border border-border hover:border-primary/50 transition-colors">
              <SlidersHorizontal className="h-4 w-4" /> Filtre
            </button>
            <div className="flex gap-1 bg-card rounded-lg border border-border p-1">
              <button onClick={() => setView("grid")} className={`p-2 rounded ${view === "grid" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                <Grid3X3 className="h-4 w-4" />
              </button>
              <button onClick={() => setView("list")} className={`p-2 rounded ${view === "list" ? "bg-primary text-primary-foreground" : "text-muted-foreground"}`}>
                <List className="h-4 w-4" />
              </button>
            </div>
            <select value={sortBy} onChange={(e) => setSortBy(e.target.value)} className={selectClass}>
              <option value="newest">Cele mai noi</option>
              <option value="price-asc">Preț crescător</option>
              <option value="price-desc">Preț descrescător</option>
            </select>
          </div>

          {/* Filters */}
          {showFilters && (
            <motion.div
              initial={{ opacity: 0, height: 0 }}
              animate={{ opacity: 1, height: "auto" }}
              className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-8 p-6 bg-card rounded-xl border border-border"
            >
              <select value={type} onChange={(e) => setType(e.target.value)} className={selectClass}>
                <option value="">Toate tipurile</option>
                {propertyTypes.map((t) => <option key={t.value} value={t.value}>{t.label}</option>)}
              </select>
              <select value={city} onChange={(e) => setCity(e.target.value)} className={selectClass}>
                <option value="">Toate orașele</option>
                {cities.map((c) => <option key={c} value={c}>{c}</option>)}
              </select>
              <select value={status} onChange={(e) => setStatus(e.target.value)} className={selectClass}>
                <option value="">Vânzare & Închiriere</option>
                <option value="sale">Vânzare</option>
                <option value="rent">Închiriere</option>
              </select>
              <button onClick={() => { setType(""); setCity(""); setStatus(""); setSearch(""); }} className="px-4 py-2.5 text-sm text-primary hover:underline">
                Resetează filtrele
              </button>
            </motion.div>
          )}

          {/* Results */}
          <p className="text-muted-foreground text-sm mb-6">{filtered.length} proprietăți găsite</p>

          <div className={view === "grid" ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8" : "flex flex-col gap-6"}>
            {filtered.map((p, i) => (
              <PropertyCard key={p.id} property={p} index={i} />
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="text-center py-20">
              <p className="text-muted-foreground text-lg">Nu am găsit proprietăți cu aceste criterii.</p>
              <button onClick={() => { setType(""); setCity(""); setStatus(""); setSearch(""); }} className="text-primary mt-2 hover:underline">
                Resetează filtrele
              </button>
            </div>
          )}
        </div>
      </main>
      <Footer />
    </>
  );
};

export default Properties;
