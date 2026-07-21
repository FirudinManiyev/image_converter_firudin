import { useDropzone } from "react-dropzone";
import { ImageUp } from "lucide-react";

interface Props {
    onSelect: (file: File) => void;
}

export default function UploadArea({ onSelect }: Props) {
    const {
        getRootProps,
        getInputProps,
        isDragActive,
    } = useDropzone({
        multiple: false,

        maxSize: 20 * 1024 * 1024,

        accept: {
            "image/png": [],
            "image/jpeg": [],
            "image/webp": [],
            "image/svg+xml": [],
        },

        onDrop: (acceptedFiles) => {
            if (acceptedFiles.length > 0) {
                onSelect(acceptedFiles[0]);
            }
        },
    });

    return (
        <div
            {...getRootProps()}
            className={`
                cursor-pointer
                rounded-3xl
                border-2
                border-dashed
                p-14
                transition-all
                duration-300

                ${isDragActive
                    ? "border-yellow-400 bg-yellow-400/10 scale-[1.02]"
                    : "border-zinc-700 bg-[#151515] hover:border-yellow-400 hover:bg-[#1a1a1a]"
                }
            `}
        >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center">

                <div
                    className={`
                        rounded-full
                        p-6
                        transition-all

                        ${isDragActive
                            ? "bg-yellow-400 text-black"
                            : "bg-yellow-400/10 text-yellow-400"
                        }
                    `}
                >
                    <ImageUp size={56} />
                </div>

                <h2 className="mt-8 text-3xl font-bold">
                    {isDragActive
                        ? "Şəkli buraya buraxın"
                        : "Şəkil yükləyin"}
                </h2>

                <p className="mt-4 text-center text-zinc-400">
                    PNG, JPG, WEBP və SVG formatları dəstəklənir.
                </p>

                <p className="mt-2 text-sm text-zinc-500">
                    Maksimum fayl ölçüsü: 20 MB
                </p>

                <button
                    type="button"
                    className="mt-8 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black transition hover:bg-yellow-300"
                >
                    Fayl Seç
                </button>

            </div>
        </div>
    );
}