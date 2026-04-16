import { AnimatePresence, motion } from "framer-motion";
import { Menu, X } from "lucide-react";
import { useState } from "react";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Services", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services" },
];

const shellSpring = {
  type: "spring",
  stiffness: 240,
  damping: 26,
  mass: 0.95,
};

const containerVariants = {
  closed: {
    width: 224,
    height: 62,
    borderRadius: 999,
    transition: shellSpring,
  },
  open: {
    width: "min(92vw, 560px)",
    height: 122,
    borderRadius: 26,
    transition: shellSpring,
  },
};

const linksContainerVariants = {
  closed: {
    opacity: 0,
    transition: {
      when: "afterChildren",
      staggerChildren: 0.03,
      staggerDirection: -1,
    },
  },
  open: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      delayChildren: 0.06,
      staggerChildren: 0.05,
    },
  },
};

const linkItemVariants = {
  closed: { opacity: 0, y: 12, filter: "blur(3px)", transition: { duration: 0.12 } },
  open: {
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { ...shellSpring, mass: 0.65 },
  },
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <motion.header 
      initial={{ y: -100, x: "-50%", opacity: 0 }}
      animate={{ y: 0, x: "-50%", opacity: 1 }}
      transition={{ 
        type: "spring", 
        stiffness: 100, 
        damping: 20,
        delay: 0.2
      }}
      className="fixed left-1/2 top-5 z-50"
    >
      <motion.nav
        initial={false}
        animate={isOpen ? "open" : "closed"}
        variants={containerVariants}
        className="group relative overflow-hidden border border-zinc-800 bg-zinc-950/70 p-2 text-zinc-100 shadow-[0_20px_80px_-15px_rgba(0,0,0,0.9)] backdrop-blur-md"
      >
        {/* Animated Border Glow */}
        <motion.div 
          animate={{ 
            opacity: [0.3, 0.6, 0.3],
          }}
          transition={{ 
            duration: 4, 
            repeat: Infinity, 
            ease: "easeInOut" 
          }}
          className="absolute inset-0 rounded-[inherit] border border-amber-500/10 pointer-events-none"
        />

        <div className="relative z-10 flex items-center justify-between gap-2">
          <motion.div className="px-3 flex items-center gap-2">
            {/* <div className="h-1.5 w-1.5 rounded-full bg-amber-500 animate-pulse" /> */}
            <span className="heading-font text-base font-bold tracking-[0.18em] text-white">
              Praneel
            </span>
          </motion.div>

          <motion.button
            type="button"
            aria-label={isOpen ? "Close navigation menu" : "Open navigation menu"}
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.94 }}
            className="relative grid h-11 w-11 place-items-center rounded-full bg-zinc-900 border border-zinc-800 transition-all hover:bg-zinc-800 cursor-pointer"
          >
            <AnimatePresence mode="wait" initial={false}>
              {isOpen ? (
                <motion.span
                  key="close"
                  initial={{ rotate: -60, opacity: 0, scale: 0.75 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: 60, opacity: 0, scale: 0.75 }}
                  transition={shellSpring}
                  className="absolute"
                >
                  <X size={18} strokeWidth={2.2} className="text-zinc-100" />
                </motion.span>
              ) : (
                <motion.span
                  key="menu"
                  initial={{ rotate: 60, opacity: 0, scale: 0.75 }}
                  animate={{ rotate: 0, opacity: 1, scale: 1 }}
                  exit={{ rotate: -60, opacity: 0, scale: 0.75 }}
                  transition={shellSpring}
                  className="absolute"
                >
                  <Menu size={18} strokeWidth={2.2} className="text-zinc-100" />
                </motion.span>
              )}
            </AnimatePresence>
          </motion.button>
        </div>

        <AnimatePresence initial={false}>
          {isOpen ? (
            <motion.ul
              key="menu"
              variants={linksContainerVariants}
              initial="closed"
              animate="open"
              exit="closed"
              className="mt-3 flex flex-wrap items-center gap-x-6 gap-y-2 px-4 pb-3 sm:flex-nowrap sm:gap-x-8 relative z-10"
            >
              {NAV_LINKS.map((item) => (
                <motion.li key={item.label} variants={linkItemVariants}>
                  <motion.a
                    href={item.href}
                    target={item.href.startsWith('http') ? "_blank" : undefined}
                    rel={item.href.startsWith('http') ? "noopener noreferrer" : undefined}
                    whileTap={{ scale: 0.98 }}
                    className="block py-2 text-sm font-semibold uppercase tracking-[0.13em] text-zinc-500 transition-colors hover:text-white"
                  >
                    {item.label}
                  </motion.a>
                </motion.li>
              ))}
            </motion.ul>
          ) : null}
        </AnimatePresence>
      </motion.nav>
    </motion.header>
  );
}

export default Navbar;