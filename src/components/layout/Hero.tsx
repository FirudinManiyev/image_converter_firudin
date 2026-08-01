import { ArrowDown, Check, LockKeyhole, Sparkles, Zap } from "lucide-react";

const benefits = ["Qeydiyyatsız", "Tamamilə pulsuz", "Brauzerdə emal"];

export default function Hero() {
  return (
    <section className="relative overflow-hidden px-5 pb-16 pt-20 sm:px-8 sm:pb-24 sm:pt-28">
      <div className="hero-grid absolute inset-0 opacity-40" />
      <div className="hero-glow ambient-float absolute left-1/2 top-0 h-[520px] w-[820px] -translate-x-1/2 rounded-full" />

      <div className="relative mx-auto max-w-[920px] text-center">
        <div className="hero-reveal hero-reveal-1 accent-soft accent-text mx-auto inline-flex items-center gap-2 rounded-full border border-[var(--accent-border)] px-3.5 py-2 text-xs font-semibold">
          <Sparkles size={14} />
          Sürətli, lokal və təhlükəsiz
        </div>

        <h1 className="hero-reveal hero-reveal-2 mt-7 text-balance text-[clamp(2.9rem,8vw,6.5rem)] font-semibold leading-[0.94] tracking-[-0.065em] text-primary">
          Şəkilləri çevir.
          <span className="mt-1 block text-muted">Keyfiyyəti qoru.</span>
        </h1>

        <p className="hero-reveal hero-reveal-3 mx-auto mt-7 max-w-2xl text-balance text-base leading-7 text-muted sm:text-lg">
          PNG, JPG, WEBP və SVG fayllarını saniyələr içində çevir. Ölçünü və keyfiyyəti tənzimlə, hazır nəticəni dərhal endir.
        </p>

        <div className="hero-reveal hero-reveal-4 mt-8 flex flex-wrap items-center justify-center gap-x-6 gap-y-3">
          {benefits.map((benefit) => (
            <span key={benefit} className="benefit-pill inline-flex items-center gap-2 text-sm text-muted transition hover:-translate-y-0.5 hover:text-primary">
              <span className="accent-soft accent-text grid size-5 place-items-center rounded-full"><Check size={12} strokeWidth={3} /></span>
              {benefit}
            </span>
          ))}
        </div>

        <a href="#converter" className="hero-reveal hero-reveal-5 cta-button mx-auto mt-10 inline-flex items-center gap-2 rounded-2xl bg-lime-300 px-5 py-3.5 text-sm font-bold text-slate-950 shadow-[0_12px_40px_rgba(190,242,100,.16)] transition hover:-translate-y-1 hover:bg-lime-200">
          Çevirməyə başla <ArrowDown size={17} />
        </a>

        <div className="hero-reveal hero-reveal-5 interactive-card theme-border soft-bg mx-auto mt-12 flex max-w-md items-center justify-center gap-4 rounded-2xl border px-5 py-4 text-left backdrop-blur">
          <span className="grid size-10 shrink-0 place-items-center rounded-xl bg-cyan-400/10 text-cyan-300"><LockKeyhole size={19} /></span>
          <div>
            <p className="text-sm font-semibold text-secondary">100% cihazınızda emal olunur</p>
            <p className="mt-0.5 text-xs text-muted">Heç bir şəkil serverə yüklənmir.</p>
          </div>
          <Zap className="ml-auto hidden text-lime-300 sm:block" size={18} />
        </div>
      </div>
    </section>
  );
}
