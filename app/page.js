import Link from "next/link";
import { ArrowUpRight, CalendarDays, Flag, Gauge, MapPin, Trophy, Users } from "lucide-react";
import { Eyebrow, Number, RaceButton, SectionTitle } from "../components/ui";

const news = [
  ["REGISTRATION", "The first ERW grid opens soon", "Limited entries. Five qualifying heats. One serious weekend.", "01"],
  ["FORMAT", "A road worth racing", "Equal machinery, sharp competition and a clear path to the final.", "02"],
  ["VENUE", "Meet us in Eupen", "Experience Factory hosts the inaugural chapter of ERW.", "03"],
];

export default function Home() {
  return (
    <>
      <section className="relative min-h-[780px] overflow-hidden">
        <img src="/erw-track.png" alt="ERW indoor karting circuit at Experience Factory Eupen" className="absolute inset-0 h-full w-full object-cover object-center" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/40" />
        <div className="absolute inset-x-0 bottom-0 h-44 bg-gradient-to-t from-black to-transparent" />

        <div className="relative mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-5 pb-16 pt-24 lg:px-8">
          <Eyebrow>Rental kart racing · Eupen</Eyebrow>
          <h1 className="max-w-5xl font-display text-[4.8rem] font-black uppercase italic leading-[.8] tracking-[-.08em] sm:text-[7rem] lg:text-[9.4rem]">
            Road <span className="text-red-600">to</span><br />Worlds
          </h1>
          <p className="mt-7 max-w-xl border-l-2 border-red-600 pl-5 text-base leading-7 text-neutral-300">
            One track. One grid. Every lap matters. ERW brings a world-level rental kart format to the heart of Eupen.
          </p>
          <div className="mt-8 flex flex-wrap gap-3">
            <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header" target="_blank" rel="noreferrer" className="inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.18em] transition hover:bg-red-500"><span className="skew-x-12">Register now · €279</span></a>
            <RaceButton href="/event" secondary>Discover the event</RaceButton>
          </div>

          <div className="mt-16 grid max-w-4xl grid-cols-2 border-y border-white/15 bg-black/30 backdrop-blur-sm md:grid-cols-4">
            {[
              ["10–11", "OCT 2026"],
              ["05", "QUALIFYING HEATS"],
              ["200", "GRID LIMIT"],
              ["€279", "ENTRY FEE"],
            ].map(([big, small]) => (
              <div className="border-r border-white/15 px-4 py-5 last:border-r-0 sm:px-6" key={small}>
                <p className="font-display text-3xl font-black italic tracking-tight text-white sm:text-4xl">{big}</p>
                <p className="mt-1 text-[9px] font-bold uppercase tracking-[.16em] text-neutral-400">{small}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <div className="overflow-hidden border-y border-red-600/30 bg-red-600 py-3">
        <div className="flex w-max animate-marquee whitespace-nowrap text-[11px] font-black uppercase tracking-[.25em] text-white">
          {[...Array(2)].map((_, group) => (
            <span key={group}>ERW · EUPEN ROAD TO WORLDS &nbsp;&nbsp;&nbsp;◆&nbsp;&nbsp;&nbsp; FIVE QUALIFYING HEATS &nbsp;&nbsp;&nbsp;◆&nbsp;&nbsp;&nbsp; EXPERIENCE FACTORY EUPEN &nbsp;&nbsp;&nbsp;◆&nbsp;&nbsp;&nbsp; BUILT FOR RACERS &nbsp;&nbsp;&nbsp;◆&nbsp;&nbsp;&nbsp;</span>
          ))}
        </div>
      </div>

      <section className="track-grid bg-[#070707] py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Race weekend" title="No shortcuts. Just speed." copy="ERW is designed around fair racing, serious competition and a format that rewards consistency under pressure." action={{ href: "/event", label: "Full event info" }} />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              [Flag, "The format", "Five qualifying races per driver. The top 60 advance to the semi-finals and the top 20 earn a grand final seat."],
              [Trophy, "The mission", "A fiercely competitive event on the road to the Kart World Championship. Your next chapter starts here."],
              [MapPin, "The venue", "Experience Factory Eupen: a technical indoor circuit and a paddock built for a proper race weekend."],
            ].map(([Icon, title, text]) => (
              <article key={title} className="bg-[#0a0a0a] p-7 transition hover:bg-[#111]">
                <Icon className="mb-10 h-7 w-7 text-red-500" />
                <h3 className="font-display text-2xl font-black uppercase italic">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-black py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Race control" title="The weekend at a glance." action={{ href: "/event", label: "Explore schedule" }} />
          <div className="grid gap-3 lg:grid-cols-3">
            {news.map(([tag, title, copy, number]) => (
              <Link href="/event" key={number} className="group border border-white/10 bg-neutral-950 p-6 transition hover:border-red-600/60">
                <div className="flex items-start justify-between">
                  <span className="text-[10px] font-black uppercase tracking-[.2em] text-red-500">{tag}</span>
                  <span className="font-display text-5xl font-black italic text-neutral-800 transition group-hover:text-red-600/40">{number}</span>
                </div>
                <h3 className="mt-12 font-display text-2xl font-black uppercase italic">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{copy}</p>
                <ArrowUpRight className="mt-5 h-5 w-5 text-neutral-700 transition group-hover:text-red-500" />
              </Link>
            ))}
          </div>
        </div>
      </section>

      <section className="relative min-h-[520px] overflow-hidden border-y border-white/10">
        <img src="/erw-track.png" alt="ERW indoor karting circuit at Experience Factory Eupen" className="absolute inset-0 h-full w-full object-cover" />
        <div className="absolute inset-0 bg-gradient-to-r from-black via-black/80 to-black/20" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-black/30" />
        <div className="relative mx-auto flex min-h-[520px] max-w-7xl items-center px-5 py-20 lg:px-8">
          <div className="max-w-xl">
            <Eyebrow>The battleground</Eyebrow>
            <h2 className="font-display text-5xl font-black uppercase italic leading-[.92] tracking-tighter sm:text-6xl">Built for close racing.</h2>
            <p className="mt-5 text-sm leading-7 text-neutral-300">Experience Factory Eupen delivers a technical indoor layout, dramatic sightlines and the infrastructure for a proper race weekend.</p>
            <div className="mt-7">
              <RaceButton href="/event" secondary>Explore the venue</RaceButton>
            </div>
          </div>
        </div>
      </section>

      <section className="carbon border-y border-white/10 py-16">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <p className="text-center text-[10px] font-black uppercase tracking-[.28em] text-red-500">Partners</p>
          <p className="mt-8 text-center font-display text-2xl font-black uppercase italic tracking-tight text-neutral-500">Official sponsors to be announced</p>
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-600 py-20">
        <div className="absolute right-[-2rem] top-[-3rem] font-display text-[15rem] font-black italic leading-none text-black/10">ERW</div>
        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-black/70">Your name. Our grid.</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase italic tracking-tighter text-white md:text-6xl">Ready to race?</h2>
          </div>
          <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header" target="_blank" rel="noreferrer" className="inline-flex w-fit -skew-x-12 items-center gap-3 bg-black px-7 py-5 text-xs font-black uppercase tracking-[.18em] text-white transition hover:bg-neutral-900">
            <span className="skew-x-12">Register now · €279</span><ArrowUpRight className="h-4 w-4 skew-x-12" />
          </a>
        </div>
      </section>
    </>
  );
}
