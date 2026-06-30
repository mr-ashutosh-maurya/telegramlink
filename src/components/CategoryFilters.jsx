import React from "react";

export default function CategoryFilters({ categories, active, onSelect }) {
  return (
    <div className="mb-4 flex flex-wrap justify-center gap-2">
      {categories.map((cat) => (
        <button
          key={cat}
          onClick={() => onSelect(cat)}
          className={`rounded-full px-4 py-1.5 text-sm font-medium transition-colors duration-150 ${
            active === cat
              ? "bg-blue-400 text-slate-900"
              : "border border-white/10 bg-white/5 text-slate-400 hover:bg-white/10"
          }`}
          aria-pressed={active === cat}
        >
          {cat}
        </button>
      ))}
    </div>
  );
}