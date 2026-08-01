import { Code2, Moon, Sun } from "lucide-react";
import type { Theme } from "../../hooks/useTheme";
import Brand from "./Brand";

interface HeaderProps {
  theme: Theme;
  onToggleTheme: () => void;
}

export default function Header({ theme, onToggleTheme }: HeaderProps) {
  return (
    <header className="theme-header theme-border sticky top-0 z-50 border-b backdrop-blur-xl">
      <div className="mx-auto flex h-[72px] max-w-[1200px] items-center justify-between px-5 sm:px-8">
        <Brand />

        <nav className="hidden items-center gap-8 text-sm text-muted md:flex" aria-label="Əsas naviqasiya">
          <a className="nav-link" href="#converter">Converter</a>
          <a className="nav-link" href="#features">Üstünlüklər</a>
        </nav>

        <div className="flex items-center gap-2">
          <button
            type="button"
            onClick={onToggleTheme}
            className="theme-toggle theme-border soft-bg grid size-10 place-items-center rounded-xl border text-secondary"
            aria-label={theme === "dark" ? "İşıqlı rejimə keç" : "Qaranlıq rejimə keç"}
            title={theme === "dark" ? "İşıqlı rejim" : "Qaranlıq rejim"}
          >
            {theme === "dark" ? <Sun size={18} /> : <Moon size={18} />}
          </button>
          <a
            href="https://github.com/FirudinManiyev"
            target="_blank"
            rel="noreferrer"
            aria-label="GitHub profilinə keç"
            className="theme-border soft-bg inline-flex h-10 items-center gap-2 rounded-xl border px-3.5 text-sm font-medium text-secondary transition hover:-translate-y-0.5 hover:border-[var(--border-strong)]"
          >
            <Code2 size={18} />
            <span className="hidden sm:inline">GitHub</span>
          </a>
        </div>
      </div>
    </header>
  );
}
