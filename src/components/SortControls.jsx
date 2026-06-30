import React from "react";
import { SORTS } from "../utils/constants";

export default function SortControls({ active, onSelect, count }) {
  return (
    <div className="mb-8 flex flex-wrap items-center justify-between gap-3 text-sm">
      <span className="text-slate-500">{count} result{count === 1 ? "" : "s"}</span>
      <div className="flex items-center gap-1 rounded-full border border-white/10 bg-white/[0.03] p-1">
        {SORTS.map((s) => (
          <button
            key={s.id}
            onClick={() => onSelect(s.id)}
            className={`rounded-full px-3 py-1 text-xs font-medium transition-colors ${
              active === s.id ? "bg-white/10 text-slate-100" : "text-slate-500 hover:text-slate-300"
            }`}
            aria-pressed={active === s.id}
          >
            {s.label}
          </button>
        ))}
      </div>
    </div>
  );
}