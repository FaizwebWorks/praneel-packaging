import { ArrowRight } from "lucide-react";
import { motion } from "framer-motion";

export function PrimaryButton({ children, icon: Icon = ArrowRight, className = "" }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className={`group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-white px-6 py-3 text-sm font-semibold text-zinc-900 hover:text-white border border-transparent hover:border-zinc-500 transition-all duration-300 ${className}`}
        >
            <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-zinc-900 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-1/2 group-hover:left-1/2 group-hover:h-[calc(100%+24px)] group-hover:w-[calc(100%+24px)] group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:opacity-100 group-hover:scale-[2] group-hover:rounded-none" />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-white">
                {children}
                {Icon && <Icon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />}
            </span>
        </motion.button>
    );
}

export function SecondaryButton({ children, icon: Icon, className = "" }) {
    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            className={`group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-zinc-700 bg-zinc-800/50 px-6 py-3 text-sm font-semibold text-zinc-100 hover:text-zinc-900 transition-all duration-300 ${className}`}
        >
            <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-zinc-100 opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-1/2 group-hover:left-1/2 group-hover:h-[calc(100%+24px)] group-hover:w-[calc(100%+24px)] group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:opacity-100 group-hover:scale-[2] group-hover:rounded-none" />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 group-hover:text-zinc-900">
                {Icon && <Icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />}
                {children}
            </span>
        </motion.button>
    );
}