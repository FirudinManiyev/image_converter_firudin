import { Check } from "lucide-react";
import { OUTPUT_FORMATS } from "../../constants/image";
import type { ImageFormat } from "../../types/converter";

interface FormatSelectorProps {
  value: ImageFormat;
  onChange: (value: ImageFormat) => void;
}

export default function FormatSelector({ value, onChange }: FormatSelectorProps) {
  return (
    <fieldset>
      <legend className="setting-label">Çıxış formatı</legend>
      <div className="mt-3 grid gap-2.5">
        {OUTPUT_FORMATS.map((format) => {
          const selected = value === format.value;
          return (
            <button
              key={format.value}
              type="button"
              onClick={() => onChange(format.value)}
              className={`format-option flex items-center gap-3 rounded-2xl border p-3.5 text-left transition ${selected ? "border-[var(--accent-border)] bg-[var(--accent-soft)]" : "theme-border soft-bg hover:-translate-y-0.5 hover:border-[var(--border-strong)] hover:bg-[var(--surface-hover)]"}`}
              aria-pressed={selected}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl text-xs font-extrabold transition ${selected ? "bg-lime-300 text-slate-950" : "soft-bg text-secondary"}`}>
                {format.label.slice(0, 2)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-primary">{format.label}</span>
                <span className="mt-0.5 block truncate text-xs text-muted">{format.description}</span>
              </span>
              <span className={`grid size-5 place-items-center rounded-full border transition ${selected ? "scale-100 border-lime-300 bg-lime-300 text-slate-950" : "scale-90 border-[var(--border-strong)] text-transparent"}`}>
                <Check size={12} strokeWidth={3} />
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
