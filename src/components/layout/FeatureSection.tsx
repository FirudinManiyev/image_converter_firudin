import { Gauge, Image, LockKeyhole, SlidersHorizontal } from "lucide-react";

const features = [
  { icon: Gauge, title: "Ani çevirmə", text: "Gözləmədən, bir neçə toxunuşla hazır nəticə əldə edin." },
  { icon: SlidersHorizontal, title: "Tam nəzarət", text: "Ölçü, format və keyfiyyəti ehtiyacınıza uyğun seçin." },
  { icon: Image, title: "Yüksək keyfiyyət", text: "Hamar miqyaslama ilə vizual keyfiyyəti maksimum qoruyun." },
  { icon: LockKeyhole, title: "Tam məxfilik", text: "Emal lokal aparılır; fayllarınız heç yerə göndərilmir." },
];

export default function FeatureSection() {
  return (
    <section id="features" className="border-t border-white/[0.06] px-5 py-20 sm:px-8 sm:py-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="max-w-xl">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-lime-300">Niyə ManiConvert?</p>
          <h2 className="mt-4 text-3xl font-semibold tracking-[-0.04em] text-white sm:text-4xl">Sadə görünür. Güclü işləyir.</h2>
          <p className="mt-4 leading-7 text-slate-500">Gündəlik şəkil çevirmə işini qarışıq parametrlərsiz, rahat və təhlükəsiz edin.</p>
        </div>

        <div className="mt-12 grid gap-px overflow-hidden rounded-3xl border border-white/[0.07] bg-white/[0.07] sm:grid-cols-2 lg:grid-cols-4">
          {features.map(({ icon: Icon, title, text }) => (
            <article key={title} className="group bg-[#0a0f18] p-7 transition hover:bg-[#0d131e]">
              <span className="grid size-11 place-items-center rounded-2xl border border-white/[0.07] bg-white/[0.035] text-lime-300 transition group-hover:border-lime-300/20 group-hover:bg-lime-300/[0.07]">
                <Icon size={20} />
              </span>
              <h3 className="mt-6 font-semibold text-white">{title}</h3>
              <p className="mt-2 text-sm leading-6 text-slate-500">{text}</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
