import { useEffect, useRef } from "react";
import hljs from "highlight.js/lib/core";
import { Code2, Copy, Check } from "lucide-react";
import { useState } from "react";

import javascript from "highlight.js/lib/languages/javascript";
import typescript from "highlight.js/lib/languages/typescript";
import python from "highlight.js/lib/languages/python";
import java from "highlight.js/lib/languages/java";
import c from "highlight.js/lib/languages/c";
import cpp from "highlight.js/lib/languages/cpp";
import csharp from "highlight.js/lib/languages/csharp";
import kotlin from "highlight.js/lib/languages/kotlin";
import swift from "highlight.js/lib/languages/swift";
import go from "highlight.js/lib/languages/go";
import rust from "highlight.js/lib/languages/rust";
import php from "highlight.js/lib/languages/php";
import ruby from "highlight.js/lib/languages/ruby";
import dart from "highlight.js/lib/languages/dart";
import sql from "highlight.js/lib/languages/sql";
import xml from "highlight.js/lib/languages/xml";
import bash from "highlight.js/lib/languages/bash";
import lua from "highlight.js/lib/languages/lua";
import scala from "highlight.js/lib/languages/scala";
import r from "highlight.js/lib/languages/r";

hljs.registerLanguage("javascript", javascript);
hljs.registerLanguage("typescript", typescript);
hljs.registerLanguage("python", python);
hljs.registerLanguage("java", java);
hljs.registerLanguage("c", c);
hljs.registerLanguage("cpp", cpp);
hljs.registerLanguage("csharp", csharp);
hljs.registerLanguage("kotlin", kotlin);
hljs.registerLanguage("swift", swift);
hljs.registerLanguage("go", go);
hljs.registerLanguage("rust", rust);
hljs.registerLanguage("php", php);
hljs.registerLanguage("ruby", ruby);
hljs.registerLanguage("dart", dart);
hljs.registerLanguage("sql", sql);
hljs.registerLanguage("xml", xml);
hljs.registerLanguage("html", xml);
hljs.registerLanguage("bash", bash);
hljs.registerLanguage("shell", bash);
hljs.registerLanguage("lua", lua);
hljs.registerLanguage("scala", scala);
hljs.registerLanguage("r", r);

interface CodeBlockProps {
  code: string;
  language: string;
  label?: string;
}

export default function CodeBlock({ code, language, label }: CodeBlockProps) {
  const codeRef = useRef<HTMLElement>(null);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    if (codeRef.current) {
      codeRef.current.removeAttribute("data-highlighted");
      hljs.highlightElement(codeRef.current);
    }
  }, [code, language]);

  const handleCopy = () => {
    navigator.clipboard.writeText(code).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 2000);
    });
  };

  return (
    <div className="rounded-3xl overflow-hidden border border-slate-800 shadow-lg bg-[#0d1117]">
      {/* Top bar */}
      <div className="bg-[#161b22] px-5 py-3 flex items-center justify-between border-b border-slate-800">
        <div className="flex items-center gap-3">
          {/* Traffic lights */}
          <div className="flex gap-1.5">
            <div className="w-3 h-3 rounded-full bg-rose-500/80" />
            <div className="w-3 h-3 rounded-full bg-amber-500/80" />
            <div className="w-3 h-3 rounded-full bg-emerald-500/80" />
          </div>
          <div className="flex items-center gap-2 text-slate-400">
            <Code2 size={15} />
            <span className="text-sm font-medium">{label || "Syntax Example"}</span>
          </div>
        </div>
        <div className="flex items-center gap-3">
          <span className="px-2.5 py-1 rounded-md bg-slate-700/60 text-slate-300 font-mono text-xs">
            {language}
          </span>
          <button
            onClick={handleCopy}
            data-testid="btn-copy-code"
            className="p-1.5 rounded-md hover:bg-slate-700/60 transition-colors text-slate-400 hover:text-slate-200"
            title="Copy code"
          >
            {copied ? <Check size={15} className="text-emerald-400" /> : <Copy size={15} />}
          </button>
        </div>
      </div>
      {/* Code area */}
      <div className="p-6 overflow-x-auto">
        <pre className="text-sm leading-relaxed m-0">
          <code
            ref={codeRef}
            className={`language-${language} !bg-transparent !p-0 text-sm font-mono`}
          >
            {code}
          </code>
        </pre>
      </div>

      <style>{`
        .hljs { background: transparent !important; padding: 0 !important; }
        .hljs-keyword { color: #ff7b72; }
        .hljs-built_in { color: #ffa657; }
        .hljs-type { color: #ffa657; }
        .hljs-literal { color: #79c0ff; }
        .hljs-number { color: #79c0ff; }
        .hljs-operator { color: #ff7b72; }
        .hljs-punctuation { color: #8b949e; }
        .hljs-property { color: #79c0ff; }
        .hljs-regexp { color: #a5d6ff; }
        .hljs-string { color: #a5d6ff; }
        .hljs-char.escape_ { color: #a5d6ff; }
        .hljs-subst { color: #c9d1d9; }
        .hljs-symbol { color: #79c0ff; }
        .hljs-variable { color: #ffa657; }
        .hljs-variable.language_ { color: #ff7b72; }
        .hljs-variable.constant_ { color: #79c0ff; }
        .hljs-title { color: #d2a8ff; }
        .hljs-title.class_ { color: #ffa657; }
        .hljs-title.function_ { color: #d2a8ff; }
        .hljs-params { color: #c9d1d9; }
        .hljs-comment { color: #8b949e; font-style: italic; }
        .hljs-doctag { color: #ff7b72; }
        .hljs-meta { color: #79c0ff; }
        .hljs-attr { color: #79c0ff; }
        .hljs-attribute { color: #a5d6ff; }
        .hljs-name { color: #7ee787; }
        .hljs-section { color: #d2a8ff; }
        .hljs-tag { color: #7ee787; }
        .hljs-template-tag { color: #ff7b72; }
        .hljs-template-variable { color: #ffa657; }
        .hljs-addition { background: #033a16; color: #aff5b4; }
        .hljs-deletion { background: #67060c; color: #ffdcd7; }
        .hljs-selector-tag { color: #7ee787; }
        .hljs-selector-id { color: #79c0ff; }
        .hljs-selector-class { color: #79c0ff; }
        .hljs-selector-attr { color: #79c0ff; }
        .hljs-selector-pseudo { color: #7ee787; }
      `}</style>
    </div>
  );
}
