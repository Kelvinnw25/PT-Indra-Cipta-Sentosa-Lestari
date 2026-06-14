import { NAV, COMPANY } from "@/lib/data";

export default function Footer() {
  return (
    <footer className="border-t border-lineink bg-[#06101d] px-7 pb-[30px] pt-[54px] text-oninkdim">
      <div className="mx-auto max-w-wrap">
        <div className="flex flex-wrap items-start justify-between gap-10 border-b border-lineink pb-9">
          <a href="#home" className="flex items-center gap-3 text-white">
            <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-gradient-to-br from-current to-currentd font-display text-[15px] font-extrabold tracking-tighter text-white">
              ICS
            </span>
            <span>
              <b className="block font-display text-[15px] font-bold leading-tight">{COMPANY.name.replace("PT ", "")}</b>
              <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-oninkdim">{COMPANY.tagline}</span>
            </span>
          </a>
          <div className="flex flex-wrap gap-7">
            {[...NAV, { label: "Kontak", href: "#kontak" }].map((n) => (
              <a key={n.href} href={n.href} className="text-sm transition-colors hover:text-current">{n.label}</a>
            ))}
          </div>
        </div>
        <div className="flex flex-wrap justify-between gap-4 pt-[26px] font-mono text-[12.5px] tracking-wide">
          <span>© 2026 {COMPANY.name}. All Rights Reserved.</span>
          <span className="live-dot inline-flex items-center gap-2">icsl.co.id · online</span>
        </div>
      </div>
    </footer>
  );
}
