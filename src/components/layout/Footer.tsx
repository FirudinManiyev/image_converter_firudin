import { Heart, LockKeyhole } from "lucide-react";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="border-t border-white/[0.07] bg-[#060910]">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-[1.4fr_1fr_1fr]">
        <div>
          <Brand compact />
          <p className="mt-4 max-w-sm text-sm leading-6 text-slate-500">
            Şəkillərinizi heç bir serverə göndərmədən, birbaşa brauzerinizdə sürətli və təhlükəsiz çevirin.
          </p>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Naviqasiya</p>
          <div className="mt-4 flex flex-col gap-3 text-sm text-slate-500">
            <a className="hover:text-lime-300" href="#converter">Converter</a>
            <a className="hover:text-lime-300" href="#features">Üstünlüklər</a>
            <a className="hover:text-lime-300" href="#privacy">Məxfilik</a>
          </div>
        </div>
        <div>
          <p className="text-sm font-semibold text-white">Təhlükəsiz emal</p>
          <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-slate-500">
            <LockKeyhole className="mt-0.5 shrink-0 text-lime-300" size={18} />
            Fayllar cihazınızı tərk etmir və heç yerdə saxlanılmır.
          </div>
        </div>
      </div>
      <div className="border-t border-white/[0.06]">
        <div className="mx-auto flex max-w-[1200px] flex-col gap-2 px-5 py-5 text-xs text-slate-600 sm:flex-row sm:items-center sm:justify-between sm:px-8">
          <span>© {new Date().getFullYear()} Firudin Maniyev. Bütün hüquqlar qorunur.</span>
          <span className="inline-flex items-center gap-1.5">Azərbaycanda <Heart size={13} className="fill-lime-300 text-lime-300" /> ilə hazırlandı</span>
        </div>
      </div>
    </footer>
  );
}
