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
            className="mt-8 w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition-all duration-300 hover:bg-yellow-300 hover:scale-105 hover:shadow-lg hover:shadow-yellow-400/30 disabled:opacity-40 disabled:hover:scale-100 disabled:hover:shadow-none"
        >
            Şəkli Çevir
        </button>
    );
}