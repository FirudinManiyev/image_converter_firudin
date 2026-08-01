import { useEffect, useState } from "react";
import { ArrowRight, Info } from "lucide-react";
import { toast } from "sonner";
import { useImageConverter } from "../../hooks/useImageConverter";
import { downloadImage } from "../../services/image/downloader";
import UploadArea from "../upload/UploadArea";
import PreviewPanel from "../preview/PreviewPanel";
import ResultPanel from "../preview/ResultPanel";
import ConvertButton from "./ConvertButton";
import FormatSelector from "./FormatSelector";
import QualitySlider from "./QualitySlider";
import ResizeInputs from "./ResizeInputs";

export default function ConverterWorkspace() {
  const converter = useImageConverter();
  const [activeView, setActiveView] = useState<"original" | "result">("original");

  useEffect(() => {
    if (converter.imageError) toast.error(converter.imageError);
  }, [converter.imageError]);

  const handleConvert = async () => {
    try {
      const result = await converter.convert();
      if (!result) return;
      setActiveView("result");
      toast.success("Şəkil uğurla çevrildi.");
    } catch (error) {
      toast.error(error instanceof Error ? error.message : "Şəkil çevrilərkən xəta baş verdi.");
    }
  };

  const handleDownload = () => {
    if (!converter.convertedImage) return;
    downloadImage(converter.convertedImage.blob, converter.convertedImage.fileName);
    toast.success("Endirmə başladıldı.");
  };

  return (
    <section id="converter" className="scroll-mt-24 px-5 pb-20 sm:px-8 sm:pb-28">
      <div className="mx-auto max-w-[1200px]">
        <div className="mb-7">
          <div>
            <p className="accent-text text-xs font-bold uppercase tracking-[0.2em]">Converter</p>
            <h2 className="mt-2 text-2xl font-semibold tracking-[-0.035em] text-primary sm:text-3xl">Faylınızı çevirməyə hazırsınız?</h2>
          </div>
        </div>

        {!converter.image ? (
          <UploadArea onSelect={converter.chooseImage} />
        ) : (
          <div className="workspace-enter grid items-start gap-5 xl:grid-cols-[minmax(0,1fr)_360px]">
            <div className="min-w-0">
              <PreviewPanel
                originalUrl={converter.image.preview}
                file={converter.image.file}
                width={converter.dimensions?.width}
                height={converter.dimensions?.height}
                convertedImage={converter.convertedImage}
                activeView={converter.convertedImage ? activeView : "original"}
                onViewChange={setActiveView}
                onReset={converter.reset}
              />
              {converter.convertedImage && <ResultPanel result={converter.convertedImage} onDownload={handleDownload} />}
            </div>

            <aside className="surface-card theme-border interactive-card rounded-[24px] border p-5 xl:sticky xl:top-24">
              <div className="theme-border flex items-center justify-between border-b pb-4">
                <div>
                  <p className="text-sm font-semibold text-primary">Çevirmə parametrləri</p>
                  <p className="mt-1 text-xs text-subtle">Orijinal: {converter.originalFormat}</p>
                </div>
                <ArrowRight className="text-lime-300" size={18} />
              </div>

              <div className="mt-5 space-y-6">
                <FormatSelector value={converter.format} onChange={converter.setFormat} />
                <div className="h-px bg-[var(--border)]" />
                <ResizeInputs
                  width={converter.width}
                  height={converter.height}
                  lockRatio={converter.lockRatio}
                  error={converter.dimensionError}
                  onWidthChange={converter.updateWidth}
                  onHeightChange={converter.updateHeight}
                  onLockRatioChange={converter.setLockRatio}
                  onReset={converter.resetDimensions}
                />
                {converter.format !== "png" && (
                  <>
                    <div className="h-px bg-[var(--border)]" />
                    <QualitySlider value={converter.quality} onChange={converter.setQuality} />
                  </>
                )}
                <div className="rounded-xl border border-cyan-400/15 bg-cyan-400/[0.05] p-3 text-xs leading-5 text-muted">
                  <Info className="mr-1.5 inline text-cyan-300" size={14} /> Şəkil yalnız bu brauzer pəncərəsində emal ediləcək.
                </div>
                <ConvertButton disabled={Boolean(converter.dimensionError)} loading={converter.isConverting} onClick={handleConvert} />
              </div>
            </aside>
          </div>
        )}
      </div>
    </section>
  );
}
