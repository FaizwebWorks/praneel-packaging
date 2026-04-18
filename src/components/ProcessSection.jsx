import { MessageSquare, PenTool, Factory, ArrowRight, CheckCircle2 } from "lucide-react";
import { PrimaryButton } from "./Button";
import { FadeIn } from "./AnimatedText";

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
    return (
        <section id="process" className="relative z-10 w-full overflow-hidden py-24 sm:py-32">
            <div className="absolute inset-0 opacity-[0.03] pointer-events-none" />

            <div className="relative mx-auto max-w-5xl px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-24">
                    <FadeIn direction="none">
                        <span className="mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#1E56A0]/70 font-bold">
                            Production Pipeline
                        </span>
                    </FadeIn>
                    <FadeIn direction="none" delay={0.2}>
                        <h2 className="heading-font text-4xl font-semibold leading-tight text-[#1E56A0] sm:text-5xl">
                            From Vision to Unboxing
                        </h2>
                    </FadeIn>
                </div>

                <div className="relative">
                    <div className="absolute left-8 lg:left-1/2 top-0 bottom-0 w-px bg-[#1E56A0]/60 -translate-x-1/2" />

                    <div className="space-y-24">
                        {steps.map((step, i) => (
                            <div key={step.id} className={`relative flex flex-col ${i % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} items-center gap-12 lg:gap-24`}>
                                <div className="absolute left-8 lg:left-1/2 top-0 -translate-x-1/2 w-4 h-4 rounded-full bg-[#1E56A0] border-2 border-[#1E56A0]/70 z-20" />
                                
                                <div className={`w-full lg:w-1/2 pl-16 lg:pl-0 ${i % 2 === 0 ? 'lg:text-right' : 'lg:text-left'}`}>
                                    <FadeIn direction={i % 2 === 0 ? "right" : "left"}>
                                        <div className="group relative">
                                            <div className={`mb-6 flex h-14 w-14 items-center justify-center rounded-2xl border border-[#455A64]/10 bg-[#1E56A0]/10 ${i % 2 === 0 ? 'lg:ml-auto' : ''}`}>
                                                <step.icon className="h-6 w-6 text-[#1E56A0]" />
                                            </div>
                                            <div className={`flex items-center gap-3 mb-4 ${i % 2 === 0 ? 'lg:justify-end' : ''}`}>
                                                <span className="text-xs font-black tracking-widest text-[#1E56A0]/70">{step.id}</span>
                                                {/* <div className="h-px w-8 bg-[#1E56A0]/60" /> */}
                                            </div>
                                            <h3 className="text-2xl heading-font font-bold text-[#1E56A0] mb-4">{step.title}</h3>
                                            <p className="text-[#455A64] leading-relaxed text-sm">
                                                {step.desc}
                                            </p>
                                        </div>
                                    </FadeIn>
                                </div>

                                <div className="hidden lg:block lg:w-1/2" />
                            </div>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.8} direction="up">
                    <div className="mt-24 flex flex-col items-center">
                        <div className="inline-flex items-center gap-2 rounded-full border border-[#455A64]/10 bg-[#1E56A0]/10 px-6 py-2 text-sm text-[#455A64] backdrop-blur-sm mb-10">
                            <CheckCircle2 className="h-4 w-4 text-[#1E56A0]" />
                            <span className="text-[#1E56A0] heading-font">Average turnaround: <span className="text-[#455A64] font-medium">12-15 business days</span></span>
                        </div>
                        
                        <PrimaryButton href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20start%20the%20discovery%20process%20for%20my%20packaging%20project" className="px-12 py-5 text-lg rounded-2xl shadow-2xl shadow-amber-500/5 group">
                            Start Your Discovery <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform" />
                        </PrimaryButton>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export default ProcessSection;