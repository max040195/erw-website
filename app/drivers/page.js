import { PageHero, SectionTitle } from "../../components/ui";

const drivers = [
  ["Laurits Juul", "Denmark", "BGK Elite", "Junior (under 18)"],
  ["Ziemowit Werra", "Poland", "Not specified", "Junior (under 18)"],
  ["Jonny Elliott", "United Kingdom", "Valor Racing", "General"],
  ["Théo Di Vincenzo", "Belgium", "MRK Lyons / Apex Racing", "Junior (under 18)"],
  ["Adrien Travaglini", "Belgium", "Apex Racing Team", "Junior (under 18)"],
  ["Maxim Gounaropoulos", "Belgium", "Apex Racing", "General"],
  ["Jayden Poelvoorde", "Belgium", "Talent Factory", "Junior (under 18)"],
  ["Lucas Bessot", "Belgium", "Not specified", "Junior (under 18)"],
  ["Antoine Laurent", "France", "Driver Performance Lab", "General"],
  ["Valdemar Andersen", "Denmark", "BGK Elite", "General"],
  ["Nikolaj Marsengo", "Denmark", "BGK Elite", "General"],
  ["Luca de Wilde", "Netherlands", "Chrono Motorsport", "General"],
  ["William Legat", "Belgium", "Not specified", "Junior (under 18)"],
  ["Stefano Vochten", "Belgium", "Talent Factory", "Junior (under 18)"],
  ["Graeven", "Belgium", "MRK Evolution", "General"],
  ["Esteban Vochten", "Belgium", "Talent Factory", "Junior (under 18)"],
  ["Daan Kon", "Netherlands", "Den Hartog Racing", "General"],
  ["Igor Tworek", "Poland", "Not specified", "Junior (under 18)"],
  ["Iwo Gurdak", "Poland", "Cool Bear Racing", "Junior (under 18)"],
  ["Maxime Marguerite", "France", "Driver Performance Lab", "General"],
  ["Mikkel Piper Frimann", "Denmark", "BGK", "General"],
  ["Louise Braune", "Belgium", "MRK Lyons", "Women"],
  ["Leandro Marzullo", "Belgium", "Not specified", "Junior (under 18)"],
  ["Max van Laar", "Netherlands", "Chrono Motorsport", "General"],
  ["Thies Wibbelink", "Netherlands", "Talent Factory", "General"],
  ["Arthur Scherer", "Belgium", "PRT", "General"],
  ["Samuel Erdelt", "Germany", "Apex Racing", "Junior (under 18)"],
  ["Milan Hansen", "Denmark", "BGK Elite", "General"],
  ["Joakim Schreurs", "Belgium", "PRT", "General"],
  ["Lucas Scherer", "Belgium", "PRT", "General"],
  ["Jolano Schaepkens", "Netherlands", "Talent Factory", "Junior (under 18)"],
  ["Kiran Kennis", "Belgium", "Talent Factory", "General"],
  ["Nohan Bovy", "Belgium", "Not specified", "Junior (under 18)"],
  ["Milan de Wilde", "Netherlands", "Chrono Motorsport", "General"],
  ["Christopher Knight", "United Kingdom", "Valor Racing", "General"],
  ["Benjamin Kaivers", "Belgium", "MRK Lyons", "General"],
  ["Martin Harders", "Denmark", "Not specified", "General"],
  ["Jort Peereboom", "Netherlands", "Chrono Motorsport", "Junior (under 18)"],
  ["Alessio Albano", "Belgium", "Not specified", "Junior (under 18)"],
  ["Elia Schmidt", "Germany", "Go Hard Racing", "Junior (under 18)"],
  ["Malte Dyrup", "Denmark", "Not specified", "Junior (under 18)"],
  ["Nicolai Dyrup", "Denmark", "DRT", "Masters (40+)"],
  ["Lucas Olivier", "Belgium", "LUCAS.O", "Junior (under 18)"],
  ["Mikołaj Kołakowski", "Poland", "GPKart Racing Team", "General"],
  ["Jazz Nouwkens", "Belgium", "PSG Racing", "Junior (under 18)"],
  ["Bertil Jensen Schönwiese", "Denmark", "BGK Elite", "General"],
  ["Youness Rami", "Belgium", "Not specified", "General"],
];

const flags = {
  Belgium: "be",
  Denmark: "dk",
  France: "fr",
  Germany: "de",
  Netherlands: "nl",
  Poland: "pl",
  "United Kingdom": "gb",
};

export default function DriversPage() {
  return (
    <>
      <PageHero
        eyebrow="Entry list · Provisional"
        title="Meet the grid"
        text="A field of sharp rental kart racers, ready to fight for every tenth. Final entries will be confirmed ahead of race weekend."
      />
      <section className="bg-black py-20">
        <div className="mx-auto max-w-7xl px-5 lg:px-8">
          <SectionTitle
            eyebrow="Confirmed starters"
            title="Driver roster."
            copy="Registered drivers are listed below. This provisional list is updated as entries are reviewed."
          />
          <div className="grid gap-px overflow-hidden border border-white/10 bg-white/10 sm:grid-cols-2 lg:grid-cols-3">
            {drivers.map(([name, nationality, team, category]) => (
              <article key={name} className="bg-neutral-950 p-5 transition hover:bg-[#141414]">
                <p className="text-[10px] font-black uppercase tracking-[.18em] text-red-500">
                  <img
                    src={`https://flagcdn.com/24x18/${flags[nationality]}.png`}
                    alt={`${nationality} flag`}
                    className="mr-2 inline-block h-3 w-4 object-cover align-[-2px]"
                  />
                  {nationality}
                </p>
                <h3 className="mt-2 font-display text-xl font-black uppercase italic">
                  {name}
                </h3>
                <div className="mt-5 space-y-2 border-t border-white/10 pt-4 text-xs">
                  <p className="flex justify-between gap-4 text-neutral-500">
                    <span className="font-bold uppercase tracking-[.12em]">Team</span>
                    <span className="text-right text-neutral-300">{team}</span>
                  </p>
                  <p className="flex justify-between gap-4 text-neutral-500">
                    <span className="font-bold uppercase tracking-[.12em]">Category</span>
                    <span className="text-right text-neutral-300">{category}</span>
                  </p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
