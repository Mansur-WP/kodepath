import { Link } from "wouter";
import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import type { Language } from "@/data/languages";

interface LanguageCardProps {
  language: Language;
  index?: number;
}

export default function LanguageCard({ language, index = 0 }: LanguageCardProps) {
  const getDifficultyColor = (difficulty: string) => {
    switch (difficulty) {
      case "Beginner": return "bg-emerald-500/10 text-emerald-600 border-emerald-200";
      case "Intermediate": return "bg-amber-500/10 text-amber-600 border-amber-200";
      case "Advanced": return "bg-rose-500/10 text-rose-600 border-rose-200";
      default: return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.05, duration: 0.4 }}
      whileHover={{ y: -5 }}
      style={{
        ["--hover-glow" as string]: language.brandColor + "40",
      }}
      className="group flex flex-col h-full bg-white/80 backdrop-blur-sm border border-slate-200 rounded-2xl p-6 shadow-sm transition-all duration-300 hover:shadow-[0_8px_30px_var(--hover-glow)] hover:border-slate-300"
      data-testid={`card-language-${language.id}`}
    >
      <div className="flex items-start justify-between mb-4">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 flex items-center justify-center bg-slate-50 rounded-xl p-2.5">
            <img src={language.logo} alt={`${language.name} logo`} className="w-full h-full object-contain" />
          </div>
          <div>
            <h3 className="text-xl font-bold text-slate-900">{language.name}</h3>
            <p className="text-xs text-slate-500">{language.creator}, {language.yearCreated}</p>
          </div>
        </div>
        <Badge variant="outline" className={`font-medium ${getDifficultyColor(language.difficulty)}`}>
          {language.difficulty}
        </Badge>
      </div>

      <p className="text-slate-600 text-sm leading-relaxed mb-6 flex-grow">
        {language.shortDescription}
      </p>

      <div className="space-y-4">
        <div className="flex flex-wrap gap-2">
          {language.useCases.slice(0, 3).map((useCase) => (
            <Badge key={useCase} variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
              {useCase}
            </Badge>
          ))}
          {language.useCases.length > 3 && (
            <Badge variant="secondary" className="bg-slate-100 text-slate-600 font-normal">
              +{language.useCases.length - 3}
            </Badge>
          )}
        </div>

        <Link href={`/languages/${language.id}`} className="block w-full">
          <div className="w-full py-2.5 text-center text-sm font-medium text-primary bg-primary/5 hover:bg-primary/10 rounded-xl transition-colors">
            Learn More
          </div>
        </Link>
      </div>
    </motion.div>
  );
}
