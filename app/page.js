import Link from "next/link";
import { ArrowRight, ArrowUpRight, CalendarDays, Flag, MapPin, Trophy } from "lucide-react";
import { PageHero, RaceButton, SectionTitle } from "../components/ui";

const stats = [
  ["10–11", "OCT 2026"],
  ["05", "QUALIFYING HEATS"],
  ["200", "GRID LIMIT"],
  ["€279", "ENTRY FEE"],
];

const highlights = [
  {
    number: "01",
    title: "Registration",
    text: "The first ERW grid opens soon. Limited entries. Five qualifying heats. One serious weekend.",
  },
  {
    number: "02",
    title: "Format",
    text: "A road worth racing. Equal machinery, sharp competition and a clear path to the final.",
  },
  {
    number: "03",
    title: "Venue",
    text: "Meet us in Eupen. Experience Factory hosts the inaugural chapter of ERW.",
  },
];

export default function Home() {
  return (
    <>
      <section className="relative isolate min-h-[780px] overflow-hidden bg-black">
        <div className="absolute inset-0">
          <img
            src="/erw-track.png"
            alt="ERW indoor karting circuit at Experience Factory Eupen"
            className="h-full w-full object-cover object-center opacity-45"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-black via-black/75 to-black/20" />
          <div className="absolute inset-0 bg-gradient-to-t from-black via-transparent to-black/30" />
        </div>

        <div className="relative mx-auto flex min-h-[780px] max-w-7xl flex-col justify-center px-5 pb-24 pt-16 lg:px-8">
          <p className="text-xs font-black uppercase tracking-[.24em] text-red-500">
            Rental kart racing · Eupen
          </p>

          <h1 className="mt-5 max-w-5xl font-display text-[4.8rem] font-black uppercase italic leading-[.8] tracking-[-.08em] sm:text-[7rem] lg:text-[9.4rem]">
            Road <span className="text-red-600">to</span>
            <br />
            Worlds
          </h1>

          <p className="mt-7 max-w-xl border-l-2 border-red-600 pl-5 text-base leading-7 text-neutral-300">
            One track. One grid. Every lap matters. ERW brings a world-level rental kart format to the heart of Eupen.
          </p>

          <div className="mt-8 flex flex-wrap gap-3">
            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header"
              target="_blank"
              rel="noreferrer"
              className="inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.18em] transition hover:bg-red-500"
            >
              <span className="skew-x-12">Register now · €279</span>
            </a>

            <a
              href="https://docs.google.com/forms/d/e/1FAIpQLScAvcY5ULhrDERtKehVskvMarFnxj7nth2MN4HKyU75kbMOkQ/viewform?fbzx=-5429230602291440917"
              target="_blank"
              rel="noreferrer"
              className="inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.18em] transition hover:bg-red-500"
            >
              <span className="skew-x-12">Book practice · €20</span>
            </a>

            <RaceButton href="/event" secondary>
              Discover the event
            </RaceButton>
          </div>

          <div className="mt-16 grid max-w-4xl grid-cols-2 border-y border-white/15 bg-black/30 backdrop-blur-sm md:grid-cols-4">
            {stats.map(([value, label]) => (
              <div key={label} className="border-b border-r border-white/15 p-5 last:border-r-0 md:border-b-0">
                <p className="font-display text-3xl font-black italic tracking-tight text-white">{value}</p>
                <p className="mt-1 text-[10px] font-black uppercase tracking-[.16em] text-neutral-500">{label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-neutral-950 py-24">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Race weekend"
            title="No shortcuts. Just speed."
            copy="ERW is designed around fair racing, serious competition and a format that rewards consistency under pressure."
          />

          <div className="mt-12 grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {highlights.map((highlight) => (
              <article key={highlight.number} className="bg-neutral-950 p-8">
                <p className="font-display text-5xl font-black italic text-red-600/60">{highlight.number}</p>
                <h3 className="mt-8 font-display text-3xl font-black uppercase italic">{highlight.title}</h3>
                <p className="mt-4 max-w-sm text-sm leading-6 text-neutral-500">{highlight.text}</p>
              </article>
            ))}
          </div>

          <div className="mt-12">
            <RaceButton href="/event">
              Full event info <ArrowRight className="h-4 w-4" />
            </RaceButton>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-black py-24">
        <div className="absolute inset-0">
          <img
            src="/erw-track.png"
            alt="ERW indoor karting circuit at Experience Factory Eupen"
            className="h-full w-full object-cover opacity-30"
          />
          <div className="absolute inset-0 bg-black/70" />
        </div>

        <div className="relative mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="The battleground"
            title="Built for close racing."
            copy="Experience Factory Eupen delivers a technical indoor layout, dramatic sightlines and the infrastructure for a proper race weekend."
          />

          <div className="mt-10 grid gap-4 md:grid-cols-3">
            <div className="border border-white/10 bg-black/50 p-6 backdrop-blur">
              <MapPin className="h-6 w-6 text-red-500" />
              <h3 className="mt-5 font-display text-2xl font-black uppercase italic">Experience Factory</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Industriestraße 37, 4700 Eupen, Belgium
              </p>
            </div>

            <div className="border border-white/10 bg-black/50 p-6 backdrop-blur">
              <CalendarDays className="h-6 w-6 text-red-500" />
              <h3 className="mt-5 font-display text-2xl font-black uppercase italic">Race weekend</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                10–11 October 2026. Qualifying, semi-finals and grand final.
              </p>
            </div>

            <div className="border border-white/10 bg-black/50 p-6 backdrop-blur">
              <Trophy className="h-6 w-6 text-red-500" />
              <h3 className="mt-5 font-display text-2xl font-black uppercase italic">One goal</h3>
              <p className="mt-3 text-sm leading-6 text-neutral-500">
                Race hard, stay consistent and earn your seat in the final.
              </p>
            </div>
          </div>
        </div>
      </section>

      <section className="relative overflow-hidden bg-red-600 py-20">
        <div className="absolute right-[-2rem] top-[-3rem] font-display text-[15rem] font-black italic leading-none text-black/10">
          ERW
        </div>

        <div className="relative mx-auto flex max-w-7xl flex-col justify-between gap-8 px-5 md:flex-row md:items-center lg:px-8">
          <div>
            <p className="text-xs font-black uppercase tracking-[.24em] text-black/70">Your name. Our grid.</p>
            <h2 className="mt-3 font-display text-5xl font-black uppercase italic tracking-tighter text-white md:text-6xl">
              Ready to race?
            </h2>
          </div>

          <a
            href="https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header"
            target="_blank"
            rel="noreferrer"
            className="inline-flex w-fit -skew-x-12 items-center gap-3 bg-black px-7 py-5 text-xs font-black uppercase tracking-[.18em] text-white transition hover:bg-neutral-900"
          >
            <span className="skew-x-12">Register now · €279</span>
            <ArrowUpRight className="h-4 w-4 skew-x-12" />
          </a>
        </div>
      </section>
    </>
  );
}
