import { ImageIcon, HardDrive, Maximize2 } from "lucide-react";
import { formatBytes } from "../../utils/formatBytes";

interface Props {
    file: File;
}

export default function ImageInfo({ file }: Props) {
    return (
        <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                <ImageIcon className="mb-3 text-yellow-400 transition-transform duration-300 hover:scale-110" />

                <p className="text-sm text-zinc-500">
                    Fayl
                </p>

                <h3 className="mt-2 truncate font-semibold transition-colors duration-300 hover:text-yellow-400">
                    {file.name}
                </h3>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                <HardDrive className="mb-3 text-yellow-400 transition-transform duration-300 hover:scale-110" />

                <p className="text-sm text-zinc-500">
                    Ölçü
                </p>

                <h3 className="mt-2 font-semibold transition-colors duration-300 hover:text-yellow-400">
                    {formatBytes(file.size)}
                </h3>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                <Maximize2 className="mb-3 text-yellow-400 transition-transform duration-300 hover:scale-110" />

                <p className="text-sm text-zinc-500">
                    Format
                </p>

                <h3 className="mt-2 font-semibold uppercase transition-colors duration-300 hover:text-yellow-400">
                    {file.type.split("/")[1]}
                </h3>
            </div>

        </div>
    );
}