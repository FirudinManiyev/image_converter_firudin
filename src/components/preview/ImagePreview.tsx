interface Props {
    image: string;
}

export default function ImagePreview({ image }: Props) {
    return (
        <div className="mt-10 flex min-h-[400px] items-center justify-center overflow-hidden rounded-3xl border border-zinc-800 bg-[#151515] p-5 transition-all duration-300 hover:border-zinc-700 hover:shadow-xl hover:shadow-yellow-400/10">
            <img
                src={image}
                alt="preview"
                className="max-h-[500px] rounded-xl transition-all duration-300 hover:scale-105"
            />
        </div>
    );
}