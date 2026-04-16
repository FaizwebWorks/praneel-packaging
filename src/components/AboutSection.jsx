import { Gem, Shield, Sparkles } from "lucide-react";
import aboutImg from "/aboutimg.png";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn, ScaleIn } from "./AnimatedText";

function AboutSection() {
    return (
        <section id="about" className="relative z-10 w-full overflow-hidden">
            <motion.div 
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute inset-0 overflow-hidden pointer-events-none"
            >
                <div className="absolute top-1/4 left-0 h-96 w-96 rounded-full bg-gradient-to-r from-amber-500/10 to-transparent blur-3xl" />
                <div className="absolute bottom-1/4 right-0 h-96 w-96 rounded-full bg-gradient-to-l from-cyan-500/10 to-transparent blur-3xl" />
            </motion.div>
            
            <div className="relative mx-auto max-w-7xl px-4 py-24 sm:px-6 sm:py-28 lg:px-8 lg:py-32">
                <div className="grid items-center gap-12 lg:grid-cols-2 lg:gap-16">
                    <div>
                        <FadeIn direction="none">
                            <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-zinc-500">
                                About Us
                            </span>
                        </FadeIn>
                        
                        <AnimatedText 
                            text="We Make Boxes… But Not 'Just Boxes'"
                            className="heading-font mb-6 text-3xl font-semibold leading-tight text-white sm:text-4xl lg:text-5xl"
                        />
                        
                        <div className="space-y-5 text-base leading-relaxed text-zinc-300 sm:text-lg">
                            <FadeIn delay={0.2}>
                                <p>
                                    Let's be honest… anyone can make a box.
                                </p>
                            </FadeIn>
                            
                            <FadeIn delay={0.3}>
                                <p>
                                    But making a box that people <span className="font-medium text-white">don't want to throw away</span>? That's an art.
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
                                        // whileHover={{ x: 10 }}
                                        className="flex items-start gap-4 group cursor-default"
                                    >
                                        <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-full border border-zinc-700 bg-zinc-800/50 group-hover:border-zinc-400 group-hover:bg-zinc-700/50 transition-all duration-300">
                                            <item.icon className="h-4 w-4 text-zinc-300 group-hover:text-white transition-colors" />
                                        </div>
                                        <div>
                                            <h3 className="mb-1 font-medium text-white group-hover:text-amber-200 transition-colors">{item.title}</h3>
                                            <p className="text-sm text-zinc-400 group-hover:text-zinc-300 transition-colors">{item.desc}</p>
                                        </div>
                                    </motion.div>
                                </FadeIn>
                            ))}
                        </div>

                        <FadeIn delay={0.8} direction="up" className="mt-10 border-l-2 border-zinc-700 pl-6">
                            <p className="text-base leading-relaxed text-zinc-400 italic">
                                Because rigid boxes aren't just packaging — they're your product's first impression, bodyguard, and hype man all in one.
                            </p>
                        </FadeIn>
                    </div>

                    <ScaleIn delay={0.4} className="relative hidden lg:block">
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.05, 1],
                                rotate: [0, 1, 0]
                            }}
                            transition={{ 
                                duration: 10, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="absolute -left-8 -top-8 h-32 w-32 rounded-full bg-gradient-to-br from-amber-500/20 to-purple-500/20 blur-3xl" 
                        />
                        <motion.div 
                            animate={{ 
                                scale: [1, 1.1, 1],
                                rotate: [0, -1, 0]
                            }}
                            transition={{ 
                                duration: 8, 
                                repeat: Infinity, 
                                ease: "easeInOut" 
                            }}
                            className="absolute -bottom-8 -right-8 h-32 w-32 rounded-full bg-gradient-to-br from-cyan-500/20 to-purple-500/20 blur-3xl" 
                        />
                        
                        <motion.div 
                            whileHover={{ scale: 1.02, rotateY: 5 }}
                            transition={{ type: "spring", stiffness: 200, damping: 20 }}
                            style={{ perspective: 1000 }}
                            className="relative overflow-hidden rounded-3xl border border-zinc-800/50 bg-zinc-900/30 backdrop-blur-sm shadow-2xl shadow-black/40"
                        >
                            <img
                                src={aboutImg}
                                alt="About Praneel Packaging"
                                className="w-full h-full object-cover"
                            />
                        </motion.div>
                    </ScaleIn>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;