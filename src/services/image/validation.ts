import {
  ACCEPTED_IMAGE_TYPES,
  MAX_FILE_SIZE,
  MAX_IMAGE_DIMENSION,
  MAX_IMAGE_PIXELS,
} from "../../constants/image";

export function validateImageFile(file: File): string | null {
  const extension = file.name.split(".").pop()?.toLowerCase();
  const hasSupportedExtension = ["png", "jpg", "jpeg", "webp", "svg"].includes(extension ?? "");
  const hasSupportedType = ACCEPTED_IMAGE_TYPES.includes(file.type as (typeof ACCEPTED_IMAGE_TYPES)[number]);

  if (!hasSupportedType && !(file.type === "" && hasSupportedExtension)) {
    return "Yalnız PNG, JPG, WEBP və SVG faylları qəbul edilir.";
  }

  if (file.size === 0) return "Boş fayl yükləmək mümkün deyil.";
  if (file.size > MAX_FILE_SIZE) return "Faylın ölçüsü 20 MB-dan böyük ola bilməz.";

  return null;
}

export function validateDimensions(width: number, height: number): string | null {
  if (!Number.isInteger(width) || !Number.isInteger(height) || width < 1 || height < 1) {
    return "En və hündürlük müsbət tam ədəd olmalıdır.";
  }

  if (width > MAX_IMAGE_DIMENSION || height > MAX_IMAGE_DIMENSION) {
    return `En və hündürlük maksimum ${MAX_IMAGE_DIMENSION}px ola bilər.`;
  }

  if (width * height > MAX_IMAGE_PIXELS) {
    return "Şəklin ümumi piksel sayı 40 meqapikseldən çox ola bilməz.";
  }

  return null;
}
