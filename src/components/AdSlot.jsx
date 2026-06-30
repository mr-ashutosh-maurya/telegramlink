import React from "react";

export default function AdSlot({ label = "Advertisement" }) {
  return (
    <div className="my-8 flex flex-col items-center justify-center gap-1 rounded-2xl border border-dashed border-white/15 bg-white/[0.02] py-8">
      <span className="text-[10px] uppercase tracking-widest text-slate-600">{label}</span>
      <span className="text-xs text-slate-500">Your AdSense unit renders here on the live site</span>
      {/* 
        To enable ads, replace the above with your AdSense <ins> snippet:
        <ins className="adsbygoogle"
             style={{ display: "block" }}
             data-ad-client="ca-pub-XXXXXXXXXXXXXXX"
             data-ad-slot="XXXXXXXXXX"
             data-ad-format="auto"
             data-full-width-responsive="true" />
      */}
    </div>
  );
}