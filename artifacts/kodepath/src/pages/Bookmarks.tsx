import { useBookmarks } from "@/hooks/useBookmarks";
import { languages } from "@/data/languages";
import LanguageCard from "@/components/LanguageCard";
import { BookMarked, ArrowRight } from "lucide-react";
import { Link } from "wouter";

export default function Bookmarks() {
  const { bookmarks } = useBookmarks();
  const bookmarkedLanguages = bookmarks.map(id => languages.find(l => l.id === id)).filter(Boolean);

  return (
    <div className="min-h-screen bg-slate-50 pt-10 pb-20">
      <div className="container mx-auto px-4">
        
        <div className="flex items-center gap-4 mb-12 border-b border-slate-200 pb-8">
          <div className="w-16 h-16 rounded-2xl bg-secondary/10 flex items-center justify-center text-secondary">
            <BookMarked size={32} />
          </div>
          <div>
            <h1 className="text-4xl font-bold text-slate-900 mb-2">My Bookmarks</h1>
            <p className="text-slate-600">
              Languages you've saved for later reference.
            </p>
          </div>
        </div>

        {bookmarkedLanguages.length === 0 ? (
          <div className="bg-white rounded-3xl border border-slate-200 p-12 text-center max-w-2xl mx-auto shadow-sm">
            <div className="w-24 h-24 bg-slate-50 rounded-full flex items-center justify-center mx-auto mb-6">
              <BookMarked size={40} className="text-slate-300" />
            </div>
            <h2 className="text-2xl font-bold text-slate-900 mb-4">No bookmarks yet</h2>
            <p className="text-slate-600 mb-8 leading-relaxed">
              Explore our language directory and save the ones you're interested in learning. They'll appear here so you can easily find them later.
            </p>
            <Link href="/languages">
              <div className="inline-flex items-center justify-center gap-2 px-8 py-4 bg-primary text-white font-semibold rounded-xl hover:bg-primary/90 transition-colors shadow-sm">
                Explore Languages <ArrowRight size={18} />
              </div>
            </Link>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {bookmarkedLanguages.map((lang, idx) => (
              lang && <LanguageCard key={lang.id} language={lang} index={idx} />
            ))}
          </div>
        )}

      </div>
    </div>
  );
}
