interface Props {
    image: string;
}

export default function ImagePreview({ image }: Props) {
    return (
        <div className="mt-10 overflow-hidden rounded-3xl border border-zinc-800 bg-[#151515] p-5">
            <img
                src={image}
                alt="preview"
                className="mx-auto max-h-[500px] rounded-xl"
            />
        </div>
    );
}