import { Mail, MapPin, ArrowUpRight } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedText";

const InstagramIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <rect width="20" height="20" x="2" y="2" rx="5" ry="5"/><path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"/><line x1="17.5" x2="17.51" y1="6.5" y2="6.5"/>
    </svg>
);

const LinkedinIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"/><rect width="4" height="12" x="2" y="9"/><circle cx="4" cy="4" r="2"/>
    </svg>
);

const TwitterIcon = (props) => (
    <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}>
        <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"/>
    </svg>
);

const footerLinks = {
    explore: ["About Us", "Our Process", "Box Gallery", "Sustainability"],
    services: ["Magnetic Boxes", "Drawer Boxes", "Gift Packaging", "Custom Inserts"],
    contact: [
        { icon: Mail, label: "hello@praneelpackaging.com" },
        { icon: MapPin, label: "Gujarat, India" }
    ]
};

function Footer() {
    return (
        <footer className="relative z-10 w-full overflow-hidden border-t border-zinc-900 bg-zinc-950/50 pt-24 pb-12">
            {/* Massive Cinematic Watermark */}
            <div className="absolute bottom-0 left-1/2 -translate-x-1/2 translate-y-1/4 pointer-events-none select-none overflow-hidden w-full text-center">
                <h2 className="heading-font text-[15vw] font-black uppercase tracking-tighter text-white/[0.02] leading-none whitespace-nowrap">
                    Praneel Packaging
                </h2>
            </div>

            <div className="relative mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-16 lg:gap-8 mb-20">
                    {/* Brand Column */}
                    <FadeIn direction="up" className="lg:col-span-1">
                        <div className="mb-8">
                            <span className="heading-font text-2xl font-bold tracking-tight text-white block mb-2">
                                PRANEEL
                            </span>
                            <span className="text-xs uppercase tracking-[0.3em] text-amber-500 font-bold">
                                Packaging Studio
                            </span>
                        </div>
                        <p className="text-sm leading-relaxed text-zinc-400 max-w-xs mb-8">
                            Engineering the art of unboxing. We create structural masterpieces that protect your product and elevate your brand's luxury perception.
                        </p>
                        <div className="flex items-center gap-4">
                            {[InstagramIcon, LinkedinIcon, TwitterIcon].map((Icon, i) => (
                                <motion.a 
                                    key={i}
                                    href="#" 
                                    whileHover={{ y: -3, color: "#f59e0b" }}
                                    className="h-10 w-10 flex items-center justify-center rounded-xl border border-zinc-800 bg-zinc-900/50 text-zinc-400 transition-colors"
                                >
                                    <Icon className="h-5 w-5" />
                                </motion.a>
                            ))}
                        </div>
                    </FadeIn>

                    {/* Links Columns */}
                    <FadeIn direction="up" delay={0.2}>
                        <h4 className="mb-8 text-xs font-black text-white uppercase tracking-widest">Navigation</h4>
                        <ul className="space-y-4">
                            {footerLinks.explore.map((link) => (
                                <li key={link}>
                                    <motion.a 
                                        href="#" 
                                        whileHover={{ x: 5, color: "#fff" }}
                                        className="text-sm text-zinc-500 hover:text-white transition-colors flex items-center group"
                                    >
                                        {link}
                                        <ArrowUpRight className="h-3 w-3 ml-1 opacity-0 group-hover:opacity-100 transition-all" />
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.3}>
                        <h4 className="mb-8 text-xs font-black text-white uppercase tracking-widest">Expertise</h4>
                        <ul className="space-y-4">
                            {footerLinks.services.map((link) => (
                                <li key={link}>
                                    <motion.a 
                                        href="#" 
                                        whileHover={{ x: 5, color: "#fff" }}
                                        className="text-sm text-zinc-500 hover:text-white transition-colors"
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    {/* Contact Column */}
                    <FadeIn direction="up" delay={0.4}>
                        <h4 className="mb-8 text-xs font-black text-white uppercase tracking-widest">Inquiries</h4>
                        <ul className="space-y-6">
                            {footerLinks.contact.map((item, i) => (
                                <li key={i} className="flex items-start gap-4">
                                    <div className="mt-1 h-8 w-8 flex items-center justify-center rounded-lg border border-zinc-800 bg-zinc-900/30 text-amber-500/80">
                                        <item.icon className="h-4 w-4" />
                                    </div>
                                    <div>
                                        <p className="text-xs uppercase tracking-tighter text-zinc-600 mb-1">
                                            {item.icon === Mail ? "Email Us" : "Visit Us"}
                                        </p>
                                        <p className="text-sm text-zinc-300 font-medium">{item.label}</p>
                                    </div>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>
                </div>

                {/* Bottom Bar */}
                <FadeIn direction="none" delay={0.6} className="pt-12 border-t border-zinc-900/50">
                    <div className="flex flex-col md:flex-row items-center justify-between gap-8">
                        <div className="flex flex-col items-center md:items-start gap-2">
                            <p className="text-[10px] uppercase tracking-[0.2em] text-zinc-600 font-bold">
                                © 2024 Praneel Packaging. Precision Engineered Luxury.
                            </p>
                            <p className="text-[10px] text-zinc-700 max-w-sm text-center md:text-left">
                                All structural designs and intellectual property are protected.
                            </p>
                        </div>
                        
                        <div className="flex items-center gap-8 text-[10px] uppercase tracking-widest font-black text-zinc-600">
                            <a href="#" className="hover:text-white transition-colors">Privacy</a>
                            <a href="#" className="hover:text-white transition-colors">Terms</a>
                            <a href="#" className="hover:text-amber-500 transition-colors">Get a Quote</a>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}

export default Footer;