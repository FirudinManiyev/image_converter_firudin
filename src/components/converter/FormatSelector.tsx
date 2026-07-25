import { useState } from "react";
import { ChevronDown, ArrowRight } from "lucide-react";
import type { ImageFormat } from "../../types/converter";

interface Props { 
    value: ImageFormat; 
    onChange: (value: ImageFormat) => void;
    originalFormat?: string;
}

const formats: ImageFormat[] = ["png", "jpg", "jpeg", "webp"];

export default function FormatSelector({ value, onChange, originalFormat }: Props) {
    const [isOpen, setIsOpen] = useState(false);

    return (
        <div className="mt-8">
            <h3 className="mb-4 text-lg font-semibold">Çevriləcək format</h3>
            
            <div className="flex items-center gap-4">
                {/* Original Format */}
                <div className="flex-1 rounded-xl border border-zinc-700 bg-[#151515] p-4">
                    <p className="text-sm text-zinc-500">Orijinal</p>
                    <p className="mt-1 text-xl font-bold text-white">
                        {originalFormat?.toUpperCase() || "PNG"}
                    </p>
                </div>

                {/* Arrow */}
                <ArrowRight className="text-yellow-400" size={24} />

                {/* Dropdown */}
                <div className="flex-1 relative">
                    <button
                        type="button"
                        onClick={() => setIsOpen(!isOpen)}
                        className="w-full rounded-xl border border-zinc-700 bg-[#151515] p-4 text-left transition-all duration-300 hover:border-yellow-400 hover:bg-[#1a1a1a]"
                    >
                        <p className="text-sm text-zinc-500">Yenisi</p>
                        <div className="mt-1 flex items-center justify-between">
                            <p className="text-xl font-bold text-yellow-400">
                                {value.toUpperCase()}
                            </p>
                            <ChevronDown 
                                className={`transition-transform duration-300 ${isOpen ? 'rotate-180' : ''}`}
                                size={20}
                            />
                        </div>
                    </button>

                    {/* Dropdown Menu */}
                    {isOpen && (
                        <div className="absolute z-10 mt-2 w-full rounded-xl border border-zinc-700 bg-[#151515] shadow-xl shadow-black/50">
                            {formats.map((format) => (
                                <button
                                    key={format}
                                    type="button"
                                    onClick={() => {
                                        onChange(format);
                                        setIsOpen(false);
                                    }}
                                    className={`w-full px-3 py-2 text-left text-sm transition-all duration-200 ${
                                        value === format
                                            ? "bg-yellow-400/10 text-yellow-400"
                                            : "text-white hover:bg-[#1a1a1a] hover:text-yellow-400"
                                    }`}
                                >
                                    {format.toUpperCase()}
                                </button>
                            ))}
                        </div>
                    )}
                </div>
            </div>
        </div>
    );
}
