import {
    ArrowRight,
    Box,
    CheckCircle2,
    ShieldCheck,
    Sparkles,
    Star,
    XCircle,
} from "lucide-react";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { PrimaryButton } from "./Button";
import topBottomBox from "/top-bottom-box.webp";
import shoulderNeckBox from "/shoulder-neck-box.webp";
import collapsibleBox from "/collapsible-box.webp";

const differentiators = [
    {
        icon: ShieldCheck,
        title: "Holds shape beautifully",
        desc: "High-density rigid construction keeps corners crisp through storage, shipping, and gifting.",
    },
    {
        icon: Sparkles,
        title: "Feels like part of the product",
        desc: "Texture, weight, and closure detail create a premium first impression before the product is touched.",
    },
    {
        icon: Box,
        title: "Built for custom storytelling",
        desc: "From inserts to foil, ribbon, and layered reveals, every detail can match your brand language.",
    },
];

// const highlights = [
//     { label: "Rigid board core", value: "Structure" },
//     { label: "Luxury unboxing", value: "Experience" },
//     { label: "Kept, reused, displayed", value: "Retention" },
// ];

function WhyRigidBoxes() {
    return (
        <section className="relative z-10 w-full overflow-hidden py-20 sm:py-24 lg:py-32">
            {/* <div className="pointer-events-none absolute inset-0 overflow-hidden">
                <div className="absolute left-[-8rem] top-20 h-56 w-56 rounded-full bg-[#1E56A0]/10 blur-3xl sm:h-72 sm:w-72" />
                <div className="absolute bottom-0 right-[-6rem] h-64 w-64 rounded-full bg-amber-300/20 blur-3xl sm:h-80 sm:w-80" />
            </div> */}

            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="mb-10 flex flex-col gap-4 text-center sm:mb-14 lg:mb-16">
                    <FadeIn direction="none">
                        <span className="inline-block text-xs uppercase tracking-[0.24em] text-[#1E56A0]/70">
                            Why Rigid Boxes
                        </span>
                    </FadeIn>
                    <AnimatedText
                        text="Packaging That Looks Expensive Because It Feels Intentional"
                        className="heading-font mx-auto max-w-4xl justify-center text-3xl font-semibold leading-tight text-[#1E56A0] sm:text-4xl lg:text-5xl"
                    />
                    <FadeIn delay={0.15} direction="up">
                        <p className="mx-auto max-w-2xl text-sm leading-relaxed text-[#455A64] sm:text-base">
                            Rigid boxes do more than protect the product. They frame it, slow the moment down,
                            and turn packaging into something customers notice, keep, and remember.
                        </p>
                    </FadeIn>
                </div>

                <div className="grid items-start gap-5 lg:grid-cols-12 lg:gap-7">
                    <FadeIn delay={0.2} direction="up" className="h-full lg:col-span-7">
                        <div className="relative overflow-hidden rounded-[2rem] border border-[#1E56A0]/12 bg-white/80 p-5 shadow-[0_30px_80px_rgba(30,86,160,0.08)] backdrop-blur-sm sm:p-6 lg:p-6">
                            <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_left,_rgba(30,86,160,0.10),_transparent_45%),radial-gradient(circle_at_bottom_right,_rgba(245,158,11,0.10),_transparent_35%)]" />

                            <div className="relative z-10">
                                <div className="mx-auto w-full max-w-4xl">
                                    <div className="mb-4 inline-flex items-center gap-2 rounded-full border border-[#1E56A0]/15 bg-[#1E56A0]/6 px-3 py-1.5 text-[10px] font-medium uppercase tracking-[0.18em] text-[#1E56A0]">
                                        <Star className="h-3.5 w-3.5" />
                                        Premium Perception
                                    </div>

                                    <h3 className="heading-font max-w-3xl text-[1.7rem] font-semibold leading-[1.08] text-[#1E56A0] sm:text-[2rem] lg:text-[2.2rem]">
                                        Your packaging should raise the product value before the lid even opens.
                                    </h3>

                                    <p className="mt-3 max-w-[38rem] text-[14px] leading-relaxed text-[#455A64] sm:text-[15px]">
                                        Corrugated packaging solves shipping. Rigid packaging solves presentation,
                                        protection, and brand recall at the same time.
                                    </p>

                                    <div className="relative mt-5 overflow-hidden rounded-[1.65rem] border border-[#1E56A0]/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.9),rgba(247,248,250,0.9))] px-4 py-5 sm:px-5 lg:px-6">
                                        <div className="absolute left-1/2 top-0 hidden h-full w-px -translate-x-1/2 bg-gradient-to-b from-transparent via-[#1E56A0]/12 to-transparent md:block" />
                                        <div className="absolute inset-x-[20%] top-1/2 hidden h-px -translate-y-1/2 bg-gradient-to-r from-[#EF4444]/20 via-[#1E56A0]/10 to-[#10B981]/20 md:block" />

                                        <div className="relative grid gap-6 md:grid-cols-[1fr_auto_1fr] md:items-center">
                                            <div className="text-left">
                                                <div className="mb-2 flex items-center gap-2 text-red-500">
                                                    <XCircle className="h-4 w-4" />
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">
                                                        Ordinary Box
                                                    </span>
                                                </div>
                                                <p className="max-w-sm text-[14px] font-medium leading-relaxed text-[#455A64] sm:text-[15px]">
                                                    Lightweight, crush-prone, and quickly forgotten once the order is opened.
                                                </p>
                                            </div>

                                            <div className="flex items-center justify-center">
                                                <div className="rounded-full border border-[#1E56A0]/12 bg-white px-3 py-1.5 text-[9px] font-semibold uppercase tracking-[0.22em] text-[#1E56A0] shadow-[0_10px_24px_rgba(30,86,160,0.08)] sm:text-[10px]">
                                                    vs upgrade
                                                </div>
                                            </div>

                                            <div className="text-left md:text-right">
                                                <div className="mb-2 flex items-center gap-2 text-emerald-600 md:justify-end">
                                                    <span className="text-[10px] font-semibold uppercase tracking-[0.22em] sm:text-[11px]">
                                                        Rigid Box
                                                    </span>
                                                    <CheckCircle2 className="h-4 w-4" />
                                                </div>
                                                <p className="ml-auto max-w-sm text-[14px] font-medium leading-relaxed text-[#1E56A0] sm:text-[15px]">
                                                    Sturdy, tactile, and premium enough to become part of the gift itself.
                                                </p>
                                            </div>
                                        </div>
                                    </div>

                                    <div className="relative mt-4 min-h-[15rem] sm:min-h-[18rem] lg:min-h-[14rem]">
                                    <div className="pointer-events-none absolute inset-x-0 top-4 h-px bg-gradient-to-r from-transparent via-[#1E56A0]/10 to-transparent" />
                                    <motion.div
                                        whileHover={{ y: -6, rotate: -1 }}
                                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                                        className="absolute left-0 top-5 w-[34%] overflow-hidden rounded-[1.5rem] border border-white/80 shadow-2xl shadow-[#1E56A0]/15"
                                    >
                                        <img
                                            src={topBottomBox}
                                            alt="Top and bottom rigid box"
                                            className="h-32 w-full object-cover sm:h-36 lg:h-40"
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -6, rotate: 1.5 }}
                                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                                        className="absolute left-1/2 top-0 z-10 w-[32%] -translate-x-1/2 overflow-hidden rounded-[1.5rem] border border-white/80 shadow-2xl shadow-black/10"
                                    >
                                        <img
                                            src={collapsibleBox}
                                            alt="Collapsible rigid box"
                                            className="h-40 w-full object-cover sm:h-44 lg:h-48"
                                        />
                                    </motion.div>

                                    <motion.div
                                        whileHover={{ y: -6, scale: 1.01 }}
                                        transition={{ type: "spring", stiffness: 180, damping: 18 }}
                                        className="absolute right-0 top-7 w-[34%] overflow-hidden rounded-[1.5rem] border border-white/80 shadow-[0_24px_60px_rgba(0,0,0,0.14)]"
                                    >
                                        <img
                                            src={shoulderNeckBox}
                                            alt="Shoulder neck rigid box"
                                            className="h-32 w-full object-cover sm:h-36 lg:h-40"
                                        />
                                    </motion.div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <div className="grid gap-6 sm:grid-cols-2 lg:col-span-5 lg:grid-cols-1">
                        {differentiators.map((item, index) => (
                            <FadeIn
                                key={item.title}
                                delay={0.3 + index * 0.1}
                                direction="up"
                                className="h-full"
                            >
                                <div className="group relative flex h-full flex-col justify-between overflow-hidden rounded-[2rem] border border-[#1E56A0]/10 bg-[#FCFCFC]/90 p-6 transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_22px_60px_rgba(30,86,160,0.10)] sm:p-7">
                                    <div className="absolute right-0 top-0 h-28 w-28 translate-x-1/3 -translate-y-1/3 rounded-full bg-[#1E56A0]/6 blur-2xl transition-transform duration-500 group-hover:scale-125" />
                                    <div className="relative z-10">
                                        <div className="mb-5 flex h-12 w-12 items-center justify-center rounded-2xl border border-[#1E56A0]/12 bg-white text-[#1E56A0] shadow-sm">
                                            <item.icon className="h-5 w-5" />
                                        </div>
                                        <h3 className="text-xl font-semibold text-[#1E56A0]">{item.title}</h3>
                                        <p className="mt-3 text-sm leading-relaxed text-[#455A64] sm:text-[15px]">
                                            {item.desc}
                                        </p>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>
                </div>

                <FadeIn delay={0.65} direction="up">
                    <div className="relative mt-8 overflow-hidden rounded-[2rem] border border-[#1E56A0]/12 bg-[linear-gradient(135deg,#103D77_0%,#1E56A0_42%,#345B84_72%,#56718C_100%)] px-5 py-6 text-white shadow-[0_28px_60px_rgba(30,86,160,0.18)] sm:px-7 sm:py-7 lg:mt-10 lg:px-8">
                        <div className="pointer-events-none absolute inset-0">
                            <div className="absolute inset-0 bg-[linear-gradient(120deg,rgba(255,255,255,0.08),transparent_35%,transparent_62%,rgba(255,255,255,0.06)_100%)]" />
                            <div className="absolute -left-10 top-1/2 h-32 w-32 -translate-y-1/2 rounded-full bg-white/10 blur-3xl" />
                            <div className="absolute right-0 top-0 h-28 w-28 translate-x-1/4 -translate-y-1/4 rounded-full bg-amber-200/20 blur-3xl" />
                        </div>

                        <div className="relative z-10 flex flex-col gap-6 lg:flex-row lg:items-center lg:justify-between">
                            <div className="max-w-2xl">
                                <p className="text-xs uppercase tracking-[0.2em] text-white/65">Designed To Be Remembered</p>
                                <p className="mt-2 text-lg font-semibold leading-snug sm:text-xl">
                                    Strong enough for transit. Refined enough for gifting. Custom enough to feel unmistakably yours.
                                </p>
                            </div>

                            <PrimaryButton
                                icon={ArrowRight}
                                href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20upgrade%20my%20brand%20with%20premium%20packaging"
                                className="w-full justify-center border-white/10 bg-[#0D3C76] sm:w-auto"
                            >
                                Start Your Brand Upgrade
                            </PrimaryButton>
                        </div>
                    </div>
                </FadeIn>
            </div>
        </section>
    );
}

export default WhyRigidBoxes;
