import React from "react";
import { CHANNELS } from "../utils/constants";

export default function Hero() {
  return (
    <header className="mb-10 text-center">
      <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-3 py-1 text-xs font-medium text-slate-400">
        <span className="h-1.5 w-1.5 rounded-full bg-emerald-400" />
        {CHANNELS.length} channels indexed
      </div>
      <h1 className="font-['Space_Grotesk',sans-serif] text-4xl font-bold leading-tight text-slate-50 sm:text-5xl">
        Find a Telegram channel
        <br />
        <span className="text-amber-400">worth joining.</span>
      </h1>
      <p className="mx-auto mt-4 max-w-md text-sm text-slate-400">
        One searchable list. No spam, no fake member counts, just a direct link to the channel.
      </p>
      <a href="#contact" className="mt-4 inline-block text-xs font-medium text-amber-400 hover:underline">
        Want your channel listed? &rarr;
      </a>
    </header>
  );
}