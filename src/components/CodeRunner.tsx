import React, { useState, useEffect } from "react";
import Editor from "react-simple-code-editor";
import { highlight, languages } from "prismjs";
import "prismjs/components/prism-clike";
import "prismjs/components/prism-c";
import "prismjs/components/prism-python";
import "prismjs/themes/prism-tomorrow.css";
import { Play, RotateCcw, Terminal, Clipboard } from "lucide-react";
import { cn } from "../lib/utils";

interface CodeRunnerProps {
  initialCode: string;
  expectedOutput?: string;
  defaultLanguage?: "c" | "python";
}

const CodeRunner = ({ initialCode, expectedOutput, defaultLanguage = "c" }: CodeRunnerProps) => {
  const [code, setCode] = useState(initialCode);
  const [language, setLanguage] = useState(defaultLanguage);
  const [output, setOutput] = useState<string>("");
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    setCode(initialCode);
  }, [initialCode]);

  const handleRun = () => {
    setIsRunning(true);
    setOutput("");
    
    // Simulate compilation and execution
    setTimeout(() => {
      setIsRunning(false);
      if (expectedOutput) {
        setOutput(expectedOutput);
      } else {
        setOutput("Program executed successfully.\n(Output simulation based on provided code)");
      }
    }, 1000);
  };

  const handleReset = () => {
    setCode(initialCode);
    setOutput("");
  };

  const copyCode = () => {
    navigator.clipboard.writeText(code);
  };

  return (
    <div className="flex flex-col h-full border border-white/10 rounded-2xl bg-zinc-950 overflow-hidden shadow-2xl group/runner">
      {/* Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-white/5">
        <div className="flex items-center gap-4">
          <div className="flex items-center gap-2">
            <div className="flex gap-1.5">
              <div className="w-3 h-3 rounded-full bg-[#ff5f56]" />
              <div className="w-3 h-3 rounded-full bg-[#ffbd2e]" />
              <div className="w-3 h-3 rounded-full bg-[#27c93f]" />
            </div>
          </div>
          <select 
            value={language}
            onChange={(e) => setLanguage(e.target.value as any)}
            className="bg-zinc-800 text-zinc-300 text-[10px] font-bold px-3 py-1.5 rounded-lg border border-white/5 focus:outline-none focus:ring-1 focus:ring-indigo-500/50 uppercase tracking-wider cursor-pointer hover:bg-zinc-700 transition-colors"
          >
            <option value="c">C Language</option>
            <option value="python">Python 3</option>
          </select>
        </div>
        <div className="flex items-center gap-2">
          <button
            onClick={copyCode}
            className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
            title="Copy Code"
          >
            <Clipboard className="w-4 h-4" />
          </button>
          <button
            onClick={handleReset}
            className="p-2 text-zinc-500 hover:text-white hover:bg-zinc-800 rounded-lg transition-all"
            title="Reset Code"
          >
            <RotateCcw className="w-4 h-4" />
          </button>
          <button
            onClick={handleRun}
            disabled={isRunning}
            className={cn(
              "flex items-center gap-2 px-4 py-2 rounded-lg text-[10px] font-bold transition-all",
              "bg-indigo-600 text-white hover:bg-indigo-500 shadow-lg shadow-indigo-900/20 active:scale-95",
              isRunning && "opacity-50 cursor-not-allowed scale-95"
            )}
          >
            <Play className={cn("w-3.5 h-3.5 fill-current", isRunning && "animate-pulse")} />
            {isRunning ? "RUNNING..." : "EXECUTE"}
          </button>
        </div>
      </div>

      {/* Editor Area */}
      <div className="flex-1 overflow-auto bg-zinc-950 p-4 custom-scrollbar min-h-[300px]">
        <Editor
          value={code}
          onValueChange={setCode}
          highlight={(code) => highlight(code, language === "c" ? languages.c : languages.python, language)}
          padding={10}
          className="font-mono text-sm sm:text-base focus:outline-none"
          style={{
            fontFamily: '"JetBrains Mono", "Fira Code", monospace',
            minHeight: "100%",
            color: "#e4e4e7"
          }}
        />
      </div>

      {/* Output Console */}
      <div className="border-t border-white/5 bg-zinc-900">
        <div className="flex items-center gap-2 px-4 py-2 border-b border-white/5 bg-zinc-800/50">
          <Terminal className="w-4 h-4 text-emerald-500" />
          <span className="text-[10px] font-bold text-zinc-500 uppercase tracking-widest">Output Console</span>
        </div>
        <div className="p-4 h-32 overflow-auto font-mono text-sm bg-black/40">
          {isRunning ? (
            <div className="flex flex-col gap-2">
              <div className="flex items-center gap-2 text-emerald-500/50">
                <span className="animate-spin text-lg">◌</span>
                <span>Compiling source code...</span>
              </div>
            </div>
          ) : output ? (
            <pre className="text-emerald-400 whitespace-pre-wrap">{output}</pre>
          ) : (
            <span className="text-zinc-600 italic">No output yet. Click RUN to execute.</span>
          )}
        </div>
      </div>
    </div>
  );
};

export default CodeRunner;
