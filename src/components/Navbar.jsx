import { AnimatePresence, motion as Motion } from "framer-motion";
import { ArrowRight, Menu, X } from "lucide-react";
import { useEffect, useState } from "react";
import YuccaButton from "./YuccaButton";

const NAV_LINKS = [
  { label: "About", href: "#about" },
  { label: "Boxes", href: "#services" },
  { label: "Process", href: "#process" },
  { label: "Contact", href: "https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services" },
];

const linkVariants = {
  closed: { opacity: 0, y: 24 },
  open: (i) => ({
    opacity: 1,
    y: 0,
    transition: { delay: 0.18 + i * 0.08, duration: 0.55, ease: [0.22, 1, 0.36, 1] },
  }),
};

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isVisible, setIsVisible] = useState(true);
  const [lastScrollY, setLastScrollY] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      setIsScrolled(currentScrollY > 24);
      setIsVisible(!(currentScrollY > lastScrollY && currentScrollY > 140));
      setLastScrollY(currentScrollY);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, [lastScrollY]);

  const handleLinkClick = (e, href) => {
    if (href.startsWith("http")) {
      setIsOpen(false);
      return;
    }

    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: "smooth" });
    setIsOpen(false);
  };

  return (
    <>
      <Motion.header
        initial={{ y: 0 }}
        animate={{ y: isVisible ? 0 : -110 }}
        transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
        className={`fixed left-0 right-0 top-0 z-50 border-b transition-all duration-500 ${
          isScrolled ? "border-[#1D1D1B]/14 bg-[#FFFDF5]/90 backdrop-blur-xl" : "border-transparent bg-transparent"
        }`}
      >
        <nav className="mx-auto flex h-20 max-w-[1440px] items-center justify-between px-6 sm:px-8 lg:h-24 lg:px-12 xl:px-14">
          <a href="#" aria-label="Praneel Packaging home" className="flex items-center">
            <img src="/logo.webp" alt="Praneel Packaging" className="h-10 w-auto sm:h-11" />
          </a>

          <div className="hidden items-center gap-11 lg:flex">
            {NAV_LINKS.map((link) => (
              <a
                key={link.label}
                href={link.href}
                onClick={(e) => handleLinkClick(e, link.href)}
                className="group relative text-[0.98rem] font-[300] tracking-[-0.005em] text-[#1D1D1B]/86 transition-colors hover:text-[#1E56A0]"
              >
                {link.label}
                <span className="absolute -bottom-2 left-0 h-px w-full origin-left scale-x-0 bg-[#F07020] transition-transform duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-x-100" />
              </a>
            ))}
          </div>

          <div className="hidden lg:block">
            <YuccaButton
              href="https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20get%20a%20quote%20for%20premium%20packaging"
              external
            >
              Get Quote
            </YuccaButton>
          </div>

          <Motion.button
            whileTap={{ scale: 0.92 }}
            onClick={() => setIsOpen(true)}
            className="relative grid h-10 w-10 place-items-center overflow-hidden rounded-[0.25rem] border border-[#1D1D1B] text-[#1D1D1B] transition-colors duration-500 active:bg-[#1D1D1B] active:text-[#FFFDF5] lg:hidden"
            aria-label="Open menu"
          >
            <Menu className="h-5 w-5" strokeWidth={1.8} />
          </Motion.button>
        </nav>
      </Motion.header>

      <AnimatePresence>
        {isOpen && (
          <Motion.div
            initial={{ clipPath: "inset(0 0 100% 0)" }}
            animate={{ clipPath: "inset(0 0 0% 0)" }}
            exit={{ clipPath: "inset(0 0 100% 0)" }}
            transition={{ duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[80] bg-[#FFFDF5] text-[#1D1D1B] lg:hidden"
          >
            <div className="flex h-full flex-col px-5 py-5">
              <div className="flex items-center justify-between">
                <img src="/logo.webp" alt="Praneel Packaging" className="h-11 w-auto" />
                <Motion.button
                  whileTap={{ scale: 0.92 }}
                  onClick={() => setIsOpen(false)}
                  className="grid h-10 w-10 place-items-center rounded-[0.25rem] border border-[#1D1D1B]/18"
                  aria-label="Close menu"
                >
                  <X className="h-5 w-5" strokeWidth={1.8} />
                </Motion.button>
              </div>

              <div className="flex flex-1 flex-col justify-center gap-3">
                {NAV_LINKS.map((link, i) => (
                  <Motion.a
                    key={link.label}
                    custom={i}
                    variants={linkVariants}
                    initial="closed"
                    animate="open"
                    href={link.href}
                    onClick={(e) => handleLinkClick(e, link.href)}
                    className="group flex items-center justify-between border-b border-[#1D1D1B]/14 py-5 text-[clamp(2.6rem,15vw,5.8rem)] font-[200] leading-none tracking-[-0.04em]"
                  >
                    {link.label}
                    <ArrowRight className="h-7 w-7 text-[#F07020] transition-transform duration-500 group-hover:translate-x-1" strokeWidth={1.25} />
                  </Motion.a>
                ))}
              </div>

              <YuccaButton
                href="https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20get%20a%20quote%20for%20premium%20packaging"
                external
                variant="blue"
                className="mb-2 w-full"
              >
                Get Quote
              </YuccaButton>
            </div>
          </Motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

export default Navbar;
