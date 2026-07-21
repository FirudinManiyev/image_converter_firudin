import type {
    ConvertOptions,
    ConvertedImage,
} from "../../types/converter";

import { MIME_TYPES } from "../../utils/mimeTypes";
import { getFileName } from "../../utils/file";

export async function convertImage({
    file,
    format,
    quality = 0.92,
    width,
    height,
}: ConvertOptions): Promise<ConvertedImage> {
    const startTime = performance.now();

    const imageUrl = URL.createObjectURL(file);

    try {
        const image = await loadImage(imageUrl);

        const canvas = document.createElement("canvas");
        const ctx = canvas.getContext("2d");

        if (!ctx) {
            throw new Error("Canvas dəstəklənmir.");
        }

        canvas.width = width ?? image.width;
        canvas.height = height ?? image.height;

        if (format === "jpg" || format === "jpeg") {
            ctx.fillStyle = "#ffffff";
            ctx.fillRect(0, 0, canvas.width, canvas.height);
        }

        ctx.drawImage(
            image,
            0,
            0,
            canvas.width,
            canvas.height
        );

        const blob = await canvasToBlob(
            canvas,
            MIME_TYPES[format],
            quality
        );

        const url = URL.createObjectURL(blob);

        return {
            blob,
            url,
            width: image.width,
            height: image.height,
            originalSize: file.size,
            convertedSize: blob.size,
            format,
            conversionTime: Number(
                (performance.now() - startTime).toFixed(2)
            ),
            fileName: getFileName(file.name, format),
        };
    } finally {
        URL.revokeObjectURL(imageUrl);
    }
}

function loadImage(src: string): Promise<HTMLImageElement> {
    return new Promise((resolve, reject) => {
        const image = new Image();

        image.onload = () => resolve(image);

        image.onerror = () =>
            reject(new Error("Şəkil yüklənmədi."));

        image.src = src;
    });
}

function canvasToBlob(
    canvas: HTMLCanvasElement,
    mimeType: string,
    quality: number
): Promise<Blob> {
    return new Promise((resolve, reject) => {
        canvas.toBlob(
            (blob) => {
                if (!blob) {
                    reject(new Error("Şəkil çevrilmədi."));
                    return;
                }

                resolve(blob);
            },
            mimeType,
            quality
        );
    });
}