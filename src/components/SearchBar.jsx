import React from "react";
import { SearchIcon, SendIcon } from "./Icons";

export default function SearchBar({ value, onChange }) {
  return (
    <div className="mx-auto mb-6 flex max-w-xl items-center gap-2 rounded-full border border-white/10 bg-white/[0.06] p-2 pl-5 shadow-lg shadow-black/20 transition-all focus-within:ring-2 focus-within:ring-amber-400/40">
      <SearchIcon className="h-4 w-4 shrink-0 text-slate-500" />
      <input
        value={value}
        onChange={(e) => onChange(e.target.value)}
        placeholder="Search by name, topic, or category..."
        className="w-full bg-transparent text-sm text-slate-100 placeholder:text-slate-500 focus:outline-none"
        aria-label="Search channels"
      />
      <div className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-blue-400 text-slate-900">
        <SendIcon className="h-3.5 w-3.5" />
      </div>
    </div>
  );
}