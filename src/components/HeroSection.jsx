import { MessageCircleMore, Package, ShieldCheck, ArrowRight, Star, Trophy, Clock } from "lucide-react";
import custom from "/custom.png";
import { PrimaryButton, SecondaryButton } from "./Button";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-48 overflow-hidden">
            {/* Massive Background Watermark */}
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none select-none overflow-hidden w-full text-center z-0">
                <h2 className="heading-font text-[25vw] font-black uppercase tracking-tighter text-white/[0.015] leading-none whitespace-nowrap">
                    Luxury
                </h2>
            </div>

            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 relative z-10">
                <div className="max-w-xl">
                    <AnimatedText 
                        text="Boxes so premium... even your product feels rich inside."
                        className="heading-font text-5xl font-semibold leading-[1.1] text-white sm:text-5xl lg:text-6xl"
                    />

                    <FadeIn delay={0.4}>
                        <p className="mt-8 max-w-lg text-lg leading-relaxed text-zinc-400">
                            We don't just manufacture boxes. We engineer first impressions that convert customers into brand loyalists.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <PrimaryButton icon={ArrowRight} className="px-8 py-4 text-base">Start Your Project</PrimaryButton>
                        <SecondaryButton icon={MessageCircleMore} className="px-8 py-4 text-base text-zinc-300">Consult Our Designers</SecondaryButton>
                    </FadeIn>

                    {/* Trust Badges */}
                    <FadeIn delay={0.8} className="mt-12 pt-10 border-t border-zinc-900 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <Trophy className="h-5 w-5 text-amber-500/60" />
                            <span className="text-[10px] uppercase tracking-widest font-black text-zinc-500">Award Winning<br/>Structures</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-zinc-500" />
                            <span className="text-[10px] uppercase tracking-widest font-black text-zinc-500">Fast Global<br/>Turnaround</span>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative">
                    {/* Background Glows for Image */}
                    <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 pointer-events-none">
                        <div className="h-[400px] w-[400px] rounded-full bg-amber-500/10 blur-[100px]" />
                        <div className="absolute top-0 right-0 h-[300px] w-[300px] rounded-full bg-purple-500/10 blur-[80px]" />
                    </div>

                    <ScaleIn delay={0.5} className="relative flex justify-center items-center">
                        <div className="relative z-10 w-full">
                            <img
                                src={custom}
                                alt="Custom Packaging Design"
                                className="w-full h-auto drop-shadow-[0_35px_35px_rgba(0,0,0,0.6)]"
                            />
                        </div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;