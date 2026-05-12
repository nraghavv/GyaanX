import React from "react";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import QuestionView from "../components/QuestionView";
import { Zap } from "lucide-react";

const RapidRevision = () => {
  const { isCompleted, toggleProgress } = useProgress();

  // Pick important and must do questions
  const selectedQuestions = questions.filter(q => q.isMustDo || q.frequency === "Very High");

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-32">
       <div className="mb-12 border-b border-white/5 pb-8 flex items-center justify-between">
          <div>
            <h1 className="text-3xl font-black text-white flex items-center gap-3">
               <Zap className="h-8 w-8 text-yellow-400 fill-current" /> Rapid Revision
            </h1>
            <p className="mt-2 text-zinc-500">Scroll through all essential patterns. No clicking needed.</p>
          </div>
          <div className="text-right">
             <div className="text-sm font-bold text-zinc-500 uppercase tracking-widest mb-1">Total Patterns</div>
             <div className="text-2xl font-black text-white">{selectedQuestions.length}</div>
          </div>
       </div>

       <div className="space-y-32">
          {selectedQuestions.map((q, idx) => (
            <div key={q.id} className="relative">
              <div className="absolute -top-12 left-0 text-6xl font-black text-white/5 pointer-events-none uppercase">
                Pattern #{idx + 1}
              </div>
              <QuestionView
                question={q}
                isCompleted={isCompleted(q.id)}
                onToggleComplete={() => toggleProgress(q.id)}
              />
            </div>
          ))}
       </div>

       <div className="py-20 text-center">
          <h2 className="text-2xl font-black text-white mb-2">You're All Set!</h2>
          <p className="text-zinc-500">You've reached the end of the rapid revision list. Go crush the paper!</p>
          <button
             onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
             className="mt-8 rounded-full border border-white/10 bg-zinc-900 px-8 py-3 text-sm font-bold text-white transition-all hover:bg-zinc-800"
          >
             Back to Top
          </button>
       </div>
    </div>
  );
};

export default RapidRevision;
