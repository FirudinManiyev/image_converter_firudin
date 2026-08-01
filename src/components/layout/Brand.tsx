import { ArrowDownUp } from "lucide-react";

interface BrandProps {
  compact?: boolean;
}

export default function Brand({ compact = false }: BrandProps) {
  return (
    <a href="#top" className="group inline-flex items-center gap-3" aria-label="ManiConvert ana səhifə">
      <span className={`${compact ? "size-9 rounded-xl" : "size-10 rounded-[14px]"} brand-mark grid place-items-center bg-lime-300 text-slate-950 shadow-[0_0_32px_rgba(190,242,100,.18)] transition-transform group-hover:-rotate-6 group-hover:scale-105`}>
        <ArrowDownUp size={compact ? 18 : 20} strokeWidth={2.6} />
      </span>
      <span className={`${compact ? "text-lg" : "text-xl"} font-bold tracking-[-0.04em] text-primary`}>
        Mani<span className="accent-text">Convert</span>
      </span>
    </a>
  );
}
