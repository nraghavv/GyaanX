import React from "react";
import { Hash, Sparkles, BookText } from "lucide-react";

const TemplatePage = () => {
  const templates = [
    {
      title: "AIM Template",
      icon: Hash,
      content: "To write a C program to [Problem Statement] and demonstrate the use of [Key Concept/Feature].",
    },
    {
      title: "ALGORITHM Template",
      icon: Sparkles,
      content: `Step 1: Start
Step 2: Declare necessary variables [var1, var2..]
Step 3: Prompt the user to enter [Input Name]
Step 4: Read input using scanf/input()
Step 5: Apply logic [Formula/Condition]
Step 6: Display the processed result
Step 7: Stop`,
    },
    {
      title: "RESULT Template",
      icon: BookText,
      content: "The C program for [Problem Name] was successfully written, compiled, and executed. The output for sample inputs was verified to be correct.",
    },
  ];

  const flowLogicExamples = [
    { name: "Loop Logic", logic: "Initialization \u2192 Condition Check \u2192 Body \u2192 Increment/Decrement \u2192 Repeat until false" },
    { name: "Decision Logic", logic: "Condition Evaluation \u2192 True Path (If) OR False Path (Else) \u2192 Merge Back" },
    { name: "Pointer Logic", logic: "Address Extraction (&) \u2192 Storage in Pointer (*) \u2192 Dereferencing to access value" },
  ];

  return (
    <div className="mx-auto max-w-4xl px-4 py-8 pb-32">
      <h1 className="mb-2 text-3xl font-bold text-white">Don't Know the Answer?</h1>
      <p className="mb-8 text-zinc-400">Use these standard templates to secure marks even if you don't know the exact logic.</p>

      <div className="space-y-8">
        {templates.map((tpl) => (
          <div key={tpl.title} className="rounded-2xl border border-white/5 bg-zinc-900/50 p-6">
            <div className="mb-4 flex items-center gap-2 text-lg font-bold text-indigo-400 uppercase tracking-widest">
              <tpl.icon className="h-5 w-5" /> {tpl.title}
            </div>
            <div className="relative rounded-xl bg-black/40 p-4 border border-white/5">
              <pre className="whitespace-pre-wrap font-mono text-zinc-300">{tpl.content}</pre>
            </div>
          </div>
        ))}

        <div className="rounded-2xl border border-white/5 bg-indigo-600/10 p-6">
           <h2 className="mb-4 text-xl font-bold text-white uppercase tracking-widest">General Flow Logic Examples</h2>
           <div className="grid gap-4 md:grid-cols-2">
              {flowLogicExamples.map(item => (
                <div key={item.name} className="rounded-xl bg-zinc-900 p-4 border border-white/5">
                   <h3 className="text-sm font-bold text-indigo-400 mb-1">{item.name}</h3>
                   <p className="text-xs text-zinc-300">{item.logic}</p>
                </div>
              ))}
           </div>
        </div>

        <div className="rounded-2xl border border-orange-500/20 bg-orange-500/5 p-6">
           <h2 className="mb-2 text-lg font-bold text-orange-400">Last Minute Tip</h2>
           <p className="text-sm text-zinc-400 italic">"If you forget the code, write the Algorithm and Pseudocode correctly. In a 10-mark question, Algorithm + Flowchart + Theory alone can fetch you 6-7 marks."</p>
        </div>
      </div>
    </div>
  );
};

export default TemplatePage;
