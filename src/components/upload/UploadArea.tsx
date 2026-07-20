import { useDropzone } from "react-dropzone";
import { ImageUp } from "lucide-react";

interface Props {
    onSelect: (file: File) => void;
}

export default function UploadArea({ onSelect }: Props) {
    const { getRootProps, getInputProps } = useDropzone({
        multiple: false,

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
            className="cursor-pointer rounded-3xl border-2 border-dashed border-yellow-400/40 bg-[#151515] p-16 transition hover:border-yellow-400"
        >
            <input {...getInputProps()} />

            <div className="flex flex-col items-center">
                <div className="rounded-full bg-yellow-400/10 p-6">
                    <ImageUp
                        size={50}
                        className="text-yellow-400"
                    />
                </div>

                <h2 className="mt-8 text-2xl font-bold">
                    Drop Image Here
                </h2>

                <p className="mt-3 text-zinc-400">
                    or click to browse
                </p>

                <button className="mt-10 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black">
                    Browse File
                </button>
            </div>
        </div>
    );
}