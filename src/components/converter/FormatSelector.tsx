import type { ImageFormat } from "../../types/converter";

interface Props {
    value: ImageFormat;
    onChange: (value: ImageFormat) => void;
}

const formats: ImageFormat[] = [
    "png",
    "jpg",
    "jpeg",
    "webp",
];

export default function FormatSelector({
    value,
    onChange,
}: Props) {
    return (
        <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">
                Çevriləcək Format
            </h3>

            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {formats.map((format) => (
                    <button
                        key={format}
                        onClick={() => onChange(format)}
                        className={`rounded-xl border p-4 transition ${value === format
                                ? "border-yellow-400 bg-yellow-400 text-black"
                                : "border-zinc-700 bg-[#181818] hover:border-yellow-400"
                            }`}
                    >
                        {format.toUpperCase()}
                    </button>
                ))}
            </div>
        </div>
    );
}