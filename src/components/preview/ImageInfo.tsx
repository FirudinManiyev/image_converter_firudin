import { ImageIcon, HardDrive, Maximize2 } from "lucide-react";
import { formatBytes } from "../../utils/formatBytes";

interface Props {
    file: File;
}

export default function ImageInfo({ file }: Props) {
    return (
        <div className="mt-8 grid gap-4 md:grid-cols-3">

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                <ImageIcon className="mb-3 text-yellow-400" />

                <p className="text-sm text-zinc-500">
                    Fayl
                </p>

                <h3 className="mt-2 truncate font-semibold">
                    {file.name}
                </h3>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                <HardDrive className="mb-3 text-yellow-400" />

                <p className="text-sm text-zinc-500">
                    Ölçü
                </p>

                <h3 className="mt-2 font-semibold">
                    {formatBytes(file.size)}
                </h3>
            </div>

            <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                <Maximize2 className="mb-3 text-yellow-400" />

                <p className="text-sm text-zinc-500">
                    Format
                </p>

                <h3 className="mt-2 font-semibold uppercase">
                    {file.type.split("/")[1]}
                </h3>
            </div>

        </div>
    );
}