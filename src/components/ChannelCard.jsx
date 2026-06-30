import React, { useState } from "react";
import { CopyIcon, CheckIcon, SendIcon } from "./Icons";
import { formatMembers, initialsOf, avatarHueFor } from "../utils/helpers";

export default function ChannelCard({ channel }) {
  const [copied, setCopied] = useState(false);
  const link = channel.link || `https://t.me/${channel.handle}`;

  const handleCopy = async () => {
    try {
      await navigator.clipboard.writeText(link);
      setCopied(true);
      setTimeout(() => setCopied(false), 1500);
    } catch (_) {}
  };

  return (
    <div className="group relative transform rounded-2xl border border-white/10 bg-white/[0.04] p-5 backdrop-blur-sm transition-all duration-300 hover:border-amber-400/30 hover:bg-white/[0.06] hover:shadow-lg hover:shadow-amber-500/5">
      {channel.addedDaysAgo <= 5 && (
        <span className="absolute -top-2 right-4 animate-pulse rounded-full bg-emerald-400 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wide text-slate-900">
          New
        </span>
      )}
      <div className="flex items-start gap-4">
        <div className="relative shrink-0">
          <div
            className={`flex h-12 w-12 items-center justify-center rounded-full ${avatarHueFor(channel.name)} text-sm font-bold text-slate-900`}
          >
            {initialsOf(channel.name)}
          </div>
          <span className="absolute -bottom-0.5 -right-0.5 h-3.5 w-3.5 rounded-full border-2 border-[#0F1226] bg-emerald-400" />
        </div>

        <div className="min-w-0 flex-1">
          <div className="flex items-baseline justify-between gap-2">
            <h3 className="truncate text-base font-semibold text-slate-100">{channel.name}</h3>
            <span className="shrink-0 text-xs text-slate-500">{formatMembers(channel.members)}</span>
          </div>
          <p className="mt-1 text-sm leading-relaxed text-slate-400">{channel.description}</p>

          <div className="mt-4 flex items-center justify-between gap-2">
            <span className="rounded-full bg-white/5 px-2.5 py-1 text-[11px] font-medium uppercase tracking-wide text-slate-400">
              {channel.category}
            </span>
            <div className="flex items-center gap-2">
              <button
                onClick={handleCopy}
                aria-label="Copy channel link"
                className="flex h-8 w-8 items-center justify-center rounded-full border border-white/10 text-slate-400 transition-colors hover:bg-white/10 hover:text-slate-200"
              >
                {copied ? <CheckIcon className="h-3.5 w-3.5 text-emerald-400" /> : <CopyIcon className="h-3.5 w-3.5" />}
              </button>
              <a
                href={link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-1.5 rounded-full bg-blue-400 px-4 py-1.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-105 hover:bg-amber-300 active:scale-95"
              >
                Join
                <SendIcon className="h-3.5 w-3.5" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}