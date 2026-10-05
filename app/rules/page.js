import { FileText } from "lucide-react";
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
          <SectionTitle eyebrow="Core regulations" title="The rulebook." copy="Read the essential rules below, then download the official regulations before the event." />
          <div className="grid gap-3">
            {rules.map(([number, title, text]) => (
              <article key={number} className="grid gap-4 border border-white/10 bg-neutral-950 p-5 transition hover:border-red-600/40 sm:grid-cols-[52px_1fr]">
                <p className="font-display text-3xl font-black italic text-red-600">{number}</p>
                <div><h3 className="font-display text-xl font-black uppercase italic">{title}</h3><p className="mt-2 text-sm leading-6 text-neutral-500">{text}</p></div>
              </article>
            ))}
          </div>
          <a href="/ERW_Reglement_site_EN_FR.pdf" download className="mt-8 inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.16em] transition hover:bg-red-500">
            <span className="skew-x-12">Download official regulations - PDF</span>
            <FileText className="h-4 w-4 skew-x-12" />
          </a>
        </div>
      </section>
    </>
  );
}
