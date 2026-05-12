import { useState, useEffect } from "react";
import { Progress } from "../types";

export const useProgress = () => {
  const [progress, setProgress] = useState<Progress>({});

  useEffect(() => {
    const saved = localStorage.getItem("pps_prep_progress");
    if (saved) {
      try {
        setProgress(JSON.parse(saved));
      } catch (e) {
        console.error("Failed to parse progress", e);
      }
    }
  }, []);

  const toggleProgress = (id: number) => {
    const newProgress = { ...progress, [id]: !progress[id] };
    setProgress(newProgress);
    localStorage.setItem("pps_prep_progress", JSON.stringify(newProgress));
  };

  const isCompleted = (id: number) => !!progress[id];

  const getUnitProgress = (unitId: number, questions: { id: number; unit: number }[]) => {
    const unitQuestions = questions.filter((q) => q.unit === unitId);
    if (unitQuestions.length === 0) return { percent: 0, completed: 0, total: 0 };
    const completed = unitQuestions.filter((q) => isCompleted(q.id)).length;
    return {
      percent: Math.round((completed / unitQuestions.length) * 100),
      completed,
      total: unitQuestions.length,
    };
  };

  return { progress, toggleProgress, isCompleted, getUnitProgress };
};
