import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { languages, Language } from "@/data/languages";
import {
  CheckCircle2, RefreshCw, Globe, Smartphone, Brain, Blocks,
  Cpu, Eye, Layers, Zap, BookOpen, Sprout, Server, Terminal,
  Shield, Wind, Users, Building2, Rocket, FlaskConical
} from "lucide-react";
import LanguageCard from "@/components/LanguageCard";
import type { LucideIcon } from "lucide-react";

interface Option {
  label: string;
  pointsTo: string[];
  icon: LucideIcon;
}

interface Question {
  id: string;
  text: string;
  options: Option[];
}

const quizQuestions: Question[] = [
  {
    id: "goal",
    text: "What is your main goal in learning to code?",
    options: [
      { label: "Build interactive websites", pointsTo: ["javascript", "html-css", "typescript"], icon: Globe },
      { label: "Build mobile apps", pointsTo: ["swift", "kotlin", "dart", "javascript"], icon: Smartphone },
      { label: "Work with data and AI", pointsTo: ["python", "r", "sql"], icon: Brain },
      { label: "Make video games", pointsTo: ["csharp", "cplusplus", "lua"], icon: Blocks },
    ]
  },
  {
    id: "logic_vs_visual",
    text: "Do you prefer solving logic puzzles or seeing visual results?",
    options: [
      { label: "Logic puzzles and deep systems", pointsTo: ["python", "go", "rust", "c"], icon: Cpu },
      { label: "Visual results I can see and touch", pointsTo: ["html-css", "javascript", "swift"], icon: Eye },
      { label: "A balance of both", pointsTo: ["java", "csharp", "ruby"], icon: Layers },
    ]
  },
  {
    id: "time",
    text: "How much time do you want to invest before seeing results?",
    options: [
      { label: "I want to build things quickly", pointsTo: ["python", "javascript", "ruby", "php"], icon: Zap },
      { label: "I'm willing to study hard for better fundamentals", pointsTo: ["java", "csharp", "cplusplus", "rust"], icon: BookOpen },
      { label: "I just want to start with the easiest absolute basics", pointsTo: ["html-css", "python", "lua"], icon: Sprout },
    ]
  },
  {
    id: "environment",
    text: "Where do you want your code to run?",
    options: [
      { label: "In a web browser", pointsTo: ["javascript", "typescript", "html-css", "php"], icon: Globe },
      { label: "On a server (Backend)", pointsTo: ["python", "go", "java", "ruby"], icon: Server },
      { label: "Directly on hardware / Operating Systems", pointsTo: ["c", "cplusplus", "rust"], icon: Terminal },
      { label: "Smartphones", pointsTo: ["swift", "kotlin", "dart"], icon: Smartphone },
    ]
  },
  {
    id: "strictness",
    text: "How do you feel about strict rules?",
    options: [
      { label: "I like strict rules to prevent mistakes", pointsTo: ["typescript", "java", "rust", "csharp"], icon: Shield },
      { label: "I want flexibility and freedom", pointsTo: ["javascript", "python", "ruby", "php"], icon: Wind },
      { label: "I like experimenting and trying new things", pointsTo: ["kotlin", "dart", "scala"], icon: FlaskConical },
    ]
  },
  {
    id: "community",
    text: "What kind of ecosystem appeals to you?",
    options: [
      { label: "Massive community, an answer for every bug", pointsTo: ["javascript", "python", "java"], icon: Users },
      { label: "Corporate-backed, highly professional", pointsTo: ["csharp", "swift", "kotlin", "go"], icon: Building2 },
      { label: "Niche, high-performance, passionate", pointsTo: ["rust", "scala", "lua"], icon: Rocket },
    ]
  }
];

export default function Quiz() {
  const [currentStep, setCurrentStep] = useState(0);
  const [scores, setScores] = useState<Record<string, number>>({});
  const [result, setResult] = useState<Language | null>(null);

  const handleSelect = (pointsTo: string[]) => {
    const newScores = { ...scores };
    pointsTo.forEach(id => {
      newScores[id] = (newScores[id] || 0) + 1;
    });
    setScores(newScores);

    if (currentStep < quizQuestions.length - 1) {
      setCurrentStep(prev => prev + 1);
    } else {
      calculateResult(newScores);
    }
  };

  const calculateResult = (finalScores: Record<string, number>) => {
    let topId = "python";
    let maxScore = 0;
    for (const [id, score] of Object.entries(finalScores)) {
      if (score > maxScore) {
        maxScore = score;
        topId = id;
      }
    }
    const matchedLanguage = languages.find(l => l.id === topId) || languages[0];
    setResult(matchedLanguage);
  };

  const resetQuiz = () => {
    setCurrentStep(0);
    setScores({});
    setResult(null);
  };

  const currentQuestion = quizQuestions[currentStep];
  const progress = (currentStep / quizQuestions.length) * 100;

  return (
    <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">

        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key={`question-${currentStep}`}
              initial={{ opacity: 0, x: 30 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -30 }}
              transition={{ duration: 0.3 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
            >
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-400 mb-3 uppercase tracking-wider">
                  <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(progress)}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <motion.div
                    className="bg-primary h-full rounded-full"
                    initial={{ width: 0 }}
                    animate={{ width: `${progress}%` }}
                    transition={{ duration: 0.5, ease: "easeOut" }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-3xl font-bold text-slate-900 mb-8 leading-tight">
                {currentQuestion.text}
              </h2>

              <div className="space-y-3">
                {currentQuestion.options.map((option, i) => {
                  const Icon = option.icon;
                  return (
                    <motion.button
                      key={i}
                      initial={{ opacity: 0, y: 10 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.07 }}
                      onClick={() => handleSelect(option.pointsTo)}
                      data-testid={`btn-quiz-option-${currentStep}-${i}`}
                      className="w-full text-left p-5 rounded-2xl border-2 border-slate-100 transition-all duration-200 text-base font-medium text-slate-700 group
                        hover:border-primary hover:bg-primary hover:text-white
                        focus:outline-none focus:ring-2 focus:ring-primary/40"
                    >
                      <div className="flex items-center gap-4">
                        <div className="w-10 h-10 rounded-xl bg-slate-50 group-hover:bg-white/20 flex items-center justify-center shrink-0 transition-colors">
                          <Icon size={20} className="text-primary group-hover:text-white transition-colors" />
                        </div>
                        <span className="flex-grow">{option.label}</span>
                        <CheckCircle2 size={20} className="text-transparent group-hover:text-white/70 transition-colors shrink-0" />
                      </div>
                    </motion.button>
                  );
                })}
              </div>
            </motion.div>
          ) : (
            <motion.div
              key="result"
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              className="space-y-8"
            >
              <div className="text-center space-y-4 mb-10">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-emerald-100 text-emerald-600 mb-4">
                  <CheckCircle2 size={32} />
                </div>
                <h2 className="text-4xl font-black text-slate-900">Your Perfect Match</h2>
                <p className="text-xl text-slate-600 max-w-xl mx-auto">
                  Based on your goals and preferences, this is the best language for you to start learning today.
                </p>
              </div>

              <div className="max-w-md mx-auto">
                <LanguageCard language={result} />
              </div>

              <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-8">
                <Link href={`/languages/${result.id}`} className="w-full sm:w-auto">
                  <div className="px-8 py-4 bg-primary text-white font-semibold rounded-xl shadow-lg hover:bg-primary/90 transition-all text-center">
                    Start Learning {result.name}
                  </div>
                </Link>
                <button
                  onClick={resetQuiz}
                  data-testid="btn-retake-quiz"
                  className="w-full sm:w-auto px-8 py-4 bg-white text-slate-700 font-semibold rounded-xl border border-slate-200 hover:bg-slate-50 transition-all flex items-center justify-center gap-2"
                >
                  <RefreshCw size={18} /> Retake Quiz
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>

      </div>
    </div>
  );
}
