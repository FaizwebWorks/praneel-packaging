import { Package, Shield, Sparkles, Box, CheckCircle2, XCircle, ArrowRight } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import magneticBox from "/magnetic-box.webp";
import drawerBox from "/drawer-box.webp";

function WhyRigidBoxes() {
    return (
        <section className="relative z-10 w-full overflow-hidden py-16 sm:py-20 lg:py-32">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-12 lg:mb-20">
                    <FadeIn direction="none">
                        <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#1E56A0]/70">
                            The Standard of Excellence
                        </span>
                    </FadeIn>
                    <AnimatedText 
                        text="Why Your Product Deserves Better"
                        className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-[#1E56A0] sm:text-4xl lg:text-5xl justify-center"
                    />
                </div>

                <div className="grid grid-cols-1 gap-6 lg:grid-cols-12 lg:gap-6">
                    <FadeIn delay={0.2} direction="up" className="lg:col-span-8">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#455A64]/10 bg-transparent p-6 sm:p-8 lg:p-12 transition-all duration-500">
                            <div className="relative group z-10 flex flex-col gap-6 lg:grid lg:grid-cols-2 lg:gap-10 lg:items-center">
                                <div>
                                    <h3 className="text-xl sm:text-2xl lg:text-3xl font-bold text-[#1E56A0] mb-4 lg:mb-6">The Upgrade Path</h3>
                                    <div className="space-y-4 lg:space-y-6">
                                        <div className="flex items-start gap-3 lg:gap-4">
                                            <div className="mt-1 rounded-full bg-red-500/10 p-1">
                                                <XCircle className="h-4 w-4 lg:h-5 lg:w-5 text-red-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-[#455A64]">Regular Corrugated</p>
                                                <p className="text-zinc-500 text-xs lg:text-sm">Flimsy, easily crushed, and feels "cheap" to the customer.</p>
                                            </div>
                                        </div>
                                        <div className="flex items-start gap-3 lg:gap-4">
                                            <div className="mt-1 rounded-full bg-emerald-500/10 p-1">
                                                <CheckCircle2 className="h-4 w-4 lg:h-5 lg:w-5 text-emerald-500" />
                                            </div>
                                            <div>
                                                <p className="text-sm font-medium text-[#455A64]">Praneel Rigid Box</p>
                                                <p className="text-zinc-500 text-xs lg:text-sm font-medium">Built with high-density chipboard for structural integrity and a premium feel.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div className="mt-6 lg:mt-10 flex items-center gap-2 text-[#1E56A0] text-sm font-medium">
                                        <Sparkles className="h-4 w-4" />
                                        <span className="text-xs lg:text-sm">90% of customers reuse rigid boxes</span>
                                    </div>
                                </div>
                                <div className="relative hidden lg:flex items-center justify-center">
                                    <motion.div 
                                        className="relative z-10 w-full h-60 rounded-2xl overflow-hidden"
                                    >
                                        <img src={magneticBox} alt="Magnetic Box" className="w-full h-full object-cover group-hover:scale-105 transition-all duration-300 ease-in" />
                                    </motion.div>
                                    <div className="absolute inset-0 bg-amber-500/10 blur-[80px] rounded-full" />
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.4} direction="up" className="lg:col-span-4">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#455A64]/10 bg-transparent p-6 sm:p-8 transition-all duration-500">
                            <Shield className="h-8 w-8 lg:h-10 lg:w-10 text-[#1E56A0] mb-4 lg:mb-6" />
                            <h3 className="text-lg lg:text-xl font-bold text-[#1E56A0] mb-2 lg:mb-3">No Delivery Drama</h3>
                            <p className="text-[#455A64] text-sm leading-relaxed">
                                Our boxes are engineered to survive transit without a single dent. Your product arrives exactly as intended.
                            </p>
                            <div className="absolute -right-4 lg:-right-8 -bottom-4 lg:-bottom-8 opacity-10 group-hover:opacity-20 transition-opacity">
                                <Shield className="h-24 w-24 lg:h-32 lg:w-32 text-white" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.5} direction="up" className="lg:col-span-4">
                        <div className="group relative overflow-hidden rounded-3xl border border-[#455A64]/10 bg-transparent p-6 sm:p-8 transition-all duration-500">
                            <div className="flex items-center gap-3 lg:gap-4 mb-4 lg:mb-6">
                                <Box className="h-6 w-6 lg:h-8 lg:w-8 text-[#1E56A0]" />
                                <h3 className="text-lg lg:text-xl font-bold text-[#1E56A0]">The "WOW" Moment</h3>
                            </div>
                            <p className="text-[#455A64] text-sm leading-relaxed">
                                That satisfying slide of a drawer box or the "thud" of a magnetic lid closing. We design for the senses.
                            </p>
                            <div className="absolute hidden lg:block right-4 bottom-4 w-20 lg:w-30 rounded-xl overflow-hidden">
                                <img src={drawerBox} alt="Drawer Box" className="group-hover:scale-105 transition-transform duration-300" />
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn delay={0.6} direction="up" className="lg:col-span-12">
                        <div className="mt-6 lg:mt-12 flex flex-col items-center">
                            <div className="flex flex-wrap justify-center gap-6 lg:gap-8 mb-10 lg:mb-12">
                                {[
                                    { label: "Durability", value: "Indestructible" },
                                    { label: "Impression", value: "Instant Luxury" },
                                    { label: "Design", value: "100% Custom" }
                                ].map((stat, i) => (
                                    <div key={i} className="text-center">
                                        <div className="text-xs uppercase tracking-widest text-[#455A64] mb-1">{stat.label}</div>
                                        <div className="text-lg lg:text-xl font-bold text-[#1E56A0]">{stat.value}</div>
                                    </div>
                                ))}
                            </div>
                            <PrimaryButton icon={ArrowRight} href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20upgrade%20my%20brand%20with%20premium%20packaging" className="px-8 lg:px-10 py-4 lg:py-5 text-base lg:text-lg rounded-2xl">
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