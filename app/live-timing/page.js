import { ArrowUpRight, Radio, Signal } from "lucide-react";
import { PageHero } from "../../components/ui";

export default function TimingPage() {
  return (
    <>
      <PageHero eyebrow="Race control feed" title="Live timing" text="Sector data, positions and lap times will appear here as soon as the track goes live." />
      <section className="track-grid bg-black py-24">
        <div className="mx-auto max-w-5xl px-5">
          <div className="animate-pulseRed border border-red-600/40 bg-neutral-950 p-8 sm:p-12">
            <div className="flex flex-col justify-between gap-8 sm:flex-row sm:items-center">
              <div>
                <p className="flex items-center gap-2 text-xs font-black uppercase tracking-[.2em] text-red-500"><Radio className="h-4 w-4" /> Awaiting race signal</p>
                <h2 className="mt-5 font-display text-4xl font-black uppercase italic tracking-tight sm:text-5xl">Timing goes live<br />on race weekend.</h2>
                <p className="mt-4 max-w-xl text-sm leading-6 text-neutral-500">This page is reserved for the official live leaderboard. Return on October 10–11, 2026 to follow every lap.</p>
                <a href="https://www.apex-timing.com/live-timing/karting-eupen/index.html" target="_blank" rel="noreferrer" className="mt-6 inline-flex items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-red-500 transition hover:text-red-400">Open Apex Timing <ArrowUpRight className="h-4 w-4" /></a>
              </div>
              <Signal className="h-20 w-20 shrink-0 text-red-600/50" />
            </div>
            <div className="mt-10 grid gap-px bg-white/10 sm:grid-cols-3">
              {["LIVE POSITIONS", "BEST LAPS", "GAP TO LEADER"].map((item) => <p key={item} className="bg-black p-4 text-center text-[10px] font-black tracking-[.18em] text-neutral-600">{item}</p>)}
            </div>
          </div>
        </div>
      </section>
    </>
  );
}
