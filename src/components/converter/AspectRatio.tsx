interface Props {
    checked: boolean;
    onChange: (value: boolean) => void;
}

export default function AspectRatio({
    checked,
    onChange,
}: Props) {
    return (
        <label className="mt-6 flex cursor-pointer items-center gap-3 rounded-xl border border-zinc-800 bg-[#151515] p-4">
            <input
                type="checkbox"
                checked={checked}
                onChange={(e) => onChange(e.target.checked)}
                className="h-5 w-5 accent-yellow-400"
            />

            <span className="font-medium">
                Nisbəti qoru (Aspect Ratio)
            </span>
        </label>
    );
}