import { MessageCircleMore, Package, ShieldCheck } from "lucide-react";
import custom from "/custom.png";
import { PrimaryButton, SecondaryButton } from "./Button";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-16 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-40">
            <div className="grid items-center gap-10 lg:grid-cols-2 lg:gap-14">
                <div className="max-w-xl">
                    <AnimatedText 
                        text="Boxes so premium... even your product feels rich inside."
                        className="heading-font text-4xl font-semibold leading-tight text-white sm:text-5xl lg:text-6xl"
                    />

                    <FadeIn delay={0.4}>
                        <p className="mt-6 max-w-lg text-base leading-relaxed text-zinc-300 sm:text-lg">
                            We don't just make boxes. We create first impressions that people don't throw away.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} className="mt-8 flex flex-col gap-3 sm:flex-row sm:items-center">
                        <PrimaryButton>Get a Quote</PrimaryButton>
                        <SecondaryButton icon={MessageCircleMore}>Let's Talk Packaging</SecondaryButton>
                    </FadeIn>

                    <div className="mt-8 grid grid-cols-1 gap-3 sm:grid-cols-2">
                        <FadeIn delay={0.8} direction="left">
                            <motion.div 
                                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 text-zinc-300 transition-colors"
                            >
                                <div className="mb-1 flex items-center gap-2 text-sm font-medium text-zinc-100">
                                    <Package className="h-4 w-4 text-zinc-200" />
                                    Luxury Finishes
                                </div>
                                <p className="text-xs leading-relaxed">Rigid boxes, magnetic closures, foil, emboss, and textures.</p>
                            </motion.div>
                        </FadeIn>
                        <FadeIn delay={0.9} direction="right">
                            <motion.div 
                                whileHover={{ y: -5, borderColor: "rgba(255,255,255,0.2)" }}
                                className="rounded-2xl border border-zinc-800 bg-zinc-900/60 p-3 text-zinc-300 transition-colors"
                            >
                                <div className="mb-1 flex items-center gap-2 text-sm font-medium text-zinc-100">
                                    <ShieldCheck className="h-4 w-4 text-zinc-200" />
                                    Brand-First Quality
                                </div>
                                <p className="text-xs leading-relaxed">Color-matched, structurally safe, and built for premium unboxing.</p>
                            </motion.div>
                        </FadeIn>
                    </div>
                </div>

                <ScaleIn delay={0.5} className="relative">
                    <motion.div 
                        whileHover={{ scale: 1.02 }}
                        transition={{ type: "spring", stiffness: 300, damping: 20 }}
                        className="rounded-2xl border border-zinc-800 bg-zinc-900/50 overflow-hidden shadow-2xl shadow-black/50"
                    >
                        <img
                            src={custom}
                            alt="Custom Packaging Design"
                            className="w-full h-full object-cover"
                        />
                    </motion.div>
                </ScaleIn>
            </div>
        </section>
    );
}

export default HeroSection;