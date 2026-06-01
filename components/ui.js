import Link from "next/link";
import { ArrowUpRight, ChevronRight } from "lucide-react";

export function Eyebrow({ children }) {
  return <p className="mb-4 flex items-center gap-2 text-xs font-black uppercase tracking-[.28em] text-red-500"><span className="h-px w-8 bg-red-600" />{children}</p>;
}

export function SectionTitle({ eyebrow, title, copy, action }) {
  return (
    <div className="mb-10 flex flex-col justify-between gap-5 md:flex-row md:items-end">
      <div>
        <Eyebrow>{eyebrow}</Eyebrow>
        <h2 className="max-w-3xl font-display text-4xl font-black uppercase italic tracking-tighter sm:text-5xl">{title}</h2>
        {copy && <p className="mt-4 max-w-2xl text-sm leading-6 text-neutral-400">{copy}</p>}
      </div>
      {action && <Link href={action.href} className="flex shrink-0 items-center gap-2 text-xs font-black uppercase tracking-[.16em] text-red-500 transition hover:text-red-400">{action.label}<ArrowUpRight className="h-4 w-4" /></Link>}
    </div>
  );
}

export function PageHero({ eyebrow, title, text }) {
  return (
    <section className="track-grid relative overflow-hidden border-b border-white/10 bg-neutral-950">
      <div className="absolute right-[-6rem] top-[-10rem] h-96 w-96 rounded-full bg-red-600/15 blur-3xl" />
      <div className="mx-auto max-w-7xl px-5 py-20 lg:px-8 lg:py-28">
        <Eyebrow>{eyebrow}</Eyebrow>
        <h1 className="max-w-4xl font-display text-6xl font-black uppercase italic leading-[.88] tracking-tighter sm:text-7xl lg:text-8xl">{title}<span className="text-red-600">.</span></h1>
        <p className="mt-6 max-w-2xl text-base leading-7 text-neutral-400">{text}</p>
      </div>
    </section>
  );
}

export function RaceButton({ href, children, secondary = false }) {
  return (
    <Link href={href} className={`inline-flex -skew-x-12 items-center gap-2 px-6 py-4 text-xs font-black uppercase tracking-[.18em] transition ${secondary ? "border border-white/20 bg-black/40 hover:border-red-500" : "bg-red-600 hover:bg-red-500"}`}>
      <span className="skew-x-12">{children}</span><ChevronRight className="h-4 w-4 skew-x-12" />
    </Link>
  );
}

export function Number({ children }) {
  return <span className="font-display text-5xl font-black italic tracking-tighter text-red-600">{children}</span>;
}
