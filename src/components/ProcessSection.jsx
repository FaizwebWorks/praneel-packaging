import { MessageSquare, PenTool, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "./Button";
import { motion, useScroll, useSpring } from "framer-motion";
import { useRef } from "react";
import { AnimatedText, FadeIn } from "./AnimatedText";

const steps = [
    {
        id: "01",
        title: "The Discovery",
        desc: "Share your vision, brand story, and requirements. We listen until we see what you see. Every project starts with understanding your unique brand DNA.",
        icon: MessageSquare,
        color: "amber"
    },
    {
        id: "02",
        title: "The Blueprint",
        desc: "We engineer 3D concepts and premium structural designs that match your brand perfectly. Our designers focus on both aesthetics and structural integrity.",
        icon: PenTool,
        color: "blue"
    },
    {
        id: "03",
        title: "The Assembly",
        desc: "High-precision manufacturing with luxury finishes. Quality control at every single inch ensures your boxes are nothing short of perfection.",
        icon: Factory,
        color: "emerald"
    }
];

function ProcessSection() {
    const containerRef = useRef(null);
    const { scrollYProgress } = useScroll({
        target: containerRef,
        offset: ["start center", "end center"]
    });

    const scaleY = useSpring(scrollYProgress, {
        stiffness: 100,
        damping: 30,
        restDelta: 0.001
    });

    return (
        <section className="relative z-10 w-full overflow-hidden py-24 sm:py-32">
            {/* Background Blueprint Grid */}
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" 
                style={{
                    backgroundImage: `radial-gradient(circle, #fff 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }} 
            />

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <FadeIn direction="none">
                        <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500 font-bold">
                            Production Pipeline
                        </span>
                    </FadeIn>
                    <AnimatedText 
                        text="From Vision to Unboxing"
                        className="heading-font text-4xl font-semibold leading-tight text-white sm:text-5xl"
                    />
                </div>

                <div ref={containerRef} className="relative">
                    {/* Vertical Connection Line */}
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-zinc-800 -translate-x-1/2" />
                    
                    {/* Animated Progress Line */}
                    <motion.div 
                        style={{ scaleY, originY: 0 }}
                        className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-gradient-to-b from-amber-500 via-amber-200 to-transparent -translate-x-1/2 z-10" 
                    />

                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <div key={step.id} className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                                {/* Node Dot */}
                                <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-zinc-950 border-2 border-zinc-800 z-20 group-hover:border-amber-500 transition-colors duration-500" />
                                
                                {/* Content Card */}
                                <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                                        <div className="group relative">
                                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-zinc-800 bg-zinc-900/50 backdrop-blur-xl group-hover:border-zinc-600 transition-all duration-500 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                                                <step.icon className="h-6 w-6 text-zinc-400 group-hover:text-white transition-colors" />
                                            </div>
                                            <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                                <span className="text-xs font-black tracking-widest text-zinc-600 group-hover:text-amber-500 transition-colors">{step.id}</span>
                                                <div className="h-px w-8 bg-zinc-800" />
                                            </div>
                                            <h3 className="text-2xl font-bold text-white mb-4 group-hover:text-amber-200 transition-colors">{step.title}</h3>
                                            <p className="text-zinc-400 leading-relaxed text-sm group-hover:text-zinc-300 transition-colors">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </div>

                                {/* Decorative Placeholder for balanced layout */}
                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.8} direction="up">
                    <div className="mt-24 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-zinc-800 bg-zinc-900/50 px-6 py-2 text-sm text-zinc-400 backdrop-blur-sm mb-10">
                            <CheckCircle2 className="h-4 w-4 text-emerald-500" />
                            <span>Average turnaround: <span className="text-white font-medium">12-15 business days</span></span>
                        </div>
                        
                        <PrimaryButton className="px-12 py-5 text-lg rounded-2xl shadow-2xl shadow-amber-500/5 group">
                            Start Your Discovery <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </PrimaryButton>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export default ProcessSection;