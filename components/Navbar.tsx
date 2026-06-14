"use client";
import { useEffect, useState } from "react";
import { NAV, COMPANY } from "@/lib/data";

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [active, setActive] = useState("");

  useEffect(() => {
    const ids = [...NAV.map((n) => n.href.slice(1)), "home"];
    const onScroll = () => {
      setScrolled(window.scrollY > 40);
      let cur = "";
      ids.forEach((id) => {
        const el = document.getElementById(id);
        if (el && window.scrollY >= el.offsetTop - 120) cur = id;
      });
      setActive(cur);
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <nav
      className={`fixed inset-x-0 top-0 z-[100] border-b transition-all duration-400 ${
        scrolled ? "bg-ink/80 backdrop-blur-md border-lineink" : "border-transparent"
      }`}
    >
      <div className="mx-auto flex max-w-wrap items-center justify-between px-7 py-[18px]">
        <a href="#home" className="flex items-center gap-3 text-white">
          <span className="grid h-10 w-10 place-items-center rounded-[10px] bg-gradient-to-br from-current to-currentd font-display text-[15px] font-extrabold tracking-tighter text-white shadow-[0_6px_20px_rgba(43,184,234,0.35)]">
            ICS
          </span>
          <span className="hidden sm:block">
            <b className="block font-display text-[15px] font-bold leading-tight">{COMPANY.name.replace("PT ", "")}</b>
            <span className="font-mono text-[9.5px] uppercase tracking-[0.18em] text-oninkdim">Electrical Engineering</span>
          </span>
        </a>

        {/* desktop */}
        <div className="hidden items-center gap-1 md:flex">
          {NAV.map((n) => (
            <a
              key={n.href}
              href={n.href}
              className={`rounded-lg px-[15px] py-[9px] text-sm font-medium transition-colors hover:bg-white/[0.06] hover:text-white ${
                active === n.href.slice(1) ? "text-white" : "text-oninkdim"
              }`}
            >
              {n.label}
            </a>
          ))}
          <a
            href="#kontak"
            className="ml-2 rounded-lg bg-current px-5 py-[10px] text-sm font-semibold text-[#06121f] transition-all hover:-translate-y-px hover:bg-white hover:shadow-[0_8px_22px_rgba(43,184,234,0.4)]"
          >
            Hubungi Kami
          </a>
        </div>

        {/* burger */}
        <button
          aria-label="Menu"
          onClick={() => setOpen(!open)}
          className="flex flex-col gap-[5px] p-2 md:hidden"
        >
          <span className={`h-0.5 w-6 rounded bg-white transition-all ${open ? "translate-y-[7px] rotate-45" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-white transition-all ${open ? "opacity-0" : ""}`} />
          <span className={`h-0.5 w-6 rounded bg-white transition-all ${open ? "-translate-y-[7px] -rotate-45" : ""}`} />
        </button>
      </div>

      {/* mobile drawer */}
      <div
        className={`fixed right-0 top-0 flex h-screen w-[min(78vw,320px)] flex-col justify-center gap-2 border-l border-lineink bg-ink2 p-10 transition-transform duration-400 md:hidden ${
          open ? "translate-x-0" : "translate-x-full"
        }`}
      >
        {NAV.map((n) => (
          <a
            key={n.href}
            href={n.href}
            onClick={() => setOpen(false)}
            className="w-full rounded-lg p-[14px] text-[17px] font-medium text-oninkdim transition-colors hover:bg-white/[0.06] hover:text-white"
          >
            {n.label}
          </a>
        ))}
        <a
          href="#kontak"
          onClick={() => setOpen(false)}
          className="mt-2 rounded-lg bg-current p-[14px] text-center text-[17px] font-semibold text-[#06121f]"
        >
          Hubungi Kami
        </a>
      </div>
    </nav>
  );
}
