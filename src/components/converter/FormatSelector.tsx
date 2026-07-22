import type { ImageFormat } from "../../types/converter";

interface Props { value: ImageFormat; onChange: (value: ImageFormat) => void; }
const formats: ImageFormat[] = ["png", "jpg", "jpeg", "webp"];

export default function FormatSelector({ value, onChange }: Props) {
    return (
        <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Çevriləcək format</h3>
            <div className="grid grid-cols-2 gap-4 md:grid-cols-4">
                {formats.map((format) => <button key={format} type="button" onClick={() => onChange(format)} className={`rounded-xl border p-4 font-medium transition-all duration-300 ${value === format ? "scale-[1.03] border-yellow-400 bg-yellow-400 text-black shadow-lg shadow-yellow-400/30" : "border-zinc-700 bg-[#181818] hover:-translate-y-1 hover:border-yellow-400 hover:bg-[#1a1a1a] hover:shadow-md hover:shadow-yellow-400/10"}`}>{format.toUpperCase()}</button>)}
            </div>
        </div>
    );
}
