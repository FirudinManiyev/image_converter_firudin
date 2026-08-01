import { FileImage, Maximize2, RotateCcw } from "lucide-react";
import { formatBytes } from "../../utils/formatBytes";
import type { ConvertedImage } from "../../types/converter";

interface PreviewPanelProps {
  originalUrl: string;
  file: File;
  width?: number;
  height?: number;
  convertedImage: ConvertedImage | null;
  activeView: "original" | "result";
  onViewChange: (view: "original" | "result") => void;
  onReset: () => void;
}

export default function PreviewPanel({
  originalUrl,
  file,
  width,
  height,
  convertedImage,
  activeView,
  onViewChange,
  onReset,
}: PreviewPanelProps) {
  const showingResult = activeView === "result" && convertedImage;
  const currentUrl = showingResult ? convertedImage.url : originalUrl;

  return (
    <div className="surface-card theme-border interactive-card overflow-hidden rounded-[24px] border">
      <div className="theme-border flex flex-wrap items-center justify-between gap-3 border-b px-4 py-3.5 sm:px-5">
        <div className="soft-bg flex rounded-xl p-1" role="tablist" aria-label="Şəkil önizləməsi">
          <button
            type="button"
            role="tab"
            aria-selected={activeView === "original"}
            onClick={() => onViewChange("original")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${activeView === "original" ? "selected-soft text-primary shadow-sm" : "text-muted hover:text-primary"}`}
          >
            Orijinal
          </button>
          <button
            type="button"
            role="tab"
            disabled={!convertedImage}
            aria-selected={activeView === "result"}
            onClick={() => onViewChange("result")}
            className={`rounded-lg px-3 py-1.5 text-xs font-semibold transition ${activeView === "result" ? "bg-lime-300 text-slate-950" : "text-muted hover:text-primary disabled:cursor-not-allowed disabled:opacity-35"}`}
          >
            Nəticə
          </button>
        </div>
        <button type="button" onClick={onReset} className="inline-flex items-center gap-1.5 text-xs font-medium text-muted transition hover:-translate-y-0.5 hover:text-rose-400">
          <RotateCcw size={14} /> Başqa şəkil
        </button>
      </div>

      <div className="preview-checker relative grid min-h-[360px] place-items-center overflow-hidden p-5 sm:min-h-[520px] sm:p-8">
        <div className="preview-glow pointer-events-none absolute inset-x-[20%] top-[20%] h-1/2 rounded-full bg-lime-300/[0.05] blur-3xl" />
        <img
          key={currentUrl}
          src={currentUrl}
          alt={showingResult ? "Çevrilmiş şəkil önizləməsi" : "Orijinal şəkil önizləməsi"}
          className="preview-enter relative max-h-[470px] max-w-full rounded-lg object-contain shadow-[0_24px_70px_rgba(0,0,0,.38)]"
        />
      </div>

      <div className="theme-border grid gap-px border-t bg-[var(--border)] sm:grid-cols-3">
        <Info icon={FileImage} label="Fayl" value={showingResult ? convertedImage.fileName : file.name} truncate />
        <Info icon={Maximize2} label="Ölçü" value={showingResult ? `${convertedImage.width} × ${convertedImage.height}px` : width && height ? `${width} × ${height}px` : "Oxunur..."} />
        <Info icon={FileImage} label="Həcm" value={formatBytes(showingResult ? convertedImage.convertedSize : file.size)} />
      </div>
    </div>
  );
}

interface InfoProps {
  icon: typeof FileImage;
  label: string;
  value: string;
  truncate?: boolean;
}

function Info({ icon: Icon, label, value, truncate }: InfoProps) {
  return (
    <div className="surface-raised flex min-w-0 items-center gap-3 px-4 py-3.5">
      <Icon className="shrink-0 text-subtle" size={16} />
      <span className="min-w-0">
        <span className="block text-[10px] uppercase tracking-wider text-subtle">{label}</span>
        <span className={`mt-0.5 block text-xs font-medium text-secondary ${truncate ? "truncate" : ""}`}>{value}</span>
      </span>
    </div>
  );
}
