import React from "react";
import { Link } from "react-router-dom";
import { CheckCircle2, Circle, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { cn } from "../lib/utils";

interface UnitCardProps {
  unitNumber: number;
  title: string;
  description: string;
  progress: number;
  totalQuestions: number;
  completedQuestions: number;
  key?: number | string;
}

const UnitCard = ({ unitNumber, title, description, progress, totalQuestions, completedQuestions }: UnitCardProps) => {
  return (
    <Link to={`/unit/${unitNumber}`}>
      <motion.div
        whileHover={{ y: -5 }}
        className="group relative overflow-hidden rounded-2xl border border-white/10 bg-zinc-900/50 p-6 transition-all hover:bg-zinc-900/80 hover:shadow-2xl hover:shadow-indigo-500/10"
      >
        <div className="mb-4 flex items-center justify-between">
          <div className="flex h-12 w-12 items-center justify-center rounded-xl bg-indigo-500/10 text-indigo-500 ring-1 ring-indigo-500/20">
            <span className="text-xl font-bold">{unitNumber}</span>
          </div>
          <div className="flex items-center gap-2 text-xs font-medium text-zinc-500">
            {progress === 100 ? (
              <CheckCircle2 className="h-4 w-4 text-emerald-500" />
            ) : (
              <Circle className="h-4 w-4" />
            )}
            {completedQuestions}/{totalQuestions} solved
          </div>
        </div>

        <h3 className="mb-1 text-lg font-bold text-white group-hover:text-indigo-400">{title}</h3>
        <p className="mb-6 text-sm text-zinc-400 line-clamp-2">{description}</p>

        <div className="relative h-2 w-full overflow-hidden rounded-full bg-white/5">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: `${progress}%` }}
            className="h-full bg-gradient-to-r from-indigo-600 to-indigo-400"
          />
        </div>

        <div className="mt-4 flex items-center gap-1 text-sm font-semibold text-indigo-500 group-hover:translate-x-1 transition-transform">
          Start Prep <ArrowRight className="h-4 w-4" />
        </div>
      </motion.div>
    </Link>
  );
};

export default UnitCard;
