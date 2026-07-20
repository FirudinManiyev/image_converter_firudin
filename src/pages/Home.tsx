import Navbar from "../components/layout/Navbar";
import UploadArea from "../components/upload/UploadArea";
import ImagePreview from "../components/preview/ImagePreview";
import { useImage } from "../hooks/useImage";

export default function Home() {
    const { image, selectImage } = useImage();

    return (
        <main className="min-h-screen bg-[#090909] text-white">
            <Navbar />

            <section className="mx-auto max-w-6xl px-6 py-20">
                <h1 className="text-center text-5xl font-bold">
                    Image <span className="text-yellow-400">Converter</span>
                </h1>

                <p className="mt-5 text-center text-zinc-400">
                    Convert PNG JPG WEBP SVG Easily
                </p>

                <div className="mt-16">
                    <UploadArea onSelect={selectImage} />
                </div>

                {image && (
                    <ImagePreview image={image.preview} />
                )}
            </section>
        </main>
    );
}