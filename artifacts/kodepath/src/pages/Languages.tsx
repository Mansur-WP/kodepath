import { useState, useMemo } from "react";
import { useLocation } from "wouter";
import { languages } from "@/data/languages";
import LanguageCard from "@/components/LanguageCard";
import SearchBar from "@/components/SearchBar";
import { Badge } from "@/components/ui/badge";
import { Filter, X } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";

export default function Languages() {
  const [search, setSearch] = useState("");
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);
  const [selectedDifficulty, setSelectedDifficulty] = useState<string | null>(null);
  
  // Extract unique categories
  const allCategories = useMemo(() => {
    const set = new Set<string>();
    languages.forEach(l => l.categories.forEach(c => set.add(c)));
    return Array.from(set).sort();
  }, []);

  const difficulties = ["Beginner", "Intermediate", "Advanced"];

  // Filter logic
  const filteredLanguages = useMemo(() => {
    return languages.filter(lang => {
      const matchesSearch = lang.name.toLowerCase().includes(search.toLowerCase()) || 
                           lang.shortDescription.toLowerCase().includes(search.toLowerCase());
      const matchesCategory = selectedCategory ? lang.categories.includes(selectedCategory) : true;
      const matchesDifficulty = selectedDifficulty ? lang.difficulty === selectedDifficulty : true;
      return matchesSearch && matchesCategory && matchesDifficulty;
    });
  }, [search, selectedCategory, selectedDifficulty]);

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="text-center mb-12">
          <h1 className="text-4xl font-bold text-slate-900 mb-4">Programming Languages</h1>
          <p className="text-slate-600 max-w-2xl mx-auto">
            Browse our comprehensive directory of modern programming languages. Find the right tool for your next project.
          </p>
        </div>

        <div className="mb-10">
          <SearchBar value={search} onChange={setSearch} />
        </div>

        {/* Filters */}
        <div className="flex flex-col md:flex-row gap-4 mb-10 items-start md:items-center bg-white p-4 rounded-2xl border border-slate-200 shadow-sm">
          <div className="flex items-center gap-2 text-slate-500 font-medium">
            <Filter size={18} />
            <span>Filters:</span>
          </div>
          
          <div className="flex-1 flex flex-wrap gap-2">
            {allCategories.slice(0, 5).map(cat => (
              <button
                key={cat}
                onClick={() => setSelectedCategory(selectedCategory === cat ? null : cat)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedCategory === cat 
                    ? "bg-primary text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {cat}
              </button>
            ))}
            
            <div className="w-px h-6 bg-slate-200 mx-2 hidden md:block"></div>
            
            {difficulties.map(diff => (
              <button
                key={diff}
                onClick={() => setSelectedDifficulty(selectedDifficulty === diff ? null : diff)}
                className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                  selectedDifficulty === diff 
                    ? "bg-secondary text-white" 
                    : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                }`}
              >
                {diff}
              </button>
            ))}
          </div>

          {(selectedCategory || selectedDifficulty || search) && (
            <button
              onClick={() => {
                setSearch("");
                setSelectedCategory(null);
                setSelectedDifficulty(null);
              }}
              className="flex items-center gap-1 text-sm font-medium text-slate-500 hover:text-slate-900"
            >
              <X size={16} /> Clear all
            </button>
          )}
        </div>

        {/* Results */}
        {filteredLanguages.length === 0 ? (
          <div className="text-center py-20 bg-white rounded-3xl border border-slate-200">
            <div className="text-6xl mb-4">🔍</div>
            <h3 className="text-xl font-bold text-slate-900 mb-2">No languages found</h3>
            <p className="text-slate-500">Try adjusting your search or filters.</p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            <AnimatePresence mode="popLayout">
              {filteredLanguages.map((lang, idx) => (
                <LanguageCard key={lang.id} language={lang} index={idx} />
              ))}
            </AnimatePresence>
          </div>
        )}
      </div>
    </div>
  );
}
