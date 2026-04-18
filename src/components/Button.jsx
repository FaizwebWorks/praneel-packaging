import { motion } from "framer-motion";

export function PrimaryButton({ children, icon: Icon, className = "", href, onClick, ...props }) {
    const buttonContent = (
        <>
            <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-white group-hover:text-black opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-1/2 group-hover:left-1/2 group-hover:h-[calc(100%+24px)] group-hover:w-[calc(100%+24px)] group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:opacity-100 group-hover:scale-[2] group-hover:rounded-none" />
            <span className="relative z-10 flex items-center gap-2 text-white transition-colors duration-500 group-hover:text-[#074089]">
                {children}
                {Icon && <Icon className="h-4 w-4 transition-transform duration-500 group-hover:translate-x-1" />}
            </span>
        </>
    );

    const baseClassName = `group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full bg-[#1E56A0] px-6 py-3 text-sm font-semibold text-white hover:text-white border hover:text-black border-[#1E56A0]/50 hover:border-[#1E56A0]/70 transition-all duration-300 ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={baseClassName}
                {...props}
            >
                {buttonContent}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClick}
            className={baseClassName}
            {...props}
        >
            {buttonContent}
        </motion.button>
    );
}

export function SecondaryButton({ children, icon: Icon, className = "", href, onClick, ...props }) {
    const buttonContent = (
        <>
            <span className="absolute top-0 left-1/2 h-3 w-3 -translate-x-1/2 -translate-y-full scale-0 rounded-full bg-[#1E56A0] text-white opacity-0 transition-all duration-700 ease-[cubic-bezier(0.34,1.56,0.64,1)] group-hover:top-1/2 group-hover:left-1/2 group-hover:h-[calc(100%+24px)] group-hover:w-[calc(100%+24px)] group-hover:-translate-y-1/2 group-hover:scale-100 group-hover:opacity-100 group-hover:scale-[2] group-hover:rounded-none" />
            <span className="relative z-10 flex items-center gap-2 transition-colors duration-500 text-[#074089] group-hover:text-white">
                {Icon && <Icon className="h-4 w-4 transition-transform duration-500 group-hover:scale-110" />}
                {children}
            </span>
        </>
    );

    const baseClassName = `group relative inline-flex cursor-pointer items-center justify-center gap-2 overflow-hidden rounded-full border border-[#1E56A0]/70 bg-transparent px-6 py-3 text-sm font-semibold text-zinc-100 hover:text-white transition-all duration-300 ${className}`;

    if (href) {
        return (
            <motion.a
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
                className={baseClassName}
                {...props}
            >
                {buttonContent}
            </motion.a>
        );
    }

    return (
        <motion.button
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            type="button"
            onClick={onClick}
            className={baseClassName}
            {...props}
        >
            {buttonContent}
        </motion.button>
    );
}
