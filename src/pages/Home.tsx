import { useEffect, useState, useMemo } from "react";
import { toast } from "sonner";
import Navbar from "../components/layout/Navbar";
import WelcomeScreen from "../components/layout/WelcomeScreen";
import UploadArea from "../components/upload/UploadArea";
import ImagePreview from "../components/preview/ImagePreview";
import ImageInfo from "../components/preview/ImageInfo";
import FormatSelector from "../components/converter/FormatSelector";
import ConvertButton from "../components/converter/ConvertButton";
import ResizeInputs from "../components/converter/ResizeInputs";
import QualitySlider from "../components/converter/QualitySlider";
import { useImage } from "../hooks/useImage";
import { convertImage } from "../services/image/converter";
import { downloadImage } from "../services/image/downloader";
import { formatBytes } from "../utils/formatBytes";
import { formatTime } from "../utils/formatTime";
import type { ConvertedImage, ImageFormat } from "../types/converter";

export default function Home() {
    const { image, selectImage, removeImage } = useImage();
    const [showWelcome, setShowWelcome] = useState(true);
    const [format, setFormat] = useState<ImageFormat>("png");
    const [convertedImage, setConvertedImage] = useState<ConvertedImage | null>(null);
    const [originalWidth, setOriginalWidth] = useState<number>();
    const [originalHeight, setOriginalHeight] = useState<number>();
    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [quality, setQuality] = useState(92);

    const originalFormat = useMemo(() => {
        if (!image) return "png";
        const mimeType = image.file.type;
        const formatMap: Record<string, string> = {
            "image/png": "png",
            "image/jpeg": "jpg",
            "image/jpg": "jpg",
            "image/webp": "webp",
            "image/svg+xml": "svg",
        };
        return formatMap[mimeType] || "png";
    }, [image]);

    const handleConvert = async () => {
        if (!image) return;

        try {
            const converted = await convertImage({
                file: image.file,
                format,
                width: width ? Number(width) : undefined,
                height: height ? Number(height) : undefined,
                quality: quality / 100,
            });

            setConvertedImage(converted);
            toast.success("Şəkil uğurla çevrildi.");
        } catch (error) {
            console.error(error);
            toast.error("Şəkil çevrilərkən xəta baş verdi.");
        }
    };

    const handleImageSelect = (file: File) => {
        setConvertedImage(null);
        selectImage(file);
    };

    const handleRemoveImage = () => {
        removeImage();
        setConvertedImage(null);
        setWidth("");
        setHeight("");
        setOriginalWidth(undefined);
        setOriginalHeight(undefined);
    };

    const handleDownload = () => {
        if (convertedImage) {
            downloadImage(convertedImage.blob, convertedImage.fileName);
        }
    };

    useEffect(() => {
        if (!image) return;

        const previewImage = new Image();
        previewImage.onload = () => {
            setOriginalWidth(previewImage.width);
            setOriginalHeight(previewImage.height);
            setWidth(previewImage.width.toString());
            setHeight(previewImage.height.toString());
        };
        previewImage.src = image.preview;
    }, [image]);

    useEffect(() => () => {
        if (convertedImage) {
            URL.revokeObjectURL(convertedImage.url);
        }
    }, [convertedImage]);

    return (
        <main
            className="relative min-h-screen overflow-hidden text-white"
            style={{
                background: "radial-gradient(circle at top left, rgba(250,204,21,.18), transparent 30%), radial-gradient(circle at bottom right, rgba(59,130,246,.22), transparent 35%), linear-gradient(135deg, #020024 0%, #082575 35%, #0d4f5be1 70%, #105b65 100%)",
            }}
        >
            <div className="ambient-orb pointer-events-none absolute -top-32 -left-28 size-96 rounded-full bg-yellow-400/10 blur-3xl" />
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_40%,rgba(255,255,255,0.025))]" />
            <Navbar />

            <section className="page-enter relative mx-auto max-w-7xl px-6 py-16">
                <div className="text-center">
                    <p className="mb-3 text-sm font-semibold tracking-[0.18em] text-yellow-300 uppercase">Sadə, sürətli, keyfiyyətli</p>
                    <h1 className="text-5xl font-bold tracking-tight sm:text-6xl">
                        Image <span className="text-yellow-400">Converter</span>
                    </h1>
                    <p className="mt-5 text-zinc-300">PNG, JPG, WEBP və SVG formatlarını rahatlıqla çevirin.</p>
                </div>

                {!image ? (
                    <div className="mt-16"><UploadArea onSelect={handleImageSelect} /></div>
                ) : (
                    <div className="mt-16">
                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">Orijinal Şəkil</h2>
                                    <button type="button" onClick={handleRemoveImage} className="rounded-lg border border-zinc-700 bg-[#151515] px-4 py-2 text-sm transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400">Şəkli dəyiş</button>
                                </div>
                                <ImagePreview image={image.preview} />
                            </div>

                            <div>
                                <h2 className="mb-4 text-xl font-semibold">Çevrilmiş Şəkil</h2>
                                {convertedImage ? <ImagePreview image={convertedImage.url} /> : (
                                    <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-zinc-800 bg-[#151515]/90 text-zinc-500 transition-colors hover:border-zinc-700">Şəkil hələ çevrilməyib</div>
                                )}
                            </div>
                        </div>

                        <div className="mt-8">
                            <ImageInfo file={image.file} />
                            {convertedImage && (
                                <div className="mt-8 grid gap-4 md:grid-cols-4">
                                    {[
                                        ["Yeni ölçü", formatBytes(convertedImage.convertedSize), "text-yellow-400"],
                                        ["Çevrilmə müddəti", formatTime(convertedImage.conversionTime), "text-yellow-400"],
                                        ["Genişlik", `${convertedImage.width}px`, ""],
                                        ["Hündürlük", `${convertedImage.height}px`, ""],
                                    ].map(([label, value, color]) => (
                                        <div key={label} className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:-translate-y-1 hover:border-yellow-400/50 hover:shadow-lg hover:shadow-yellow-400/10">
                                            <p className="text-sm text-zinc-500">{label}</p>
                                            <h3 className={`mt-2 font-bold ${color}`}>{value}</h3>
                                        </div>
                                    ))}
                                </div>
                            )}
                        </div>

                        <ResizeInputs width={width} height={height} originalWidth={originalWidth} originalHeight={originalHeight} onWidthChange={setWidth} onHeightChange={setHeight} />
                        {(format === "jpg" || format === "jpeg" || format === "webp") && <QualitySlider value={quality} onChange={setQuality} />}
                        <FormatSelector value={format} onChange={setFormat} originalFormat={originalFormat} />
                        <ConvertButton disabled={!image} onClick={handleConvert} />

                        {convertedImage && (
                            <button type="button" onClick={handleDownload} className="mt-4 w-full rounded-xl bg-green-500 py-4 font-bold text-white transition-all duration-300 hover:-translate-y-1 hover:bg-green-600 hover:shadow-lg hover:shadow-green-500/30">Şəkli endir</button>
                        )}
                    </div>
                )}
            </section>
            <WelcomeScreen isOpen={showWelcome} onClose={() => setShowWelcome(false)} />
        </main>
    );
}
