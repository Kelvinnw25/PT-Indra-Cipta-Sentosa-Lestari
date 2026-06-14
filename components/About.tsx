"use client";
import { useEffect, useRef, useState } from "react";
import Reveal from "./Reveal";
import { TIMELINE, STATS } from "@/lib/data";

function Counter({ target, suffix }: { target: number; suffix: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const [n, setN] = useState(0);
  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(([e]) => {
      if (e.isIntersecting) {
        const step = Math.max(1, Math.ceil(target / 40));
        let cur = 0;
        const t = setInterval(() => {
          cur += step;
          if (cur >= target) { cur = target; clearInterval(t); }
          setN(cur);
        }, 28);
        obs.disconnect();
      }
    }, { threshold: 0.6 });
    obs.observe(el);
    return () => obs.disconnect();
  }, [target]);
  return (
    <div ref={ref} className="font-display text-[clamp(2.4rem,4vw,3.2rem)] font-extrabold leading-none text-grad">
      {n}{suffix}
    </div>
  );
}

export default function About() {
  return (
    <section id="tentang" className="relative py-[120px]">
      <div className="mx-auto max-w-wrap px-7">
        <div className="grid items-start gap-16 md:grid-cols-[1.1fr_0.9fr]">
          <Reveal>
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
              Tentang Kami
            </span>
            <p className="mb-6 mt-[18px] font-display text-[1.45rem] font-semibold leading-[1.35] tracking-tight">
              Spesialis electrical engineering, construction &amp; design — dari satu bengkel panel menjadi mitra kelistrikan industri.
            </p>
            <div className="space-y-[18px] text-dim">
              <p>
                Kegiatan utama perusahaan kami berada di bidang konstruksi dan perancangan rekayasa kelistrikan. Lingkup kerja kami dijalankan melalui empat lini: manufaktur switchboard, kontraktor electrical &amp; mechanical, manufaktur telekomunikasi, serta engineering supply &amp; trading.
              </p>
              <p>
                Divisi engineering kami didukung oleh para insinyur yang berpengalaman di bidangnya, siap memberikan masukan dan pendampingan mulai dari perencanaan proyek, produk, riset, hingga estimasi.
              </p>
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="flex flex-col gap-[30px] border-l border-line pl-[26px]">
              {TIMELINE.map((t) => (
                <div key={t.year} className="relative">
                  <span className="absolute -left-[31px] top-[5px] h-2.5 w-2.5 rounded-full bg-current shadow-[0_0_0_4px_rgba(43,184,234,0.15)]" />
                  <div className="font-mono text-[13px] font-semibold tracking-wide text-current">{t.year}</div>
                  <h4 className="mb-1 mt-1.5 font-display text-[1.12rem] font-bold">{t.title}</h4>
                  <p className="text-[0.95rem] text-dim">{t.desc}</p>
                </div>
              ))}
            </div>
          </Reveal>
        </div>

        <Reveal>
          <div className="mt-20 grid grid-cols-1 gap-px overflow-hidden rounded-[18px] border border-lineink bg-lineink sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map((s) => (
              <div key={s.label} className="bg-ink2 px-[30px] py-[38px]">
                <Counter target={s.num} suffix={s.suffix} />
                <div className="mt-3 text-[0.92rem] text-oninkdim">{s.label}</div>
              </div>
            ))}
          </div>
        </Reveal>
      </div>
    </section>
  );
}
