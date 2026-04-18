import { AlertTriangle, TrendingUp, Zap, Archive, Gem, Eye } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { useState } from "react";

const effects = [
    {
        id: 1,
        IconComponent: Archive,
        title: "Eternal Storage",
        desc: "Customers physically cannot throw the box away. It becomes a permanent part of their home decor.",
        stat: "94%",
        statLabel: "Retention Rate",
        color: "#f59e0b"
    },
    {
        id: 2,
        IconComponent: Zap,
        title: "The Viral Effect",
        desc: "Unboxing videos increase by 300%. Your brand reaches people you didn't even know existed.",
        stat: "+320%",
        statLabel: "Social Reach",
        color: "#3b82f6"
    },
    {
        id: 3,
        IconComponent: Gem,
        title: "Luxury Perception",
        desc: "Your product feels 10x more expensive the second the lid is lifted. Instant price-tag justification.",
        stat: "10x",
        statLabel: "Value Boost",
        color: "#a855f7"
    },
    {
        id: 4,
        IconComponent: Eye,
        title: "Competitor Envy",
        desc: "Your competitors will spend hours studying your packaging in their boardrooms. They'll be very stressed.",
        stat: "High",
        statLabel: "Stress Levels",
        color: "#10b981"
    }
];

function FunFeatureSection() {
    const [hoveredId, setHoveredId] = useState(null);

    return (
        <motion.section
            className="relative z-10 w-full overflow-hidden py-24 sm:py-32"
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
        >
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col items-center text-center mb-20">
                    <div className="mb-6 rounded-full p-4 border border-[#1E56A0]/30 bg-[#1E56A0]/5">
                        <AlertTriangle className="h-8 w-8 text-[#1E56A0]" />
                    </div>

                    <FadeIn direction="none">
                        <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#1E56A0]/70 font-bold">
                            Safety Warning: High Impact Packaging
                        </span>
                    </FadeIn>
                    <AnimatedText
                        text="Documented Side Effects"
                        className="heading-font text-4xl font-semibold leading-tight text-[#1E56A0] sm:text-5xl lg:text-6xl"
                    />
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 lg:gap-12">
                    {effects.map((effect) => (
                        <motion.div
                            key={effect.id}
                            onMouseEnter={() => setHoveredId(effect.id)}
                            onMouseLeave={() => setHoveredId(null)}
                            whileHover={{ scale: 1.02, y: -4 }}
                            className={`relative overflow-hidden rounded-3xl border transition-all duration-500 p-8 lg:p-10 cursor-pointer ${hoveredId === effect.id
                                    ? "border-[#455A64]/10 bg-white"
                                    : "border-[#455A64]/10 bg-white/60 hover:border-[#455A64]/10"
                                }`}
                        >
                            <div className="relative z-10 flex flex-col h-full">
                                <div className="flex items-start justify-between mb-8">
                                    <div
                                        className="rounded-2xl p-4 border border-[#455A64]/10"
                                        style={{ backgroundColor: `${effect.color}10` }}
                                    >
                                        <effect.IconComponent className="w-8 h-8" style={{ color: effect.color }} />
                                    </div>
                                    <div className="text-right">
                                        <div className="text-xs uppercase tracking-widest text-[#455A64] mb-1">{effect.statLabel}</div>
                                        <div
                                            className="text-3xl font-bold"
                                            style={{ color: effect.color }}
                                        >
                                            {effect.stat}
                                        </div>
                                    </div>
                                </div>

                                <h3 className="text-2xl font-bold text-[#1E56A0] mb-4">{effect.title}</h3>
                                <p className="text-[#455A64] leading-relaxed mb-8 flex-grow">
                                    {effect.desc}
                                </p>
                            </div>

                            <span className="absolute -right-4 -top-8 text-[12rem] font-black text-[#455A64]/5 pointer-events-none select-none">
                                0{effect.id}
                            </span>
                        </motion.div>
                    ))}
                </div>

                <FadeIn delay={0.6} direction="up">
                    <motion.div
                        className="mt-20 rounded-[3rem] border border-[#455A64]/10 bg-white/80 backdrop-blur-sm p-10 lg:p-16 relative overflow-hidden"
                        style={{ borderRadius: "3rem" }}
                        whileHover={{ scale: 1.01 }}
                        transition={{ duration: 0.5 }}
                    >
                        <motion.div
                            className="absolute top-0 right-0 p-8 opacity-10"
                            animate={{
                                y: [0, -20, 0],
                                rotate: [0, 5, 0]
                            }}
                            transition={{
                                duration: 4,
                                repeat: Infinity,
                                ease: "easeInOut"
                            }}
                        >
                            <Zap className="h-32 w-32 text-[#1E56A0]" />
                        </motion.div>

                        <div className="grid md:grid-cols-2 gap-10 items-center relative z-10">
                            <div>
                                <h4 className="text-2xl font-bold text-[#1E56A0] mb-4">Ready to trigger these effects?</h4>
                                <p className="text-[#455A64]">
                                    Our packaging laboratory is ready to engineer your brand's next major unboxing event.
                                    Side effects are guaranteed.
                                </p>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4 md:justify-end">
                                <PrimaryButton
                                    icon={TrendingUp}
                                    href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20start%20engineering%20my%20custom%20packaging"
                                    className="px-10 py-5 text-lg rounded-2xl"
                                >
                                    Start Engineering
                                </PrimaryButton>
                            </div>
                        </div>
                    </motion.div>
                </FadeIn>

                <p className="mt-12 text-center text-[#455A64] text-sm flex items-center justify-center gap-2 italic">
                    <Zap className="h-3 w-3" /> Packaging side effects may vary by brand ambition.
                </p>
            </div>
        </motion.section>
    );
}

export default FunFeatureSection;