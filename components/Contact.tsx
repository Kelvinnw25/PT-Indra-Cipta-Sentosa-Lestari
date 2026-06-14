"use client";
import { useState } from "react";
import Reveal from "./Reveal";
import { COMPANY, PERSONS } from "@/lib/data";

export default function Contact() {
  const [sent, setSent] = useState(false);

  return (
    <section id="kontak" className="relative bg-ink py-[120px] text-white">
      <div className="mx-auto max-w-wrap px-7">
        <Reveal>
          <div className="mb-12 max-w-[640px]">
            <span className="inline-flex items-center gap-2.5 font-mono text-xs font-semibold uppercase tracking-[0.22em] text-current before:h-px before:w-7 before:bg-current/70 before:content-['']">
              Kontak
            </span>
            <h2 className="mt-[18px] font-display text-[clamp(2rem,4vw,3.1rem)] font-bold tracking-tight">
              Mari bicarakan kebutuhan Anda.
            </h2>
          </div>
        </Reveal>

        <div className="grid items-start gap-14 md:grid-cols-2">
          <Reveal>
            <div className="space-y-[26px]">
              <ContactItem label="Alamat">
                {COMPANY.address.map((l) => (<span key={l} className="block">{l}</span>))}
              </ContactItem>
              <ContactItem label="Telepon & Fax">
                {COMPANY.phones}
                <span className="block">Fax: {COMPANY.fax}</span>
              </ContactItem>
              <ContactItem label="Email">
                <a href={`mailto:${COMPANY.email}`} className="transition-colors hover:text-current">{COMPANY.email}</a>
              </ContactItem>
            </div>

            <div className="mt-2 border-t border-lineink pt-[26px]">
              <div className="mb-3.5 font-mono text-[11px] uppercase tracking-[0.12em] text-oninkdim">Contact Person</div>
              {PERSONS.map((p) => (
                <div key={p.name} className="flex justify-between border-b border-lineink py-2.5 text-[0.95rem] last:border-b-0">
                  <span className="font-medium text-white">{p.name}</span>
                  <span className="font-mono text-[0.88rem] text-current">{p.phone}</span>
                </div>
              ))}
            </div>
          </Reveal>

          <Reveal delay={160}>
            <div className="rounded-[20px] border border-lineink bg-ink2 p-9">
              <h3 className="font-display text-[1.4rem] font-bold text-white">Kirim pesan</h3>
              <p className="mb-[26px] mt-1.5 text-[0.92rem] text-oninkdim">
                Sampaikan kebutuhan panel atau proyek instalasi Anda — tim kami akan menghubungi kembali.
              </p>
              <Field label="Nama" placeholder="Nama Anda" />
              <Field label="Email" placeholder="email@perusahaan.com" type="email" />
              <Field label="Perihal" placeholder="Mis. Permintaan penawaran panel LVMDP" />
              <Field label="Pesan" placeholder="Jelaskan kebutuhan Anda..." textarea />
              <button
                type="button"
                onClick={() => setSent(true)}
                className="group mt-1 inline-flex w-full items-center justify-center gap-2.5 rounded-xl bg-current px-7 py-[15px] text-[15px] font-semibold text-[#06121f] transition-all hover:-translate-y-0.5 hover:bg-[#3fc8f6]"
              >
                {sent ? "Pesan terkirim ✓" : <>Kirim Pesan <span className="transition-transform group-hover:translate-x-1">→</span></>}
              </button>
            </div>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

function ContactItem({ label, children }: { label: string; children: React.ReactNode }) {
  return (
    <div className="flex gap-4">
      <div className="grid h-[42px] w-[42px] flex-shrink-0 place-items-center rounded-[11px] bg-current/[0.12] text-current">
        <svg viewBox="0 0 24 24" width={20} height={20} fill="none" stroke="currentColor" strokeWidth={1.7} strokeLinecap="round" strokeLinejoin="round">
          <path d="M12 21s-7-5.5-7-11a7 7 0 0114 0c0 5.5-7 11-7 11z" /><circle cx={12} cy={10} r={2.5} />
        </svg>
      </div>
      <div>
        <div className="mb-1 font-mono text-[11px] uppercase tracking-[0.12em] text-oninkdim">{label}</div>
        <div className="text-base leading-relaxed text-white">{children}</div>
      </div>
    </div>
  );
}

function Field({ label, placeholder, type = "text", textarea = false }: { label: string; placeholder: string; type?: string; textarea?: boolean }) {
  const cls = "w-full rounded-[10px] border border-lineink bg-white/[0.04] px-[15px] py-[13px] text-[0.95rem] text-white outline-none transition-all placeholder:text-oninkdim/60 focus:border-current focus:bg-current/[0.06]";
  return (
    <div className="mb-[18px]">
      <label className="mb-2 block font-mono text-[11px] uppercase tracking-wide text-oninkdim">{label}</label>
      {textarea ? <textarea placeholder={placeholder} className={`${cls} min-h-[110px] resize-y`} /> : <input type={type} placeholder={placeholder} className={cls} />}
    </div>
  );
}
