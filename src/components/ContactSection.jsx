import React, { useState } from "react";
import { SendIcon, MailIcon } from "./Icons";
import { CONTACT_EMAIL, TELEGRAM_CONTACT } from "../utils/constants";

export default function ContactSection() {
  const [form, setForm] = useState({ name: "", channel: "", category: "", message: "" });
  const [sent, setSent] = useState(false);

  const update = (key) => (e) => setForm((f) => ({ ...f, [key]: e.target.value }));

  const handleSubmit = (e) => {
    e.preventDefault();
    const subject = encodeURIComponent(`Channel submission: ${form.channel || "untitled"}`);
    const body = encodeURIComponent(
      `Name: ${form.name}\nChannel: ${form.channel}\nCategory: ${form.category}\n\nMessage:\n${form.message}`
    );
    window.location.href = `mailto:${CONTACT_EMAIL}?subject=${subject}&body=${body}`;
    setSent(true);
    setTimeout(() => setSent(false), 4000);
  };

  return (
    <section id="contact" className="mt-16 scroll-mt-10">
      <div className="rounded-3xl border border-white/10 bg-white/[0.03] p-6 sm:p-10">
        <div className="grid gap-10 sm:grid-cols-[1fr_1.2fr]">
          <div>
            <h2 className="font-['Space_Grotesk',sans-serif] text-2xl font-bold text-slate-50">
              Got a channel worth listing?
            </h2>
            <p className="mt-3 text-sm leading-relaxed text-slate-400">
              Send the details and we'll review it for a spot in the directory. Real, active channels only - no
              bots, no fake counts.
            </p>

            <div className="mt-6 space-y-3">
              <a
                href={`https://t.me/${TELEGRAM_CONTACT}`}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-2 text-sm text-slate-300 transition-colors hover:bg-white/10"
              >
                <SendIcon className="h-3.5 w-3.5 text-amber-400" />
                Message @{TELEGRAM_CONTACT} on Telegram
              </a>
              <a
                href={`mailto:${CONTACT_EMAIL}`}
                className="flex items-center gap-2 text-sm text-slate-400 hover:text-slate-200"
              >
                <MailIcon className="h-3.5 w-3.5 text-amber-400" />
                {CONTACT_EMAIL}
              </a>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-3">
            <div className="grid gap-3 sm:grid-cols-2">
              <input
                required
                value={form.name}
                onChange={update("name")}
                placeholder="Your name"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none"
              />
              <input
                required
                value={form.category}
                onChange={update("category")}
                placeholder="Category (e.g. Tech)"
                className="rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none"
              />
            </div>
            <input
              required
              value={form.channel}
              onChange={update("channel")}
              placeholder="Channel link or @handle"
              className="w-full rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none"
            />
            <textarea
              value={form.message}
              onChange={update("message")}
              placeholder="A line about the channel (optional)"
              rows={3}
              className="w-full resize-none rounded-xl border border-white/10 bg-white/[0.04] px-4 py-2.5 text-sm text-slate-100 placeholder:text-slate-500 focus:border-amber-400/40 focus:outline-none"
            />
            <button
              type="submit"
              className="inline-flex w-full items-center justify-center gap-2 rounded-xl bg-blue-400 px-4 py-2.5 text-sm font-semibold text-slate-900 transition-transform hover:scale-[1.01] hover:bg-amber-300 active:scale-[0.99] sm:w-auto"
            >
              {sent ? "Opening your email app..." : "Submit channel"}
              <SendIcon className="h-3.5 w-3.5" />
            </button>
            <p className="text-xs text-slate-500">
              This opens your email app with the details pre-filled - nothing is sent automatically.
            </p>
          </form>
        </div>
      </div>
    </section>
  );
}