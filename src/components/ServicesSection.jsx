import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import magneticBox from "/magnetic-box.png";
import drawerBox from "/drawer-box.png";
import giftBox from "/gift-box.png";
import customBox from "/custom-box.png";
import { PrimaryButton } from "./Button";
import { motion, AnimatePresence } from "framer-motion";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { useState, useRef } from "react";

const services = [
    { 
        id: "magnetic",
        title: "Magnetic Closure", 
        tagline: "The Premium Snap",
        desc: "Experience the satisfying 'click' that defines luxury packaging. Our magnetic boxes are engineered for repeated use and perfect alignment.", 
        img: magneticBox,
        color: "#f59e0b",
        features: ["Hidden Magnets", "Seamless Finish", "Reusable"]
    },
    { 
        id: "drawer",
        title: "Drawer Boxes", 
        tagline: "Smooth Discovery",
        desc: "A slide that delivers instant dopamine. Perfect for high-end electronics, jewelry, and luxury accessories.", 
        img: drawerBox,
        color: "#3b82f6",
        features: ["Ribbon Pulls", "Smooth Friction", "Rigid Shell"]
    },
    { 
        id: "gift",
        title: "Gift Boxes", 
        tagline: "Unforgettable Moments",
        desc: "Designed to be kept, not thrown away. We create first impressions that linger long after the product is revealed.", 
        img: giftBox,
        color: "#a855f7",
        features: ["Premium Foiling", "Textured Paper", "Sturdy Build"]
    },
    { 
        id: "custom",
        title: "Custom Inserts", 
        tagline: "Precision Fit",
        desc: "Protect your product with inserts that fit like a glove. From velvet-flocked EVA to eco-friendly molded pulp.", 
        img: customBox,
        color: "#10b981",
        features: ["EVA Foam", "Velvet Coating", "Custom Shapes"]
    }
];

function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [scrollIndex, setScrollIndex] = useState(0);
    const scrollRef = useRef(null);

    const scrollTo = (index) => {
        setScrollIndex(index);
        const container = scrollRef.current;
        if (container) {
            const cardWidth = container.offsetWidth * 0.8;
            container.scrollTo({
                left: index * (cardWidth + 24),
                behavior: "smooth"
            });
        }
    };

    return (
        <section className="relative z-10 w-full overflow-hidden py-24 sm:py-32">
            {/* Noise Background Overlay */}
            <div className="absolute inset-0 opacity-[0.05] pointer-events-none" 
                // style={{
                //     backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noise'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.85' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noise)'/%3E%3C/svg%3E")`,
                // }} 
            />

            {/* Dynamic Background Glow */}
            <AnimatePresence mode="wait">
                {activeIndex !== -1 && (
                    <motion.div
                        key={activeIndex}
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        exit={{ opacity: 0 }}
                        transition={{ duration: 0.5 }}
                        className="absolute inset-0 pointer-events-none"
                        style={{
                            background: `radial-gradient(circle at 50% 50%, ${services[activeIndex].color}15, transparent 70%)`
                        }}
                    />
                )}
            </AnimatePresence>

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-12 gap-6">
                    <div className="max-w-2xl">
                        <FadeIn direction="none">
                            <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                                Engineering Luxury
                            </span>
                        </FadeIn>
                        <AnimatedText 
                            text="Packaging Styles"
                            className="heading-font text-4xl font-semibold leading-tight text-white sm:text-5xl"
                        />
                    </div>
                    
                    <div className="flex items-center gap-4">
                        <button 
                            onClick={() => scrollTo(Math.max(0, scrollIndex - 1))}
                            className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white transition-all"
                        >
                            <ChevronLeft className="h-6 w-6" />
                        </button>
                        <button 
                            onClick={() => scrollTo(Math.min(services.length - 1, scrollIndex + 1))}
                            className="p-3 rounded-full border border-zinc-800 bg-zinc-900/50 text-zinc-400 hover:text-white transition-all"
                        >
                            <ChevronRight className="h-6 w-6" />
                        </button>
                    </div>
                </div>

                <div 
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto pb-12 no-scrollbar snap-x snap-mandatory"
                >
                    {services.map((service, i) => (
                        <div 
                            key={service.id}
                            className="min-w-[85%] md:min-w-[60%] lg:min-w-[45%] snap-center"
                        >
                            <motion.div 
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseLeave={() => setActiveIndex(-1)}
                                className={`group relative h-[500px] overflow-hidden rounded-[2.5rem] border border-zinc-800 bg-zinc-900/40 transition-all duration-500 cursor-pointer`}
                            >
                                <div className="absolute inset-0 z-0">
                                    <motion.img 
                                        animate={{ scale: activeIndex === i ? 1.1 : 1 }}
                                        src={service.img} 
                                        alt={service.title}
                                        className="w-full h-full object-cover transition-transform duration-700"
                                    />
                                    <div className="absolute inset-0 bg-gradient-to-t from-zinc-950 via-zinc-950/40 to-transparent" />
                                </div>

                                <div className="absolute inset-0 z-20 p-8 lg:p-12 flex flex-col justify-end">
                                    <div className="mb-4">
                                        <motion.span 
                                            animate={{ opacity: activeIndex === i ? 1 : 0.6 }}
                                            className="text-xs uppercase tracking-widest font-bold"
                                            style={{ color: service.color }}
                                        >
                                            {service.tagline}
                                        </motion.span>
                                        <h3 className="text-3xl font-bold text-white mt-2">{service.title}</h3>
                                    </div>
                                    
                                    <AnimatePresence>
                                        {activeIndex === i && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: "auto", opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                transition={{ duration: 0.4, ease: "easeInOut" }}
                                                className="overflow-hidden"
                                            >
                                                <p className="text-zinc-400 text-sm leading-relaxed mb-6 max-w-sm">
                                                    {service.desc}
                                                </p>
                                                <div className="flex flex-wrap gap-2 mb-8">
                                                    {service.features.map(f => (
                                                        <span key={f} className="text-[10px] px-2 py-1 rounded-md bg-white/5 border border-white/10 text-zinc-500">
                                                            {f}
                                                        </span>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <div className="flex items-center gap-2 text-zinc-400 text-sm font-medium group-hover:text-white transition-all">
                                        Details <ArrowRight className="h-4 w-4" />
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-12 flex justify-center items-center gap-3">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`h-1.5 transition-all duration-300 rounded-full ${
                                scrollIndex === i ? "w-8 bg-white" : "w-2 bg-zinc-800 hover:bg-zinc-600"
                            }`}
                        />
                    ))}
                </div>

                <div className="mt-20 text-center">
                    <PrimaryButton icon={ArrowRight} className="px-12 py-5 text-lg rounded-2xl shadow-xl shadow-white/5">
                        Build Your Custom Design
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;