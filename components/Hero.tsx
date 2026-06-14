import Image from "next/image";
import { IMAGES } from "@/lib/data";

export default function Hero() {
  return (
    <header id="home" className="relative flex min-h-screen items-center overflow-hidden bg-ink text-white">
      {/* photo background */}
      <Image
        src={IMAGES.hero}
        alt=""
        fill
        priority
        sizes="100vw"
        className="object-cover opacity-25"
      />
      <div className="absolute inset-0 bg-gradient-to-r from-ink via-ink/90 to-ink/40" />
      <div className="absolute inset-0 bg-gradient-to-t from-ink via-transparent to-ink/60" />

      {/* glows + grid */}
      <div className="pointer-events-none absolute -right-40 -top-44 h-[760px] w-[760px] rounded-full bg-[radial-gradient(circle,rgba(43,184,234,0.22),transparent_62%)]" />
      <div className="pointer-events-none absolute -bottom-48 -left-28 h-[520px] w-[520px] rounded-full bg-[radial-gradient(circle,rgba(21,103,214,0.20),transparent_60%)]" />
      <div className="hero-grid pointer-events-none absolute inset-0 opacity-50" />

      {/* animated busbar */}
      <svg className="pointer-events-none absolute right-0 top-1/2 hidden h-[420px] w-[46%] -translate-y-1/2 lg:block" viewBox="0 0 600 420" preserveAspectRatio="xMidYMid meet" aria-hidden>
        <path d="M40,90 H560" stroke="#163350" strokeWidth={3} />
        <path className="flow" d="M40,90 H560" stroke="#2BB8EA" strokeWidth={3} fill="none" />
        <path d="M150,90 V150 M300,90 V150 M450,90 V150" stroke="#163350" strokeWidth={2} />
        {[150, 300, 450].map((x, i) => (
          <g key={x} transform={`translate(${x - 45},150)`}>
            <rect width={90} height={230} rx={6} fill="#0c1c30" stroke="#28507a" strokeWidth={1.5} />
            <rect x={14} y={18} width={62} height={48} rx={3} fill="#08141f" stroke="#2bb8ea" opacity={0.6} />
            <circle cx={30} cy={92} r={5} fill={i === 1 ? "#FFB020" : "#2bb8ea"} />
            <circle cx={50} cy={92} r={5} fill="#1567d6" />
            <circle cx={70} cy={92} r={5} fill={i === 1 ? "#2bb8ea" : "#FFB020"} opacity={0.8} />
            <rect x={14} y={118} width={62} height={12} rx={2} fill="#16344f" />
            <rect x={14} y={138} width={62} height={12} rx={2} fill="#16344f" />
            <rect x={14} y={170} width={62} height={48} rx={3} fill="#08141f" stroke="#28507a" />
          </g>
        ))}
      </svg>

      {/* content */}
      <div className="relative z-10 mx-auto w-full max-w-wrap px-7 pb-20 pt-32">
        <span className="mb-6 inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
          PT Indra Cipta Sentosa Lestari · Est. 1990
        </span>
        <h1 className="max-w-[14ch] font-display text-[clamp(2.6rem,6.2vw,5rem)] font-extrabold leading-[1.05] tracking-tight">
          Tenaga listrik, dirancang dengan <span className="text-grad">presisi.</span>
        </h1>
        <p className="mt-7 max-w-[46ch] text-[clamp(1rem,1.5vw,1.18rem)] text-oninkdim">
          Manufaktur panel listrik dan kontraktor electrical–mechanical untuk industri, gedung, dan fasilitas komersial di seluruh Indonesia.
        </p>
        <div className="mt-8 flex flex-wrap gap-2">
          {[["01", "Rancang"], ["02", "Rakit"], ["03", "Pasang"]].map(([n, v]) => (
            <span key={n} className="rounded-full border border-lineink bg-white/[0.03] px-[15px] py-2 font-mono text-[12.5px] font-semibold tracking-wide text-onink">
              <b className="text-current">{n}</b> {v}
            </span>
          ))}
        </div>
        <div className="mt-10 flex flex-wrap gap-3.5">
          <a href="#divisi" className="group inline-flex items-center gap-2.5 rounded-xl bg-current px-7 py-[15px] text-[15px] font-semibold text-[#06121f] transition-all hover:-translate-y-0.5 hover:bg-[#3fc8f6] hover:shadow-[0_14px_32px_rgba(43,184,234,0.4)]">
            Lihat Divisi Kami <span className="transition-transform group-hover:translate-x-1">→</span>
          </a>
          <a href="#kontak" className="inline-flex items-center rounded-xl border border-lineink px-7 py-[15px] text-[15px] font-semibold text-white transition-all hover:border-current hover:bg-current/[0.08]">
            Hubungi Kami
          </a>
        </div>
      </div>

      <div className="absolute bottom-8 left-1/2 z-10 flex -translate-x-1/2 flex-col items-center gap-2.5 font-mono text-[10.5px] uppercase tracking-[0.2em] text-oninkdim">
        <span>Scroll</span>
        <span className="cue-line h-9 w-px bg-gradient-to-b from-current to-transparent" />
      </div>
    </header>
  );
}
