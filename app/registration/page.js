import { ArrowUpRight, CheckCircle2 } from "lucide-react";
import { PageHero } from "../../components/ui";

const registrationUrl = "https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header";

export default function RegistrationPage() {
  return (
    <>
      <PageHero eyebrow="Grid applications" title="Claim your seat" text="ERW entries are limited. Complete the official form to secure your place on the grid." />
      <section className="track-grid bg-black py-20">
        <div className="mx-auto grid max-w-6xl gap-8 px-5 lg:grid-cols-[1fr_1.6fr]">
          <aside className="border border-white/10 bg-neutral-950 p-7">
            <p className="text-xs font-black uppercase tracking-[.22em] text-red-500">Before you register</p>
            <h2 className="mt-4 font-display text-4xl font-black uppercase italic tracking-tight">Bring your best.</h2>
            <p className="mt-4 text-sm leading-6 text-neutral-500">Registration is open. Submit your entry through the official ERW Google Form.</p>
            <ul className="mt-8 space-y-4 text-sm text-neutral-400">
              {["Entry fee: €279", "Limited grid of 200 drivers", "Minimum age: 12 years", "Racing weight: 90 kg with ballast", "Five qualifying races guaranteed"].map((item) => <li key={item} className="flex gap-3"><CheckCircle2 className="h-4 w-4 shrink-0 text-red-500" />{item}</li>)}
            </ul>
          </aside>
          <div className="flex min-h-[420px] flex-col items-center justify-center border border-white/10 bg-neutral-950 p-7 text-center">
            <CheckCircle2 className="h-14 w-14 text-red-500" />
            <h2 className="mt-5 font-display text-4xl font-black uppercase italic">Registration is open.</h2>
            <p className="mt-3 max-w-md text-sm leading-6 text-neutral-500">The detailed event schedule will be communicated with the registration information.</p>
            <a href={registrationUrl} target="_blank" rel="noreferrer" className="mt-7 inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.16em] transition hover:bg-red-500">
              <span className="skew-x-12">Open registration form</span><ArrowUpRight className="h-4 w-4 skew-x-12" />
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
