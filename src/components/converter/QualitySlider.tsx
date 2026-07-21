interface Props {
    value: number;
    onChange: (value: number) => void;
}

export default function QualitySlider({
    value,
    onChange,
}: Props) {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#151515] p-6">
            <div className="mb-4 flex items-center justify-between">
                <h3 className="text-lg font-semibold">
                    Keyfiyyət
                </h3>

                <span className="font-bold text-yellow-400">
                    {value}%
                </span>
            </div>

            <input
                type="range"
                min={10}
                max={100}
                step={1}
                value={value}
                onChange={(e) =>
                    onChange(Number(e.target.value))
                }
                className="w-full accent-yellow-400"
            />
        </div>
    );
}