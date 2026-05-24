import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Lightbulb, Globe, Smartphone, Brain, Blocks, Server, LayoutTemplate, Shield, Search } from "lucide-react";
import { languages } from "@/data/languages";
import LanguageCard from "@/components/LanguageCard";

const whyLearnItems = [
  { icon: Globe, title: "Endless Opportunities", desc: "Every industry needs developers — from healthcare to entertainment." },
  { icon: Brain, title: "Problem Solving", desc: "Programming sharpens your logical thinking and creativity." },
  { icon: Blocks, title: "Build Anything", desc: "Turn ideas into real products: apps, games, websites, and more." },
  { icon: Lightbulb, title: "Always Evolving", desc: "The field never stagnates — there's always something new to discover." },
];

const allCategories = [
  { name: "Web Dev", icon: Globe, color: "bg-blue-50 text-blue-600", border: "border-blue-100", hover: "hover:border-blue-300" },
  { name: "Frontend", icon: LayoutTemplate, color: "bg-pink-50 text-pink-600", border: "border-pink-100", hover: "hover:border-pink-300" },
  { name: "Backend", icon: Server, color: "bg-indigo-50 text-indigo-600", border: "border-indigo-100", hover: "hover:border-indigo-300" },
  { name: "Mobile Dev", icon: Smartphone, color: "bg-cyan-50 text-cyan-600", border: "border-cyan-100", hover: "hover:border-cyan-300" },
  { name: "AI/ML", icon: Brain, color: "bg-purple-50 text-purple-600", border: "border-purple-100", hover: "hover:border-purple-300" },
  { name: "Data Science", icon: Lightbulb, color: "bg-orange-50 text-orange-600", border: "border-orange-100", hover: "hover:border-orange-300" },
  { name: "Game Dev", icon: Blocks, color: "bg-green-50 text-green-600", border: "border-green-100", hover: "hover:border-green-300" },
  { name: "Systems", icon: Shield, color: "bg-slate-100 text-slate-700", border: "border-slate-200", hover: "hover:border-slate-400" },
];

export default function Home() {
  const trendingIds = ["python", "javascript", "rust", "go"];
  const trendingLanguages = trendingIds.map(id => languages.find(l => l.id === id)!).filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        {/* Dot-grid background */}
        <div
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage: "radial-gradient(circle, #cbd5e1 1px, transparent 1px)",
            backgroundSize: "28px 28px",
            opacity: 0.5,
          }}
        />
        {/* Gradient overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-white/60 via-slate-50/80 to-slate-50 pointer-events-none" />
        <div className="absolute top-0 right-0 w-[600px] h-[500px] bg-gradient-to-bl from-primary/8 via-secondary/5 to-transparent rounded-full pointer-events-none" />

        <div className="container mx-auto px-4 relative z-10 text-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="max-w-3xl mx-auto"
          >
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-600 mb-8 shadow-sm">
              <Compass size={16} className="text-secondary" />
              <span>Your coding journey starts here</span>
            </div>

            <h1 className="text-5xl md:text-7xl font-extrabold text-slate-900 tracking-tight mb-6">
              Discover Your First <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-secondary">
                Programming Language
              </span>
            </h1>

            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed max-w-2xl mx-auto">
              Don't know where to start? Explore our curated map of the programming world, find the right tool for your goals, and begin building.
            </p>

            {/* Search bar */}
            <div className="relative max-w-md mx-auto mb-8">
              <Search size={18} className="absolute left-4 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
              <Link href="/languages">
                <input
                  type="text"
                  readOnly
                  placeholder="Search a language..."
                  data-testid="input-hero-search"
                  className="w-full pl-11 pr-4 py-3.5 rounded-xl bg-white border border-slate-200 shadow-sm text-slate-500 placeholder:text-slate-400 text-sm cursor-pointer focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </Link>
            </div>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/languages" className="w-full sm:w-auto">
                <div
                  data-testid="btn-explore-languages"
                  className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full"
                >
                  Explore Languages
                  <ArrowRight size={18} />
                </div>
              </Link>
              <Link href="/quiz" className="w-full sm:w-auto">
                <div
                  data-testid="btn-take-quiz"
                  className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:scale-105 transition-all flex items-center justify-center w-full"
                >
                  Take the Quiz
                </div>
              </Link>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Trending Section */}
      <section className="py-20 bg-white">
        <div className="container mx-auto px-4">
          <div className="flex items-center justify-between mb-12">
            <h2 className="text-3xl font-bold text-slate-900">Trending Languages</h2>
            <Link href="/languages" className="text-primary font-medium hover:underline flex items-center gap-1">
              View All <ArrowRight size={16} />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
            {trendingLanguages.map((lang, idx) => (
              <LanguageCard key={lang.id} language={lang} index={idx} />
            ))}
          </div>
        </div>
      </section>

      {/* All 8 Categories — 4x2 grid */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What do you want to build?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">
            Languages are just tools to build things. Pick a field you're interested in to see which tools are best suited for the job.
          </p>

          <div className="grid grid-cols-2 sm:grid-cols-4 gap-5">
            {allCategories.map((cat, idx) => (
              <Link key={cat.name} href={`/languages?category=${encodeURIComponent(cat.name)}`}>
                <motion.div
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.06 }}
                  whileHover={{ y: -4 }}
                  data-testid={`card-category-home-${idx}`}
                  className={`bg-white rounded-2xl p-5 text-center shadow-sm border ${cat.border} ${cat.hover} transition-all duration-200 group`}
                >
                  <div className={`w-14 h-14 mx-auto rounded-2xl ${cat.color} flex items-center justify-center mb-3 group-hover:scale-110 transition-transform`}>
                    <cat.icon size={28} />
                  </div>
                  <h3 className="font-bold text-sm text-slate-900">{cat.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* Why Learn Programming */}
      <section className="py-20 bg-white border-t border-slate-100">
        <div className="container mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-slate-900 mb-4">Why Learn Programming?</h2>
            <p className="text-slate-600 max-w-xl mx-auto">The ability to code is one of the most valuable skills you can develop in the modern world.</p>
          </div>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {whyLearnItems.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: idx * 0.1 }}
                className="bg-slate-50 rounded-2xl p-6 border border-slate-100"
              >
                <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center mb-4">
                  <item.icon size={24} className="text-primary" />
                </div>
                <h3 className="font-bold text-slate-900 mb-2">{item.title}</h3>
                <p className="text-slate-500 text-sm leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Daily Tip */}
      <section className="py-16 bg-slate-50">
        <div className="container mx-auto px-4 max-w-4xl">
          <div className="bg-gradient-to-r from-primary to-secondary rounded-3xl p-1 shadow-xl">
            <div className="bg-white rounded-[22px] p-8 md:p-12 flex flex-col md:flex-row items-center gap-8 text-center md:text-left">
              <div className="w-20 h-20 bg-amber-100 rounded-2xl flex items-center justify-center shrink-0">
                <Lightbulb size={40} className="text-amber-500" />
              </div>
              <div>
                <h3 className="text-sm font-bold text-primary tracking-wider uppercase mb-2">Daily Coding Tip</h3>
                <p className="text-xl md:text-2xl font-medium text-slate-800 leading-snug">
                  "Don't memorize syntax. Learn the concepts. Syntax can be searched, but problem-solving is a skill you practice."
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
