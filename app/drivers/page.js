import { Flag, Search, UserRound } from "lucide-react";
import { PageHero, SectionTitle } from "../../components/ui";

const drivers = [
  ["01", "ALEX", "MARTIN", "BEL"],
  ["07", "NOAH", "DUBOIS", "FRA"],
  ["11", "LUKAS", "WEBER", "DEU"],
  ["16", "MATEO", "ROSSI", "ITA"],
  ["22", "LINA", "VAN HOVE", "BEL"],
  ["27", "OSCAR", "JANSEN", "NLD"],
  ["31", "MILA", "SCHMITZ", "LUX"],
  ["44", "ELI", "TURNER", "GBR"],
  ["55", "EMMA", "LAURENT", "FRA"],
  ["63", "JONAS", "KELLER", "DEU"],
  ["71", "LOUIS", "REMY", "BEL"],
  ["88", "SARA", "CONTI", "ITA"],
];

export default function DriversPage() {
  return (
    <>
      <PageHero eyebrow="Entry list · Provisional" title="Meet the grid" text="A field of sharp rental kart racers, ready to fight for every tenth. Final entries will be confirmed ahead of race weekend." />
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle eyebrow="Confirmed starters" title="Driver roster." copy="The first wave of competitors is locked in. Grid additions will appear here as registrations are approved." />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map(([number, first, last, nation]) => (
              <article key={number} className="group relative overflow-hidden bg-neutral-950 p-5 transition hover:bg-[#141414]">
                <span className="absolute right-[-6px] top-[-12px] font-display text-8xl font-black italic tracking-tighter text-white/[.035] transition group-hover:text-red-600/10">{number}</span>
                <div className="relative flex items-center gap-4">
                  <div className="flex h-12 w-12 items-center justify-center border border-red-600/30 bg-red-600/10 font-display text-xl font-black italic text-red-500">{number}</div>
                  <div>
                    <p className="text-[10px] font-black tracking-[.18em] text-neutral-600">{nation}</p>
                    <h3 className="mt-1 font-display text-xl font-black uppercase italic">{first} <span className="text-red-500">{last}</span></h3>
                  </div>
                </div>
              </article>
            ))}
          </div>
          <p className="mt-6 text-xs text-neutral-600">Demo entry list. Official confirmed drivers will replace this roster as race control approves registrations.</p>
        </div>
      </section>
    </>
  );
}
