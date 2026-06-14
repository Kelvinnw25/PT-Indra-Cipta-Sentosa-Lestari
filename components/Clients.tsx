import Reveal from "./Reveal";
import { CLIENTS } from "@/lib/data";

export default function Clients() {
  return (
    <section id="klien" className="relative py-[120px]">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal>
          <div className="mb-12 max-w-[640px]">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
              Referensi
            </span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-tight">
              Klien yang pernah kami tangani.
            </h2>
            <p className="mt-3.5 font-mono text-[11.5px] text-dim">
              * Ditampilkan sebagai teks. Logo resmi klien dapat ditambahkan setelah memperoleh izin penggunaan.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {CLIENTS.map((c, i) => (
            <Reveal key={c.name} delay={(i % 4) * 80}>
              <div className="flex h-full min-h-[120px] flex-col items-center justify-center rounded-2xl border border-line bg-white px-[22px] py-[30px] text-center transition-all duration-300 hover:-translate-y-1 hover:border-[#cdd8e6] hover:shadow-[0_18px_40px_-22px_rgba(15,30,51,0.3)]">
                <div className="font-display text-[1.05rem] font-bold text-[#16202F]">{c.name}</div>
                <div className="mt-1.5 font-mono text-[10px] uppercase tracking-[0.1em] text-dim">{c.sector}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
