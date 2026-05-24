import { useState } from "react";
import { Link } from "wouter";
import { motion } from "framer-motion";
import { languages } from "@/data/languages";
import { Badge } from "@/components/ui/badge";
import { ArrowLeftRight, Check, X, ChevronDown } from "lucide-react";

const NONE = "";

function DifficultyBadge({ d }: { d: string }) {
  const color =
    d === "Beginner" ? "bg-emerald-100 text-emerald-700 border-emerald-200" :
    d === "Intermediate" ? "bg-amber-100 text-amber-700 border-amber-200" :
    "bg-rose-100 text-rose-700 border-rose-200";
  return <Badge variant="outline" className={`font-medium ${color}`}>{d}</Badge>;
}

function LanguageSelector({
  value,
  onChange,
  exclude,
  label,
}: {
  value: string;
  onChange: (id: string) => void;
  exclude: string;
  label: string;
}) {
  const [open, setOpen] = useState(false);
  const selected = languages.find(l => l.id === value);

  return (
    <div className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        data-testid={`btn-select-language-${label}`}
        className="w-full flex items-center gap-3 p-4 bg-white border-2 border-slate-200 rounded-2xl hover:border-primary/50 transition-colors text-left"
      >
        {selected ? (
          <>
            <img src={selected.logo} alt={selected.name} className="w-8 h-8 object-contain shrink-0" />
            <div className="flex-1 min-w-0">
              <div className="font-bold text-slate-900 truncate">{selected.name}</div>
              <div className="text-xs text-slate-500">{selected.difficulty}</div>
            </div>
          </>
        ) : (
          <div className="flex-1 text-slate-400 font-medium">Pick a language…</div>
        )}
        <ChevronDown size={18} className={`text-slate-400 transition-transform shrink-0 ${open ? "rotate-180" : ""}`} />
      </button>

      {open && (
        <>
          <div className="fixed inset-0 z-10" onClick={() => setOpen(false)} />
          <div className="absolute top-full mt-2 left-0 right-0 z-20 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden max-h-72 overflow-y-auto">
            {languages
              .filter(l => l.id !== exclude)
              .map(l => (
                <button
                  key={l.id}
                  onClick={() => { onChange(l.id); setOpen(false); }}
                  data-testid={`option-language-${l.id}`}
                  className={`w-full flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors text-left ${value === l.id ? "bg-primary/5" : ""}`}
                >
                  <img src={l.logo} alt={l.name} className="w-7 h-7 object-contain shrink-0" />
                  <div className="flex-1 min-w-0">
                    <div className="font-semibold text-slate-800 text-sm truncate">{l.name}</div>
                    <div className="text-xs text-slate-400">{l.creator}, {l.yearCreated}</div>
                  </div>
                  <span className={`text-xs px-2 py-0.5 rounded-full font-medium shrink-0 ${
                    l.difficulty === "Beginner" ? "bg-emerald-100 text-emerald-700" :
                    l.difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" :
                    "bg-rose-100 text-rose-700"
                  }`}>{l.difficulty}</span>
                </button>
              ))}
          </div>
        </>
      )}
    </div>
  );
}

function Row({
  label,
  a,
  b,
}: {
  label: string;
  a: React.ReactNode;
  b: React.ReactNode;
}) {
  return (
    <div className="grid grid-cols-[1fr_auto_1fr] gap-0 border-b border-slate-100 last:border-0">
      <div className="p-5 flex items-start">{a}</div>
      <div className="flex flex-col items-center justify-center px-3 py-5 gap-1">
        <span className="text-[10px] font-bold uppercase tracking-wider text-slate-400 whitespace-nowrap">{label}</span>
      </div>
      <div className="p-5 flex items-start justify-end text-right">{b}</div>
    </div>
  );
}

function TagList({ items, color = "bg-slate-100 text-slate-600" }: { items: string[]; color?: string }) {
  return (
    <div className="flex flex-wrap gap-1.5 justify-start">
      {items.slice(0, 4).map(item => (
        <span key={item} className={`text-xs px-2.5 py-1 rounded-full font-medium ${color}`}>{item}</span>
      ))}
      {items.length > 4 && (
        <span className="text-xs px-2.5 py-1 rounded-full font-medium bg-slate-100 text-slate-400">+{items.length - 4}</span>
      )}
    </div>
  );
}

function BoolList({ items, max = 4 }: { items: string[]; max?: number }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-600 text-left">
      {items.slice(0, max).map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <Check size={14} className="text-emerald-500 mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

function ConList({ items, max = 4 }: { items: string[]; max?: number }) {
  return (
    <ul className="space-y-1.5 text-sm text-slate-600 text-left">
      {items.slice(0, max).map((item, i) => (
        <li key={i} className="flex items-start gap-2">
          <X size={14} className="text-rose-400 mt-0.5 shrink-0" />
          <span>{item}</span>
        </li>
      ))}
    </ul>
  );
}

export default function Compare() {
  const [leftId, setLeftId] = useState(NONE);
  const [rightId, setRightId] = useState(NONE);

  const left = languages.find(l => l.id === leftId) ?? null;
  const right = languages.find(l => l.id === rightId) ?? null;

  const bothSelected = left && right;

  return (
    <div className="min-h-screen bg-slate-50 pb-20">
      <div className="container mx-auto px-4 max-w-4xl">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center pt-16 pb-10"
        >
          <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white border border-slate-200 text-sm font-medium text-slate-500 mb-6 shadow-sm">
            <ArrowLeftRight size={15} className="text-primary" />
            Side-by-side comparison
          </div>
          <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 mb-3">Compare Languages</h1>
          <p className="text-slate-500 text-lg max-w-xl mx-auto">
            Can't decide between two languages? See how they stack up on the things that matter to beginners.
          </p>
        </motion.div>

        {/* Selectors */}
        <div className="grid grid-cols-1 sm:grid-cols-[1fr_auto_1fr] gap-4 items-center mb-8">
          <LanguageSelector value={leftId} onChange={setLeftId} exclude={rightId} label="A" />
          <div className="flex items-center justify-center">
            <div className="w-10 h-10 rounded-full bg-white border border-slate-200 flex items-center justify-center shadow-sm shrink-0">
              <ArrowLeftRight size={18} className="text-slate-400" />
            </div>
          </div>
          <LanguageSelector value={rightId} onChange={setRightId} exclude={leftId} label="B" />
        </div>

        {/* Comparison Table */}
        {bothSelected ? (
          <motion.div
            key={`${leftId}-${rightId}`}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.35 }}
            className="bg-white rounded-3xl border border-slate-200 shadow-sm overflow-hidden"
          >
            {/* Language header row */}
            <div className="grid grid-cols-[1fr_auto_1fr] border-b border-slate-200">
              <div className="p-6 flex flex-col items-start gap-3">
                <div
                  className="w-16 h-16 rounded-2xl p-3 flex items-center justify-center"
                  style={{ backgroundColor: left.brandColor + "18" }}
                >
                  <img src={left.logo} alt={left.name} className="w-full h-full object-contain" />
                </div>
                <div>
                  <div className="text-2xl font-black text-slate-900">{left.name}</div>
                  <div className="text-sm text-slate-400">{left.creator} · {left.yearCreated}</div>
                </div>
              </div>
              <div className="flex items-center justify-center px-4 border-x border-slate-100">
                <span className="text-slate-300 font-bold text-lg">VS</span>
              </div>
              <div className="p-6 flex flex-col items-end gap-3">
                <div
                  className="w-16 h-16 rounded-2xl p-3 flex items-center justify-center"
                  style={{ backgroundColor: right.brandColor + "18" }}
                >
                  <img src={right.logo} alt={right.name} className="w-full h-full object-contain" />
                </div>
                <div className="text-right">
                  <div className="text-2xl font-black text-slate-900">{right.name}</div>
                  <div className="text-sm text-slate-400">{right.creator} · {right.yearCreated}</div>
                </div>
              </div>
            </div>

            {/* Rows */}
            <Row
              label="Difficulty"
              a={<DifficultyBadge d={left.difficulty} />}
              b={<div className="flex justify-end"><DifficultyBadge d={right.difficulty} /></div>}
            />

            <Row
              label="Use Cases"
              a={<TagList items={left.useCases} color="bg-blue-50 text-blue-700" />}
              b={<div className="flex flex-wrap gap-1.5 justify-end">{right.useCases.slice(0, 4).map(u => <span key={u} className="text-xs px-2.5 py-1 rounded-full font-medium bg-blue-50 text-blue-700">{u}</span>)}</div>}
            />

            <Row
              label="Categories"
              a={<TagList items={left.categories} color="bg-purple-50 text-purple-700" />}
              b={<div className="flex flex-wrap gap-1.5 justify-end">{right.categories.slice(0, 4).map(c => <span key={c} className="text-xs px-2.5 py-1 rounded-full font-medium bg-purple-50 text-purple-700">{c}</span>)}</div>}
            />

            <Row
              label="Strengths"
              a={<BoolList items={left.pros} />}
              b={<ul className="space-y-1.5 text-sm text-slate-600 text-right">{right.pros.slice(0, 4).map((p, i) => <li key={i} className="flex items-start gap-2 justify-end"><span>{p}</span><Check size={14} className="text-emerald-500 mt-0.5 shrink-0" /></li>)}</ul>}
            />

            <Row
              label="Considerations"
              a={<ConList items={left.cons} />}
              b={<ul className="space-y-1.5 text-sm text-slate-600 text-right">{right.cons.slice(0, 4).map((c, i) => <li key={i} className="flex items-start gap-2 justify-end"><span>{c}</span><X size={14} className="text-rose-400 mt-0.5 shrink-0" /></li>)}</ul>}
            />

            <Row
              label="Frameworks"
              a={<TagList items={left.frameworks} color="bg-cyan-50 text-cyan-700" />}
              b={<div className="flex flex-wrap gap-1.5 justify-end">{right.frameworks.slice(0, 4).map(f => <span key={f} className="text-xs px-2.5 py-1 rounded-full font-medium bg-cyan-50 text-cyan-700">{f}</span>)}</div>}
            />

            <Row
              label="Careers"
              a={<TagList items={left.careerOpportunities} color="bg-orange-50 text-orange-700" />}
              b={<div className="flex flex-wrap gap-1.5 justify-end">{right.careerOpportunities.slice(0, 4).map(c => <span key={c} className="text-xs px-2.5 py-1 rounded-full font-medium bg-orange-50 text-orange-700">{c}</span>)}</div>}
            />

            {/* CTA row */}
            <div className="grid grid-cols-2 border-t border-slate-100">
              <div className="p-6 border-r border-slate-100">
                <Link href={`/languages/${left.id}`}>
                  <div
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: left.brandColor }}
                  >
                    Explore {left.name}
                  </div>
                </Link>
              </div>
              <div className="p-6">
                <Link href={`/languages/${right.id}`}>
                  <div
                    className="w-full py-3 rounded-xl text-white font-semibold text-sm text-center transition-opacity hover:opacity-90"
                    style={{ backgroundColor: right.brandColor }}
                  >
                    Explore {right.name}
                  </div>
                </Link>
              </div>
            </div>
          </motion.div>
        ) : (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="text-center py-20 bg-white rounded-3xl border border-slate-200 border-dashed"
          >
            <div className="w-16 h-16 mx-auto rounded-2xl bg-slate-50 flex items-center justify-center mb-4">
              <ArrowLeftRight size={28} className="text-slate-300" />
            </div>
            <p className="text-slate-400 font-medium">Select two languages above to compare them</p>
          </motion.div>
        )}
      </div>
    </div>
  );
}
