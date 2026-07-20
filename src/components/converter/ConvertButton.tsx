interface Props {
    disabled: boolean;
    onClick: () => void;
}

export default function ConvertButton({
    disabled,
    onClick,
}: Props) {
    return (
        <button
            onClick={onClick}
            disabled={disabled}
            className="mt-8 w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition hover:bg-yellow-300 disabled:opacity-40"
        >
            Şəkli Çevir
        </button>
    );
}