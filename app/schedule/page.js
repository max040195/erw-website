import { Download } from "lucide-react";
import { PageHero, SectionTitle } from "../../components/ui";

const saturday = [
  ["08:00", "MANDATORY DRIVERS' BRIEFING — ALL DRIVERS", "briefing"],
  ["09:00", "Heat 1 - Group A"], ["09:23", "Heat 1 - Group B"], ["09:46", "Heat 1 - Group C"],
  ["10:09", "Heat 2 - Group A"], ["10:32", "Heat 2 - Group B"], ["10:55", "REFUELING"],
  ["11:05", "Heat 2 - Group C"], ["11:28", "Heat 3 - Group A"], ["11:51", "Heat 3 - Group B"],
  ["12:14", "Heat 3 - Group C"], ["12:37", "Heat 4 - Group A"], ["13:00", "REFUELING"],
  ["13:10", "Heat 4 - Group B"], ["13:33", "Heat 4 - Group C"], ["13:56", "END OF RACING"],
  ["14:00", "PODIUM CEREMONY", "podium"],
];

const sunday = [
  ["08:00", "Heat 5 - Group A"], ["08:23", "Heat 5 - Group B"], ["08:46", "Heat 5 - Group C"],
  ["09:09", "BREAK"], ["09:49", "Semi Final 1"], ["10:24", "Semi Final 2"], ["10:59", "BREAK"],
  ["11:44", "Grand Final"], ["12:29", "END OF RACING"], ["13:00", "PODIUM CEREMONY", "podium"],
];

function ScheduleTable({ title, sessions }) {
  return <section className="border border-white/10 bg-neutral-950"><div className="border-b border-white/10 px-6 py-5"><p className="text-xs font-black uppercase tracking-[.22em] text-red-500">ERW 2026</p><h2 className="mt-2 font-display text-3xl font-black uppercase italic">{title}</h2></div><div className="overflow-x-auto"><table className="w-full min-w-[360px] text-left"><thead className="bg-black text-[10px] font-black uppercase tracking-[.2em] text-neutral-500"><tr><th className="w-28 px-6 py-4">Time</th><th className="px-6 py-4">Session</th></tr></thead><tbody>{sessions.map(([time, session, emphasis]) => <tr key={`${time}-${session}`} className={emphasis === "briefing" ? "bg-red-600 text-white" : emphasis === "podium" ? "bg-white text-black" : "border-t border-white/10"}><td className="px-6 py-4 font-display text-xl font-black italic">{time}</td><td className="px-6 py-4 text-sm font-black uppercase tracking-[.08em]">{session}</td></tr>)}</tbody></table></div></section>;
}

export default function SchedulePage() {
  return <><PageHero eyebrow="10–11 October · 2026" title="Official race schedule" text="The official ERW 2026 event timetable for Experience Factory Eupen." /><section className="track-grid bg-black py-20"><div className="mx-auto max-w-6xl px-5 lg:px-8"><SectionTitle eyebrow="Race control" title="The official timetable." copy="Saturday 08:00 Drivers' Briefing is mandatory for all drivers. Times may be adjusted by Race Control if required during the event." /><a href="/ERW_2026_Official_Race_Schedule_Public_Podium.pdf" download className="mb-10 inline-flex -skew-x-12 items-center gap-2 bg-red-600 px-6 py-4 text-xs font-black uppercase tracking-[.16em] transition hover:bg-red-500"><span className="skew-x-12">Download official schedule — PDF</span><Download className="h-4 w-4 skew-x-12" /></a><div className="grid gap-6 lg:grid-cols-2"><ScheduleTable title="Saturday 10 October" sessions={saturday} /><ScheduleTable title="Sunday 11 October" sessions={sunday} /></div></div></section></>;
}
