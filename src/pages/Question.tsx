import React from "react";
import { useParams, useNavigate } from "react-router-dom";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import QuestionView from "../components/QuestionView";
import { ChevronLeft, ChevronRight } from "lucide-react";

const QuestionPage = () => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();
  const questionId = parseInt(id || "1");
  const { isCompleted, toggleProgress } = useProgress();

  const question = questions.find((q) => q.id === questionId);

  if (!question) {
    return <div className="p-20 text-center text-white">Question not found.</div>;
  }

  const handleNext = () => {
    const next = questions.find(q => q.id > questionId);
    if(next) navigate(`/question/${next.id}`);
  };

  const handlePrev = () => {
    const prev = [...questions].reverse().find(q => q.id < questionId);
    if(prev) navigate(`/question/${prev.id}`);
  };

  return (
    <div className="relative">
      <div className="fixed left-0 right-0 top-16 z-40 hidden md:block">
        <div className="mx-auto flex max-w-7xl justify-between px-4">
           <button
            onClick={handlePrev}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-30"
           >
             <ChevronLeft className="h-6 w-6" />
           </button>
           <button
            onClick={handleNext}
            className="flex h-12 w-12 items-center justify-center rounded-full bg-zinc-900 border border-white/5 text-zinc-500 hover:text-white hover:bg-zinc-800 transition-all disabled:opacity-30"
           >
             <ChevronRight className="h-6 w-6" />
           </button>
        </div>
      </div>
      <QuestionView
        question={question}
        isCompleted={isCompleted(question.id)}
        onToggleComplete={() => toggleProgress(question.id)}
      />
    </div>
  );
};

export default QuestionPage;
