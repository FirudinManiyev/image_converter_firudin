import { useEffect, useRef, useState } from "react";
import type { UploadedImage } from "../types/image";

export function useImage() {
    const [image, setImage] = useState<UploadedImage | null>(null);
    const imageRef = useRef<UploadedImage | null>(null);

    const selectImage = (file: File) => {
        const preview = URL.createObjectURL(file);

        if (imageRef.current) {
            URL.revokeObjectURL(imageRef.current.preview);
        }

        const nextImage = { file, preview };
        imageRef.current = nextImage;
        setImage(nextImage);
    };

    const removeImage = () => {
        if (imageRef.current) {
            URL.revokeObjectURL(imageRef.current.preview);
        }

        imageRef.current = null;
        setImage(null);
    };

    useEffect(() => () => {
        if (imageRef.current) {
            URL.revokeObjectURL(imageRef.current.preview);
        }
    }, []);

    return { image, selectImage, removeImage };
}
