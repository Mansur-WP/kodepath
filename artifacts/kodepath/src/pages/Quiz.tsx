import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Link } from "wouter";
import { languages, Language } from "@/data/languages";
import { CheckCircle2, RefreshCw } from "lucide-react";
import LanguageCard from "@/components/LanguageCard";

interface Question {
  id: string;
  text: string;
  options: {
    label: string;
    pointsTo: string[]; // array of language IDs
  }[];
}

const quizQuestions: Question[] = [
  {
    id: "goal",
    text: "What is your main goal in learning to code?",
    options: [
      { label: "Build interactive websites", pointsTo: ["javascript", "html-css", "typescript"] },
      { label: "Build mobile apps", pointsTo: ["swift", "kotlin", "dart", "javascript"] },
      { label: "Work with data and AI", pointsTo: ["python", "r", "sql"] },
      { label: "Make video games", pointsTo: ["csharp", "cplusplus", "lua"] },
    ]
  },
  {
    id: "logic_vs_visual",
    text: "Do you prefer solving logic puzzles or seeing visual results?",
    options: [
      { label: "Logic puzzles and deep systems", pointsTo: ["python", "go", "rust", "c"] },
      { label: "Visual results I can see and touch", pointsTo: ["html-css", "javascript", "swift"] },
      { label: "A balance of both", pointsTo: ["java", "csharp", "ruby"] },
    ]
  },
  {
    id: "time",
    text: "How much time do you want to invest before seeing results?",
    options: [
      { label: "I want to build things quickly", pointsTo: ["python", "javascript", "ruby", "php"] },
      { label: "I'm willing to study hard for better fundamentals", pointsTo: ["java", "csharp", "cplusplus", "rust"] },
      { label: "I just want to start with the easiest absolute basics", pointsTo: ["html-css", "python", "lua"] },
    ]
  },
  {
    id: "environment",
    text: "Where do you want your code to run?",
    options: [
      { label: "In a web browser", pointsTo: ["javascript", "typescript", "html-css", "php"] },
      { label: "On a server (Backend)", pointsTo: ["python", "go", "java", "ruby"] },
      { label: "Directly on hardware / Operating Systems", pointsTo: ["c", "cplusplus", "rust"] },
      { label: "Smartphones", pointsTo: ["swift", "kotlin", "dart"] },
    ]
  },
  {
    id: "strictness",
    text: "How do you feel about rules?",
    options: [
      { label: "I like strict rules to prevent mistakes", pointsTo: ["typescript", "java", "rust", "csharp"] },
      { label: "I want flexibility and freedom", pointsTo: ["javascript", "python", "ruby", "php"] },
    ]
  },
  {
    id: "community",
    text: "What kind of ecosystem do you want?",
    options: [
      { label: "Massive community, answer for every bug online", pointsTo: ["javascript", "python", "java"] },
      { label: "Corporate backed, highly professional", pointsTo: ["csharp", "swift", "kotlin", "go"] },
      { label: "Niche, high performance, passionate", pointsTo: ["rust", "elixir", "scala"] },
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
    let topId = "python"; // fallback
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

  return (
    <div className="min-h-screen bg-slate-50 py-20 flex items-center justify-center">
      <div className="container mx-auto px-4 max-w-3xl">
        
        <AnimatePresence mode="wait">
          {!result ? (
            <motion.div
              key="quiz"
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              exit={{ opacity: 0, x: -20 }}
              className="bg-white rounded-3xl p-8 md:p-12 shadow-xl border border-slate-100"
            >
              <div className="mb-8">
                <div className="flex justify-between text-sm font-bold text-slate-400 mb-4 uppercase tracking-wider">
                  <span>Question {currentStep + 1} of {quizQuestions.length}</span>
                  <span>{Math.round(((currentStep) / quizQuestions.length) * 100)}%</span>
                </div>
                <div className="w-full bg-slate-100 h-2 rounded-full overflow-hidden">
                  <div 
                    className="bg-primary h-full transition-all duration-500 ease-out" 
                    style={{ width: `${((currentStep) / quizQuestions.length) * 100}%` }}
                  />
                </div>
              </div>

              <h2 className="text-2xl md:text-4xl font-bold text-slate-900 mb-10 leading-tight">
                {quizQuestions[currentStep].text}
              </h2>

              <div className="space-y-4">
                {quizQuestions[currentStep].options.map((option, i) => (
                  <button
                    key={i}
                    onClick={() => handleSelect(option.pointsTo)}
                    className="w-full text-left p-6 rounded-2xl border-2 border-slate-100 hover:border-primary hover:bg-primary/5 transition-all text-lg font-medium text-slate-700 hover:text-primary group"
                  >
                    <div className="flex items-center justify-between">
                      {option.label}
                      <CheckCircle2 size={24} className="text-transparent group-hover:text-primary transition-colors" />
                    </div>
                  </button>
                ))}
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
