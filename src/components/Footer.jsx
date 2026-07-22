import { Mail, MapPin, Phone, ArrowRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedText";

const InstagramIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <rect width="20" height="20" x="2" y="2" rx="5" ry="5" /><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z" /><line x1="17.5" x2="17.51" y1="6.5" y2="6.5" />
  </svg>
);

const LinkedinIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z" /><rect width="4" height="12" x="2" y="9" /><circle cx="4" cy="4" r="2" />
  </svg>
);

const XIcon = (props) => (
  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M4 4l11.733 16h4.267l-11.733 -16z" /><path d="M4 20l6.768 -6.768m2.46 -2.46l6.772 -6.772" />
  </svg>
);

const footerLinks = {
  explore: [
    { label: "About Us", href: "/#about" },
    { label: "Our Process", href: "/#process" },
    { label: "Rigid Boxes", href: "/rigid-boxes/magnetic-box" },
    { label: "Contact", href: "https://wa.me/918320826551?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services" }
  ],
  services: [
    { label: "Magnetic Boxes", href: "/rigid-boxes/magnetic-box" },
    { label: "Drawer Boxes", href: "/rigid-boxes/drawer-box" },
    { label: "Collapsible Boxes", href: "/rigid-boxes/collapsible-box" },
    { label: "Shoulder Neck Boxes", href: "/rigid-boxes/shoulder-neck-box" }
  ],
  industries: [
    { label: "Cosmetics Packaging", href: "/industries/cosmetics-packaging" },
    { label: "Jewelry Packaging", href: "/industries/jewelry-packaging" },
    { label: "Gift Packaging", href: "/industries/gift-packaging" },
    { label: "Electronics Packaging", href: "/industries/electronics-packaging" }
  ],
  contact: [
    { icon: Phone, label: "+91 83208 26551", href: "tel:+918320826551", desc: "Phone" },
    { icon: Mail, label: "info.praneelpackaging@gmail.com", href: "mailto:info.praneelpackaging@gmail.com", desc: "Email" },
    { icon: MapPin, label: "Gujarat, India", desc: "Location" }
  ]
};

function Footer() {
  return (
    <motion.footer
      className="relative z-20 w-full overflow-hidden bg-[#FFFDF5] -mt-2"
      initial={{ opacity: 1 }}
      whileInView={{ opacity: 1 }}
      viewport={{ once: true }}
      transition={{ duration: 0.8 }}
    >
      <div className="relative mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-10">
        {/* <FadeIn direction="up" className="mb-14 sm:mb-20">
          <div className="flex flex-col items-start gap-4 sm:flex-row sm:items-center sm:justify-between">
            <div className="flex items-center gap-4">
              <div className="h-8 w-0.5 bg-[#F07020]" />
              <p className="text-xs font-medium uppercase tracking-[0.22em] text-[#1D1D1B]/40">
                Crafted in Gujarat
              </p>
            </div>
            <motion.a
              href="https://wa.me/918320826551?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging"
              target="_blank"
              rel="noopener noreferrer"
              whileHover={{ x: 4 }}
              className="group flex items-center gap-2 text-sm font-medium text-[#104080] transition-colors hover:text-[#F07020]"
            >
              Start your project
              <span className="flex h-6 w-6 items-center justify-center rounded-full bg-[#104080] text-[#FFFDF5] transition-colors group-hover:bg-[#F07020]">
                <ArrowRight className="h-3 w-3" strokeWidth={2} />
              </span>
            </motion.a>
          </div>
        </FadeIn> */}

        <div className="grid grid-cols-2 gap-10 sm:gap-10 lg:grid-cols-12 lg:gap-8">
          <FadeIn direction="up" className="col-span-2 lg:col-span-3">
            <img src="/logo.webp" alt="Praneel Packaging Logo" className="mb-5 h-11 w-auto sm:h-12" />
            <p className="mb-7 max-w-sm text-sm leading-relaxed text-[#1D1D1B]/55 sm:text-[15px]">
              Engineering the art of unboxing. We create structural masterpieces that protect your product and elevate your brand's luxury perception.
            </p>
            <div className="flex items-center gap-2.5">
              {[
                { Icon: InstagramIcon, href: "https://instagram.com/praneel_packaging/", label: "Instagram" },
                { Icon: LinkedinIcon, href: "https://linkedin.com/company/praneelpackaging", label: "LinkedIn" },
                { Icon: XIcon, href: "https://twitter.com/praneelpackaging", label: "X" }
              ].map(({ Icon, href, label }) => (
                <motion.a
                  key={label}
                  href={href}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -2 }}
                  whileTap={{ scale: 0.92 }}
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#1D1D1B]/10 text-[#1D1D1B]/50 transition-all duration-300 hover:border-[#104080] hover:bg-[#104080] hover:text-[#FFFDF5]"
                  aria-label={label}
                >
                  <Icon className="h-3.5 w-3.5 sm:h-4 sm:w-4" />
                </motion.a>
              ))}
            </div>
          </FadeIn>

          <FadeIn direction="up" delay={0.1} className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-3 w-0.5 rounded-full bg-[#F07020]/60" />
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1D1D1B]/40">
                Navigate
              </h4>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.explore.map((link, i) => (
                <li key={link.label}>
                  <motion.a
                    href={link.href}
                    initial="rest"
                    whileHover="hover"
                    className="group relative inline-flex items-center gap-2 text-sm text-[#1D1D1B]/60 transition-colors duration-300 hover:text-[#104080]"
                  >
                    <span>0{i + 1}</span>
                    <span>{link.label}</span>
                    <span className="absolute -bottom-0.5 left-0 h-px w-0 bg-[#104080] transition-all duration-500 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:w-full" />
                  </motion.a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.2} className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-3 w-0.5 rounded-full bg-[#F07020]/60" />
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1D1D1B]/40">
                Box Types
              </h4>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.services.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm text-[#1D1D1B]/60 transition-colors duration-300 hover:text-[#104080]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.25} className="lg:col-span-2">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-3 w-0.5 rounded-full bg-[#F07020]/60" />
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1D1D1B]/40">
                Industries
              </h4>
            </div>
            <ul className="space-y-2.5">
              {footerLinks.industries.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    className="relative inline-block text-sm text-[#1D1D1B]/60 transition-colors duration-300 hover:text-[#104080]"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </FadeIn>

          <FadeIn direction="up" delay={0.3} className="col-span-2 lg:col-span-3">
            <div className="mb-5 flex items-center gap-2.5">
              <span className="h-3 w-0.5 rounded-full bg-[#F07020]/60" />
              <h4 className="text-[10px] font-semibold uppercase tracking-[0.22em] text-[#1D1D1B]/40">
                Reach out
              </h4>
            </div>
            <ul className="space-y-4">
              {footerLinks.contact.map((item) => (
                <li key={item.desc}>
                  {item.href ? (
                    <a
                      href={item.href}
                      className="group flex items-start gap-3"
                    >
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#104080]/[0.06] text-[#104080] transition-colors duration-300 group-hover:bg-[#104080] group-hover:text-[#FFFDF5]">
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.12em] text-[#1D1D1B]/35">
                          {item.desc}
                        </span>
                        <span className="text-sm text-[#1D1D1B]/70 transition-colors duration-300 group-hover:text-[#104080]">
                          {item.label}
                        </span>
                      </span>
                    </a>
                  ) : (
                    <span className="flex items-start gap-3">
                      <span className="mt-0.5 flex h-7 w-7 shrink-0 items-center justify-center rounded-md bg-[#104080]/[0.06] text-[#104080]">
                        <item.icon className="h-3.5 w-3.5" />
                      </span>
                      <span className="flex flex-col">
                        <span className="text-[10px] uppercase tracking-[0.12em] text-[#1D1D1B]/35">
                          {item.desc}
                        </span>
                        <span className="text-sm text-[#1D1D1B]/70">
                          {item.label}
                        </span>
                      </span>
                    </span>
                  )}
                </li>
              ))}
            </ul>
          </FadeIn>
        </div>

        <FadeIn direction="none" delay={0.4}>
          <div className="relative mt-14 border-t border-[#1D1D1B]/[0.06] pt-6 pb-10 sm:mt-16 sm:pb-14">
            <div className="flex flex-col items-center justify-between gap-4 sm:flex-row">
              <div className="flex flex-col items-center gap-1 sm:items-start">
                <p className="text-[10px] font-medium uppercase tracking-[0.15em] text-[#1D1D1B]/40">
                  &copy; 2024 Praneel Packaging.
                </p>
                <p className="text-[10px] tracking-[0.05em] text-[#1D1D1B]/30">
                  Designed &amp; developed by Trovant solution.
                </p>
              </div>
              <div className="flex items-center gap-6">
                {["Privacy", "Terms", "Get a Quote"].map((label, i) => {
                  const href = i === 2
                    ? "https://wa.me/918320826551?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging"
                    : "#";
                  return (
                    <a
                      key={label}
                      href={href}
                      {...(i === 2 ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                      className="text-[10px] font-medium uppercase tracking-[0.12em] text-[#1D1D1B]/35 transition-colors duration-300 hover:text-[#104080]"
                    >
                      {label}
                    </a>
                  );
                })}
              </div>
            </div>

            <h2 className="pointer-events-none font-light footer-font absolute -bottom-1 left-1/2 -translate-x-1/2 select-none whitespace-nowrap text-[clamp(4rem,18vw,16rem)] leading-none tracking-tighter text-[#1a1a1a]/[0.04]">
              PRANEEL PACKAGING
            </h2>
          </div>
        </FadeIn>
      </div>
    </motion.footer>
  );
}

export default Footer;
