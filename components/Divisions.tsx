import Image from "next/image";
import Reveal from "./Reveal";
import { DIVISIONS } from "@/lib/data";

export default function Divisions() {
  return (
    <section id="divisi" className="relative bg-ink py-[120px] text-white">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal>
          <div className="mb-16 max-w-[640px]">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
              Divisi Kami
            </span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-tight">
              Dua divisi, satu rantai daya yang utuh.
            </h2>
            <p className="mt-5 text-[1.06rem] text-oninkdim">
              Dari merancang dan merakit panel di workshop, hingga memasang dan menyalakannya di lokasi Anda.
            </p>
            <p className="mt-3.5 font-mono text-[11.5px] tracking-wide text-oninkdim">
              * Spesifikasi di bawah merupakan contoh — akan disesuaikan dengan data &amp; foto resmi dari perusahaan.
            </p>
          </div>
        </Reveal>

        {DIVISIONS.map((d, i) => (
          <Reveal key={d.kicker}>
            <div className="group mb-[34px] grid overflow-hidden rounded-[22px] border border-lineink bg-ink2 transition-all duration-500 hover:-translate-y-1 hover:border-current/40 hover:shadow-[0_30px_70px_-30px_rgba(0,0,0,0.6)] md:grid-cols-2">
              {/* visual */}
              <div className={`relative min-h-[240px] overflow-hidden md:min-h-[400px] ${i % 2 ? "md:order-2" : ""}`}>
                <Image
                  src={d.image}
                  alt={d.title}
                  fill
                  sizes="(max-width:768px) 100vw, 50vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-ink/80 via-ink/20 to-transparent" />
                <span className="absolute left-5 top-5 z-10 rounded-md bg-current px-3 py-1.5 font-mono text-[10.5px] font-semibold uppercase tracking-[0.16em] text-[#06121f]">
                  {d.tag}
                </span>
                <span className="absolute bottom-[18px] left-5 right-5 z-10 flex items-center gap-2 font-mono text-[10px] tracking-wide text-onink/80 before:h-3.5 before:w-3.5 before:flex-shrink-0 before:rounded-[3px] before:border before:border-dashed before:border-onink/60 before:content-['']">
                  {d.slot}
                </span>
              </div>
              {/* content */}
              <div className="px-7 py-9 md:px-11 md:py-[46px]">
                <div className="mb-4 font-mono text-xs font-semibold tracking-wide text-current">{d.kicker}</div>
                <h3 className="mb-2 font-display text-[1.7rem] font-bold">{d.title}</h3>
                <p className="mb-6 text-[0.98rem] text-oninkdim">{d.desc}</p>
                <ul className="grid grid-cols-1 gap-x-6 gap-y-2.5 sm:grid-cols-2">
                  {d.specs.map((s) => (
                    <li key={s} className="relative pl-5 text-[0.9rem] text-onink before:absolute before:left-0 before:top-[9px] before:h-[7px] before:w-[7px] before:rounded-[2px] before:bg-gradient-to-br before:from-current before:to-currentd before:content-['']">
                      {s}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}
