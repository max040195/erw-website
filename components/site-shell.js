"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X, Facebook, Mail, MapPin, Phone } from "lucide-react";

const links = [
  ["Home", "/"],
  ["Event", "/event"],
  ["Live Timing", "/live-timing"],
  ["Drivers", "/drivers"],
  ["Rules", "/rules"],
  ["Registration", "/registration"],
  ["Contact", "/contact"],
];

export function SiteHeader() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-black/90 backdrop-blur-xl">
      <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-5 lg:px-8">
        <Link href="/" className="flex items-center gap-3" onClick={() => setOpen(false)}>
          <img src="/erw-logo.png" alt="ERW - Eupen Road to Worlds" className="h-14 w-auto object-contain" />
        </Link>

        <nav className="hidden items-center gap-6 lg:flex">
          {links.map(([label, href]) => (
            <Link
              key={href}
              href={href}
              className={`text-xs font-bold uppercase tracking-[.14em] transition hover:text-red-500 ${
                pathname === href ? "text-red-500" : "text-neutral-400"
              }`}
            >
              {label}
            </Link>
          ))}
        </nav>

        <a href="https://docs.google.com/forms/d/e/1FAIpQLSdI6G9ifzZfCkr--Br_pUXWHUg9ngXYYjP4y9k_BHn2jPD3RQ/viewform?usp=header" target="_blank" rel="noreferrer" className="hidden -skew-x-12 bg-red-600 px-5 py-3 text-xs font-black uppercase tracking-[.16em] transition hover:bg-red-500 md:block">
          <span className="block skew-x-12">Register now</span>
        </a>

        <button className="text-white lg:hidden" onClick={() => setOpen(!open)} aria-label="Toggle navigation">
          {open ? <X /> : <Menu />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-white/10 bg-black px-5 py-4 lg:hidden">
          {links.map(([label, href]) => (
            <Link key={href} href={href} onClick={() => setOpen(false)} className="block border-b border-white/10 py-4 text-sm font-bold uppercase tracking-[.14em] text-neutral-300">
              {label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}

export function SiteFooter() {
  return (
    <footer className="carbon border-t border-white/10">
      <div className="mx-auto grid max-w-7xl gap-10 px-5 py-12 md:grid-cols-[1.4fr_1fr_1fr] lg:px-8">
        <div>
          <img src="/erw-logo.png" alt="ERW - Eupen Road to Worlds" className="h-20 w-auto object-contain" />
          <p className="mt-3 max-w-sm text-sm leading-6 text-neutral-500">Built for racers. Made in Eupen. A high-energy rental kart event for drivers chasing the next level.</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-500">Find the track</p>
          <p className="mt-4 flex gap-2 text-sm text-neutral-400"><MapPin className="h-4 w-4 shrink-0 text-red-500" /> Experience Factory<br />Industriestraße 37, 4700 Eupen, Belgium</p>
        </div>
        <div>
          <p className="text-xs font-black uppercase tracking-[.2em] text-red-500">Stay connected</p>
          <div className="mt-4 flex gap-4 text-neutral-400">
            <a href="mailto:ertoworlds@gmail.com" aria-label="Email"><Mail className="h-5 w-5 transition hover:text-red-500" /></a>
            <a href="tel:+32456792404" aria-label="Phone"><Phone className="h-5 w-5 transition hover:text-red-500" /></a>
            <a href="https://www.facebook.com/profile.php?id=61590358072887" target="_blank" rel="noreferrer" aria-label="Facebook"><Facebook className="h-5 w-5 transition hover:text-red-500" /></a>
          </div>
        </div>
      </div>
      <div className="border-t border-white/10 px-5 py-5 text-center text-[10px] font-bold uppercase tracking-[.18em] text-neutral-600">
        © 2026 ERW · Eupen Road to Worlds · All systems ready
      </div>
    </footer>
  );
}
