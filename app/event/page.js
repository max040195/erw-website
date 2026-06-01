import { Clock3, Flag, MapPin, Trophy } from "lucide-react";
import { Number, PageHero, SectionTitle } from "../../components/ui";

export default function EventPage() {
  return (
    <>
      <PageHero eyebrow="October 10-11 · 2026" title="Race weekend" text="Two concentrated days of close racing, equal equipment and the kind of pressure that reveals the complete driver." />
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 md:grid-cols-3">
            {[
              [Flag, "05", "Qualifying heats", "Five qualifying races for every driver."],
              [Trophy, "20", "Grand finalists", "The top 60 reach the semi-finals. The top 20 reach the final."],
              [MapPin, "EUP", "Experience Factory", "A technical indoor circuit in Eupen."],
            ].map(([Icon, number, title, text]) => (
              <article className="bg-neutral-950 p-7" key={title}>
                <Icon className="mb-8 h-6 w-6 text-red-500" />
                <Number>{number}</Number>
                <h3 className="mt-3 font-display text-2xl font-black uppercase italic">{title}</h3>
                <p className="mt-3 text-sm leading-6 text-neutral-500">{text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>
      <section className="track-grid bg-neutral-950 py-20">
        <div className="mx-auto max-w-5xl px-5 lg:px-8">
          <SectionTitle eyebrow="Weekend program" title="Timing sheet." copy="The detailed schedule will be shared with registered drivers." />
          <div className="flex gap-4 border border-white/10 bg-black/60 p-6">
            <Clock3 className="h-6 w-6 shrink-0 text-red-500" />
            <p className="text-sm leading-6 text-neutral-400">Official timings for October 10-11, 2026 will be sent with the registration information.</p>
          </div>
        </div>
      </section>
    </>
  );
}
