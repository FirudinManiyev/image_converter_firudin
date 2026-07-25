import { AnimatePresence, motion } from "framer-motion";
import { useEffect } from "react";
import { ImageIcon, Sparkles, WandSparkles } from "lucide-react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

const features = [
    { icon: ImageIcon, label: "Sürətli çevirmə" },
    { icon: WandSparkles, label: "Keyfiyyət nəzarəti" },
    { icon: Sparkles, label: "Təmiz nəticələr" },
];

export default function WelcomeScreen({ isOpen, onClose }: Props) {
    useEffect(() => {
        if (isOpen) {
            const timer = setTimeout(() => {
                onClose();
            }, 3500);
            return () => clearTimeout(timer);
        }
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-50 grid place-items-center overflow-hidden bg-[#030817]/95 px-5 backdrop-blur-xl"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    role="dialog"
                    aria-modal="true"
                    aria-labelledby="welcome-title"
                >
                    <div className="welcome-orb welcome-orb-left" />
                    <div className="welcome-orb welcome-orb-right" />

                    <motion.section
                        className="relative w-full max-w-2xl overflow-hidden rounded-[2rem] border border-white/10 bg-slate-950/70 p-8 text-center shadow-2xl shadow-blue-950/50 sm:p-12"
                        initial={{ opacity: 0, y: 28, scale: 0.96 }}
                        animate={{ opacity: 1, y: 0, scale: 1 }}
                        exit={{ opacity: 0, y: 16, scale: 0.98 }}
                        transition={{ type: "spring", stiffness: 180, damping: 20 }}
                    >
                        <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.14),transparent_42%)]" />

                        <motion.div
                            className="relative mx-auto grid size-20 place-items-center rounded-3xl border border-yellow-300/30 bg-yellow-400/15 text-yellow-300"
                            animate={{ y: [0, -7, 0], rotate: [0, 3, 0, -3, 0] }}
                            transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                        >
                            <ImageIcon size={38} />
                        </motion.div>

                        <motion.p
                            className="relative mt-8 text-sm font-semibold tracking-[0.22em] text-yellow-300 uppercase"
                            initial={{ opacity: 0, y: 8 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.18 }}
                        >
                            Image Converter-a xoş GƏLMİSİNİZ
                        </motion.p>

                        <motion.h1
                            id="welcome-title"
                            className="relative mt-4 text-4xl font-black tracking-tight text-white sm:text-6xl"
                            initial={{ opacity: 0, y: 12 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.28 }}
                        >
                            Şəkillərinizə yeni
                            <span className="block text-yellow-400"> nəfəs verin.</span>
                        </motion.h1>

                        <motion.p
                            className="relative mx-auto mt-5 max-w-lg text-base leading-7 text-slate-300"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.4 }}
                        >
                            Formatı seçin, ölçünü tənzimləyin və nəticəni saniyələr içində endirin.
                        </motion.p>

                        <motion.div
                            className="relative mt-9 grid gap-3 sm:grid-cols-3"
                            initial="hidden"
                            animate="visible"
                            variants={{
                                hidden: {},
                                visible: { transition: { staggerChildren: 0.1, delayChildren: 0.5 } },
                            }}
                        >
                            {features.map(({ icon: Icon, label }) => (
                                <motion.div
                                    key={label}
                                    className="flex items-center justify-center gap-2 rounded-2xl border border-white/8 bg-white/5 px-4 py-3 text-sm text-slate-200"
                                    variants={{ hidden: { opacity: 0, y: 10 }, visible: { opacity: 1, y: 0 } }}
                                >
                                    <Icon size={17} className="text-yellow-400" />
                                    {label}
                                </motion.div>
                            ))}
                        </motion.div>

                        <motion.div
                            className="relative mt-9 flex items-center justify-center gap-2 text-sm text-zinc-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: 0.75 }}
                        >
                            <div className="flex gap-1">
                                <div className="h-2 w-2 animate-bounce rounded-full bg-yellow-400" style={{ animationDelay: "0ms" }} />
                                <div className="h-2 w-2 animate-bounce rounded-full bg-yellow-400" style={{ animationDelay: "150ms" }} />
                                <div className="h-2 w-2 animate-bounce rounded-full bg-yellow-400" style={{ animationDelay: "300ms" }} />
                            </div>
                            <span>Yüklənir...</span>
                        </motion.div>
                    </motion.section>
                </motion.div>
            )}
        </AnimatePresence>
    );
}
