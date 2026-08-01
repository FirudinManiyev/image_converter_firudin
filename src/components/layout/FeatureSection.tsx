import { Gauge, Image, LockKeyhole, SlidersHorizontal } from "lucide-react";

const features = [
  { icon: Gauge, title: "Ani çevirmə", text: "Gözləmədən, bir neçə toxunuşla hazır nəticə əldə edin." },
  { icon: SlidersHorizontal, title: "Tam nəzarət", text: "Ölçü, format və keyfiyyəti ehtiyacınıza uyğun seçin." },
  { icon: Image, title: "Yüksək keyfiyyət", text: "Hamar miqyaslama ilə vizual keyfiyyəti maksimum qoruyun." },
  { icon: LockKeyhole, title: "Tam məxfilik", text: "Emal lokal aparılır; fayllarınız heç yerə göndərilmir." },
];

export default function FeatureSection() {
  return (
    <section id="features" className="theme-border border-t px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl">
          <p className="accent-text text-xs font-bold uppercase tracking-[0.2em]">Niyə ManiConvert?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-primary sm:text-4xl">Sadə görünür. Güclü işləyir.</h2>
          <p className="mt-4 leading-7 text-muted">Gündəlik şəkil çevirmə işini qarışıq parametrlərsiz, rahat və təhlükəsiz edin.</p>
        </div>

        <div className="theme-border mt-12 grid gap-px overflow-hidden rounded-3xl border bg-[var(--border)] sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="interactive-card surface-card group p-7">
              <span className="feature-icon theme-border soft-bg accent-text grid size-11 place-items-center rounded-2xl border transition group-hover:border-[var(--accent-border)] group-hover:bg-[var(--accent-soft)]">
                <Icon size={20} />
              </span>
              <h3 className="mt-6 font-semibold text-primary">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-muted">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
