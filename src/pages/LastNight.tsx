import React from "react";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import QuestionCard from "../components/QuestionCard";
import { Flame, Clock, ShieldCheck } from "lucide-react";
import { motion } from "framer-motion";

const LastNight = () => {
  const { isCompleted } = useProgress();

  const filteredQuestions = questions.filter(
    (q) => q.isMustDo && (q.frequency === "Very High" || q.frequency === "High")
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-32">
      <div className="mb-10 text-center">
        <motion.div
           initial={{ scale: 0.8, opacity: 0 }}
           animate={{ scale: 1, opacity: 1 }}
           className="inline-flex h-20 w-20 items-center justify-center rounded-3xl bg-orange-500/10 text-orange-500 shadow-2xl shadow-orange-500/20 mb-6 border border-orange-500/20"
        >
          <Flame className="h-10 w-10 fill-current" />
        </motion.div>
        <h1 className="text-4xl font-black text-white">Last Night Mode</h1>
        <p className="mt-3 text-zinc-400">Strictly showing High Frequency & Must-Do questions only. Finish these to ensure passing marks.</p>
      </div>

      <div className="grid gap-6 md:grid-cols-2 mb-12">
         <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 flex items-start gap-4">
            <Clock className="h-6 w-6 text-indigo-400 mt-1" />
            <div>
               <h3 className="font-bold text-white mb-1">Time Estimate</h3>
               <p className="text-sm text-zinc-500">Completing these 20-30 questions will take roughly 3 hours.</p>
            </div>
         </div>
         <div className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6 flex items-start gap-4">
            <ShieldCheck className="h-6 w-6 text-emerald-400 mt-1" />
            <div>
               <h3 className="font-bold text-white mb-1">Pass Probability</h3>
               <p className="text-sm text-zinc-500">Internal data suggests 85% of exam paper comes from these patterns.</p>
            </div>
         </div>
      </div>

      <div className="space-y-4">
        <h2 className="text-sm font-bold text-zinc-500 uppercase tracking-widest px-1">Selected Questions ({filteredQuestions.length})</h2>
        {filteredQuestions.map((q, idx) => (
          <motion.div
            key={q.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: idx * 0.03 }}
          >
            <QuestionCard question={q} isCompleted={isCompleted(q.id)} />
          </motion.div>
        ))}
      </div>
    </div>
  );
};

export default LastNight;
