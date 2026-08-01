import { useCallback, useEffect } from "react";
import { FileImage, FolderOpen, MousePointer2 } from "lucide-react";
import { useDropzone } from "react-dropzone";
import { toast } from "sonner";
import { DROPZONE_ACCEPT, MAX_FILE_SIZE } from "../../constants/image";
import { validateImageFile } from "../../services/image/validation";

interface UploadAreaProps {
  onSelect: (file: File) => void;
}

export default function UploadArea({ onSelect }: UploadAreaProps) {
  const acceptFile = useCallback((file: File) => {
    const error = validateImageFile(file);
    if (error) {
      toast.error(error);
      return;
    }
    onSelect(file);
    toast.success("Şəkil hazırdır - parametrləri seçə bilərsiniz.");
  }, [onSelect]);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({
    multiple: false,
    maxSize: MAX_FILE_SIZE,
    accept: DROPZONE_ACCEPT,
    onDrop: (acceptedFiles) => {
      if (acceptedFiles[0]) acceptFile(acceptedFiles[0]);
    },
    onDropRejected: (rejections) => {
      const file = rejections[0]?.file;
      toast.error(file ? validateImageFile(file) ?? "Fayl növü dəstəklənmir." : "Fayl seçilə bilmədi.");
    },
  });

  useEffect(() => {
    const handlePaste = (event: ClipboardEvent) => {
      const imageItem = Array.from(event.clipboardData?.items ?? []).find((item) => item.type.startsWith("image/"));
      const file = imageItem?.getAsFile();
      if (!file) return;
      event.preventDefault();
      acceptFile(file);
    };

    window.addEventListener("paste", handlePaste);
    return () => window.removeEventListener("paste", handlePaste);
  }, [acceptFile]);

  return (
    <div
      {...getRootProps()}
      className={`upload-grid group relative cursor-pointer overflow-hidden rounded-[28px] border border-dashed p-6 text-center outline-none transition sm:p-10 ${
        isDragActive
          ? "scale-[1.01] border-lime-300 bg-lime-300/[0.06] shadow-[0_0_60px_rgba(190,242,100,.08)]"
          : "border-white/15 bg-[#0b111b] hover:border-lime-300/45 hover:bg-[#0d141f] focus-visible:border-lime-300"
      }`}
    >
      <input {...getInputProps()} aria-label="Şəkil faylı seç" />
      <div className="relative mx-auto grid min-h-[350px] max-w-xl place-items-center py-6 sm:min-h-[400px]">
        <div>
          <span className={`mx-auto grid size-20 place-items-center rounded-[24px] border transition ${isDragActive ? "rotate-3 border-lime-300/40 bg-lime-300 text-slate-950" : "border-white/10 bg-white/[0.045] text-lime-300 group-hover:-translate-y-1 group-hover:border-lime-300/25"}`}>
            {isDragActive ? <MousePointer2 size={32} /> : <FileImage size={34} />}
          </span>
          <h3 className="mt-7 text-2xl font-semibold tracking-[-0.03em] text-white sm:text-3xl">
            {isDragActive ? "Şəkli buraya buraxın" : "Şəkli bura sürükləyin"}
          </h3>
          <p className="mt-3 text-sm leading-6 text-slate-500 sm:text-base">və ya cihazınızdan fayl seçmək üçün klikləyin</p>
          <span className="mx-auto mt-7 inline-flex items-center gap-2 rounded-xl bg-lime-300 px-4 py-3 text-sm font-bold text-slate-950 transition group-hover:bg-lime-200">
            <FolderOpen size={17} /> Fayl seç
          </span>
          <p className="mt-7 text-xs text-slate-600">PNG, JPG, WEBP, SVG · Maksimum 20 MB · Ctrl+V dəstəyi</p>
        </div>
      </div>
    </div>
  );
}
