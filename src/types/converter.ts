export type ImageFormat =
    | "png"
    | "jpg"
    | "jpeg"
    | "webp";

export interface ConvertOptions {
    file: File;
    format: ImageFormat;
    quality?: number;

    width?: number;
    height?: number;
}

export interface ConvertedImage {
    blob: Blob;
    url: string;
    width: number;
    height: number;
    originalSize: number;
    convertedSize: number;
    format: ImageFormat;
    conversionTime: number;
    fileName: string;
}