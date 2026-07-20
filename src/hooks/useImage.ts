import { useState } from "react";
import type { UploadedImage } from "../types/image";

export function useImage() {
    const [image, setImage] = useState<UploadedImage | null>(null);

    const selectImage = (file: File) => {
        const preview = URL.createObjectURL(file);

        setImage({
            file,
            preview,
        });
    };

    const removeImage = () => {
        if (image) {
            URL.revokeObjectURL(image.preview);
        }

        setImage(null);
    };

    return {
        image,
        selectImage,
        removeImage,
    };
}