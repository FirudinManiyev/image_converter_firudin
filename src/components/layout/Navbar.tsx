export default function Navbar() {
    return (
        <header className="relative z-10 border-b border-white/10 bg-slate-950/10 backdrop-blur-sm transition-colors duration-300 hover:border-white/20">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">
                <h2 className="text-2xl font-bold tracking-tight transition-transform duration-300 hover:scale-105">Image<span className="text-yellow-400">Converter</span></h2>
                <span className="hidden text-sm text-zinc-300 transition-colors duration-300 hover:text-yellow-400 sm:block">Firudin Maniyev</span>
            </div>
        </header>
    );
}
