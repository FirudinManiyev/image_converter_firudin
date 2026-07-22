import { HardDrive, ImageIcon, Maximize2 } from "lucide-react";
import { formatBytes } from "../../utils/formatBytes";

interface Props { file: File; }

export default function ImageInfo({ file }: Props) {
    const cards = [
        { icon: ImageIcon, label: "Fayl", value: file.name, truncate: true },
        { icon: HardDrive, label: "Ölçü", value: formatBytes(file.size) },
        { icon: Maximize2, label: "Format", value: file.type.split("/")[1]?.toUpperCase() || "—" },
    ];
    return <div className="mt-8 grid gap-4 md:grid-cols-3">{cards.map(({ icon: Icon, label, value, truncate }) => <div key={label} className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10"><Icon className="mb-3 text-yellow-400" /><p className="text-sm text-zinc-500">{label}</p><h3 className={`mt-2 font-semibold ${truncate ? "truncate" : ""}`}>{value}</h3></div>)}</div>;
}
