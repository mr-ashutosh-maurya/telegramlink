import React, { useState } from "react";
import Hero from "../components/Hero";
import SearchBar from "../components/SearchBar";
import CategoryFilters from "../components/CategoryFilters";
import SortControls from "../components/SortControls";
import ChannelCard from "../components/ChannelCard";
import ContactSection from "../components/ContactSection";
import AdSlot from "../components/AdSlot";
import useFilteredChannels from "../hooks/useFilteredChannels";
import usePagination from "../hooks/usePagination";
import { CATEGORIES, PAGE_SIZE } from "../utils/constants";

export default function TelegramDirectory() {
  const [query, setQuery] = useState("");
  const [category, setCategory] = useState("All");
  const [sort, setSort] = useState("trending");

  const filtered = useFilteredChannels(query, category, sort);
  const { visibleItems, hasMore, loadMore, reset } = usePagination(filtered, PAGE_SIZE);

  const handleFilterChange = (newFilter) => {
    if (newFilter.query !== undefined) setQuery(newFilter.query);
    if (newFilter.category !== undefined) setCategory(newFilter.category);
    if (newFilter.sort !== undefined) setSort(newFilter.sort);
    reset();
  };

  return (
    <div className="min-h-screen bg-[#0F1226] font-sans text-slate-100">
      <div className="relative mx-auto max-w-5xl px-6 py-16">
        {/* Background glow */}
        <div className="pointer-events-none fixed inset-0 overflow-hidden">
          <div className="absolute -left-32 -top-32 h-96 w-96 rounded-full bg-amber-500/10 blur-3xl" />
          <div className="absolute -right-32 top-1/3 h-96 w-96 rounded-full bg-cyan-500/10 blur-3xl" />
        </div>

        <Hero />
        <SearchBar value={query} onChange={(v) => handleFilterChange({ query: v })} />
        <CategoryFilters
          categories={CATEGORIES}
          active={category}
          onSelect={(cat) => handleFilterChange({ category: cat })}
        />
        <SortControls active={sort} onSelect={(s) => handleFilterChange({ sort: s })} count={filtered.length} />

        <AdSlot label="Sponsored" />

        <div className="grid gap-4 sm:grid-cols-2">
          {visibleItems.map((channel) => (
            <ChannelCard key={channel.handle} channel={channel} />
          ))}
        </div>

        {hasMore && (
          <div className="mt-8 flex justify-center">
            <button
              onClick={loadMore}
              className="rounded-full border border-white/10 bg-white/5 px-6 py-2 text-sm font-medium text-slate-300 transition hover:bg-white/10"
            >
              Load more
            </button>
          </div>
        )}

        {filtered.length === 0 && (
          <div className="rounded-2xl border border-white/10 bg-white/[0.03] py-16 text-center">
            <p className="text-slate-400">No channels match your filters.</p>
            <button
              onClick={() => handleFilterChange({ query: "", category: "All", sort: "trending" })}
              className="mt-3 text-sm font-medium text-amber-400 hover:underline"
            >
              Clear filters
            </button>
          </div>
        )}

        <AdSlot label="Advertisement" />
        <ContactSection />
        <footer className="mt-16 text-center text-xs text-slate-500">
          Want your channel listed? Use the form above or add it directly to the CHANNELS array in the source.
        </footer>
      </div>
    </div>
  );
}