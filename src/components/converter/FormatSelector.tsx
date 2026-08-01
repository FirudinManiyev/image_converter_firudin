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
              className={`flex items-center gap-3 rounded-2xl border p-3.5 text-left transition ${selected ? "border-lime-300/45 bg-lime-300/[0.08]" : "border-white/[0.08] bg-white/[0.025] hover:border-white/15 hover:bg-white/[0.045]"}`}
              aria-pressed={selected}
            >
              <span className={`grid size-10 shrink-0 place-items-center rounded-xl text-xs font-extrabold ${selected ? "bg-lime-300 text-slate-950" : "bg-white/[0.06] text-slate-300"}`}>
                {format.label.slice(0, 2)}
              </span>
              <span className="min-w-0 flex-1">
                <span className="block text-sm font-semibold text-white">{format.label}</span>
                <span className="mt-0.5 block truncate text-xs text-slate-500">{format.description}</span>
              </span>
              <span className={`grid size-5 place-items-center rounded-full border ${selected ? "border-lime-300 bg-lime-300 text-slate-950" : "border-white/15 text-transparent"}`}>
                <Check size={12} strokeWidth={3} />
              </span>
            </button>
          );
        })}
      </div>
    </fieldset>
  );
}
