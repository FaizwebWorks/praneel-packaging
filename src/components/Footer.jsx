import { Mail, MapPin } from "lucide-react";
import { motion } from "framer-motion";
import { FadeIn } from "./AnimatedText";

function Footer() {
    return (
        <footer className="relative z-10 border-t border-zinc-900 bg-zinc-950/50 backdrop-blur-xl">
            <div className="mx-auto w-full max-w-7xl px-4 py-16 sm:px-6 lg:px-8">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-12">
                    <FadeIn direction="up" className="md:col-span-2">
                        <span className="heading-font text-xl font-semibold text-white">
                            Praneel Packaging
                        </span>
                        <p className="mt-4 max-w-md text-sm text-zinc-400">
                            We craft rigid boxes that make your product look more premium. 
                            Because your product deserves better packaging.
                        </p>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.2}>
                        <h4 className="mb-4 text-sm font-semibold text-white tracking-wider uppercase">Quick Links</h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            {["About Us", "Services", "Projects", "Contact"].map((link) => (
                                <li key={link}>
                                    <motion.a 
                                        href="#" 
                                        whileHover={{ x: 5, color: "#fff" }}
                                        className="inline-block transition-colors"
                                    >
                                        {link}
                                    </motion.a>
                                </li>
                            ))}
                        </ul>
                    </FadeIn>

                    <FadeIn direction="up" delay={0.4}>
                        <h4 className="mb-4 text-sm font-semibold text-white tracking-wider uppercase">Contact</h4>
                        <ul className="space-y-3 text-sm text-zinc-400">
                            <motion.li 
                                whileHover={{ x: 5, color: "#fff" }}
                                className="flex items-center gap-2 cursor-pointer transition-colors"
                            >
                                <Mail className="h-4 w-4" />
                                <span>hello@praneelpackaging.com</span>
                            </motion.li>
                            <motion.li 
                                whileHover={{ x: 5, color: "#fff" }}
                                className="flex items-center gap-2 cursor-pointer transition-colors"
                            >
                                <MapPin className="h-4 w-4" />
                                <span>Gujarat, India</span>
                            </motion.li>
                        </ul>
                    </FadeIn>
                </div>

                <FadeIn direction="none" delay={0.6} className="mt-12 pt-8 border-t border-zinc-900">
                    <div className="flex flex-col sm:flex-row items-center justify-between gap-4">
                        <p className="text-sm text-zinc-500">
                            Made with precision, creativity… and a little bit of packaging obsession.
                        </p>
                        <p className="text-sm text-zinc-500">
                            © 2024 Praneel Packaging. All rights reserved.
                        </p>
                    </div>
                </FadeIn>
            </div>
        </footer>
    );
}

export default Footer;