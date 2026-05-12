import React, { useState } from "react";
import { Check, Clipboard, Code2, FileText, Info, Play, Lightbulb, Workflow, Zap, BookOpen, Terminal } from "lucide-react";
import { Question } from "../types";
import { motion, AnimatePresence } from "framer-motion";
import { cn } from "../lib/utils";
import CodeRunner from "./CodeRunner";

interface QuestionViewProps {
  question: Question;
  isCompleted: boolean;
  onToggleComplete: () => void;
}

const QuestionView = ({ question, isCompleted, onToggleComplete }: QuestionViewProps) => {
  const [revealed, setRevealed] = useState(false);
  const [copied, setCopied] = useState(false);

  const isCoding = question.type === "Coding";

  const copyToClipboard = (text: string) => {
    navigator.clipboard.writeText(text);
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  const Section = ({ title, icon: Icon, children, colorClass = "text-indigo-400" }: any) => (
    <div className="mb-6 rounded-2xl border border-white/5 bg-zinc-900/50 p-6 shadow-sm">
      <div className={cn("mb-4 flex items-center gap-2 font-bold uppercase tracking-widest text-[10px]", colorClass)}>
        <Icon className="h-3.5 w-3.5" /> {title}
      </div>
      <div className="text-zinc-300 text-sm leading-relaxed">{children}</div>
    </div>
  );

  return (
    <div className={cn("mx-auto px-4 py-8 pb-32 transition-all duration-500", isCoding && revealed ? "max-w-[1600px]" : "max-w-4xl")}>
      <div className="mb-8">
        <div className="mb-4 flex items-center flex-wrap gap-3">
          <span className="rounded-full bg-indigo-500/10 px-3 py-1 text-[10px] font-bold text-indigo-500 ring-1 ring-indigo-500/20 uppercase tracking-wider">
            Unit {question.unit}
          </span>
          <span className="rounded-full bg-zinc-800 px-3 py-1 text-[10px] font-bold text-zinc-400 uppercase tracking-wider">
            {question.topic}
          </span>
          <span className="ml-auto flex items-center gap-2">
            <button
              onClick={onToggleComplete}
              className={cn(
                "flex items-center gap-2 rounded-full px-4 py-1.5 text-[10px] font-bold transition-all uppercase tracking-wider",
                isCompleted ? "bg-emerald-500 text-white" : "bg-white/5 text-zinc-500 hover:bg-white/10"
              )}
            >
              {isCompleted ? <Check className="h-4 w-4" /> : null}
              {isCompleted ? "Solved" : "Mark as Solved"}
            </button>
          </span>
        </div>

        <h1 className="text-2xl font-bold leading-tight text-white md:text-3xl lg:text-4xl tracking-tight">
          {question.question}
        </h1>

        {question.options && (
          <div className="mt-8 grid gap-4 overflow-hidden rounded-2xl md:grid-cols-2">
            {question.options.map((opt, i) => (
              <div key={i} className="flex items-center gap-4 rounded-xl border border-white/10 bg-zinc-900 p-5 transition-all hover:bg-zinc-800 hover:border-white/20">
                <span className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg bg-indigo-500/10 text-sm font-bold text-indigo-500">
                  {String.fromCharCode(65 + i)}
                </span>
                <span className="text-zinc-200">{opt}</span>
              </div>
            ))}
          </div>
        )}
      </div>

      {!revealed ? (
        <button
          onClick={() => setRevealed(true)}
          className="group relative w-full overflow-hidden rounded-2xl bg-indigo-600 py-8 text-xl font-bold text-white transition-all hover:bg-indigo-500 shadow-xl shadow-indigo-900/20"
        >
          <span className="relative z-10 flex items-center justify-center gap-3">
            <Play className="h-6 w-6 fill-current" /> Reveal Answer & Guide
          </span>
          <motion.div
            className="absolute inset-0 z-0 bg-white/10"
            animate={{ x: ["-100%", "100%"] }}
            transition={{ duration: 1.5, repeat: Infinity, ease: "linear" }}
          />
        </button>
      ) : (
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          className={cn("grid gap-8", isCoding ? "grid-cols-1 lg:grid-cols-[1.1fr,1fr]" : "grid-cols-1")}
        >
          {/* LEFT SIDE: Question Content */}
          <div className="space-y-6">
            {/* 1. QUESTION (Prominent for Exams) */}
            <div className="mb-8 p-6 rounded-2xl bg-indigo-500/5 border border-indigo-500/10">
               <div className="mb-2 text-[10px] font-bold text-indigo-500 uppercase tracking-widest flex items-center gap-2">
                 <FileText className="h-3.5 w-3.5" /> 1. QUESTION
               </div>
               <h2 className="text-xl font-bold text-white leading-tight">
                 {question.question}
               </h2>
            </div>

            {/* 2. EXPLANATION */}
            <Section title="2. EXPLANATION" icon={Info} colorClass="text-zinc-400">
              <div className="space-y-4 text-zinc-300 leading-relaxed">
                {question.answer.explanation.split('\n\n').map((para, i) => (
                  <p key={i}>{para}</p>
                ))}
              </div>
            </Section>

            {/* 3. PSEUDOCODE */}
            {question.pseudocode && (
              <Section title="3. PSEUDOCODE" icon={FileText} colorClass="text-zinc-400">
                <div className="bg-zinc-950/50 p-6 rounded-xl border border-white/5 font-mono text-sm text-zinc-300 leading-relaxed overflow-x-auto">
                  {question.pseudocode.split('\n').map((line, i) => (
                    <div key={i}>{line}</div>
                  ))}
                </div>
              </Section>
            )}

            {/* 4. AIM / ALGORITHM / RESULT */}
            <div className="space-y-4 pt-4 border-t border-white/5">
                <div className="text-[10px] font-bold text-indigo-400 uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Zap className="h-3.5 w-3.5" /> 4. THEORY & LOGIC
                </div>
                
                {question.answer.aim && (
                    <div className="mb-4 bg-zinc-900/30 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-zinc-500 block mb-1">AIM:</span>
                        <p className="font-bold text-zinc-200">{question.answer.aim}</p>
                    </div>
                )}

                {question.answer.theory && (
                    <div className="mb-4 bg-zinc-900/30 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-zinc-500 block mb-1">THEORY:</span>
                        <div className="text-sm text-zinc-400 space-y-2">
                          {question.answer.theory.split('\n').map((line, i) => (
                            <p key={i}>{line}</p>
                          ))}
                        </div>
                    </div>
                )}

                {question.answer.algorithm && (
                    <div className="mb-4 bg-zinc-900/30 p-4 rounded-xl border border-white/5">
                        <span className="text-[10px] font-bold text-zinc-500 block mb-1">ALGORITHM:</span>
                        <ol className="list-decimal space-y-2 pl-4 text-sm text-zinc-400">
                        {question.answer.algorithm.map((step, i) => (
                            <li key={i} className="pl-2">{step}</li>
                        ))}
                        </ol>
                    </div>
                )}

                {question.answer.result && (
                    <div className="bg-emerald-500/10 p-4 rounded-xl border border-emerald-500/20">
                        <span className="text-[10px] font-bold text-emerald-500 block mb-1">RESULT:</span>
                        <p className="font-bold text-emerald-400">{question.answer.result}</p>
                    </div>
                )}
            </div>

            <div className="pt-6 border-t border-white/5">
               <div className="flex items-center justify-between mb-2">
                  <h3 className="text-lg font-bold text-white flex items-center gap-2">
                     <Lightbulb className="h-5 w-5 text-yellow-500" /> Exam Strategy
                  </h3>
               </div>
               <p className="text-sm text-zinc-400 leading-relaxed italic">For a 15-mark question, ensure you draw the flowchart corresponding to the algorithm above. Be precise with symbols.</p>
            </div>
          </div>

          {/* RIGHT SIDE: Code Runner (for Coding Questions) OR Static Code/Details */}
          <div className="space-y-6">
            {isCoding ? (
              <div className="lg:sticky lg:top-24 h-fit">
                <div className="mb-4 flex items-center justify-between">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-500 uppercase tracking-widest">
                    <Code2 className="h-4 w-4" /> 7. IMPLEMENTATION (EXAM CODE)
                  </div>
                  <div className="flex items-center gap-3">
                    <span className="text-[10px] font-bold text-zinc-500">Language:</span>
                    <span className="px-2 py-0.5 rounded bg-zinc-800 text-[10px] font-bold text-zinc-300 uppercase">
                      {question.topic.toLowerCase().includes('python') ? 'Python' : 'C'}
                    </span>
                  </div>
                </div>
                <CodeRunner 
                  initialCode={question.answer.code || ""} 
                  expectedOutput={question.answer.output}
                  defaultLanguage={question.topic.toLowerCase().includes('python') ? 'python' : 'c'}
                />
              </div>
            ) : question.answer.code ? (
              <div className="overflow-hidden rounded-2xl border border-white/5 bg-zinc-950 shadow-xl">
                <div className="flex items-center justify-between bg-zinc-900 px-6 py-4 border-b border-white/5">
                  <div className="flex items-center gap-2 text-[10px] font-bold text-zinc-400 uppercase tracking-widest">
                    <Code2 className="h-4 w-4 text-indigo-400" /> 7. CODE REFERENCE
                  </div>
                  <button
                    onClick={() => copyToClipboard(question.answer.code!)}
                    className="flex items-center gap-2 rounded-lg px-3 py-1.5 text-[10px] font-bold text-zinc-500 hover:text-white hover:bg-white/5 transition-all uppercase tracking-wider"
                  >
                    {copied ? <Check className="h-3.5 w-3.5" /> : <Clipboard className="h-3.5 w-3.5" />}
                    {copied ? "Copied" : "Copy Source"}
                  </button>
                </div>
                <div className="p-8">
                  <pre className="overflow-x-auto text-sm font-mono text-zinc-300 custom-scrollbar leading-relaxed">
                    <code>{question.answer.code}</code>
                  </pre>
                </div>
              </div>
            ) : (
                <div className="rounded-2xl border border-white/5 bg-zinc-900/30 p-8 flex flex-col items-center justify-center text-center gap-4 border-dashed min-h-[300px]">
                    <div className="p-4 rounded-full bg-white/5">
                        <BookOpen className="w-8 h-8 text-zinc-500" />
                    </div>
                    <div>
                        <h4 className="text-white font-bold mb-1">Theoretical Concept</h4>
                        <p className="text-zinc-500 text-sm max-w-xs">Review the detailed theory and methodology in the left panel for exam preparation.</p>
                    </div>
                </div>
            )}

            {(question.answer.input || question.answer.output) && (
              <div className="grid grid-cols-1 gap-6">
                <Section title="8. TEST INPUT" icon={FileText} colorClass="text-blue-400">
                  <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-blue-300">
                    {question.answer.input || "No specific input required."}
                  </div>
                </Section>
                <Section title="8. EXPECTED OUTPUT" icon={Terminal} colorClass="text-emerald-400">
                  <div className="bg-black/40 p-4 rounded-xl font-mono text-xs text-emerald-400">
                    {question.answer.output || "Success / Validated."}
                  </div>
                </Section>
              </div>
            )}
          </div>
        </motion.div>
      )}
    </div>
  );
};

export default QuestionView;

