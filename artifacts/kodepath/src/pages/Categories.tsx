import { Link } from "wouter";
import { motion } from "framer-motion";
import { Globe, Smartphone, Brain, Blocks, Lightbulb, Shield, Server, LayoutTemplate } from "lucide-react";
import { languages } from "@/data/languages";

const categoryDetails = [
  { id: "Web Dev", icon: Globe, color: "bg-blue-50 text-blue-600", border: "border-blue-100", hover: "hover:border-blue-300 hover:shadow-blue-500/10", desc: "Build websites and web applications that run in the browser." },
  { id: "Frontend", icon: LayoutTemplate, color: "bg-pink-50 text-pink-600", border: "border-pink-100", hover: "hover:border-pink-300 hover:shadow-pink-500/10", desc: "Focus on the visual, interactive parts of websites." },
  { id: "Backend", icon: Server, color: "bg-indigo-50 text-indigo-600", border: "border-indigo-100", hover: "hover:border-indigo-300 hover:shadow-indigo-500/10", desc: "Build servers, databases, and APIs behind the scenes." },
  { id: "Mobile Dev", icon: Smartphone, color: "bg-cyan-50 text-cyan-600", border: "border-cyan-100", hover: "hover:border-cyan-300 hover:shadow-cyan-500/10", desc: "Create apps for iOS and Android smartphones." },
  { id: "AI/ML", icon: Brain, color: "bg-purple-50 text-purple-600", border: "border-purple-100", hover: "hover:border-purple-300 hover:shadow-purple-500/10", desc: "Train models, build neural networks, and work with AI." },
  { id: "Data Science", icon: Lightbulb, color: "bg-orange-50 text-orange-600", border: "border-orange-100", hover: "hover:border-orange-300 hover:shadow-orange-500/10", desc: "Analyze massive datasets and visualize information." },
  { id: "Game Dev", icon: Blocks, color: "bg-green-50 text-green-600", border: "border-green-100", hover: "hover:border-green-300 hover:shadow-green-500/10", desc: "Build interactive video games for PC, console, or mobile." },
  { id: "Systems", icon: Shield, color: "bg-slate-100 text-slate-700", border: "border-slate-200", hover: "hover:border-slate-400 hover:shadow-slate-500/10", desc: "Write low-level code for operating systems and hardware." },
];

export default function Categories() {
  const getLanguageCount = (catName: string) => {
    return languages.filter(l => l.categories.includes(catName)).length;
  };

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-16">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Categories</h1>
          <p className="text-slate-600 max-w-2xl mx-auto text-lg">
            Programming is vast. Select an area of interest to discover the tools built specifically for that domain.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6">
          {categoryDetails.map((cat, idx) => (
            <Link key={cat.id} href={`/languages?category=${encodeURIComponent(cat.id)}`}>
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: idx * 0.05 }}
                className={`bg-white rounded-3xl p-8 border ${cat.border} ${cat.hover} shadow-sm transition-all duration-300 h-full flex flex-col`}
              >
                <div className={`w-16 h-16 rounded-2xl ${cat.color} flex items-center justify-center mb-6`}>
                  <cat.icon size={32} />
                </div>
                <h2 className="text-xl font-bold text-slate-900 mb-2">{cat.id}</h2>
                <p className="text-slate-500 text-sm leading-relaxed flex-grow mb-6">
                  {cat.desc}
                </p>
                <div className="inline-flex items-center text-sm font-semibold text-slate-400 bg-slate-50 px-3 py-1.5 rounded-lg w-fit">
                  {getLanguageCount(cat.id)} Languages
                </div>
              </motion.div>
            </Link>
          ))}
        </div>

      </div>
    </div>
  );
}
