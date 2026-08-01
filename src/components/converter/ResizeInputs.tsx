import { Link2, RotateCcw } from "lucide-react";

interface ResizeInputsProps {
  width: string;
  height: string;
  lockRatio: boolean;
  error: string | null;
  onWidthChange: (value: string) => void;
  onHeightChange: (value: string) => void;
  onLockRatioChange: (value: boolean) => void;
  onReset: () => void;
}

export default function ResizeInputs({
  width,
  height,
  lockRatio,
  error,
  onWidthChange,
  onHeightChange,
  onLockRatioChange,
  onReset,
}: ResizeInputsProps) {
  return (
    <fieldset>
      <div className="flex items-center justify-between">
        <legend className="setting-label">Şəkil ölçüsü</legend>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-1.5 text-xs font-medium text-slate-500 transition hover:text-lime-300">
          <RotateCcw size={13} /> Sıfırla
        </button>
      </div>

      <div className="mt-3 grid grid-cols-[1fr_auto_1fr] items-end gap-2">
        <label className="text-xs text-slate-500">
          En
          <span className={`mt-1.5 flex items-center rounded-xl border bg-white/[0.025] transition focus-within:border-lime-300/50 ${error ? "border-rose-400/30" : "border-white/[0.09]"}`}>
            <input
              type="number"
              inputMode="numeric"
              min="1"
              max="8192"
              value={width}
              onChange={(event) => onWidthChange(event.target.value)}
              className="min-w-0 flex-1 bg-transparent py-2.5 pl-3 text-sm font-medium text-white outline-none"
              aria-label="Şəkil eni"
            />
            <span className="pr-3 text-xs text-slate-600">px</span>
          </span>
        </label>

        <button
          type="button"
          onClick={() => onLockRatioChange(!lockRatio)}
          className={`mb-0.5 grid size-9 place-items-center rounded-xl border transition ${lockRatio ? "border-lime-300/30 bg-lime-300/[0.08] text-lime-300" : "border-white/[0.08] bg-white/[0.025] text-slate-600"}`}
          aria-label={lockRatio ? "Ölçü nisbətini aç" : "Ölçü nisbətini kilidlə"}
          aria-pressed={lockRatio}
          title="Ölçü nisbətini qoru"
        >
          <Link2 size={16} />
        </button>

        <label className="text-xs text-slate-500">
          Hündürlük
          <span className={`mt-1.5 flex items-center rounded-xl border bg-white/[0.025] transition focus-within:border-lime-300/50 ${error ? "border-rose-400/30" : "border-white/[0.09]"}`}>
            <input
              type="number"
              inputMode="numeric"
              min="1"
              max="8192"
              value={height}
              onChange={(event) => onHeightChange(event.target.value)}
              className="min-w-0 flex-1 bg-transparent py-2.5 pl-3 text-sm font-medium text-white outline-none"
              aria-label="Şəkil hündürlüyü"
            />
            <span className="pr-3 text-xs text-slate-600">px</span>
          </span>
        </label>
      </div>
      {error && <p className="mt-2 text-xs leading-5 text-rose-300" role="alert">{error}</p>}
    </fieldset>
  );
}
