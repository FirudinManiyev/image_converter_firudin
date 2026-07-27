import { AnimatePresence, motion } from "framer-motion";
import { ImageIcon } from "lucide-react";
import { useEffect } from "react";

interface Props {
    isOpen: boolean;
    onClose: () => void;
}

export default function WelcomeScreen({ isOpen, onClose }: Props) {
    useEffect(() => {
        if (!isOpen) return;

        const timer = setTimeout(onClose, 2800);

        return () => clearTimeout(timer);
    }, [isOpen, onClose]);

    return (
        <AnimatePresence>
            {isOpen && (
                <motion.div
                    className="fixed inset-0 z-[9999] overflow-hidden bg-slate-950"
                    initial={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    transition={{ duration: 0.5 }}
                >
                    {/* Background Glow */}
                    <motion.div
                        className="absolute left-1/2 top-1/2 h-[500px] w-[500px] -translate-x-1/2 -translate-y-1/2 rounded-full bg-yellow-400/10 blur-3xl"
                        animate={{
                            scale: [1, 1.15, 1],
                            opacity: [0.35, 0.6, 0.35],
                        }}
                        transition={{
                            duration: 4,
                            repeat: Infinity,
                            ease: "easeInOut",
                        }}
                    />

                    <div className="relative flex h-full flex-col items-center justify-center px-6">
                        {/* Logo */}
                        <motion.div
                            className="flex h-24 w-24 items-center justify-center rounded-3xl border border-yellow-400/20 bg-yellow-400/10 backdrop-blur-md"
                            animate={{
                                y: [0, -8, 0],
                                scale: [1, 1.04, 1],
                            }}
                            transition={{
                                duration: 2.5,
                                repeat: Infinity,
                                ease: "easeInOut",
                            }}
                        >
                            <ImageIcon
                                size={46}
                                className="text-yellow-400"
                            />
                        </motion.div>

                        {/* Title */}
                        <motion.h1
                            className="mt-8 text-center text-3xl font-bold text-white sm:text-5xl"
                            initial={{ opacity: 0, y: 15 }}
                            animate={{ opacity: 1, y: 0 }}
                        >
                            Image Converter
                        </motion.h1>

                        <motion.p
                            className="mt-3 max-w-md text-center text-slate-400"
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            transition={{ delay: .2 }}
                        >
                            Şəkillərinizi sürətli və keyfiyyətli şəkildə istədiyiniz formata çevirin.
                        </motion.p>

                        {/* Loading Bar */}
                        <div className="mt-12 w-full max-w-xs overflow-hidden rounded-full bg-white/10">
                            <motion.div
                                className="h-1.5 rounded-full bg-yellow-400"
                                initial={{ width: 0 }}
                                animate={{ width: "100%" }}
                                transition={{
                                    duration: 2.4,
                                    ease: "easeInOut",
                                }}
                            />
                        </div>

                        {/* Loading Text */}
                        <motion.p
                            className="mt-5 text-sm text-slate-400"
                            animate={{ opacity: [0.4, 1, 0.4] }}
                            transition={{
                                duration: 1.2,
                                repeat: Infinity,
                            }}
                        >
                            Yüklənir...
                        </motion.p>

                        {/* Bottom Text */}
                        <motion.span
                            className="absolute bottom-8 text-xs tracking-[0.3em] uppercase text-slate-600"
                            animate={{ opacity: [0.4, 0.8, 0.4] }}
                            transition={{
                                duration: 2,
                                repeat: Infinity,
                            }}
                        >
                            BY FİRUDİN MANİYEV
                        </motion.span>
                    </div>
                </motion.div>
            )}
        </AnimatePresence>
    );
}