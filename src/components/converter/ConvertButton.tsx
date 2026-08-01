import { ArrowRight, LoaderCircle } from "lucide-react";

interface ConvertButtonProps {
  disabled: boolean;
  loading: boolean;
  onClick: () => void;
}

export default function ConvertButton({ disabled, loading, onClick }: ConvertButtonProps) {
  return (
    <button
      type="button"
      onClick={onClick}
      disabled={disabled || loading}
      className="group flex w-full items-center justify-center gap-2 rounded-2xl bg-lime-300 px-5 py-4 text-sm font-extrabold text-slate-950 shadow-[0_12px_30px_rgba(190,242,100,.12)] transition hover:-translate-y-0.5 hover:bg-lime-200 disabled:cursor-not-allowed disabled:translate-y-0 disabled:bg-slate-700 disabled:text-slate-400 disabled:shadow-none"
    >
      {loading ? <><LoaderCircle className="animate-spin" size={18} /> Çevrilir...</> : <>Şəkli çevir <ArrowRight className="transition-transform group-hover:translate-x-0.5" size={18} /></>}
    </button>
  );
}
