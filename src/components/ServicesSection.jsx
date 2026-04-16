import { ArrowRight } from "lucide-react";
import magneticBox from "/magnetic-box.png";
import drawerBox from "/drawer-box.png";
import giftBox from "/gift-box.png";
import customBox from "/custom-box.png";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";

const services = [
    { 
        title: "Magnetic Closure", 
        desc: "Because clicks feel satisfying", 
        img: magneticBox,
        color: "from-amber-500/20"
    },
    { 
        title: "Drawer Boxes", 
        desc: "Slide = instant dopamine", 
        img: drawerBox,
        color: "from-blue-500/20"
    },
    { 
        title: "Gift Boxes", 
        desc: "Perfect for \"don't throw this box\" moments", 
        img: giftBox,
        color: "from-purple-500/20"
    },
    { 
        title: "Custom Inserts", 
        desc: "So your product doesn't do gymnastics inside", 
        img: customBox,
        color: "from-emerald-500/20"
    }
];

function ServicesSection() {
    return (
        <section className="relative z-10 mx-auto w-full max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
            <div className="text-center mb-16">
                <FadeIn direction="none">
                    <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                        What We Do
                    </span>
                </FadeIn>
                <AnimatedText 
                    text="What We Create"
                    className="heading-font mx-auto max-w-3xl text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl justify-center"
                />
                <FadeIn delay={0.3}>
                    <p className="mt-6 mx-auto max-w-2xl text-base leading-relaxed text-zinc-300 sm:text-lg">
                        We design rigid boxes that match your brand's personality — whether it's bold, classy, or full-on luxury mode.
                    </p>
                </FadeIn>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 lg:gap-6">
                {services.map((service, i) => (
                    <FadeIn key={i} delay={0.2 + i * 0.1} direction="up">
                        <motion.div 
                            whileHover={{ y: -10, transition: { duration: 0.3 } }}
                            className="group relative overflow-hidden rounded-2xl border border-zinc-800 bg-zinc-900/60 p-4 transition-all duration-500 hover:border-zinc-500 hover:bg-zinc-900/80 shadow-xl hover:shadow-white/5"
                        >
                            <div className={`absolute inset-0 bg-gradient-to-br ${service.color} to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500`} />
                            
                            <div className="relative aspect-square mb-4 overflow-hidden rounded-xl border border-zinc-800/50">
                                <motion.img 
                                    whileHover={{ scale: 1.1 }}
                                    transition={{ duration: 0.6, ease: [0.33, 1, 0.68, 1] }}
                                    src={service.img} 
                                    alt={service.title}
                                    className="w-full h-full object-cover" 
                                />
                            </div>
                            <div className="relative z-10">
                                <h3 className="text-lg font-semibold text-white group-hover:text-amber-200 transition-colors">{service.title}</h3>
                                <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{service.desc}</p>
                            </div>
                        </motion.div>
                    </FadeIn>
                ))}
            </div>

            <FadeIn delay={0.6} direction="up">
                <div className="mt-16 text-center">
                    <div className="inline-flex flex-col items-center gap-3 rounded-2xl border border-zinc-800 bg-zinc-900/50 px-8 py-6 backdrop-blur-sm">
                        <ul className="flex flex-col sm:flex-row items-center gap-4 sm:gap-8 text-base text-zinc-300">
                            <li>Everything is customizable — <span className="font-medium text-white">size</span></li>
                            <li className="hidden sm:inline text-zinc-600">•</li>
                            <li><span className="font-medium text-white">finish</span>, <span className="font-medium text-white">texture</span>, <span className="font-medium text-white">vibe</span></li>
                            <li className="hidden sm:inline text-zinc-600">•</li>
                            <li>even <span className="font-medium text-white">attitude</span></li>
                        </ul>
                    </div>
                </div>
            </FadeIn>

            <FadeIn delay={0.8} direction="up" className="mt-12 flex justify-center">
                <PrimaryButton className="px-8 py-4 text-base">Explore All Services</PrimaryButton>
            </FadeIn>
        </section>
    );
}

export default ServicesSection;