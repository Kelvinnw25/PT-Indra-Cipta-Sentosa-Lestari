// All editable site content lives here. Swap dummy specs / images for real data later.

export const IMAGES = {
  hero: "https://images.unsplash.com/photo-1635335874521-7987db781153?auto=format&fit=crop&w=1920&q=80",
  switchboard: "https://images.unsplash.com/photo-1576446470246-499c738d1c8e?auto=format&fit=crop&w=1100&q=80",
  contractor: "https://images.unsplash.com/photo-1645639417590-32e8778b2141?auto=format&fit=crop&w=1100&q=80",
};

export const COMPANY = {
  name: "PT Indra Cipta Sentosa Lestari",
  short: "ICS",
  tagline: "Electrical Engineering · Construction · Design",
  address: [
    "Komplek Pergudangan & Industri Arcadia,",
    "Blok G7 No. 7-8, Jl. Daan Mogot KM 21,",
    "Batu Ceper, Tangerang",
  ],
  phones: "(021) 29006162 / 29006264 / 29006265",
  fax: "(021) 29006263",
  email: "icsl@icsl.co.id",
};

export const NAV = [
  { label: "Tentang", href: "#tentang" },
  { label: "Divisi", href: "#divisi" },
  { label: "Industri", href: "#industri" },
  { label: "Klien", href: "#klien" },
];

export const TIMELINE = [
  { year: "1 NOV 1990", title: "Berawal sebagai CV. Indra Cipta Sarana", desc: "Memulai usaha di bidang rekayasa kelistrikan." },
  { year: "13 AGU 1993", title: "Menjadi PT. Indra Cipta Sentosa Lestari", desc: "Berbadan hukum PT seiring meningkatnya kepercayaan pelanggan." },
  { year: "SEKARANG", title: "Dua divisi, satu standar mutu", desc: "Switch Board Division & Contractor Division melayani klien industri & korporat." },
];

export const STATS = [
  { num: 35, suffix: "+", label: "Tahun pengalaman" },
  { num: 2, suffix: "", label: "Divisi terintegrasi" },
  { num: 10, suffix: "+", label: "Sektor industri dilayani" },
  { num: 4, suffix: "", label: "Lini engineering" },
];

// NOTE: spesifikasi di bawah masih CONTOH — sesuaikan dengan data resmi perusahaan.
export const DIVISIONS = [
  {
    tag: "Manufaktur",
    kicker: "SWITCH BOARD DIVISION",
    title: "Manufaktur Panel Listrik",
    desc: "Perancangan dan perakitan panel listrik tegangan rendah hingga menengah, dibangun sesuai kebutuhan beban dan standar instalasi pabrik maupun gedung.",
    image: IMAGES.switchboard,
    slot: "Slot foto: panel hasil produksi / workshop",
    specs: [
      "LVMDP — Main Distribution Panel",
      "SDP — Sub Distribution Panel",
      "MCC — Motor Control Center",
      "Panel Kapasitor / Capacitor Bank",
      "Panel Sinkronisasi Genset",
      "Panel ATS-AMF",
      "Panel Kontrol & PLC",
      "MV Cubicle — Tegangan Menengah",
    ],
  },
  {
    tag: "Kontraktor",
    kicker: "CONTRACTOR DIVISION",
    title: "Kontraktor Electrical & Mechanical",
    desc: "Pelaksana instalasi tenaga listrik dan pekerjaan mekanikal untuk gedung dan pabrik — dari perencanaan hingga commissioning dan perawatan.",
    image: IMAGES.contractor,
    slot: "Slot foto: instalasi / proyek di lokasi klien",
    specs: [
      "Instalasi tenaga listrik gedung & pabrik",
      "Instalasi gardu, trafo & kubikel",
      "Instalasi HVAC, tata udara & ventilasi",
      "Sistem grounding & penangkal petir",
      "Sistem penerangan",
      "Genset & sinkronisasi daya",
      "Maintenance & troubleshooting",
      "Design — Supply — Install — Commissioning",
    ],
  },
];

export const INDUSTRIES = [
  "Industri Tekstil",
  "Pabrik Pakan",
  "Industri Kimia",
  "Gedung Perkantoran",
  "Industri Percetakan",
  "Shopping Center",
  "Hotel & Restoran",
  "Rumah Sakit",
];

export const CLIENTS = [
  { name: "Cakratunggal Steel", sector: "Steel" },
  { name: "Hotel Borobudur", sector: "Hospitality" },
  { name: "Duta Anggada Realty", sector: "Property" },
  { name: "Duta Sugar Int'l", sector: "Manufaktur" },
  { name: "Westindo", sector: "Industri" },
  { name: "Charoen Pokphand", sector: "Pakan" },
  { name: "Mayora", sector: "FMCG" },
  { name: "Jaya Teknik", sector: "Engineering" },
];

export const PERSONS = [
  { name: "Wiwit Winarno", phone: "0812 9590 3605" },
  { name: "Jefri Arman", phone: "0812 1243 5187" },
  { name: "Heri Supriyadi", phone: "0857 1524 3587" },
  { name: "A. Kahar", phone: "0878 8345 6883" },
];
