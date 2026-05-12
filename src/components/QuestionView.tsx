import React, { useState } from "react";
import { Check, Clipboard, Code2, FileText, Info, Play, Lightbulb, Workflow, Zap } from "lucide-react";
import { Question } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";

interface QuestionViewProps {
  question: Question;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const QuestionView = ({ question, isCompleted, onToggleComplete }: QuestionViewProps) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Section = ({ title, icon: Icon, children, colorClass = "text-indigo-400" }: any) => (
    <div className="mb-8 rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
      <div className={cn("mb-4 flex items-center gap-2 font-bold uppercase tracking-widest text-xs", colorClass)}>
        <Icon className="h-4 w-4" /> {title}
      </div>
      <div className="text-zinc-300">{children}</div>
    </div>
  );

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-32">
      <div className="mb-8">
        <div className="mb-4 flex items-center flex-wrap gap-3">
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-xs font-bold text-indigo-500 ring-1 ring-indigo-500/20">
            Unit {question.unit}
          </span>
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-xs font-bold text-zinc-400">
            {question.topic}
          </span>
          <span className="ml-auto flex items-center gap-2">
            <button
              onClick={onToggleComplete}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-1 text-xs font-bold transition-all",
                isCompleted ? "bg-emerald-500 text-white" : "bg-white/5 text-zinc-500 hover:bg-white/10"
              )}
            >
              {isCompleted ? <Check className="h-4 w-4" /> : null}
              {isCompleted ? "Solved" : "Mark as Solved"}
            </button>
          </span>
        </div>

        <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl">
          {question.question}
        </h1>

        {question.options && (
          <div className="mt-8 grid gap-4 overflow-hidden rounded-2xl md:grid-cols-2">
            {question.options.map((opt, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900 p-4 transition-all hover:bg-zinc-800">
                <span className="flex h-8 w-8 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-500">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-zinc-300">{opt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="group relative w-full overflow-hidden rounded-2xl bg-indigo-600 py-6 text-xl font-bold text-white transition-all hover:bg-indigo-500"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <Play className="h-6 w-6 fill-current" /> Reveal Answer
          </span>
          <motion.div
            className="absolute inset-0 z-0 bg-white/20"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="space-y-6"
        >
          <Section title="Final Answer" icon={Check} colorClass="text-emerald-400">
            <p className="text-lg font-semibold text-emerald-400">{question.answer.finalAnswer}</p>
          </Section>

          {question.answer.aim && (
            <Section title="AIM" icon={Zap} colorClass="text-yellow-400">
              <p>{question.answer.aim}</p>
            </Section>
          )}

          {question.answer.algorithm && (
            <Section title="ALGORITHM" icon={Workflow} colorClass="text-indigo-400">
              <ol className="list-decimal space-y-2 pl-4">
                {question.answer.algorithm.map((step, i) => (
                  <li key={i} className="pl-2">{step}</li>
                ))}
              </ol>
            </Section>
          )}

          {question.answer.code && (
            <div className="mb-8 overflow-hidden rounded-2xl border border-white/5 bg-zinc-950">
              <div className="flex items-center justify-between bg-zinc-900 px-6 py-3">
                <div className="flex items-center gap-2 text-xs font-bold text-zinc-400 uppercase tracking-widest">
                  <Code2 className="h-4 w-4" /> CODE
                </div>
                <button
                  onClick={() => copyToClipboard(question.answer.code!)}
                  className="flex items-center gap-2 text-xs font-bold text-zinc-500 hover:text-white transition-colors"
                >
                  {copied ? <Check className="h-3 w-3" /> : <Clipboard className="h-3 w-3" />}
                  {copied ? "Copied" : "Copy"}
                </button>
              </div>
              <div className="p-6">
                <pre className="overflow-x-auto text-sm font-mono text-zinc-300">
                  <code>{question.answer.code}</code>
                </pre>
              </div>
            </div>
          )}

          {question.answer.input && (
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <Section title="INPUT" icon={FileText} colorClass="text-blue-400">
                  <pre className="font-mono text-sm">{question.answer.input}</pre>
                </Section>
                <Section title="OUTPUT" icon={FileText} colorClass="text-emerald-400">
                  <pre className="font-mono text-sm text-emerald-400">{question.answer.output}</pre>
                </Section>
             </div>
          )}

          {question.answer.result && (
            <Section title="RESULT" icon={Check} colorClass="text-emerald-400">
              <p>{question.answer.result}</p>
            </Section>
          )}

          {question.pseudocode && (
            <Section title="Pseudocode" icon={FileText} colorClass="text-zinc-400">
              <pre className="font-mono text-sm italic">{question.pseudocode}</pre>
            </Section>
          )}

          {question.answer.flowLogic && (
            <Section title="Flow Logic" icon={Workflow} colorClass="text-purple-400">
              <ul className="space-y-2">
                {question.answer.flowLogic.map((step, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-purple-500" />
                    <span>{step}</span>
                  </li>
                ))}
              </ul>
            </Section>
          )}

          <Section title="Explanation" icon={Info} colorClass="text-zinc-400">
            <p className="whitespace-pre-wrap leading-relaxed">{question.answer.explanation}</p>
          </Section>

          <div className="pt-8">
             <div className="flex items-center justify-between border-t border-white/5 pt-8">
                <h3 className="text-lg font-bold text-white flex items-center gap-2">
                   <Lightbulb className="h-5 w-5 text-yellow-500" /> Exam Tip
                </h3>
                <span className="text-sm text-zinc-500 italic">Focus on {question.topic} frequency</span>
             </div>
             <p className="mt-2 text-zinc-400 italic">Always write AIM, Algorithm, Result, and draw a flowchart for 8/15 markers to score full marks.</p>
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionView;
