interface Props {
    width: string;
    height: string;
    onWidthChange: (value: string) => void;
    onHeightChange: (value: string) => void;
}

export default function ResizeInputs({
    width,
    height,
    onWidthChange,
    onHeightChange,
}: Props) {
    return (
        <div className="mt-8 rounded-2xl border border-zinc-800 bg-[#151515] p-6">
            <h3 className="mb-5 text-xl font-semibold">
                Ölçüləri dəyiş
            </h3>

            <div className="grid gap-4 md:grid-cols-2">

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        En (px)
                    </label>

                    <input
                        type="number"
                        value={width}
                        onChange={(e) =>
                            onWidthChange(e.target.value)
                        }
                        placeholder="Məs: 1920"
                        className="w-full rounded-xl border border-zinc-700 bg-[#101010] px-4 py-3 outline-none focus:border-yellow-400"
                    />
                </div>

                <div>
                    <label className="mb-2 block text-sm text-zinc-400">
                        Hündürlük (px)
                    </label>

                    <input
                        type="number"
                        value={height}
                        onChange={(e) =>
                            onHeightChange(e.target.value)
                        }
                        placeholder="Məs: 1080"
                        className="w-full rounded-xl border border-zinc-700 bg-[#101010] px-4 py-3 outline-none focus:border-yellow-400"
                    />
                </div>

            </div>
        </div>
    );
}