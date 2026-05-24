import { useParams, Link } from "wouter";
import { languages } from "@/data/languages";
import { Badge } from "@/components/ui/badge";
import { useBookmarks } from "@/hooks/useBookmarks";
import { BookMarked, Code2, ExternalLink, ThumbsUp, ThumbsDown, GitPullRequest, ArrowLeft } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";

export default function LanguageDetail() {
  const { id } = useParams();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  
  const language = languages.find(l => l.id === id);
  if (!language) return <NotFound />;

  const bookmarked = isBookmarked(language.id);

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      {/* Header Banner */}
      <div 
        className="h-64 md:h-80 w-full relative overflow-hidden"
        style={{ backgroundColor: language.brandColor }}
      >
        <div className="absolute inset-0 opacity-20 bg-[radial-gradient(circle_at_center,_var(--tw-gradient-stops))] from-white to-transparent" />
        <div className="container mx-auto px-4 h-full flex flex-col justify-end pb-12 relative z-10">
          <Link href="/languages" className="inline-flex items-center gap-2 text-white/80 hover:text-white font-medium mb-6 transition-colors w-fit">
            <ArrowLeft size={18} /> Back to languages
          </Link>
          <div className="flex items-center gap-6">
            <div className="w-24 h-24 md:w-32 md:h-32 bg-white rounded-2xl md:rounded-3xl p-4 md:p-6 shadow-2xl flex-shrink-0">
              <img src={language.logo} alt={language.name} className="w-full h-full object-contain" />
            </div>
            <div className="text-white">
              <h1 className="text-4xl md:text-6xl font-black mb-2 drop-shadow-sm">{language.name}</h1>
              <p className="text-lg md:text-xl font-medium text-white/90 drop-shadow-sm max-w-2xl">
                {language.shortDescription}
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="container mx-auto px-4 -mt-6 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-6">
                <h2 className="text-2xl font-bold text-slate-900">Overview</h2>
                <button 
                  onClick={() => toggleBookmark(language.id)}
                  className={`p-3 rounded-xl flex items-center gap-2 font-medium transition-all ${
                    bookmarked ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                  }`}
                >
                  <BookMarked size={20} className={bookmarked ? "fill-current" : ""} />
                  <span className="hidden sm:inline">{bookmarked ? "Saved" : "Save"}</span>
                </button>
              </div>
              <p className="text-slate-600 text-lg leading-relaxed mb-8">
                {language.fullDescription}
              </p>

              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Difficulty</div>
                  <div className="font-medium text-slate-900">{language.difficulty}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4">
                  <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Created</div>
                  <div className="font-medium text-slate-900">{language.yearCreated}</div>
                </div>
                <div className="bg-slate-50 rounded-xl p-4 col-span-2">
                  <div className="text-xs text-slate-500 font-semibold uppercase mb-1">Creator</div>
                  <div className="font-medium text-slate-900">{language.creator}</div>
                </div>
              </div>
            </div>

            {/* Syntax Block */}
            <div className="bg-slate-900 rounded-3xl overflow-hidden border border-slate-800 shadow-lg">
              <div className="bg-slate-800 px-6 py-3 flex items-center justify-between">
                <div className="flex items-center gap-2">
                  <Code2 size={18} className="text-slate-400" />
                  <span className="text-sm font-medium text-slate-300">Syntax Example</span>
                </div>
                <Badge variant="secondary" className="bg-slate-700 text-slate-300 font-mono text-xs">
                  {language.syntaxLanguage}
                </Badge>
              </div>
              <div className="p-6 overflow-x-auto">
                <pre className="text-sm font-mono leading-relaxed text-slate-300">
                  <code>{language.syntaxExample}</code>
                </pre>
              </div>
            </div>

            {/* Pros and Cons */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-3xl p-6 border border-emerald-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-emerald-100 text-emerald-600 flex items-center justify-center">
                    <ThumbsUp size={16} />
                  </div>
                  Why choose it
                </h3>
                <ul className="space-y-3">
                  {language.pros.map((pro, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-emerald-500 mt-2 shrink-0" />
                      <span>{pro}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-3xl p-6 border border-rose-100 shadow-sm">
                <h3 className="text-lg font-bold text-slate-900 flex items-center gap-2 mb-4">
                  <div className="w-8 h-8 rounded-full bg-rose-100 text-rose-600 flex items-center justify-center">
                    <ThumbsDown size={16} />
                  </div>
                  Things to consider
                </h3>
                <ul className="space-y-3">
                  {language.cons.map((con, i) => (
                    <li key={i} className="flex items-start gap-3 text-slate-600">
                      <div className="w-1.5 h-1.5 rounded-full bg-rose-500 mt-2 shrink-0" />
                      <span>{con}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Roadmap */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <h2 className="text-2xl font-bold text-slate-900 mb-6 flex items-center gap-2">
                <GitPullRequest size={24} className="text-primary" />
                Beginner Roadmap
              </h2>
              <div className="space-y-0 relative before:absolute before:inset-y-4 before:left-6 before:w-0.5 before:bg-slate-100">
                {language.learningRoadmap.map((step, i) => (
                  <motion.div 
                    initial={{ opacity: 0, x: -20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: i * 0.1 }}
                    key={i} 
                    className="relative flex items-center gap-6 py-4"
                  >
                    <div className="w-12 h-12 rounded-full bg-white border-4 border-slate-100 text-slate-500 font-bold flex items-center justify-center shrink-0 z-10 shadow-sm">
                      {i + 1}
                    </div>
                    <div className="bg-slate-50 rounded-xl p-4 flex-1 border border-slate-100 text-slate-700 font-medium">
                      {step}
                    </div>
                  </motion.div>
                ))}
              </div>
            </div>
          </div>

          {/* Sidebar */}
          <div className="space-y-6">
            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Use Cases</h3>
              <div className="flex flex-wrap gap-2">
                {language.useCases.map((useCase) => (
                  <Badge key={useCase} variant="secondary" className="bg-slate-100 text-slate-700">
                    {useCase}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Popular Frameworks</h3>
              <div className="flex flex-wrap gap-2">
                {language.frameworks.map((fw) => (
                  <Badge key={fw} variant="outline" className="border-slate-200 text-slate-600">
                    {fw}
                  </Badge>
                ))}
              </div>
            </div>

            <div className="bg-gradient-to-b from-primary/5 to-transparent rounded-3xl p-6 border border-primary/10">
              <h3 className="font-bold text-primary mb-4">Free Learning Resources</h3>
              <ul className="space-y-3">
                {language.freeResources.map((res, i) => (
                  <li key={i}>
                    <a 
                      href={res.url} 
                      target="_blank" 
                      rel="noopener noreferrer"
                      className="group flex items-center justify-between p-3 bg-white rounded-xl border border-slate-200 hover:border-primary/30 hover:shadow-sm transition-all"
                    >
                      <span className="font-medium text-slate-700 group-hover:text-primary text-sm">{res.title}</span>
                      <ExternalLink size={16} className="text-slate-400 group-hover:text-primary transition-colors" />
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
              <h3 className="font-bold text-slate-900 mb-4">Beginner Projects</h3>
              <ul className="space-y-2">
                {language.beginnerProjects.map((proj, i) => (
                  <li key={i} className="flex items-center gap-2 text-slate-600 text-sm">
                    <div className="w-1.5 h-1.5 rounded-full bg-secondary shrink-0" />
                    {proj}
                  </li>
                ))}
              </ul>
            </div>
            
            {language.relatedLanguages.length > 0 && (
              <div className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm">
                <h3 className="font-bold text-slate-900 mb-4">Related Languages</h3>
                <div className="grid grid-cols-2 gap-3">
                  {language.relatedLanguages.map(relId => {
                    const rel = languages.find(l => l.id === relId);
                    if (!rel) return null;
                    return (
                      <Link key={relId} href={`/languages/${relId}`}>
                        <div className="flex flex-col items-center p-3 bg-slate-50 hover:bg-slate-100 rounded-xl transition-colors text-center gap-2 border border-slate-100">
                          <img src={rel.logo} className="w-8 h-8 object-contain" alt="" />
                          <span className="text-xs font-semibold text-slate-700">{rel.name}</span>
                        </div>
                      </Link>
                    );
                  })}
                </div>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
