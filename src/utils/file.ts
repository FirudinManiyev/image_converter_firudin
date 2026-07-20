export function getFileName(name: string, format: string) {
    const baseName = name.substring(0, name.lastIndexOf(".")) || name;

    return `${baseName}.${format}`;
}