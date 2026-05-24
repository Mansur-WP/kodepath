import { useState, useEffect } from "react";

const KEY = (id: string) => `kodepath_progress_${id}`;

export function useRoadmapProgress(languageId: string, totalSteps: number) {
  const [completed, setCompleted] = useState<Set<number>>(() => {
    if (typeof window === "undefined") return new Set();
    try {
      const saved = localStorage.getItem(KEY(languageId));
      return saved ? new Set(JSON.parse(saved) as number[]) : new Set();
    } catch {
      return new Set();
    }
  });

  useEffect(() => {
    localStorage.setItem(KEY(languageId), JSON.stringify([...completed]));
  }, [completed, languageId]);

  const toggle = (index: number) => {
    setCompleted(prev => {
      const next = new Set(prev);
      if (next.has(index)) {
        next.delete(index);
      } else {
        next.add(index);
      }
      return next;
    });
  };

  const reset = () => setCompleted(new Set());

  const percentComplete = totalSteps > 0 ? Math.round((completed.size / totalSteps) * 100) : 0;

  return { completed, toggle, reset, percentComplete };
}
