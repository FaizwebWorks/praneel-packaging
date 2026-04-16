import { Package, Shield, Sparkles } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";

const cards = [
    {
        icon: Shield,
        title: "Regular Boxes",
        desc: "\"I hope I survive delivery 🥲\"",
        color: "group-hover:text-red-400"
    },
    {
        icon: Package,
        title: "Rigid Boxes",
        desc: "\"Relax, I got this 💪\"",
        color: "group-hover:text-emerald-400"
    },
    {
        icon: Sparkles,
        title: "The Result",
        desc: "\"meh\" → \"WOW\" ✨",
        color: "group-hover:text-amber-400"
    }
];

function WhyRigidBoxes() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="text-center mb-16">
                <FadeIn direction="none">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        Why Rigid Boxes?
                    </span>
                </FadeIn>
                <AnimatedText 
                    text="Why Your Product Deserves Better"
                    className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl justify-center"
                />
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                {cards.map((card, i) => (
                    <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                        <motion.div 
                            whileHover={{ 
                                y: -10,
                                backgroundColor: "rgba(24, 24, 27, 0.8)",
                                borderColor: "rgba(255, 255, 255, 0.2)"
                            }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-8 transition-all duration-500"
                        >
                            <motion.div 
                                initial={{ opacity: 0 }}
                                whileHover={{ opacity: 1 }}
                                className="absolute inset-0 bg-gradient-to-b from-zinc-800/0 via-zinc-800/20 to-zinc-800/0" 
                            />
                            <div className="relative">
                                <motion.div 
                                    whileHover={{ scale: 1.1, rotate: 5 }}
                                    className="mb-4 flex h-12 w-12 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 group-hover:border-zinc-500 group-hover:bg-zinc-700 transition-colors"
                                >
                                    <card.icon className={`h-5 w-5 text-zinc-300 transition-colors ${card.color}`} />
                                </motion.div>
                                <h3 className="mb-3 text-xl font-semibold text-white group-hover:text-white transition-colors">{card.title}</h3>
                                <p className="mb-4 text-zinc-400 group-hover:text-zinc-200 transition-colors">{card.desc}</p>
                                <motion.div 
                                    initial={{ width: "3rem" }}
                                    whileHover={{ width: "100%" }}
                                    className="h-px bg-zinc-800 group-hover:bg-zinc-500 transition-all duration-500" 
                                />
                            </div>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.6} direction="up" className="mt-12 text-center">
                <p className="text-base leading-relaxed text-zinc-300 sm:text-lg max-w-2xl mx-auto">
                    <span className="font-medium text-white">Strong enough</span> to protect (no drama in transit) •{' '}
                    <span className="font-medium text-white">Premium look</span> that screams "expensive stuff inside" •{' '}
                    <span className="font-medium text-white">Custom designs</span> that make unboxing feel like an event
                </p>
            </FadeIn>

            <FadeIn delay={0.8} direction="up" className="mt-10 flex justify-center">
                <PrimaryButton className="px-8 py-4 text-base">Get Your Custom Box</PrimaryButton>
            </FadeIn>
        </section>
    );
}

export default WhyRigidBoxes;