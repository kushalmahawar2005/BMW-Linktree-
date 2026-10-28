"use client";

import Image from "next/image";
import { Card } from "../components/ui/card";
import SweetsCatalogue from "../components/SweetsCatalogue";
import { useState } from "react";
import { ArrowLeft, ArrowRight, ChevronRight, Gift, Heart, Instagram, Leaf, MapPin, MessageCircle, Package, Phone, Search, Sparkles, Store, X } from "lucide-react";

type Category = { name: string; subtitle: string; products: string[] };
const phone = "919413675495";
const whatsapp = (message: string) => `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
const categories: Category[] = [
  { name: "Dry Fruit Sweets", subtitle: "Rich, nut-filled favourites", products: ["Kaju Roll", "Anjeer Roll", "Khajoor Cutlass"] },
  { name: "Kaju & Badam", subtitle: "Our signature selection", products: ["Kaju Katli", "Badam Katli", "Kaju Patisha", "Kaju Bite"] },
  { name: "Mawa & Milk", subtitle: "Soft, creamy classics", products: ["Milk Cake", "Peda", "Kalakand"] },
  { name: "Traditional Sweets", subtitle: "Timeless Indian mithai", products: ["Gulab Jamun", "Makhan Bada", "Motichoor Ladoo", "Soan Papdi"] },
  { name: "Festive Specials", subtitle: "Made for celebrations", products: ["Sangam Barfi", "Ghewar", "Assorted Mithai Box"] },
  { name: "Bengali Sweets", subtitle: "Light and lovely", products: ["Rasgulla", "Rasmalai"] },
];


const categoryIcons: Record<string, typeof Gift> = {
  "Dry Fruit Sweets": Package,
  "Kaju & Badam": Sparkles,
  "Mawa & Milk": Heart,
  "Traditional Sweets": Leaf,
  "Festive Specials": Gift,
  "Bengali Sweets": Store,
};
function CategoryIcon({ name }: { name: string }) {
  const Icon = categoryIcons[name] ?? Gift;
  return <Icon size={22} strokeWidth={1.8} />;
}
function StoreLink({ city, address, query, className = "" }: { city: string; address: string; query: string; className?: string }) {
  return <a href={`https://www.google.com/maps/search/?api=1&query=${query}`} target="_blank" rel="noreferrer" aria-label={`Open directions to ${city} store in Google Maps`} className={`block rounded-2xl focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a57a40] ${className}`}>
    <Card className="flex min-h-[78px] items-center gap-3 border-[#e4d1ac] p-3.5 shadow-[0_3px_12px_rgba(88,49,20,.06)] transition-transform active:scale-[.99]">
      <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-[#f6ead7] text-[#9d6e30]"><MapPin size={21}/></span>
      <span className="min-w-0 flex-1"><b className="serif block text-[19px] leading-tight text-[#711b26]">{city} Store</b><small className="block text-xs text-[#826b59]">{address}</small></span>
      <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-[#fbf2e3] text-[#a57a40]"><ChevronRight size={18}/></span>
    </Card>
  </a>;
}

export default function Home() {
  const [screen, setScreen] = useState<"home" | "menu">(() => typeof window !== "undefined" && window.localStorage.getItem("bmw-screen") === "menu" ? "menu" : "home");
  const navigate = (next: "home" | "menu") => { window.localStorage.setItem("bmw-screen", next); setScreen(next); };
  const [selected, setSelected] = useState<Category | null>(null);
  const [search, setSearch] = useState("");
  const [instagramOpen, setInstagramOpen] = useState(false);
  const filtered = categories.filter((category) => (category.name + " " + category.products.join(" ")).toLowerCase().includes(search.toLowerCase()));
  return <main className="min-h-screen bg-[#f8f3e9] px-0 text-[#482721] sm:px-4 sm:py-6">
    <div className="mx-auto min-h-screen w-full max-w-[430px] overflow-hidden bg-[#fffaf0] shadow-[0_12px_40px_rgba(76,41,19,.11)] sm:min-h-[820px] sm:rounded-[30px]">
      {screen === "home" ? <>
        <div className="h-[6px] bg-gradient-to-r from-[#6e1824] via-[#d4ad6b] to-[#6e1824]" />
        <div className="px-5 pb-7 pt-7">
          <div className="flex flex-col items-center text-center">
            <div className="rounded-[22px] border border-[#dec69b] bg-white p-2 shadow-[0_5px_18px_rgba(89,53,23,.10)]">
              <Image src="/images/bmw-logo-original.png" alt="Original BMW Bastiram Ji Mithai Wale logo" width={1400} height={984} priority className="h-auto w-[235px] rounded-[16px] object-contain" />
            </div>
            <p className="mt-4 text-[10px] font-bold uppercase tracking-[.22em] text-[#a27a3c]">Since 2002</p>
            <h1 className="serif mt-1 whitespace-nowrap text-[27px] font-bold leading-[1.05] text-[#751b28]">Bastiram Ji Mithaiwale</h1>
            <p className="serif mt-2 text-sm text-[#795b45]">A legacy of sweetness</p>
            <div className="mt-3 flex items-center gap-2 text-xs font-medium text-[#77604f]"><span>Bijainagar</span><span className="h-1 w-1 rounded-full bg-[#bb9456]" /><span>Gulabpura</span></div>
          </div>
          <div className="mt-5 flex justify-center gap-3">
            <a href="https://www.instagram.com/bastiramji.mithaiwale/" target="_blank" rel="noreferrer" aria-label="Instagram profile" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead8bb] bg-white text-[#8f344c] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a57a40]"><Instagram size={19}/></a>
            <a href={whatsapp("Namaste! I would like to enquire about Bastiram Ji Mithai Wale sweets.")} target="_blank" rel="noreferrer" aria-label="WhatsApp the store" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#d2e6d8] bg-[#eaf7ed] text-[#188754] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a57a40]"><MessageCircle size={19}/></a>
            <a href={`tel:+${phone}`} aria-label="Call the store" className="flex h-12 w-12 items-center justify-center rounded-full border border-[#ead8bb] bg-white text-[#815320] shadow-sm focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[#a57a40]"><Phone size={18}/></a>
          </div>
          <div className="mt-7 border-t border-[#e8d8bc] pt-5"><div className="mb-3 flex items-center gap-2"><MapPin size={16} className="text-[#a37a3f]"/><h2 className="text-xs font-bold uppercase tracking-[.16em] text-[#8d6634]">Visit our stores</h2></div>
            <StoreLink city="Bijainagar" address="27 Mill, Bijainagar" query="27+Mill+Bijainagar+Rajasthan" className="mb-3" />
            <StoreLink city="Gulabpura" address="Tikam Choraya, Gulabpura" query="Tikam+Choraya+Gulabpura+Rajasthan" />
          </div>
          <a href={whatsapp("Namaste! I would like to place an order. Please share today’s sweets and availability.")} target="_blank" rel="noreferrer" className="mt-4 flex items-center gap-3 rounded-2xl bg-[#178a54] p-4 text-white shadow-[0_6px_16px_rgba(21,123,75,.19)]"><MessageCircle size={22}/><span className="flex-1"><b className="block text-sm">Order on WhatsApp</b><small className="text-xs text-white/80">Chat with our team</small></span><ArrowRight size={18}/></a>
          <button onClick={() => navigate("menu")} className="mt-4 flex w-full items-center gap-3 rounded-2xl border border-[#d7b77a] bg-[#741d2a] p-4 text-left text-white shadow-[0_5px_15px_rgba(98,35,39,.16)]"><span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/15"><Gift size={20}/></span><span className="flex-1"><b className="serif block text-[18px]">Explore Our Sweets</b><small className="text-xs text-white/75">Open the sweets menu</small></span><ArrowRight size={18}/></button>
          <p className="serif mt-7 text-center text-xs italic text-[#947256]">Traditional taste · Premium quality · Since 2002</p>
        </div>
      </> : <SweetsCatalogue onBack={() => navigate("home")} />}

    </div>
    {instagramOpen && <div className="fixed inset-0 z-20 flex items-center justify-center bg-[#2d1915]/45 px-6" onClick={() => setInstagramOpen(false)}><div className="w-full max-w-[340px] rounded-2xl bg-white p-5 text-center shadow-xl" onClick={event => event.stopPropagation()}><Instagram size={25} className="mx-auto text-[#8f344c]"/><h2 className="serif mt-3 text-lg font-bold text-[#751b28]">Instagram link needed</h2><p className="mt-2 text-sm text-[#705b4d]">Share the store’s Instagram profile so this icon can open the right page.</p><button onClick={() => setInstagramOpen(false)} className="mt-4 rounded-full bg-[#751b28] px-5 py-2.5 text-sm font-semibold text-white">Close</button></div></div>}
  </main>;
}
