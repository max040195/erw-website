"use client";

import { useState } from "react";
import { CheckCircle2, Facebook, Mail, MapPin, Phone, Send } from "lucide-react";
import { PageHero } from "../../components/ui";

export default function ContactPage() {
  const [sent, setSent] = useState(false);
  return (
    <>
      <PageHero eyebrow="Paddock line" title="Talk to race control" text="Questions about entries, format or the event weekend? Send a message and the ERW team will get back to you." />
      <section className="bg-black py-20">
        <div className="mx-auto grid max-w-6xl gap-10 px-5 lg:grid-cols-[1fr_1.5fr]">
          <div className="space-y-4">
            {[
              [Mail, "Email", "ertoworlds@gmail.com"],
              [Phone, "Phone", "+32 456 79 24 04"],
              [MapPin, "Venue", "Experience Factory · Industriestraße 37 · 4700 Eupen · Belgium"],
              [Facebook, "Facebook", "ERW · Eupen Road to Worlds"],
            ].map(([Icon, title, text]) => (
              <div key={title} className="flex gap-4 border border-white/10 bg-neutral-950 p-5">
                <Icon className="h-5 w-5 text-red-500" />
                <div><p className="text-[10px] font-black uppercase tracking-[.2em] text-neutral-600">{title}</p><p className="mt-2 text-sm text-neutral-300">{text}</p></div>
              </div>
            ))}
          </div>
          <div className="border border-white/10 bg-neutral-950 p-7">
            {sent ? (
              <div className="flex h-full min-h-72 flex-col items-center justify-center text-center">
                <CheckCircle2 className="h-12 w-12 text-red-500" /><h2 className="mt-4 font-display text-3xl font-black uppercase italic">Message received.</h2><p className="mt-3 text-sm text-neutral-500">Race control will be in touch shortly.</p>
              </div>
            ) : (
              <form onSubmit={(event) => { event.preventDefault(); setSent(true); }} className="grid gap-5 sm:grid-cols-2">
                <Input label="Name" placeholder="Your name" />
                <Input label="Email" type="email" placeholder="you@example.com" />
                <label className="sm:col-span-2"><span className="text-[10px] font-black uppercase tracking-[.18em] text-neutral-500">Message</span><textarea required rows="6" placeholder="How can we help?" className="mt-2 w-full border border-white/10 bg-black p-4 text-sm outline-none transition placeholder:text-neutral-700 focus:border-red-600" /></label>
                <button className="inline-flex w-fit -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.16em] transition hover:bg-red-500 sm:col-span-2"><span className="skew-x-12">Send message</span><Send className="h-4 w-4 skew-x-12" /></button>
              </form>
            )}
          </div>
        </div>
      </section>
    </>
  );
}

function Input({ label, ...props }) {
  return <label><span className="text-[10px] font-black uppercase tracking-[.18em] text-neutral-500">{label}</span><input required {...props} className="mt-2 w-full border border-white/10 bg-black p-4 text-sm outline-none transition placeholder:text-neutral-700 focus:border-red-600" /></label>;
}
