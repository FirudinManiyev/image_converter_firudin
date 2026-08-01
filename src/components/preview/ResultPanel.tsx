import { ArrowDown, CheckCircle2, Download, Gauge } from "lucide-react";
import type { ConvertedImage } from "../../types/converter";
import { formatBytes } from "../../utils/formatBytes";
import { formatTime } from "../../utils/formatTime";

interface ResultPanelProps {
  result: ConvertedImage;
  onDownload: () => void;
}

export default function ResultPanel({ result, onDownload }: ResultPanelProps) {
  const sizeDifference = result.originalSize > 0
    ? Math.round((1 - result.convertedSize / result.originalSize) * 100)
    : 0;

  return (
    <div className="result-enter accent-soft mt-5 overflow-hidden rounded-[24px] border border-[var(--accent-border)]">
      <div className="flex flex-col gap-5 p-5 sm:flex-row sm:items-center sm:justify-between sm:p-6">
        <div className="flex items-start gap-3.5">
          <span className="grid size-11 shrink-0 place-items-center rounded-2xl bg-lime-300 text-slate-950"><CheckCircle2 size={21} /></span>
          <div>
            <h3 className="font-semibold text-primary">Şəkliniz hazırdır</h3>
            <p className="mt-1 max-w-md truncate text-sm text-muted">{result.fileName}</p>
          </div>
        </div>
        <button type="button" onClick={onDownload} className="download-button inline-flex items-center justify-center gap-2 rounded-xl px-4 py-3 text-sm font-bold transition hover:-translate-y-1">
          <Download size={17} /> Endir
        </button>
      </div>

      <div className="grid gap-px border-t border-lime-300/10 bg-lime-300/10 sm:grid-cols-4">
        <ResultStat label="Yeni həcm" value={formatBytes(result.convertedSize)} />
        <ResultStat label="Dəyişiklik" value={sizeDifference >= 0 ? `${sizeDifference}% daha kiçik` : `${Math.abs(sizeDifference)}% daha böyük`} icon={ArrowDown} positive={sizeDifference > 0} />
        <ResultStat label="Ölçü" value={`${result.width} × ${result.height}px`} />
        <ResultStat label="Müddət" value={formatTime(result.conversionTime)} icon={Gauge} />
      </div>
    </div>
  );
}

interface ResultStatProps {
  label: string;
  value: string;
  icon?: typeof ArrowDown;
  positive?: boolean;
}

function ResultStat({ label, value, icon: Icon, positive }: ResultStatProps) {
  return (
    <div className="result-stat px-5 py-4 transition hover:bg-[var(--surface-hover)]">
      <p className="text-[10px] uppercase tracking-wider text-subtle">{label}</p>
      <p className={`mt-1.5 flex items-center gap-1.5 text-sm font-semibold ${positive ? "accent-text" : "text-secondary"}`}>
        {Icon && <Icon size={14} />} {value}
      </p>
    </div>
  );
}
