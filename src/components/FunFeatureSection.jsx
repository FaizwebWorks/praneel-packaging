import { AlertTriangle } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";

const features = [
    { emoji: "📦", title: "Customers keeping the box forever" },
    { emoji: "📱", title: "Extra Instagram unboxing videos" },
    { emoji: "✨", title: "Your product looking 10x more premium" },
    { emoji: "😎", title: "Competitors getting jealous" }
];

function FunFeatureSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32 overflow-hidden">
            <div className="text-center mb-16">
                <FadeIn direction="none">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Fun Feature
                    </span>
                </FadeIn>
                <AnimatedText 
                    text="Warning: Our Boxes May Cause…"
                    className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl justify-center"
                />
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {features.map((feature, i) => (
                    <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                        <motion.div 
                            whileHover={{ 
                                y: -12,
                                transition: { type: "spring", stiffness: 400, damping: 10 }
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-500 hover:border-zinc-400 hover:bg-zinc-900/80"
                        >
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-br from-amber-500/5 via-transparent to-transparent" 
                            />
                            <div className="relative z-10">
                                <motion.div 
                                    whileHover={{ scale: 1.2, rotate: [0, -10, 10, -10, 0] }}
                                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 group-hover:bg-zinc-700/50 group-hover:border-zinc-500 transition-all duration-300"
                                >
                                    <span className="text-2xl">{feature.emoji}</span>
                                </motion.div>
                                <h3 className="mb-3 text-lg font-semibold text-white group-hover:text-white transition-colors leading-snug">{feature.title}</h3>
                            </div>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.8} direction="up" className="mt-12 text-center">
                <p className="text-lg italic leading-relaxed text-zinc-400">
                    We're not saying it's magic… but it's definitely close.
                </p>
            </FadeIn>

            <FadeIn delay={1} direction="up" className="mt-10 flex justify-center">
                <PrimaryButton className="px-8 py-4 text-base">Order Now</PrimaryButton>
            </FadeIn>
        </section>
    );
}

export default FunFeatureSection;