import { LockKeyhole } from "lucide-react";
import Brand from "./Brand";

export default function Footer() {
  return (
    <footer className="theme-footer theme-border border-t">
      <div className="mx-auto grid max-w-[1200px] gap-10 px-5 py-12 sm:px-8 md:grid-cols-2 md:items-start">
        <div>
          <Brand compact />
          <p className="mt-4 max-w-sm text-sm leading-6 text-muted">
            Şəkillərinizi heç bir serverə göndərmədən, birbaşa brauzerinizdə sürətli və təhlükəsiz çevirin.
          </p>
        </div>
        <div className="md:justify-self-end md:max-w-xs">
          <p className="text-sm font-semibold text-primary">Təhlükəsiz emal</p>
          <div className="mt-4 flex items-start gap-3 text-sm leading-6 text-muted">
            <LockKeyhole className="accent-text mt-0.5 shrink-0" size={18} />
            Fayllar cihazınızı tərk etmir və heç yerdə saxlanılmır.
          </div>
        </div>
      </div>
      <div className="theme-border border-t">
        <div className="mx-auto max-w-[1200px] px-5 py-5 text-center text-xs text-subtle sm:px-8">
          © {new Date().getFullYear()} ManiConvert. Bütün hüquqlar qorunur.
        </div>
      </div>
    </footer>
  );
}
