import { MessageCircleMore, Package, ShieldCheck, ArrowRight, Star, Trophy, Clock } from "lucide-react";
import heroImg from "/hero-img.png";
import { PrimaryButton, SecondaryButton } from "./Button";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import { motion } from "framer-motion";

function HeroSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 pb-24 pt-32 sm:px-6 sm:pt-36 lg:px-8 lg:pt-48 overflow-hidden">
            <div className="grid items-center gap-16 lg:grid-cols-2 lg:gap-20 relative z-10">
                <div className="max-w-xl">
                    <AnimatedText 
                        text="Boxes so premium even your product feels rich inside."
                        className="text-[#1E56A0] text-5xl font-bold leading-[1.1] sm:text-6xl lg:text-6xl"
                    />

                    <FadeIn delay={0.4}>
                        <p className="mt-8 max-w-lg text-lg leading-relaxed text-[#1E56A0]/50">
                            We don't just manufacture boxes. We engineer first impressions that convert customers into brand loyalists.
                        </p>
                    </FadeIn>

                    <FadeIn delay={0.6} className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                        <PrimaryButton icon={ArrowRight} href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20start%20a%20packaging%20project%20with%20Praneel%20Packaging" className="px-8 py-4 text-base">Start Your Project</PrimaryButton>
                        <SecondaryButton icon={MessageCircleMore} href="https://wa.me/919023827460?text=Hi,%20I%20have%20some%20questions%20about%20custom%20packaging%20designs" className="px-8 py-4 text-base">Consult Our Designers</SecondaryButton>
                    </FadeIn>

                    {/* Trust Badges */}
                    <FadeIn delay={0.8} className="mt-12 pt-10 border-t border-[#1E56A0]/20 flex flex-wrap gap-8">
                        <div className="flex items-center gap-3">
                            <Trophy className="h-5 w-5 text-[#1E56A0]" />
                            <span className="text-[10px] uppercase tracking-widest font-black text-[#1E56A0]/50">Award Winning<br/>Structures</span>
                        </div>
                        <div className="flex items-center gap-3">
                            <Clock className="h-5 w-5 text-[#1E56A0]" />
                            <span className="text-[10px] uppercase tracking-widest font-black text-[#1E56A0]/50">Fast Global<br/>Turnaround</span>
                        </div>
                    </FadeIn>
                </div>

                <div className="relative">
                    <ScaleIn delay={0.5} className="relative flex justify-center items-center">
                        <div className="relative z-10 w-full">
                            <img
                                src={heroImg}
                                alt="Hero Image"
                                className="w-full h-full"
                            />
                        </div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}

export default HeroSection;