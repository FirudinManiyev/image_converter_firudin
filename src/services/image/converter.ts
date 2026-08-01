import type { ConvertOptions, ConvertedImage } from "../../types/converter";
import { getFileName } from "../../utils/file";
import { MIME_TYPES } from "../../utils/mimeTypes";
import { validateDimensions, validateImageFile } from "./validation";

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
    const fileError = validateImageFile(file);
    if (fileError) throw new Error(fileError);
    if (!Number.isFinite(quality) || quality < 0.1 || quality > 1) {
      throw new Error("Keyfiyyət 10% ilə 100% arasında olmalıdır.");
    }

    const image = await loadImage(imageUrl);
    const outputWidth = width ?? image.naturalWidth;
    const outputHeight = height ?? image.naturalHeight;
    const dimensionError = validateDimensions(outputWidth, outputHeight);
    if (dimensionError) throw new Error(dimensionError);

    const canvas = document.createElement("canvas");
    const context = canvas.getContext("2d");
    if (!context) throw new Error("Brauzer şəkil çevirməni dəstəkləmir.");

    canvas.width = outputWidth;
    canvas.height = outputHeight;

    if (format === "jpg") {
      context.fillStyle = "#ffffff";
      context.fillRect(0, 0, canvas.width, canvas.height);
    }

    context.imageSmoothingEnabled = true;
    context.imageSmoothingQuality = "high";
    context.drawImage(image, 0, 0, canvas.width, canvas.height);

    const blob = await canvasToBlob(canvas, MIME_TYPES[format], quality);

    return {
      blob,
      url: URL.createObjectURL(blob),
      width: canvas.width,
      height: canvas.height,
      originalSize: file.size,
      convertedSize: blob.size,
      format,
      conversionTime: Number((performance.now() - startTime).toFixed(2)),
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
    image.onerror = () => reject(new Error("Şəkil oxuna bilmədi və ya zədələnib."));
    image.src = src;
  });
}

function canvasToBlob(canvas: HTMLCanvasElement, mimeType: string, quality: number): Promise<Blob> {
  return new Promise((resolve, reject) => {
    canvas.toBlob((blob) => {
      if (!blob) {
        reject(new Error("Şəkil çevrilmədi. Fərqli format və ya ölçü sınayın."));
        return;
      }
      resolve(blob);
    }, mimeType, quality);
  });
}
