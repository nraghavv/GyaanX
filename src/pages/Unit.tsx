import React, { useState } from "react";
import { useParams, Link } from "react-router-dom";
import { questions } from "../data/questions";
import { useProgress } from "../hooks/useProgress";
import QuestionCard from "../components/QuestionCard";
import FilterBar from "../components/FilterBar";
import { ChevronLeft } from "lucide-react";
import { motion } from "framer-motion";

const UnitPage = () => {
  const { id } = useParams<{ id: string }>();
  const unitId = parseInt(id || "1");
  const { isCompleted } = useProgress();

  const [search, setSearch] = useState("");
  const [typeFilter, setTypeFilter] = useState("All");
  const [mustDoOnly, setMustDoOnly] = useState(false);

  const unitQuestions = questions.filter((q) => q.unit === unitId);

  const filteredQuestions = unitQuestions.filter((q) => {
    const matchesSearch = q.question.toLowerCase().includes(search.toLowerCase()) ||
                          q.topic.toLowerCase().includes(search.toLowerCase());
    const matchesType = typeFilter === "All" || q.type === typeFilter;
    const matchesMustDo = !mustDoOnly || q.isMustDo;
    return matchesSearch && matchesType && matchesMustDo;
  });

  const unitTitles = [
    "",
    "Basics of PPS",
    "Control Structures & Arrays",
    "Strings & Pointers",
    "Introduction to Python",
    "Data Science Libraries (NumPy/Pandas)"
  ];

  return (
    <div className="mx-auto max-w-5xl px-4 py-8 pb-32">
      <div className="mb-8">
        <Link to="/" className="mb-4 flex items-center gap-1 text-sm font-medium text-zinc-500 hover:text-white transition-colors">
          <ChevronLeft className="h-4 w-4" /> Back to Dashboard
        </Link>
        <div className="flex items-center gap-4">
          <div className="flex h-16 w-16 items-center justify-center rounded-2xl bg-indigo-600 text-3xl font-black text-white shadow-xl shadow-indigo-500/20">
            {unitId}
          </div>
          <div>
            <h1 className="text-3xl font-bold text-white">{unitTitles[unitId]}</h1>
            <p className="text-zinc-500">Unit {unitId} \u2022 {unitQuestions.length} Total Questions</p>
          </div>
        </div>
      </div>

      <div className="mb-8 overflow-hidden rounded-2xl border border-white/5 bg-zinc-900/30 p-4">
        <FilterBar
          search={search}
          setSearch={setSearch}
          typeFilter={typeFilter}
          setTypeFilter={setTypeFilter}
          mustDoOnly={mustDoOnly}
          setMustDoOnly={setMustDoOnly}
          onReset={() => {
            setSearch("");
            setTypeFilter("All");
            setMustDoOnly(false);
          }}
        />
      </div>

      <div className="space-y-3">
        {filteredQuestions.length > 0 ? (
          filteredQuestions.map((q, idx) => (
            <motion.div
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.05 }}
              key={q.id}
            >
              <QuestionCard question={q} isCompleted={isCompleted(q.id)} />
            </motion.div>
          ))
        ) : (
          <div className="flex flex-col items-center justify-center py-20 text-center">
            <div className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-zinc-900 text-zinc-600">
               <Search className="h-8 w-8" />
            </div>
            <h3 className="text-lg font-bold text-white">No questions found</h3>
            <p className="max-w-xs text-sm text-zinc-500">Adjust your filters or search query to find what you're looking for.</p>
          </div>
        )}
      </div>
    </div>
  );
};

const Search = ({ className }: { className?: string }) => (
  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className={className}>
    <circle cx="11" cy="11" r="8"/><path d="m21 21-4.3-4.3"/>
  </svg>
);

export default UnitPage;
