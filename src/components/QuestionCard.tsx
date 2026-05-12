import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle, Flame, ChevronRight, Zap } from "lucide-react";
import { Question } from "../types";
import { cn } from "../lib/utils";

interface QuestionCardProps {
  question: Question;
  isCompleted: boolean;
}

const QuestionCard = ({ question, isCompleted }: QuestionCardProps) => {
  const typeColors = {
    MCQ: "bg-blue-500/10 text-blue-500",
    Coding: "bg-emerald-500/10 text-emerald-500",
    Theory: "bg-purple-500/10 text-purple-500",
    Numerical: "bg-yellow-500/10 text-yellow-500",
  };

  return (
    <Link to={`/question/${question.id}`}>
      <div className="group flex items-center gap-4 rounded-xl border border-white/5 bg-zinc-900/30 p-4 transition-all hover:bg-zinc-800/50 hover:border-white/10 active:scale-[0.98]">
        <div className="flex-shrink-0">
          {isCompleted ? (
            <CheckCircle2 className="h-6 w-6 text-emerald-500" />
          ) : (
            <Circle className="h-6 w-6 text-zinc-700 group-hover:text-zinc-500 transition-colors" />
          )}
        </div>

        <div className="flex-1 min-w-0">
          <div className="mb-1 flex items-center flex-wrap gap-2">
            <span className={cn("rounded-md px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider", typeColors[question.type])}>
              {question.type}
            </span>
            {question.isMustDo && (
              <span className="flex items-center gap-1 rounded-md bg-orange-500/10 px-2 py-0.5 text-[10px] font-bold text-orange-500 uppercase tracking-wider">
                <Flame className="h-2.5 w-2.5" /> Must Do
              </span>
            )}
            <span className="text-[10px] font-medium text-zinc-500 uppercase tracking-wider">Unit {question.unit} \u2022 {question.topic}</span>
          </div>
          <h4 className="truncate text-sm font-semibold text-white group-hover:text-indigo-400 transition-colors">
            {question.question}
          </h4>
        </div>

        <div className="flex-shrink-0 opacity-0 group-hover:opacity-100 transition-opacity">
          <ChevronRight className="h-5 w-5 text-zinc-500" />
        </div>
      </div>
    </Link>
  );
};

export default QuestionCard;
