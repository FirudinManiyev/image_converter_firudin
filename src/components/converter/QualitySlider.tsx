interface Props { value: number; onChange: (value: number) => void; }

export default function QualitySlider({ value, onChange }: Props) {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#151515] p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-yellow-400/5">
            <div className="mb-4 flex items-center justify-between"><h3 className="text-lg font-semibold">Keyfiyyət</h3><span className="rounded-full bg-yellow-400/10 px-3 py-1 font-bold text-yellow-400">{value}%</span></div>
            <input type="range" min={10} max={100} step={1} value={value} onChange={(event) => onChange(Number(event.target.value))} className="w-full cursor-pointer accent-yellow-400" aria-label="Şəkil keyfiyyəti" />
        </div>
    );
}
