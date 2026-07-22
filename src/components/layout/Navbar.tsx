export default function Navbar() {
    return (
        <header className="border-b border-zinc-800 transition-all duration-300 hover:border-zinc-700">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <h2 className="text-2xl font-bold transition-all duration-300 hover:scale-105">
                    Image<span className="text-yellow-400 transition-colors duration-300 hover:text-yellow-300">Converter</span>
                </h2>

                <span className="text-lg text-zinc-300 transition-all duration-300 hover:text-yellow-400 hover:scale-105">
                    Firudin Maniyev
                </span>
            </div>
        </header>
    );
}