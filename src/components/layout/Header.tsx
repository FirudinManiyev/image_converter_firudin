import { Code2, ShieldCheck } from "lucide-react";
import Brand from "./Brand";

export default function Header() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/[0.07] bg-[#070b12]/80 backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 text-sm text-slate-400 md:flex" aria-label="Əsas naviqasiya">
          <a className="transition-colors hover:text-white" href="#converter">Converter</a>
          <a className="transition-colors hover:text-white" href="#features">Üstünlüklər</a>
          <a className="transition-colors hover:text-white" href="#privacy">Məxfilik</a>
        </nav>

        <a
          href="https://github.com/FirudinManiyev"
          target="_blank"
          rel="noreferrer"
          aria-label="GitHub profilinə keç"
          className="inline-flex h-10 items-center gap-2 rounded-xl border border-white/10 bg-white/[0.04] px-3.5 text-sm font-medium text-slate-200 transition hover:border-white/20 hover:bg-white/[0.08]"
        >
          <ShieldCheck className="text-lime-300 sm:hidden" size={18} />
          <Code2 className="hidden sm:block" size={18} />
          <span className="hidden sm:inline">GitHub</span>
        </a>
      </div>
    </header>
  );
}
