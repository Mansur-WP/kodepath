import { Link, useLocation } from "wouter";
import { Code2, Menu, X, BookMarked, Search, ArrowLeftRight, Sun, Moon } from "lucide-react";
import { useState, useRef, useEffect } from "react";
import { useBookmarks } from "@/hooks/useBookmarks";
import { useTheme } from "@/hooks/useTheme";
import { motion, AnimatePresence } from "framer-motion";
import { languages } from "@/data/languages";

export default function Navbar() {
  const [location] = useLocation();
  const [isOpen, setIsOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [searchFocused, setSearchFocused] = useState(false);
  const { bookmarks } = useBookmarks();
  const { isDark, toggle: toggleTheme } = useTheme();
  const searchRef = useRef<HTMLDivElement>(null);

  const navLinks = [
    { href: "/languages", label: "Languages" },
    { href: "/categories", label: "Categories" },
    { href: "/compare", label: "Compare" },
    { href: "/quiz", label: "Take Quiz" },
  ];

  const results = query.trim().length > 0
    ? languages.filter(l =>
        l.name.toLowerCase().includes(query.toLowerCase()) ||
        l.shortDescription.toLowerCase().includes(query.toLowerCase()) ||
        l.categories.some(c => c.toLowerCase().includes(query.toLowerCase()))
      ).slice(0, 6)
    : [];

  const showDropdown = searchFocused && query.trim().length > 0;

  useEffect(() => {
    function handleClick(e: MouseEvent) {
      if (searchRef.current && !searchRef.current.contains(e.target as Node)) {
        setSearchFocused(false);
      }
    }
    document.addEventListener("mousedown", handleClick);
    return () => document.removeEventListener("mousedown", handleClick);
  }, []);

  const handleResultClick = () => {
    setQuery("");
    setSearchFocused(false);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-white/90 backdrop-blur-md border-b border-slate-100">
      <div className="container mx-auto px-4 h-16 flex items-center justify-between gap-4">
        <Link href="/" className="flex items-center gap-2 group shrink-0">
          <div className="w-8 h-8 rounded-lg bg-primary/10 flex items-center justify-center text-primary group-hover:bg-primary group-hover:text-white transition-colors">
            <Code2 size={20} strokeWidth={2.5} />
          </div>
          <span className="text-xl font-bold tracking-tight text-slate-900">KodePath</span>
        </Link>

        {/* Live search — desktop only */}
        <div ref={searchRef} className="hidden md:block relative flex-1 max-w-xs">
          <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
          <input
            type="text"
            placeholder="Search languages…"
            value={query}
            onChange={e => setQuery(e.target.value)}
            onFocus={() => setSearchFocused(true)}
            data-testid="input-navbar-search"
            className="w-full pl-9 pr-3 py-2 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary/40 focus:bg-white transition-all"
          />

          <AnimatePresence>
            {showDropdown && (
              <motion.div
                initial={{ opacity: 0, y: 6, scale: 0.98 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                exit={{ opacity: 0, y: 4, scale: 0.98 }}
                transition={{ duration: 0.15 }}
                className="absolute top-full mt-2 left-0 right-0 bg-white border border-slate-200 rounded-2xl shadow-xl overflow-hidden z-50"
              >
                {results.length > 0 ? (
                  <>
                    {results.map(lang => (
                      <Link key={lang.id} href={`/languages/${lang.id}`}>
                        <div
                          onClick={handleResultClick}
                          data-testid={`search-result-${lang.id}`}
                          className="flex items-center gap-3 px-4 py-3 hover:bg-slate-50 transition-colors cursor-pointer border-b border-slate-50 last:border-0"
                        >
                          <div className="w-8 h-8 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-center shrink-0 p-1">
                            <img src={lang.logo} alt={lang.name} className="w-full h-full object-contain" />
                          </div>
                          <div className="flex-1 min-w-0">
                            <div className="font-semibold text-slate-800 text-sm">{lang.name}</div>
                            <div className="text-xs text-slate-400 truncate">{lang.shortDescription}</div>
                          </div>
                          <span className={`text-[10px] px-2 py-0.5 rounded-full font-bold shrink-0 ${
                            lang.difficulty === "Beginner" ? "bg-emerald-100 text-emerald-700" :
                            lang.difficulty === "Intermediate" ? "bg-amber-100 text-amber-700" :
                            "bg-rose-100 text-rose-700"
                          }`}>
                            {lang.difficulty}
                          </span>
                        </div>
                      </Link>
                    ))}
                    <div className="px-4 py-2.5 border-t border-slate-100 bg-slate-50">
                      <Link href={`/languages?q=${encodeURIComponent(query)}`}>
                        <div onClick={handleResultClick} className="text-xs text-primary font-semibold hover:underline cursor-pointer">
                          See all results for "{query}"
                        </div>
                      </Link>
                    </div>
                  </>
                ) : (
                  <div className="px-4 py-6 text-center text-sm text-slate-400">
                    No languages found for "<span className="font-medium text-slate-600">{query}</span>"
                  </div>
                )}
              </motion.div>
            )}
          </AnimatePresence>
        </div>

        {/* Desktop Nav */}
        <nav className="hidden md:flex items-center gap-6 shrink-0">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium transition-colors hover:text-primary flex items-center gap-1.5 ${location === link.href ? "text-primary" : "text-slate-600"}`}
            >
              {link.href === "/compare" && <ArrowLeftRight size={14} />}
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

          {/* Dark mode toggle */}
          <button
            onClick={toggleTheme}
            data-testid="btn-theme-toggle"
            aria-label={isDark ? "Switch to light mode" : "Switch to dark mode"}
            className="p-2 rounded-xl bg-slate-100 hover:bg-slate-200 text-slate-600 transition-colors"
          >
            <AnimatePresence mode="wait" initial={false}>
              <motion.div
                key={isDark ? "sun" : "moon"}
                initial={{ rotate: -30, opacity: 0 }}
                animate={{ rotate: 0, opacity: 1 }}
                exit={{ rotate: 30, opacity: 0 }}
                transition={{ duration: 0.2 }}
              >
                {isDark ? <Sun size={17} /> : <Moon size={17} />}
              </motion.div>
            </AnimatePresence>
          </button>
        </nav>

        {/* Mobile: theme toggle + hamburger */}
        <div className="md:hidden flex items-center gap-2">
          <button
            onClick={toggleTheme}
            data-testid="btn-theme-toggle-mobile"
            className="p-2 rounded-xl bg-slate-100 text-slate-600"
          >
            {isDark ? <Sun size={17} /> : <Moon size={17} />}
          </button>
          <button
            className="p-2 text-slate-600"
            onClick={() => setIsOpen(!isOpen)}
            data-testid="btn-mobile-menu"
          >
            {isOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
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
            <div className="px-4 py-4 flex flex-col gap-3">
              <div className="relative">
                <Search size={15} className="absolute left-3.5 top-1/2 -translate-y-1/2 text-slate-400 pointer-events-none" />
                <input
                  type="text"
                  placeholder="Search languages…"
                  value={query}
                  onChange={e => setQuery(e.target.value)}
                  data-testid="input-mobile-search"
                  className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-slate-200 bg-slate-50 text-sm text-slate-800 placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/30"
                />
              </div>
              {query.trim().length > 0 && results.map(lang => (
                <Link key={lang.id} href={`/languages/${lang.id}`}>
                  <div
                    onClick={() => { setIsOpen(false); setQuery(""); }}
                    className="flex items-center gap-3 px-3 py-2.5 bg-slate-50 rounded-xl border border-slate-100"
                  >
                    <img src={lang.logo} alt={lang.name} className="w-7 h-7 object-contain" />
                    <div>
                      <div className="font-semibold text-slate-800 text-sm">{lang.name}</div>
                      <div className="text-xs text-slate-400">{lang.difficulty}</div>
                    </div>
                  </div>
                </Link>
              ))}
              {navLinks.map((link) => (
                <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)}>
                  <div className={`text-base font-medium p-2.5 rounded-xl flex items-center gap-2 ${location === link.href ? "bg-primary/5 text-primary" : "text-slate-600"}`}>
                    {link.href === "/compare" && <ArrowLeftRight size={16} />}
                    {link.label}
                  </div>
                </Link>
              ))}
              <Link href="/bookmarks" onClick={() => setIsOpen(false)}>
                <div className={`flex items-center justify-between p-2.5 rounded-xl text-base font-medium ${location === "/bookmarks" ? "bg-primary/5 text-primary" : "text-slate-600"}`}>
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
