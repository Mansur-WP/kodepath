import { Link, useLocation } from "wouter";
import { Code2, Menu, X, BookMarked } from "lucide-react";
import { useState } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { motion, AnimatePresence } from "framer-motion";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const { bookmarks } = useBookmarks();

  const navLinks = [
    { href: "/languages", label: "Languages" },
    { href: "/categories", label: "Categories" },
    { href: "/quiz", label: "Take Quiz" },
  ];

  return (
    <header className="sticky top-0 z-50 w-full bg-white/80 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2 group">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Code2 size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">KodePath</span>
        </Link>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-8">
          {navLinks.map((link) => (
            <Link 
              key={link.href} 
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary ${location === link.href ? "text-primary" : "text-slate-600"}`}
            >
              {link.label}
            </Link>
          ))}
          
          <div className="w-px h-6 bg-slate-200" />
          
          <Link 
            href="/bookmarks"
            className={`flex items-center gap-2 text-sm font-medium transition-colors hover:text-primary ${location === "/bookmarks" ? "text-primary" : "text-slate-600"}`}
          >
            <div className="relative">
              <BookMarked size={18} />
              {bookmarks.length > 0 && (
                <span className="absolute -top-1.5 -right-1.5 w-4 h-4 bg-secondary text-white text-[10px] font-bold flex items-center justify-center rounded-full">
                  {bookmarks.length}
                </span>
              )}
            </div>
            Bookmarks
          </Link>
        </nav>

        {/* Mobile Toggle */}
        <button 
          className="md:hidden p-2 text-slate-600"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>

      {/* Mobile Nav */}
      <AnimatePresence>
        {isOpen && (
          <motion.nav 
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: "auto", opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-slate-100 bg-white overflow-hidden"
          >
            <div className="px-4 py-4 flex flex-col gap-4">
              {navLinks.map((link) => (
                <Link 
                  key={link.href} 
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                >
                  <div className={`text-base font-medium p-2 rounded-lg ${location === link.href ? "bg-primary/5 text-primary" : "text-slate-600"}`}>
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/bookmarks" onClick={() => setIsOpen(false)}>
                <div className={`flex items-center justify-between p-2 rounded-lg text-base font-medium ${location === "/bookmarks" ? "bg-primary/5 text-primary" : "text-slate-600"}`}>
                  <div className="flex items-center gap-2">
                    <BookMarked size={18} />
                    Bookmarks
                  </div>
                  {bookmarks.length > 0 && (
                    <span className="bg-secondary text-white text-xs font-bold px-2 py-0.5 rounded-full">
                      {bookmarks.length}
                    </span>
                  )}
                </div>
              </Link>
            </div>
          </motion.nav>
        )}
      </AnimatePresence>
    </header>
  );
}
