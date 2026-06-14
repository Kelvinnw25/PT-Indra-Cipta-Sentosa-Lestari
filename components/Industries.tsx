import Reveal from "./Reveal";
import { INDUSTRIES } from "@/lib/data";

export default function Industries() {
  return (
    <section id="industri" className="relative bg-ink pb-[120px] text-white">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal>
          <div className="mb-16 max-w-[640px]">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
              Pengalaman
            </span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-tight">
              Dipercaya lintas sektor.
            </h2>
            <p className="mt-5 text-[1.06rem] text-oninkdim">
              Pengalaman pengerjaan kami tersebar di berbagai jenis fasilitas industri dan komersial.
            </p>
          </div>
        </Reveal>

        <div className="grid grid-cols-2 gap-3.5 lg:grid-cols-4">
          {INDUSTRIES.map((name, i) => (
            <Reveal key={name} delay={(i % 4) * 80}>
              <div className="group h-full rounded-2xl border border-lineink bg-ink2 px-[22px] py-6 transition-all duration-300 hover:-translate-y-1 hover:border-current hover:bg-ink3">
                <div className="mb-4 h-[34px] w-[34px] text-current">
                  <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
                    <path d="M3 21h18M5 21V8l5 3V8l5 3V5l4 2v14" />
                  </svg>
                </div>
                <h4 className="font-display text-[1.02rem] font-semibold text-white">{name}</h4>
                <div className="mt-1 font-mono text-[11px] text-oninkdim">
                  {String(i + 1).padStart(2, "0")}
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
