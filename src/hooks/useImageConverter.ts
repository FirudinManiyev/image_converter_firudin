import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type { ConvertedImage, ImageFormat } from "../types/converter";
import { convertImage } from "../services/image/converter";
import { readImageDimensions, type ImageDimensions } from "../services/image/metadata";
import { validateDimensions } from "../services/image/validation";
import { useImage } from "./useImage";

export function useImageConverter() {
  const { image, selectImage, removeImage } = useImage();
  const [format, setFormat] = useState<ImageFormat>("webp");
  const [dimensions, setDimensions] = useState<ImageDimensions | null>(null);
  const [width, setWidth] = useState("");
  const [height, setHeight] = useState("");
  const [quality, setQuality] = useState(88);
  const [lockRatio, setLockRatio] = useState(true);
  const [convertedImage, setConvertedImage] = useState<ConvertedImage | null>(null);
  const [isConverting, setIsConverting] = useState(false);
  const [imageError, setImageError] = useState<string | null>(null);
  const convertedRef = useRef<ConvertedImage | null>(null);
  const conversionIdRef = useRef(0);

  const clearConverted = useCallback(() => {
    if (convertedRef.current) URL.revokeObjectURL(convertedRef.current.url);
    convertedRef.current = null;
    setConvertedImage(null);
  }, []);

  useEffect(() => {
    if (!image) return;
    let isActive = true;

    readImageDimensions(image.preview).then((nextDimensions) => {
      if (!isActive) return;
      setDimensions(nextDimensions);
      setWidth(String(nextDimensions.width));
      setHeight(String(nextDimensions.height));
    }).catch((error: unknown) => {
      if (!isActive) return;
      setImageError(error instanceof Error ? error.message : "Şəkil məlumatları oxuna bilmədi.");
    });

    return () => {
      isActive = false;
    };
  }, [image]);

  useEffect(() => () => {
    if (convertedRef.current) URL.revokeObjectURL(convertedRef.current.url);
  }, []);

  const dimensionError = useMemo(() => {
    if (!width || !height) return "En və hündürlük boş saxlanıla bilməz.";
    return validateDimensions(Number(width), Number(height));
  }, [height, width]);

  const originalFormat = useMemo(() => {
    if (!image) return "—";
    if (image.file.type === "image/jpeg") return "JPG";
    if (image.file.type === "image/svg+xml") return "SVG";
    return image.file.type.split("/")[1]?.toUpperCase() ?? "—";
  }, [image]);

  const updateWidth = (value: string) => {
    setWidth(value);
    if (lockRatio && dimensions && value) {
      setHeight(String(Math.max(1, Math.round(Number(value) * dimensions.height / dimensions.width))));
    }
  };

  const updateHeight = (value: string) => {
    setHeight(value);
    if (lockRatio && dimensions && value) {
      setWidth(String(Math.max(1, Math.round(Number(value) * dimensions.width / dimensions.height))));
    }
  };

  const chooseImage = (file: File) => {
    conversionIdRef.current += 1;
    setIsConverting(false);
    clearConverted();
    setDimensions(null);
    setImageError(null);
    selectImage(file);
  };

  const reset = () => {
    conversionIdRef.current += 1;
    setIsConverting(false);
    clearConverted();
    removeImage();
    setDimensions(null);
    setWidth("");
    setHeight("");
    setImageError(null);
  };

  const resetDimensions = () => {
    if (!dimensions) return;
    setWidth(String(dimensions.width));
    setHeight(String(dimensions.height));
  };

  const convert = async () => {
    if (!image) throw new Error("Əvvəlcə şəkil seçin.");
    if (dimensionError) throw new Error(dimensionError);

    const conversionId = conversionIdRef.current + 1;
    conversionIdRef.current = conversionId;
    setIsConverting(true);
    try {
      const result = await convertImage({
        file: image.file,
        format,
        width: Number(width),
        height: Number(height),
        quality: quality / 100,
      });

      if (conversionId !== conversionIdRef.current) {
        URL.revokeObjectURL(result.url);
        return null;
      }

      clearConverted();
      convertedRef.current = result;
      setConvertedImage(result);
      return result;
    } finally {
      if (conversionId === conversionIdRef.current) setIsConverting(false);
    }
  };

  return {
    image,
    format,
    dimensions,
    width,
    height,
    quality,
    lockRatio,
    convertedImage,
    isConverting,
    imageError,
    dimensionError,
    originalFormat,
    chooseImage,
    reset,
    resetDimensions,
    updateWidth,
    updateHeight,
    setFormat,
    setQuality,
    setLockRatio,
    convert,
  };
}
