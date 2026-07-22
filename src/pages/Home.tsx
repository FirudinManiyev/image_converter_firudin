import { useState, useEffect } from "react";
import Navbar from "../components/layout/Navbar";
import UploadArea from "../components/upload/UploadArea";
import ImagePreview from "../components/preview/ImagePreview";
import ImageInfo from "../components/preview/ImageInfo";
import FormatSelector from "../components/converter/FormatSelector";
import ConvertButton from "../components/converter/ConvertButton";
import { useImage } from "../hooks/useImage";
import { convertImage } from "../services/image/converter";
import { downloadImage } from "../services/image/downloader";
import { formatBytes } from "../utils/formatBytes";
import { formatTime } from "../utils/formatTime";
import { toast } from "sonner";
import ResizeInputs from "../components/converter/ResizeInputs";
import QualitySlider from "../components/converter/QualitySlider";

import type {
    ImageFormat,
    ConvertedImage,
} from "../types/converter";

export default function Home() {
    const { image, selectImage, removeImage } = useImage();

    const [format, setFormat] =
        useState<ImageFormat>("png");

    const [convertedImage, setConvertedImage] =
        useState<ConvertedImage | null>(null);

    const [originalWidth, setOriginalWidth] = useState<number>();
    const [originalHeight, setOriginalHeight] = useState<number>();

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

    const handleDownload = () => {
        if (!convertedImage) return;

        downloadImage(
            convertedImage.blob,
            convertedImage.fileName
        );
    };

    const [width, setWidth] = useState("");
    const [height, setHeight] = useState("");
    const [quality, setQuality] = useState(92);

    // Get original image dimensions when image is loaded
    useEffect(() => {
        if (image) {
            const img = new Image();
            img.onload = () => {
                setOriginalWidth(img.width);
                setOriginalHeight(img.height);
                setWidth(img.width.toString());
                setHeight(img.height.toString());
            };
            img.src = image.preview;
        }
    }, [image]);

    return (
        <main
            className="relative min-h-screen overflow-hidden text-white"
            style={{
                background: `
      radial-gradient(circle at top left, rgba(250,204,21,.18), transparent 30%),
      radial-gradient(circle at bottom right, rgba(59,130,246,.22), transparent 35%),
      linear-gradient(135deg, #020024 0%, #082575 35%, #0d4f5be1 70%, #105b65 100%)
    `,
            }}
        >
            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.03),transparent_40%,rgba(255,255,255,0.025))]" />
            <Navbar />

            <section className="relative mx-auto max-w-7xl px-6 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        Image{" "}
                        <span className="text-yellow-400">
                            Converter
                        </span>
                    </h1>

                    <p className="mt-5 text-zinc-300">
                        PNG, JPG, WEBP və SVG formatlarını rahatlıqla çevirin.
                    </p>
                </div>

                {!image ? (
                    <div className="mt-16">
                        <UploadArea onSelect={selectImage} />
                    </div>
                ) : (
                    <div className="mt-16">

                        <div className="grid gap-8 lg:grid-cols-2">
                            <div>
                                <div className="mb-4 flex items-center justify-between">
                                    <h2 className="text-xl font-semibold">
                                        Orijinal Şəkil
                                    </h2>
                                    <button
                                        onClick={() => {
                                            removeImage();
                                            setConvertedImage(null);
                                            setWidth("");
                                            setHeight("");
                                            setOriginalWidth(undefined);
                                            setOriginalHeight(undefined);
                                        }}
                                        className="rounded-lg border border-zinc-700 bg-[#151515] px-4 py-2 text-sm transition-all duration-300 hover:border-yellow-400 hover:bg-yellow-400/10 hover:text-yellow-400"
                                    >
                                        Şəkli Dəyiş
                                    </button>
                                </div>

                                <ImagePreview image={image.preview} />
                            </div>

                            <div>
                                <h2 className="mb-4 text-xl font-semibold">
                                    Çevrilmiş Şəkil
                                </h2>

                                {convertedImage ? (
                                    <ImagePreview
                                        image={convertedImage.url}
                                    />
                                ) : (
                                    <div className="flex min-h-[400px] items-center justify-center rounded-3xl border border-zinc-800 bg-[#151515] text-zinc-500">
                                        Şəkil hələ çevrilməyib
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="mt-8">
                            <ImageInfo file={image.file} />

                            {convertedImage && (
                                <div className="mt-8 grid gap-4 md:grid-cols-4">

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                                        <p className="text-sm text-zinc-500">
                                            Yeni Ölçü
                                        </p>

                                        <h3 className="mt-2 font-bold text-yellow-400 transition-colors duration-300 hover:text-yellow-300">
                                            {formatBytes(convertedImage.convertedSize)}
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                                        <p className="text-sm text-zinc-500">
                                            Çevrilmə Müddəti
                                        </p>

                                        <h3 className="mt-2 font-bold text-yellow-400 transition-colors duration-300 hover:text-yellow-300">
                                            {formatTime(convertedImage.conversionTime)}
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                                        <p className="text-sm text-zinc-500">
                                            Genişlik
                                        </p>

                                        <h3 className="mt-2 font-bold transition-colors duration-300 hover:text-yellow-400">
                                            {convertedImage.width}px
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-yellow-400/50 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/10">
                                        <p className="text-sm text-zinc-500">
                                            Hündürlük
                                        </p>

                                        <h3 className="mt-2 font-bold transition-colors duration-300 hover:text-yellow-400">
                                            {convertedImage.height}px
                                        </h3>
                                    </div>

                                </div>
                            )}
                        </div>

                        <ResizeInputs
                            width={width}
                            height={height}
                            originalWidth={originalWidth}
                            originalHeight={originalHeight}
                            onWidthChange={setWidth}
                            onHeightChange={setHeight}
                        />

                        {(format === "jpg" || format === "jpeg" || format === "webp") && (
                            <QualitySlider
                                value={quality}
                                onChange={setQuality}
                            />
                        )}

                        <FormatSelector
                            value={format}
                            onChange={setFormat}
                        />

                        <ConvertButton
                            disabled={!image}
                            onClick={handleConvert}
                        />

                        {convertedImage && (
                            <button
                                onClick={handleDownload}
                                className="mt-4 w-full rounded-xl bg-green-500 py-4 font-bold text-white transition-all duration-300 hover:bg-green-600 hover:scale-105 hover:shadow-lg hover:shadow-green-500/30"
                            >
                                Şəkli Endir
                            </button>
                        )}
                    </div>
                )}
            </section>
        </main>
    );
}