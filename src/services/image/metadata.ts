export interface ImageDimensions {
  width: number;
  height: number;
}

export function readImageDimensions(source: string): Promise<ImageDimensions> {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve({
      width: image.naturalWidth,
      height: image.naturalHeight,
    });
    image.onerror = () => reject(new Error("Şəkil oxuna bilmədi və ya zədələnib."));
    image.src = source;
  });
}
