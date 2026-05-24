import { useParams, Link } from "wouter";
import { languages } from "@/data/languages";
import { Badge } from "@/components/ui/badge";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useRoadmapProgress } from "@/hooks/useRoadmapProgress";
import { BookMarked, ExternalLink, ThumbsUp, ThumbsDown, GitPullRequest, ArrowLeft, ArrowLeftRight, RotateCcw, CheckCircle2, Circle } from "lucide-react";
import { motion } from "framer-motion";
import NotFound from "@/pages/not-found";
import CodeBlock from "@/components/CodeBlock";

export default function LanguageDetail() {
  const { id } = useParams();
  const { isBookmarked, toggleBookmark } = useBookmarks();
  
  const language = languages.find(l => l.id === id);
  if (!language) return <NotFound />;

  const bookmarked = isBookmarked(language.id);
  const { completed, toggle: toggleStep, reset: resetProgress, percentComplete } = useRoadmapProgress(
    language.id,
    language.learningRoadmap.length
  );

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
                <div className="flex items-center gap-2">
                  <Link href={`/compare?a=${language.id}`}>
                    <div
                      data-testid={`btn-compare-${language.id}`}
                      className="p-3 rounded-xl flex items-center gap-2 font-medium bg-slate-100 text-slate-600 hover:bg-slate-200 transition-all"
                    >
                      <ArrowLeftRight size={18} />
                      <span className="hidden sm:inline text-sm">Compare</span>
                    </div>
                  </Link>
                  <button
                    onClick={() => toggleBookmark(language.id)}
                    data-testid={`btn-bookmark-detail-${language.id}`}
                    className={`p-3 rounded-xl flex items-center gap-2 font-medium transition-all ${
                      bookmarked ? "bg-primary text-white" : "bg-slate-100 text-slate-600 hover:bg-slate-200"
                    }`}
                  >
                    <BookMarked size={20} className={bookmarked ? "fill-current" : ""} />
                    <span className="hidden sm:inline text-sm">{bookmarked ? "Saved" : "Save"}</span>
                  </button>
                </div>
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

            {/* Syntax Block — highlighted */}
            <CodeBlock
              code={language.syntaxExample}
              language={language.syntaxLanguage}
              label={`${language.name} — Syntax Example`}
            />

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

            {/* Roadmap — interactive checklist */}
            <div className="bg-white rounded-3xl p-8 border border-slate-200 shadow-sm">
              <div className="flex items-center justify-between mb-2">
                <h2 className="text-2xl font-bold text-slate-900 flex items-center gap-2">
                  <GitPullRequest size={24} className="text-primary" />
                  Beginner Roadmap
                </h2>
                <button
                  onClick={resetProgress}
                  data-testid="btn-reset-roadmap"
                  className="flex items-center gap-1.5 text-xs font-medium text-slate-400 hover:text-slate-600 transition-colors px-2 py-1 rounded-lg hover:bg-slate-100"
                >
                  <RotateCcw size={12} /> Reset
                </button>
              </div>

              {/* Progress bar */}
              <div className="mb-6">
                <div className="flex justify-between text-xs font-semibold text-slate-400 mb-2 uppercase tracking-wider">
                  <span>{completed.size} of {language.learningRoadmap.length} steps completed</span>
                  <span>{percentComplete}%</span>
                </div>
                <div className="w-full h-2 bg-slate-100 rounded-full overflow-hidden">
                  <motion.div
                    className="h-full rounded-full bg-gradient-to-r from-primary to-secondary"
                    initial={{ width: 0 }}
                    animate={{ width: `${percentComplete}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              <div className="space-y-3 relative before:absolute before:inset-y-4 before:left-[22px] before:w-0.5 before:bg-slate-100">
                {language.learningRoadmap.map((step, i) => {
                  const done = completed.has(i);
                  return (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, x: -16 }}
                      whileInView={{ opacity: 1, x: 0 }}
                      viewport={{ once: true }}
                      transition={{ delay: i * 0.06 }}
                      onClick={() => toggleStep(i)}
                      data-testid={`btn-roadmap-step-${i}`}
                      className={`relative w-full flex items-center gap-4 py-3 text-left group transition-all`}
                    >
                      <div className={`w-11 h-11 rounded-full flex items-center justify-center shrink-0 z-10 border-4 transition-all ${
                        done
                          ? "bg-primary border-primary/20 text-white"
                          : "bg-white border-slate-100 text-slate-400 group-hover:border-primary/30"
                      }`}>
                        {done
                          ? <CheckCircle2 size={18} className="fill-white text-primary" />
                          : <Circle size={16} />
                        }
                      </div>
                      <div className={`flex-1 rounded-xl px-4 py-3.5 border transition-all ${
                        done
                          ? "bg-primary/5 border-primary/15 text-slate-400 line-through"
                          : "bg-slate-50 border-slate-100 text-slate-700 group-hover:border-primary/20 group-hover:bg-primary/3"
                      } font-medium text-sm`}>
                        {step}
                      </div>
                    </motion.button>
                  );
                })}
              </div>

              {percentComplete === 100 && (
                <motion.div
                  initial={{ opacity: 0, y: 8 }}
                  animate={{ opacity: 1, y: 0 }}
                  className="mt-6 p-4 bg-emerald-50 border border-emerald-100 rounded-2xl text-center"
                >
                  <p className="text-emerald-700 font-semibold">Roadmap complete! Time to build something real.</p>
                </motion.div>
              )}
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
