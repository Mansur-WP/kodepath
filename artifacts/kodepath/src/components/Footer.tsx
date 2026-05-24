import { Link } from "wouter";
import { Code2, Heart } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="container mx-auto px-4 py-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-2 shrink-0">
            <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
              <Code2 size={18} strokeWidth={2.5} />
            </div>
            <span className="text-lg font-bold tracking-tight text-slate-900">KodePath</span>
          </Link>

          {/* Nav links */}
          <nav className="flex items-center gap-6 text-sm font-medium text-slate-500">
            <Link href="/languages" className="hover:text-primary transition-colors" data-testid="link-footer-languages">
              Languages
            </Link>
            <Link href="/categories" className="hover:text-primary transition-colors" data-testid="link-footer-categories">
              Categories
            </Link>
            <Link href="/quiz" className="hover:text-primary transition-colors" data-testid="link-footer-quiz">
              Quiz
            </Link>
            <Link href="/bookmarks" className="hover:text-primary transition-colors" data-testid="link-footer-bookmarks">
              Bookmarks
            </Link>
          </nav>

          {/* Tagline */}
          <p className="flex items-center gap-1.5 text-sm text-slate-400 shrink-0">
            Built with <Heart size={14} className="text-rose-400 fill-rose-400" /> for beginners
          </p>
        </div>
      </div>
    </footer>
  );
}
