interface Props { disabled: boolean; onClick: () => void; }

export default function ConvertButton({ disabled, onClick }: Props) {
    return <button type="button" onClick={onClick} disabled={disabled} className="mt-8 w-full rounded-xl bg-yellow-400 py-4 font-bold text-black transition-all duration-300 hover:-translate-y-1 hover:bg-yellow-300 hover:shadow-lg hover:shadow-yellow-400/30 active:translate-y-0 disabled:opacity-40 disabled:hover:translate-y-0 disabled:hover:shadow-none">Şəkli çevir</button>;
}
