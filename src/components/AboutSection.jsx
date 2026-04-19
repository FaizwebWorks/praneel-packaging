import { Gem, Shield, Sparkles, ArrowRight } from "lucide-react";
import aboutImg from "/about-us.webp";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";
import { PrimaryButton } from "./Button";

function AboutSection() {
    return (
        <section id="about" className="relative z-10 w-full overflow-hidden">
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <FadeIn direction="none">
                            <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#1E56A0]/80">
                                About Us
                            </span>
                        </FadeIn>
                        
                        <AnimatedText 
                            text="We Make Boxes… But Not 'Just Boxes'"
                            className="heading-font mb-6 text-3xl font-semibold leading-tight text-[#1E56A0] sm:text-4xl lg:text-5xl"
                        />
                        
                        <div className="space-y-5 text-base leading-relaxed text-[#455A64] sm:text-lg">
                            <FadeIn delay={0.2}>
                                <p>
                                    Let's be honest… anyone can make a box.
                                </p>
                            </FadeIn>
                            
                            <FadeIn delay={0.3}>
                                <p>
                                    But making a box that people <span className="font-medium text-[#1E56A0]">don't want to throw away</span>? That's an art.
                                </p>
                            </FadeIn>
                            
                            <FadeIn delay={0.4}>
                                <p>
                                    At Praneel Packaging, we craft rigid boxes that feel premium, look luxurious, and make your product more valuable.
                                </p>
                            </FadeIn>
                        </div>

                        <div className="mt-8 space-y-4">
                            {[
                                { icon: Gem, title: "Feel Premium", desc: "Luxurious textures that elevate the unboxing experience" },
                                { icon: Sparkles, title: "Look Luxurious", desc: "Stunning visuals that capture attention instantly" },
                                { icon: Shield, title: "Add Value", desc: "Make your product look more expensive" }
                            ].map((item, i) => (
                                <FadeIn key={i} delay={0.5 + i * 0.1} direction="left">
                                    <motion.div 
                                        className="flex items-start gap-4 group cursor-default"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-[#1E56A0] bg-[#F2F2F2] transition-all duration-300">
                                            <item.icon className="h-4 w-4 text-[#1E56A0] transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-medium text-[#1E56A0]">{item.title}</h3>
                                            <p className="text-sm text-[#455A64]">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.8} direction="up" className="mt-10 border-l-2 border-[#455A64] pl-6">
                            <p className="text-base leading-relaxed text-[#455A64] italic">
                                Because rigid boxes aren't just packaging — they're your product's first impression, bodyguard, and hype man all in one.
                            </p>
                        </FadeIn>

                        <FadeIn delay={0.9} className="mt-8">
                            <PrimaryButton 
                                href="#services"
                                icon={ArrowRight}
                                className="px-8 py-4 text-base"
                            >
                                Explore Our Services
                            </PrimaryButton>
                        </FadeIn>
                    </div>

                    <ScaleIn delay={0.4} className="relative hidden lg:block">
                        <div className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/20 to-purple-500/20 blur-3xl" />
                        <div className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl" />
                        
                        <div className="relative overflow-hidden rounded-3xl border border-[#455A64]/10">
                            <img
                                src={aboutImg}
                                alt="About Praneel Packaging"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;