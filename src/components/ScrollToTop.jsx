import { motion, AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";

function ScrollToTop() {
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const toggleVisibility = () => {
            if (window.pageYOffset > 500) {
                setIsVisible(true);
            } else {
                setIsVisible(false);
            }
        };

        window.addEventListener("scroll", toggleVisibility);
        return () => window.removeEventListener("scroll", toggleVisibility);
    }, []);

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
    };

    return (
        <AnimatePresence>
            {isVisible && (
                <motion.button
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 20 }}
                    whileTap={{ scale: 0.95 }}
                    onClick={scrollToTop}
                    className="fixed bottom-8 right-8 z-[60] flex h-12 w-12 items-center justify-center rounded-full border border-zinc-800 bg-zinc-950 text-white shadow-2xl transition-all duration-300 cursor-pointer group"
                    aria-label="Scroll to top"
                >
                    <motion.svg
                        width="20"
                        height="20"
                        viewBox="0 0 24 24"
                        fill="none"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        className="transition-transform duration-300 group-hover:-translate-y-1"
                    >
                        <path d="M12 19V5M5 12l7-7 7 7" />
                    </motion.svg>
                </motion.button>
            )}
        </AnimatePresence>
    );
}

export default ScrollToTop;
