import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Package, Info, Phone, Settings, Send } from "lucide-react";
import { useState, useEffect } from "react";
import { PrimaryButton } from "./Button";

const NAV_LINKS = [
  { label: "About", href: "#about", icon: Info },
  { label: "Services", href: "#services", icon: Settings },
  { label: "Process", href: "#process", icon: Package },
  { label: "Contact", href: "https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services", icon: Phone },
];

const customEase = [0.4, 0.0, 0.2, 1];

const menuVariants = {
  closed: { x: "100%", opacity: 0 },
  open: {
    x: 0,
    opacity: 1,
    transition: { type: "spring", stiffness: 180, damping: 22, mass: 0.8 }
  },
  exit: {
    x: "100%",
    opacity: 0,
    transition: { duration: 0.35, ease: customEase }
  }
};

const backdropVariants = {
  closed: { opacity: 0 },
  open: { opacity: 1, transition: { duration: 0.3 } },
  exit: { opacity: 0, transition: { duration: 0.2 } }
};

const linkVariants = {
  closed: { opacity: 0, x: 40 },
  open: (i) => ({
    opacity: 1,
    x: 0,
    transition: { delay: 0.25 + i * 0.12, duration: 0.5, ease: [0.25, 0.46, 0.45, 0.94] }
  })
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      // 👉 background blur wala logic (same)
      setIsScrolled(currentScrollY > 50);

      // 👉 hide/show navbar logic
      if (currentScrollY > lastScrollY && currentScrollY > 100) {
        // scrolling DOWN
        setIsVisible(false);
      } else {
        // scrolling UP
        setIsVisible(true);
      }

      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll);

    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("http")) {
      setIsOpen(false);
      return;
    }
    if (href.startsWith("#")) {
      e.preventDefault();
      const element = document.querySelector(href);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
    setIsOpen(false);
  };

  return (
    <>
      <motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -100 }}
        transition={{ duration: 0.25, ease: "easeInOut" }}
        className={`fixed left-0 top-0 right-0 z-50 transition-all duration-300 py-2 ${isScrolled
          ? "bg-white"
          : "bg-transparent"
          }`}
      >
        <nav className="mx-auto flex h-16 max-w-7xl items-center justify-between px-4 lg:px-8">
          <a href="#" className="flex items-center -ml-2 pl-4 lg:pl-2">
            <img src="/logo.webp" alt="Praneel Packaging" className="h-11 w-auto" />
          </a>

          <div className="hidden lg:flex items-center gap-8">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group relative text-sm font-medium uppercase tracking-wider text-[#1E56A0] transition-colors hover:text-[#0F2A4A]"
              >
                {link.label}
                <span className="absolute -bottom-1 left-0 h-0.5 w-0 bg-[#1E56A0] transition-all duration-300 group-hover:w-full" />
              </a>
            ))}
            <PrimaryButton
              href="https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services"
              icon={Send}
              className="text-sm px-5"
            >
              Get Quote
            </PrimaryButton>
          </div>

          <motion.button
            whileTap={{ scale: 0.85 }}
            onClick={() => setIsOpen(true)}
            className="relative flex items-center justify-center lg:hidden text-[#1E56A0]"
          >
            <Menu className="h-8 w-8" />
          </motion.button>
        </nav>
      </motion.header>

      <AnimatePresence>
        {isOpen && (
          <>
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={backdropVariants}
              onClick={() => setIsOpen(false)}
              className="fixed inset-0 z-[60] bg-black/20 backdrop-blur-sm lg:hidden"
            />
            <motion.div
              initial="closed"
              animate="open"
              exit="closed"
              variants={menuVariants}
              className="fixed left-0 right-0 top-0 bottom-0 z-[70] w-full bg-[#F5F5F5] shadow-2xl lg:hidden flex flex-col"
            >
              <div className="flex h-20 items-center justify-between px-6">
                <span className="text-sm font-bold text-[#1E56A0] tracking-widest">MENU</span>
                <motion.button
                  whileTap={{ scale: 0.85, rotate: 90 }}
                  onClick={() => setIsOpen(false)}
                  className="text-[#1E56A0]"
                >
                  <X className="h-8 w-8" />
                </motion.button>
              </div>

              <div className="flex flex-1 flex-col items-center justify-center gap-10 py-8">
                {NAV_LINKS.map((link, i) => (
                  <motion.a
                    key={link.label}
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    custom={i}
                    variants={linkVariants}
                    className="text-4xl heading-font font-light text-[#1E56A0] transition-colors hover:text-[#0F2A4A]"
                  >
                    {link.label}
                  </motion.a>
                ))}
              </div>

              <div className="px-6 pb-8">
                <motion.div custom={NAV_LINKS.length + 1} variants={linkVariants}>
                  <PrimaryButton
                    href="https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services"
                    icon={Send}
                    className="w-full justify-center text-lg py-4"
                  >
                    Get Quote
                  </PrimaryButton>
                </motion.div>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;