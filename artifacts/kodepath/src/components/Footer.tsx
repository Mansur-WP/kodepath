import { Link } from "wouter";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="container mx-auto px-4 pt-12 pb-6">
        {/* Main grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 mb-10">
          {/* Brand column */}
          <div className="flex flex-col gap-4">
            <Link href="/" className="flex items-center gap-2 w-fit">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Code2 size={18} strokeWidth={2.5} />
              </div>
              <span className="text-lg font-bold tracking-tight text-slate-900">KodePath</span>
            </Link>
            <p className="text-sm text-slate-500 leading-relaxed max-w-xs">
              Helping beginners discover the right programming language for their journey. No paywalls, no sign-ups — just clear guidance to start coding.
            </p>
          </div>

          {/* Explore column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Explore</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/languages" className="text-sm text-slate-500 hover:text-primary transition-colors">All Languages</Link></li>
              <li><Link href="/categories" className="text-sm text-slate-500 hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/quiz" className="text-sm text-slate-500 hover:text-primary transition-colors">Language Quiz</Link></li>
              <li><Link href="/bookmarks" className="text-sm text-slate-500 hover:text-primary transition-colors">Bookmarks</Link></li>
            </ul>
          </div>

          {/* Popular Languages column */}
          <div>
            <h4 className="text-sm font-semibold text-slate-900 mb-4">Popular Languages</h4>
            <ul className="flex flex-col gap-3">
              <li><Link href="/languages/python" className="text-sm text-slate-500 hover:text-primary transition-colors">Python</Link></li>
              <li><Link href="/languages/javascript" className="text-sm text-slate-500 hover:text-primary transition-colors">JavaScript</Link></li>
              <li><Link href="/languages/java" className="text-sm text-slate-500 hover:text-primary transition-colors">Java</Link></li>
              <li><Link href="/languages/csharp" className="text-sm text-slate-500 hover:text-primary transition-colors">C#</Link></li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-slate-100 pt-6 flex flex-col md:flex-row items-center justify-between gap-3 text-sm text-slate-400">
          <p>© 2026 KodePath. Built for beginners, by developers.</p>
          <p className="flex items-center gap-1.5">
            Made with <Heart size={13} className="text-rose-400 fill-rose-400" /> for aspiring coders
          </p>
        </div>
      </div>
    </footer>
  );
}
