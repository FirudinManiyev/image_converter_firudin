import { ImageUp } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { useEffect } from "react";

interface Props { onSelect: (file: File) => void; }

export default function UploadArea({ onSelect }: Props) {
    const { getRootProps, getInputProps, isDragActive } = useDropzone({
        multiple: false,
        maxSize: 20 * 1024 * 1024,
        accept: { "image/png": [], "image/jpeg": [], "image/webp": [], "image/svg+xml": [] },
        onDrop: (acceptedFiles) => {
            if (acceptedFiles[0]) onSelect(acceptedFiles[0]);
        },
        onDropRejected: (rejections) => {
            const exceedsLimit = rejections.some((rejection) => rejection.errors.some((error) => error.code === "file-too-large"));
            toast.error(exceedsLimit ? "Faylın ölçüsü 20 MB-dan böyük ola bilməz." : "Yalnız PNG, JPG, WEBP və SVG faylları qəbul edilir.");
        },
    });

    useEffect(() => {
        const handlePaste = (e: ClipboardEvent) => {
            const items = e.clipboardData?.items;
            if (!items) return;

            for (let i = 0; i < items.length; i++) {
                const item = items[i];
                if (item.type.startsWith("image/")) {
                    const file = item.getAsFile();
                    if (file) {
                        if (file.size > 20 * 1024 * 1024) {
                            toast.error("Faylın ölçüsü 20 MB-dan böyük ola bilməz.");
                            return;
                        }
                        onSelect(file);
                        toast.success("Şəkil uğurla yükləndi.");
                        e.preventDefault();
                        break;
                    }
                }
            }
        };

        window.addEventListener("paste", handlePaste);
        return () => window.removeEventListener("paste", handlePaste);
    }, [onSelect]);

    return (
        <div {...getRootProps()} className={`cursor-pointer rounded-3xl border-2 border-dashed p-14 transition-all duration-300 ease-out ${isDragActive ? "scale-[1.02] border-yellow-400 bg-yellow-400/10 shadow-xl shadow-yellow-400/10" : "border-zinc-700 bg-[#151515] hover:-translate-y-1 hover:border-yellow-400 hover:bg-[#1a1a1a] hover:shadow-xl hover:shadow-blue-950/40"}`}>
            <input {...getInputProps()} />
            <div className="flex flex-col items-center">
                <div className={`rounded-full p-6 transition-all duration-300 ${isDragActive ? "scale-110 bg-yellow-400 text-black" : "bg-yellow-400/10 text-yellow-400"}`}><ImageUp size={56} /></div>
                <h2 className="mt-8 text-3xl font-bold">{isDragActive ? "Şəkli buraya buraxın" : "Şəkil yükləyin"}</h2>
                <p className="mt-4 text-center text-zinc-400">PNG, JPG, WEBP və SVG formatları dəstəklənir.</p>
                <p className="mt-2 text-sm text-zinc-500">Maksimum fayl ölçüsü: 20 MB</p>
                <p className="mt-2 text-sm text-zinc-400">və ya Ctrl+V ilə yapışdırın</p>
                <button type="button" className="mt-8 rounded-xl bg-yellow-400 px-8 py-3 font-semibold text-black transition-all hover:scale-105 hover:bg-yellow-300 active:scale-95">Fayl seç</button>
            </div>
        </div>
    );
}
