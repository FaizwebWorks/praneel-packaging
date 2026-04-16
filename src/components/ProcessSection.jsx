import { ArrowDown } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimatedText, FadeIn } from "./AnimatedText";

const steps = [
    {
        number: "1",
        title: "You tell us what you need",
        desc: "Share your vision, requirements, and expectations. We'll listen."
    },
    {
        number: "2",
        title: "We design something you'll flex about",
        desc: "Creative concepts that match your brand perfectly."
    },
    {
        number: "3",
        title: "We manufacture it perfectly",
        desc: "Quality production with zero compromises."
    }
];

function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start 90%", "center 40%"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="text-center mb-16">
                <FadeIn direction="none">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        How It Works
                    </span>
                </FadeIn>
                <AnimatedText 
                    text="Super Simple, Promise"
                    className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl justify-center"
                />
            </div>

            <div ref={containerRef} className="relative max-w-2xl mx-auto">
                {/* Vertical Progress Line */}
                <div className="absolute left-[19px] top-5 bottom-10 w-0.5 bg-zinc-800 hidden sm:block" />
                <motion.div 
                    style={{ scaleY, originY: 0 }}
                    className="absolute left-[19px] top-5 bottom-10 w-0.5 bg-gradient-to-b from-amber-500 to-amber-200 hidden sm:block z-10" 
                />

                <div className="space-y-12">
                    {steps.map((step, i) => (
                        <FadeIn key={i} delay={0.2 * i} direction="left" className="relative z-20">
                            <div className="flex items-start gap-6 group">
                                <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800 text-zinc-400 transition-all duration-300">
                                    <span className="text-sm font-semibold">{step.number}</span>
                                </div>
                                <div className="pt-1">
                                    <h3 className="text-lg font-semibold text-white mb-1 group-hover:text-amber-200 transition-colors">{step.title}</h3>
                                    <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{step.desc}</p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </div>

            <FadeIn delay={0.8} direction="up" className="mt-16 text-center">
                <p className="text-base leading-relaxed text-zinc-400 italic">
                    No confusion. No headache. No "bhai yeh kya bana diya?" moments.
                </p>
            </FadeIn>

            <FadeIn delay={1} direction="up" className="mt-10 flex justify-center">
                <PrimaryButton className="px-8 py-4 text-base">Get Started</PrimaryButton>
            </FadeIn>
        </section>
    );
}

export default ProcessSection;