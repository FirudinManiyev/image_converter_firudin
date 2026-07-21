import { useState } from "react";
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
import CompareSlider from "../components/preview/CompareSlider";
import ResizeInputs from "../components/converter/ResizeInputs";

import type {
    ImageFormat,
    ConvertedImage,
} from "../types/converter";

export default function Home() {
    const { image, selectImage } = useImage();

    const [format, setFormat] =
        useState<ImageFormat>("png");

    const [convertedImage, setConvertedImage] =
        useState<ConvertedImage | null>(null);

    const handleConvert = async () => {
        if (!image) return;

        try {
            const converted = await convertImage({
                file: image.file,
                format,
                width: width ? Number(width) : undefined,
                height: height ? Number(height) : undefined,
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

    return (
        <main className="min-h-screen bg-[#090909] text-white">
            <Navbar />

            <section className="mx-auto max-w-7xl px-6 py-16">
                <div className="text-center">
                    <h1 className="text-5xl font-bold">
                        Image{" "}
                        <span className="text-yellow-400">
                            Converter
                        </span>
                    </h1>

                    <p className="mt-5 text-zinc-400">
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

                            {convertedImage && (
                                <div className="mt-12">
                                    <h2 className="mb-6 text-2xl font-bold">
                                        Müqayisə
                                    </h2>

                                    <CompareSlider
                                        leftImage={image.preview}
                                        rightImage={convertedImage.url}
                                    />
                                </div>
                            )}

                            <div>
                                <h2 className="mb-4 text-xl font-semibold">
                                    Orijinal Şəkil
                                </h2>

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
                                    <div className="flex h-[400px] items-center justify-center rounded-3xl border border-zinc-800 bg-[#151515] text-zinc-500">
                                        Şəkil hələ çevrilməyib
                                    </div>
                                )}
                            </div>

                        </div>

                        <div className="mt-8">
                            <ImageInfo file={image.file} />

                            {convertedImage && (
                                <div className="mt-8 grid gap-4 md:grid-cols-4">

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                                        <p className="text-sm text-zinc-500">
                                            Yeni Ölçü
                                        </p>

                                        <h3 className="mt-2 font-bold text-yellow-400">
                                            {formatBytes(convertedImage.convertedSize)}
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                                        <p className="text-sm text-zinc-500">
                                            Çevrilmə Müddəti
                                        </p>

                                        <h3 className="mt-2 font-bold text-yellow-400">
                                            {formatTime(convertedImage.conversionTime)}
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                                        <p className="text-sm text-zinc-500">
                                            Genişlik
                                        </p>

                                        <h3 className="mt-2 font-bold">
                                            {convertedImage.width}px
                                        </h3>
                                    </div>

                                    <div className="rounded-2xl border border-zinc-800 bg-[#151515] p-5">
                                        <p className="text-sm text-zinc-500">
                                            Hündürlük
                                        </p>

                                        <h3 className="mt-2 font-bold">
                                            {convertedImage.height}px
                                        </h3>
                                    </div>

                                </div>
                            )}
                        </div>

                        <ResizeInputs
                            width={width}
                            height={height}
                            onWidthChange={setWidth}
                            onHeightChange={setHeight}
                        />

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
                                className="mt-4 w-full rounded-xl bg-green-500 py-4 font-bold text-white transition hover:bg-green-600"
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