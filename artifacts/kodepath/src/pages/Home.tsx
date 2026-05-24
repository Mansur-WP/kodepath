import { Link } from "wouter";
import { motion } from "framer-motion";
import { ArrowRight, Compass, Code, Brain, Blocks, Lightbulb } from "lucide-react";
import { languages } from "@/data/languages";
import LanguageCard from "@/components/LanguageCard";

export default function Home() {
  const trendingIds = ["python", "javascript", "rust", "go"];
  const trendingLanguages = trendingIds.map(id => languages.find(l => l.id === id)!).filter(Boolean);

  const categories = [
    { name: "Web Dev", icon: Code, color: "bg-blue-50 text-blue-600" },
    { name: "AI/ML", icon: Brain, color: "bg-purple-50 text-purple-600" },
    { name: "Game Dev", icon: Blocks, color: "bg-green-50 text-green-600" },
    { name: "Data Science", icon: Lightbulb, color: "bg-orange-50 text-orange-600" },
  ];

  return (
    <div className="min-h-screen bg-slate-50 flex flex-col">
      {/* Hero Section */}
      <section className="relative pt-20 pb-32 overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-primary/10 via-transparent to-transparent pointer-events-none" />
        
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
            
            <p className="text-lg md:text-xl text-slate-600 mb-10 leading-relaxed">
              Don't know where to start? Explore our curated map of the programming world, find the right tool for your goals, and begin building.
            </p>
            
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/languages" className="w-full sm:w-auto">
                <div className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg shadow-primary/25 hover:bg-primary/90 hover:scale-105 transition-all flex items-center justify-center gap-2 w-full">
                  Explore Languages
                  <ArrowRight size={18} />
                </div>
              </Link>
              <Link href="/quiz" className="w-full sm:w-auto">
                <div className="px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 shadow-sm hover:bg-slate-50 hover:scale-105 transition-all flex items-center justify-center w-full">
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

      {/* Categories Snippet */}
      <section className="py-20 bg-slate-50 border-t border-slate-100">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-slate-900 mb-4">What do you want to build?</h2>
          <p className="text-slate-600 mb-12 max-w-2xl mx-auto">Languages are just tools to build things. Pick a field you're interested in to see which tools are best suited for the job.</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {categories.map((cat, idx) => (
              <Link key={cat.name} href={`/languages?category=${encodeURIComponent(cat.name)}`}>
                <motion.div 
                  initial={{ opacity: 0, scale: 0.95 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ delay: idx * 0.1 }}
                  className="bg-white rounded-2xl p-6 text-center shadow-sm border border-slate-200 hover:shadow-md hover:border-primary/50 transition-all group"
                >
                  <div className={`w-16 h-16 mx-auto rounded-2xl ${cat.color} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                    <cat.icon size={32} />
                  </div>
                  <h3 className="font-bold text-lg text-slate-900">{cat.name}</h3>
                </motion.div>
              </Link>
            ))}
          </div>
          
          <div className="mt-12">
            <Link href="/categories">
              <div className="inline-flex px-6 py-3 bg-white border border-slate-200 rounded-xl font-medium text-slate-700 hover:bg-slate-50 transition-colors">
                View all categories
              </div>
            </Link>
          </div>
        </div>
      </section>
      
      {/* Daily Tip */}
      <section className="py-16">
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
