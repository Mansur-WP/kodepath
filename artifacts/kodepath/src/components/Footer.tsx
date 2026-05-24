import { Link } from "wouter";
import { Code2 } from "lucide-react";

export default function Footer() {
  return (
    <footer className="bg-white border-t border-slate-100 mt-auto">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          <div className="col-span-1 md:col-span-2">
            <Link href="/" className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 rounded-lg bg-primary flex items-center justify-center text-white">
                <Code2 size={20} strokeWidth={2.5} />
              </div>
              <span className="text-xl font-bold tracking-tight text-slate-900">KodePath</span>
            </Link>
            <p className="text-slate-500 text-sm max-w-sm leading-relaxed">
              Your friendly guide to the world of programming. Discover languages, find your path, and start building the future today.
            </p>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Explore</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/languages" className="hover:text-primary transition-colors">All Languages</Link></li>
              <li><Link href="/categories" className="hover:text-primary transition-colors">Categories</Link></li>
              <li><Link href="/quiz" className="hover:text-primary transition-colors">Language Quiz</Link></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-semibold text-slate-900 mb-4">Resources</h4>
            <ul className="space-y-2 text-sm text-slate-600">
              <li><Link href="/bookmarks" className="hover:text-primary transition-colors">My Bookmarks</Link></li>
              <li><a href="https://developer.mozilla.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">MDN Web Docs</a></li>
              <li><a href="https://freecodecamp.org" target="_blank" rel="noopener noreferrer" className="hover:text-primary transition-colors">freeCodeCamp</a></li>
            </ul>
          </div>
        </div>
        
        <div className="mt-12 pt-8 border-t border-slate-100 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-slate-400 text-sm">
            © {new Date().getFullYear()} KodePath. Open source education.
          </p>
          <div className="text-sm text-slate-400">
            Built with React & Tailwind
          </div>
        </div>
      </div>
    </footer>
  );
}
