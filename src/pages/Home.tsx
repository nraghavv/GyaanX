import React from "react";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import UnitCard from "../components/UnitCard";
import { Flame, Zap, CheckCircle2, TrendingUp } from "lucide-react";
import { motion } from "framer-motion";

const Home = () => {
  const { getUnitProgress, progress } = useProgress();

  const units = [
    { id: 1, title: "Basics of PPS", desc: "Algorithms, Flowcharts, Tokens, and Operators precedence rules." },
    { id: 2, title: "Control & Arrays", desc: "Loops output questions, Palindrome, Fibonacci, and Matrix operations." },
    { id: 3, title: "Strings & Pointers", desc: "String manipulation, strcmp/strlen, and Pointer memory management." },
    { id: 4, title: "Python Intro", desc: "Python syntax, Lists, Tuples, Dictionaries, and Basic IO." },
    { id: 5, title: "NumPy & Pandas", desc: "ND-Arrays, DataFrames, Series, and Library comparisons." },
  ];

  const totalSolved = Object.values(progress).filter(Boolean).length;
  const overallProgress = Math.round((totalSolved / questions.length) * 100);

  const mustDoCount = questions.filter(q => q.isMustDo).length;
  const mustDoSolved = questions.filter(q => q.isMustDo && progress[q.id]).length;

  return (
    <div className="mx-auto max-w-7xl px-4 py-8 pb-32">
      <header className="mb-12">
        <motion.div
           initial={{ opacity: 0, y: -20 }}
           animate={{ opacity: 1, y: 0 }}
           className="flex items-center gap-2 text-indigo-500 font-bold mb-2 text-sm uppercase tracking-widest"
        >
          <Sparkles className="h-4 w-4" /> Exam-Ready Prep System
        </motion.div>
        <h1 className="text-4xl font-black tracking-tight text-white md:text-5xl lg:text-6xl">
          Prep your <span className="bg-gradient-to-r from-indigo-500 to-purple-500 bg-clip-text text-transparent">PPS Exam</span> in 8 hours.
        </h1>
        <p className="mt-4 max-w-2xl text-lg text-zinc-400">
          Curated content based on last 5 years PYQ trends. Master the high-frequency patterns and ace your final exam.
        </p>
      </header>

      <div className="mb-12 grid gap-4 grid-cols-1 md:grid-cols-3">
        <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
           <div className="flex items-center gap-3 text-zinc-500 text-sm font-bold uppercase tracking-widest mb-2">
              <Zap className="h-4 w-4 text-yellow-500" /> Overall Progress
           </div>
           <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-white">{overallProgress}%</span>
              <span className="text-sm font-medium text-zinc-500 mb-1">{totalSolved}/{questions.length} Solved</span>
           </div>
           <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-indigo-500" style={{ width: `${overallProgress}%` }} />
           </div>
        </div>

        <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
           <div className="flex items-center gap-3 text-zinc-500 text-sm font-bold uppercase tracking-widest mb-2">
              <Flame className="h-4 w-4 text-orange-500" /> Must Do Stats
           </div>
           <div className="flex items-end gap-2">
              <span className="text-4xl font-black text-white">{Math.round((mustDoSolved/mustDoCount)*100)}%</span>
              <span className="text-sm font-medium text-zinc-500 mb-1">{mustDoSolved}/{mustDoCount} Must Do</span>
           </div>
           <div className="mt-4 h-1.5 w-full bg-white/5 rounded-full overflow-hidden">
              <div className="h-full bg-orange-500" style={{ width: `${(mustDoSolved/mustDoCount)*100}%` }} />
           </div>
        </div>

        <div className="rounded-2xl border border-emerald-500/20 bg-emerald-500/5 p-6">
           <div className="flex items-center gap-3 text-emerald-500/70 text-sm font-bold uppercase tracking-widest mb-2">
              <TrendingUp className="h-4 w-4" /> Quick Goal
           </div>
           <p className="text-sm text-zinc-400 font-medium leading-relaxed">
             Finish Units 1 and 2 first. They cover <span className="text-white font-bold">40%</span> of the paper with Output & Program based questions.
           </p>
        </div>
      </div>

      <div className="mb-6 flex items-center justify-between">
         <h2 className="text-2xl font-bold text-white">Focus by Unit</h2>
         <div className="text-sm font-medium text-zinc-500">Pick a unit to start</div>
      </div>

      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {units.map((unit) => {
          const stats = getUnitProgress(unit.id, questions);
          return (
            <UnitCard
              key={unit.id}
              unitNumber={unit.id}
              title={unit.title}
              description={unit.desc}
              progress={stats.percent}
              totalQuestions={stats.total}
              completedQuestions={stats.completed}
            />
          );
        })}
      </div>
    </div>
  );
};

const Sparkles = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <path d="m12 3-1.912 5.813a2 2 0 0 1-1.275 1.275L3 12l5.813 1.912a2 2 0 0 1 1.275 1.275L12 21l1.912-5.813a2 2 0 0 1 1.275-1.275L21 12l-5.813-1.912a2 2 0 0 1-1.275-1.275L12 3Z"/>
    <path d="M5 3v4"/><path d="M19 17v4"/><path d="M3 5h4"/><path d="M17 19h4"/>
  </svg>
);

export default Home;
