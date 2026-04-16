import { Package, Shield, Sparkles, Box, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import magneticBox from "/magnetic-box.png";
import drawerBox from "/drawer-box.png";

function WhyRigidBoxes() {
    return (
        <section className="relative z-10 w-full overflow-hidden">
            {/* Background Glows */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                <div className="h-[600px] w-[600px] rounded-full bg-amber-500/5 blur-[120px]" />
                <div className="absolute top-0 right-0 h-[400px] w-[400px] rounded-full bg-cyan-500/5 blur-[100px]" />
            </div>

            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                <div className="text-center mb-20">
                    <FadeIn direction="none">
                        <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                            The Standard of Excellence
                        </span>
                    </FadeIn>
                    <AnimatedText 
                        text="Why Your Product Deserves Better"
                        className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl justify-center"
                    />
                </div>

                <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 auto-rows-[240px]">
                    {/* Large Comparison Card */}
                    <FadeIn delay={0.2} direction="up" className="lg:col-span-8 lg:row-span-2">
                        <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 backdrop-blur-sm p-8 lg:p-12 transition-all duration-500 hover:border-zinc-700">
                            <div className="relative z-10 grid md:grid-cols-2 gap-10 h-full items-center">
                                <div>
                                    <h3 className="text-2xl lg:text-3xl font-bold text-white mb-6">The Upgrade Path</h3>
                                    <div className="space-y-6">
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 rounded-full bg-red-500/10 p-1">
                                                <XCircle className="h-5 w-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-zinc-400">Regular Corrugated</p>
                                                <p className="text-zinc-500 text-sm">Flimsy, easily crushed, and feels "cheap" to the customer.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-4">
                                            <div className="mt-1 rounded-full bg-emerald-500/10 p-1">
                                                <CheckCircle2 className="h-5 w-5 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-emerald-400">Praneel Rigid Box</p>
                                                <p className="text-zinc-200 text-sm font-medium">Built with high-density chipboard for structural integrity and a premium feel.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-10 flex items-center gap-2 text-amber-200 text-sm font-medium">
                                        <Sparkles className="h-4 w-4" />
                                        90% of customers reuse rigid boxes
                                    </div>
                                </div>
                                <div className="relative hidden md:flex items-center justify-center">
                                    <motion.div 
                                        animate={{ y: [0, -15, 0] }}
                                        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
                                        className="relative z-10 w-full h-60 rounded-2xl overflow-hidden"
                                    >
                                        <img src={magneticBox} alt="Magnetic Box" className="w-full h-full object-cover drop-shadow-[0_25px_25px_rgba(0,0,0,0.5)]" />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Durability Card */}
                    <FadeIn delay={0.4} direction="up" className="lg:col-span-4 lg:row-span-1">
                        <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-zinc-700">
                            <Shield className="h-10 w-10 text-emerald-400 mb-6" />
                            <h3 className="text-xl font-bold text-white mb-3">No Delivery Drama</h3>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                Our boxes are engineered to survive transit without a single dent. Your product arrives exactly as intended.
                            </p>
                            <div className="absolute -right-8 -bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield className="h-32 w-32 text-white" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Unboxing Card */}
                    <FadeIn delay={0.5} direction="up" className="lg:col-span-4 lg:row-span-1">
                        <div className="group relative h-full overflow-hidden rounded-3xl border border-zinc-800 bg-zinc-900/40 p-8 transition-all duration-500 hover:border-zinc-700">
                            <div className="flex items-center gap-4 mb-6">
                                <div className="rounded-xl bg-zinc-800 p-2">
                                    <Box className="h-6 w-6 text-amber-400" />
                                </div>
                                <h3 className="text-xl font-bold text-white">The "WOW" Moment</h3>
                            </div>
                            <p className="text-zinc-400 text-sm leading-relaxed">
                                That satisfying slide of a drawer box or the "thud" of a magnetic lid closing. We design for the senses.
                            </p>
                            <div className="absolute right-4 bottom-4 w-24 opacity-40 group-hover:scale-110 transition-transform rounded-xl overflow-hidden">
                                <img src={drawerBox} alt="Drawer Box" />
                            </div>
                        </div>
                    </FadeIn>

                    {/* Final CTA / Summary Row */}
                    <FadeIn delay={0.6} direction="up" className="lg:col-span-12">
                        <div className="mt-12 flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-8 mb-12">
                                {[
                                    { label: "Durability", value: "Indestructible" },
                                    { label: "Impression", value: "Instant Luxury" },
                                    { label: "Design", value: "100% Custom" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-xs uppercase tracking-widest text-zinc-500 mb-1">{stat.label}</div>
                                        <div className="text-xl font-bold text-white">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                            <PrimaryButton icon={ArrowRight} className="px-10 py-5 text-lg rounded-2xl shadow-xl shadow-amber-500/10">
                                Start Your Brand Upgrade
                            </PrimaryButton>
                        </div>
                    </FadeIn>
                </div>
            </div>
        </section>
    );
}

export default WhyRigidBoxes;