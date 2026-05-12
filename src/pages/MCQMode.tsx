import React, { useState } from "react";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import { ChevronRight, ChevronLeft, Check, X, Trophy, BookOpen } from "lucide-react";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

const MCQMode = () => {
  const mcqs = questions.filter((q) => q.type === "MCQ").sort(() => Math.random() - 0.5);
  const [currentIdx, setCurrentIdx] = useState(0);
  const [selectedOpt, setSelectedOpt] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [isFinished, setIsFinished] = useState(false);

  const currentQ = mcqs[currentIdx];

  const handleSelect = (idx: number) => {
    if (showResult) return;
    setSelectedOpt(idx);
    setShowResult(true);

    const isCorrect = currentQ.options![idx] === currentQ.answer.finalAnswer;
    if (isCorrect) setScore(score + 1);
  };

  const nextQuestion = () => {
    if (currentIdx < mcqs.length - 1) {
      setCurrentIdx(currentIdx + 1);
      setSelectedOpt(null);
      setShowResult(false);
    } else {
      setIsFinished(true);
    }
  };

  if (isFinished) {
    return (
      <div className="mx-auto flex max-w-xl flex-col items-center justify-center px-4 py-20 text-center">
        <Trophy className="mb-6 h-20 w-20 text-yellow-500" />
        <h1 className="mb-2 text-3xl font-black text-white">Great Effort!</h1>
        <p className="mb-8 text-zinc-400 text-lg">You scored <span className="text-white font-bold">{score}</span> out of <span className="text-white font-bold">{mcqs.length}</span>.</p>
        <button
          onClick={() => window.location.reload()}
          className="rounded-full bg-indigo-600 px-8 py-3 font-bold text-white transition-all hover:bg-indigo-500"
        >
          Try Again
        </button>
      </div>
    );
  }

  return (
    <div className="mx-auto max-w-3xl px-4 py-8 pb-32">
      <div className="mb-8 flex items-center justify-between">
         <div className="flex items-center gap-2 text-sm font-bold text-zinc-500 uppercase tracking-widest">
            <BookOpen className="h-4 w-4" /> MCQ Practice Session
         </div>
         <div className="text-sm font-bold text-indigo-500">
            {currentIdx + 1} / {mcqs.length}
         </div>
      </div>

      <div className="mb-8 h-1 w-full bg-white/5 rounded-full overflow-hidden">
         <motion.div
           className="h-full bg-indigo-500"
           animate={{ width: `${((currentIdx + 1) / mcqs.length) * 100}%` }}
         />
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentIdx}
          initial={{ opacity: 0, x: 20 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -20 }}
          className="space-y-8"
        >
          <div className="rounded-3xl border border-white/5 bg-zinc-900/50 p-8">
            <h2 className="text-xl font-bold text-white md:text-2xl">{currentQ.question}</h2>
          </div>

          <div className="grid gap-4 md:grid-cols-2">
            {currentQ.options?.map((opt, i) => {
              const isCorrect = opt === currentQ.answer.finalAnswer;
              const isSelected = selectedOpt === i;

              return (
                <button
                  key={i}
                  disabled={showResult}
                  onClick={() => handleSelect(i)}
                  className={cn(
                    "flex items-center gap-4 rounded-2xl border p-5 text-left transition-all",
                    !showResult
                      ? "border-white/10 bg-zinc-900 hover:bg-zinc-800"
                      : isCorrect
                      ? "border-emerald-500 bg-emerald-500/10"
                      : isSelected
                      ? "border-red-500 bg-red-500/10"
                      : "border-white/5 bg-zinc-900/50 opacity-50"
                  )}
                >
                  <span className={cn(
                    "flex h-10 w-10 shrink-0 items-center justify-center rounded-xl font-bold",
                    !showResult
                      ? "bg-white/5 text-zinc-400"
                      : isCorrect
                      ? "bg-emerald-500 text-white"
                      : isSelected
                      ? "bg-red-500 text-white"
                      : "bg-white/5 text-zinc-600"
                  )}>
                    {showResult ? (isCorrect ? <Check className="h-5 w-5" /> : (isSelected ? <X className="h-5 w-5" /> : String.fromCharCode(65+i))) : String.fromCharCode(65 + i)}
                  </span>
                  <span className="font-semibold text-zinc-300">{opt}</span>
                </button>
              );
            })}
          </div>

          {showResult && (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="rounded-2xl bg-zinc-900 p-6 border border-white/5"
            >
              <h3 className="mb-2 font-bold text-white">Explanation</h3>
              <p className="text-sm leading-relaxed text-zinc-400">{currentQ.answer.explanation}</p>
              <button
                onClick={nextQuestion}
                className="mt-6 flex w-full items-center justify-center gap-2 rounded-xl bg-white py-3 font-bold text-black transition-all hover:bg-zinc-200"
              >
                Next Question <ChevronRight className="h-5 w-5" />
              </button>
            </motion.div>
          )}
        </motion.div>
      </AnimatePresence>
    </div>
  );
};

export default MCQMode;
