import { Monitor, Smartphone, Tablet } from "lucide-react";

interface Props { width: string; height: string; originalWidth?: number; originalHeight?: number; onWidthChange: (value: string) => void; onHeightChange: (value: string) => void; }
const presetSizes = [{ name: "Orijinal", width: 0, height: 0, icon: Monitor }, { name: "1920×1080", width: 1920, height: 1080, icon: Monitor }, { name: "1280×720", width: 1280, height: 720, icon: Monitor }, { name: "800×600", width: 800, height: 600, icon: Tablet }, { name: "640×480", width: 640, height: 480, icon: Tablet }, { name: "320×240", width: 320, height: 240, icon: Smartphone }];

export default function ResizeInputs({ width, height, originalWidth, originalHeight, onWidthChange, onHeightChange }: Props) {
    const selectPreset = (presetWidth: number, presetHeight: number) => {
        onWidthChange((presetWidth || originalWidth)?.toString() ?? "");
        onHeightChange((presetHeight || originalHeight)?.toString() ?? "");
    };
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#151515] p-6 transition-all duration-300 hover:border-zinc-700 hover:shadow-lg hover:shadow-yellow-400/5">
            <h3 className="mb-5 text-xl font-semibold">Ölçüləri dəyiş</h3>
            <div className="mb-6"><label className="mb-3 block text-sm text-zinc-400">Hazır ölçü seçimləri</label><div className="grid grid-cols-2 gap-3 md:grid-cols-3 lg:grid-cols-6">{presetSizes.map((preset) => {
                const Icon = preset.icon;
                const isSelected = (preset.width === 0 && width === originalWidth?.toString() && height === originalHeight?.toString()) || (preset.width === Number(width) && preset.height === Number(height));
                return <button key={preset.name} type="button" onClick={() => selectPreset(preset.width, preset.height)} className={`flex flex-col items-center gap-2 rounded-xl border p-3 transition-all duration-300 ${isSelected ? "scale-[1.03] border-yellow-400 bg-yellow-400/10 text-yellow-400 shadow-lg shadow-yellow-400/20" : "border-zinc-700 bg-[#101010] text-zinc-400 hover:-translate-y-0.5 hover:border-yellow-400/50 hover:bg-[#181818] hover:text-zinc-300"}`}><Icon size={20} /><span className="text-xs font-medium">{preset.name}</span></button>;
            })}</div></div>
            <div className="grid gap-4 md:grid-cols-2">
                <label className="block text-sm text-zinc-400">En (px)<input type="number" min="1" value={width} onChange={(event) => onWidthChange(event.target.value)} placeholder="Məs: 1920" className="mt-2 w-full rounded-xl border border-zinc-700 bg-[#101010] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-400/10" /></label>
                <label className="block text-sm text-zinc-400">Hündürlük (px)<input type="number" min="1" value={height} onChange={(event) => onHeightChange(event.target.value)} placeholder="Məs: 1080" className="mt-2 w-full rounded-xl border border-zinc-700 bg-[#101010] px-4 py-3 text-white outline-none transition-all duration-300 focus:border-yellow-400 focus:shadow-lg focus:shadow-yellow-400/10" /></label>
            </div>
        </div>
    );
}
