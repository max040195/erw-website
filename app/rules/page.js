import { AlertTriangle, CheckCircle2, FileText } from "lucide-react";
import { PageHero, SectionTitle } from "../../components/ui";

const rules = [
  ["01", "Fair racing first", "Respect racing room and avoid contact. Deliberate or repeated incidents may lead to time penalties or exclusion."],
  ["02", "Equal machinery", "Karts are allocated by race control. No driver modifications or private setup work are permitted."],
  ["03", "Driver conduct", "Briefing attendance is mandatory. Instructions from marshals and race control must be followed immediately."],
  ["04", "Age requirement", "Drivers must be at least 12 years old to enter the event."],
  ["05", "Weight regulation", "Drivers must reach a racing weight of 90 kg with ballast. Final application remains subject to the organiser's decision."],
  ["06", "Classification", "Each driver competes in five qualifying races. The top 60 advance to the semi-finals and the top 20 advance to the grand final."],
  ["07", "Safety equipment", "A full-face helmet, closed shoes and suitable racing clothing are required whenever a driver is on track."],
];

export default function RulesPage() {
  return (
    <>
      <PageHero eyebrow="Sporting code" title="Race hard. Race fair." text="Clear rules make close racing possible. Read the essentials before you arrive and listen carefully at the mandatory briefing." />
      <section className="track-grid bg-black py-20">
        <div className="mx-auto max-w-5xl px-5">
          <SectionTitle eyebrow="Core regulations" title="The rulebook." copy="This summary is your starting point. The final sporting document will be issued to registered drivers before the event." />
          <div className="grid gap-3">
            {rules.map(([number, title, text]) => (
              <article key={number} className="grid gap-4 border border-white/10 bg-neutral-950 p-5 transition hover:border-red-600/40 sm:grid-cols-[52px_1fr]">
                <p className="font-display text-3xl font-black italic text-red-600">{number}</p>
                <div><h3 className="font-display text-xl font-black uppercase italic">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>
              </article>
            ))}
          </div>
          <div className="mt-8 flex gap-3 border border-amber-500/30 bg-amber-500/5 p-5 text-sm leading-6 text-amber-100/70">
            <AlertTriangle className="h-5 w-5 shrink-0 text-amber-500" />
            <p>The downloadable official regulations are being finalized. This page is an event overview and does not replace the final sporting document.</p>
          </div>
        </div>
      </section>
    </>
  );
}
