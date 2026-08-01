interface QualitySliderProps {
  value: number;
  onChange: (value: number) => void;
}

export default function QualitySlider({ value, onChange }: QualitySliderProps) {
  return (
    <label className="block">
      <span className="flex items-center justify-between">
        <span className="setting-label">Keyfiyyət</span>
        <span className="accent-soft accent-text rounded-lg px-2 py-1 text-xs font-bold">{value}%</span>
      </span>
      <input
        type="range"
        min={10}
        max={100}
        step={1}
        value={value}
        onChange={(event) => onChange(Number(event.target.value))}
        className="quality-range mt-4 w-full"
        aria-label="Çıxış keyfiyyəti"
      />
      <span className="mt-2 flex justify-between text-[10px] font-medium uppercase tracking-wider text-subtle">
        <span>Kiçik həcm</span><span>Yüksək keyfiyyət</span>
      </span>
    </label>
  );
}
