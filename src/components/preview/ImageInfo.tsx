interface Props {
    file: File;
}

export default function ImageInfo({ file }: Props) {
    const size = (file.size / 1024 / 1024).toFixed(2);

    return (
        <div className="mt-6 rounded-2xl border border-zinc-800 bg-[#151515] p-5">

            <div className="flex justify-between">
                <span className="text-zinc-400">
                    Fayl adı
                </span>

                <span>
                    {file.name}
                </span>
            </div>

            <div className="mt-4 flex justify-between">
                <span className="text-zinc-400">
                    Ölçü
                </span>

                <span>
                    {size} MB
                </span>
            </div>

            <div className="mt-4 flex justify-between">
                <span className="text-zinc-400">
                    Format
                </span>

                <span>
                    {file.type.split("/")[1].toUpperCase()}
                </span>
            </div>

        </div>
    );
}