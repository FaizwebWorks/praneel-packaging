import { Mail, MapPin, Phone, ArrowUpRight } from "lucide-react";
import { motion, useScroll, useTransform } from "framer-motion";
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

const TwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
    </svg>
);

const footerLinks = {
    explore: [
        { label: "About Us", href: "#about" },
        { label: "Our Process", href: "#process" },
        { label: "Box Gallery", href: "#services" },
        { label: "Contact", href: "https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services" }
    ],
    services: [
        { label: "Magnetic Boxes", href: "#services" },
        { label: "Drawer Boxes", href: "#services" },
        { label: "Gift Packaging", href: "#services" },
        { label: "Custom Inserts", href: "#services" }
    ],
    contact: [
        { icon: Phone, label: "+91 83208 26551", href: "tel:+918320826551" },
        { icon: Mail, label: "info.praneelpackaging@gmail.com", href: "mailto:info.praneelpackaging@gmail.com" },
        { icon: MapPin, label: "Gujarat, India" }
    ]
};

function Footer() {
    const { scrollYProgress } = useScroll({});
    const y1 = useTransform(scrollYProgress, [0, 1], [0, -50]);
    const y2 = useTransform(scrollYProgress, [0, 1], [0, -100]);

    return (
        <motion.footer
            className="relative z-20 w-full overflow-hidden mt-8 pt-24 pb-12 bg-[#F5F5F5] rounded-t-[3rem] sm:rounded-t-[5rem]"
            initial={{ opacity: 1 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="absolute inset-0 pointer-events-none opacity-[0.10] z-0"
                style={{
                    backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                }}
            />

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <FadeIn direction="up" className="lg:col-span-1">
                        <div className="mb-8">
                            <img src="/logo.webp" alt="Praneel Packaging Logo" className="h-14 w-auto mb-2" />
                        </div>
                        <p className="text-sm leading-relaxed text-[#455A64] max-w-xs mb-8">
                            Engineering the art of unboxing. We create structural masterpieces that protect your product and elevate your brand's luxury perception.
                        </p>
                        <div className="flex items-center gap-4">
                            {[
                                { Icon: InstagramIcon, href: "https://instagram.com/praneel_packaging/" },
                                { Icon: LinkedinIcon, href: "https://linkedin.com/company/praneelpackaging" },
                                { Icon: TwitterIcon, href: "https://twitter.com/praneelpackaging" }
                            ].map(({ Icon, href }, i) => (
                                <motion.a
                                    key={i}
                                    href={href}
                                    target="_blank"
                                    rel="noopener noreferrer"
                                    whileHover={{ y: -3 }}
                                    className="h-10 w-10 flex items-center justify-center rounded-xl border border-[#455A64]/20 bg-[#1E56A0]/5 text-[#1E56A0] transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Links Columns */}
                    <FadeIn direction="up" delay={0.2}>
                        <h4 className="mb-8 text-xs font-black text-[#1E56A0] uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-sm text-[#455A64] hover:text-[#1E56A0] transition-colors flex items-center group"
                                    >
                                        {link.label}
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <h4 className="mb-8 text-xs font-black text-[#1E56A0] uppercase tracking-widest">Expertise</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link.label}>
                                    <motion.a
                                        href={link.href}
                                        whileHover={{ x: 5 }}
                                        className="text-sm text-[#455A64] hover:text-[#1E56A0] transition-colors"
                                    >
                                        {link.label}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Contact Column */}
                    <FadeIn direction="up" delay={0.4}>
                        <h4 className="mb-8 text-xs font-black text-[#1E56A0] uppercase tracking-widest">Inquiries</h4>
                        <ul className="space-y-6">
                            {footerLinks.contact.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#455A64]/20 bg-[#1E56A0]/5 text-[#1E56A0]">
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-tighter text-[#455A64]/60 mb-1">
                                            {item.icon === Mail ? "Email Us" : "Visit Us"}
                                        </p>
                                        {item.href ? (
                                            <motion.a
                                                href={item.href}
                                                whileHover={{ color: "#1E56A0" }}
                                                className="text-sm text-[#455A64] font-medium hover:text-[#1E56A0] transition-colors"
                                            >
                                                {item.label}
                                            </motion.a>
                                        ) : (
                                            <p className="text-sm text-[#455A64] font-medium">{item.label}</p>
                                        )}
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>

                {/* Bottom Bar */}
                <FadeIn direction="none" delay={0.6} className="pt-12 border-t border-[#455A64]/10">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-[#455A64] font-bold">
                                © 2024 Praneel Packaging.
                            </p>
                            <p className="text-[10px] text-[#455A64]/60 max-w-sm text-center md:text-left">
                                Designed and developed by Trovant solution.
                            </p>
                        </div>

                        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-black text-[#455A64]">
                            <a href="#" className="hover:text-[#1E56A0] transition-colors">Privacy</a>
                            <a href="#" className="hover:text-[#1E56A0] transition-colors">Terms</a>
                            <a href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging" target="_blank" rel="noopener noreferrer" className="hover:text-[#1E56A0] transition-colors">Get a Quote</a>
                        </div>
                    </div>
                </FadeIn>
                <h1 className="absolute bottom-[-50px] left-1/2 -translate-x-1/2 text-[15vw] leading-none footer-font text-zinc-800/5 select-none pointer-events-none whitespace-nowrap z-0">
                    PRANEEL PACKAGING
                </h1>
            </div>
        </motion.footer>
    );
}

export default Footer;