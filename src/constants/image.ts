import type { ImageFormat } from "../types/converter";

export const MAX_FILE_SIZE = 20 * 1024 * 1024;
export const MAX_IMAGE_DIMENSION = 8192;
export const MAX_IMAGE_PIXELS = 40_000_000;

export const ACCEPTED_IMAGE_TYPES = [
  "image/png",
  "image/jpeg",
  "image/webp",
  "image/svg+xml",
] as const;

export const OUTPUT_FORMATS: ReadonlyArray<{
  value: ImageFormat;
  label: string;
  description: string;
}> = [
  { value: "png", label: "PNG", description: "Şəffaf fon və yüksək keyfiyyət" },
  { value: "jpg", label: "JPG", description: "Fotoşəkillər üçün kiçik həcm" },
  { value: "webp", label: "WEBP", description: "Veb üçün optimal nəticə" },
];

export const DROPZONE_ACCEPT = {
  "image/png": [".png"],
  "image/jpeg": [".jpg", ".jpeg"],
  "image/webp": [".webp"],
  "image/svg+xml": [".svg"],
};
