import React from "react";
import { Filter, Search, RotateCcw } from "lucide-react";
import { cn } from "../lib/utils";

interface FilterBarProps {
  search: string;
  setSearch: (s: string) => void;
  typeFilter: string;
  setTypeFilter: (t: string) => void;
  mustDoOnly: boolean;
  setMustDoOnly: (m: boolean) => void;
  onReset: () => void;
}

const FilterBar = ({
  search,
  setSearch,
  typeFilter,
  setTypeFilter,
  mustDoOnly,
  setMustDoOnly,
  onReset,
}: FilterBarProps) => {
  const types = ["All", "MCQ", "Coding", "Theory", "Numerical"];

  return (
    <div className="flex flex-col gap-4 md:flex-row md:items-center">
      <div className="relative flex-1">
        <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-zinc-500" />
        <input
          type="text"
          placeholder="Search topics or questions..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-xl border border-white/10 bg-zinc-900 px-10 py-2.5 text-sm text-white focus:outline-none focus:ring-2 focus:ring-indigo-500/50"
        />
      </div>

      <div className="flex flex-wrap items-center gap-2">
        <div className="flex rounded-xl border border-white/10 bg-zinc-900 p-1">
          {types.map((type) => (
            <button
              key={type}
              onClick={() => setTypeFilter(type)}
              className={cn(
                "rounded-lg px-4 py-1.5 text-xs font-medium transition-all",
                typeFilter === type
                  ? "bg-indigo-600 text-white"
                  : "text-zinc-500 hover:text-white"
              )}
            >
              {type}
            </button>
          ))}
        </div>

        <button
          onClick={() => setMustDoOnly(!mustDoOnly)}
          className={cn(
            "flex items-center gap-2 rounded-xl border px-4 py-2 text-xs font-medium transition-all",
            mustDoOnly
              ? "border-orange-500 bg-orange-500/10 text-orange-500"
              : "border-white/10 bg-zinc-900 text-zinc-400 hover:text-white"
          )}
        >
          🔥 Must Do
        </button>

        <button
          onClick={onReset}
          className="flex items-center gap-2 rounded-xl border border-white/10 bg-zinc-900 px-4 py-2 text-xs font-medium text-zinc-400 transition-all hover:bg-zinc-800 hover:text-white"
        >
          <RotateCcw className="h-3 w-3" /> Reset
        </button>
      </div>
    </div>
  );
};

export default FilterBar;
