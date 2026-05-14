import { ArrowRight, Gem, Layers3, ShieldCheck, Sparkles } from "lucide-react";
import { motion as Motion } from "framer-motion";
import aboutImg from "/about-img.png";
import aboutImg2 from "/about2.png";
import aboutImg3 from "/about3.png";
import YuccaButton from "./YuccaButton";

const CAPABILITIES = [
    {
        icon: Gem,
        title: "Premium feel",
        text: "Textures, paper, inserts, and closures selected to make the first touch feel expensive.",
    },
    {
        icon: Layers3,
        title: "Built around product",
        text: "Every structure is shaped around the product, opening moment, and brand story.",
    },
    {
        icon: ShieldCheck,
        title: "Protective by design",
        text: "Rigid construction keeps the product presentation sharp from factory to customer.",
    },
];

const STATS = [
    ["Rigid", "box specialists"],
    ["Custom", "finishes & inserts"],
    ["Brand", "ready structures"],
];

function AboutSection() {
    return (
        <section id="about" className="gsap-section relative z-10 overflow-hidden bg-[#FFFDF5] text-[#1D1D1B]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFFDF5]/0 via-[#FFFDF5]/84 to-[#FFFDF5]" />
            <div className="pointer-events-none absolute -left-[12vw] top-[8rem] h-[34rem] w-[52vw] rounded-full bg-[#F07020]/[0.045] blur-3xl" />
            <div className="pointer-events-none absolute right-[-18vw] top-[4rem] h-[30rem] w-[48vw] rounded-full bg-[#1E56A0]/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-14">
                <div className="grid gap-12 lg:grid-cols-[0.95fr_1.05fr] lg:gap-16">
                    <Motion.div
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-3xl"
                    >
                        {/* <p className="mb-5 text-sm font-[400] uppercase tracking-[0.22em] text-[#1E56A0]">
                            About Praneel
                        </p> */}
                        <h2 className="gsap-heading heading-font max-w-[10.8ch] text-[clamp(3rem,7.2vw,6.9rem)] font-[200] leading-[0.92] tracking-[-0.03em]">
                            We make boxes people keep.
                        </h2>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="flex max-w-2xl flex-col justify-end lg:ml-auto"
                    >
                        <p className="text-xl font-[300] leading-8 text-[#1D1D1B]/76 sm:text-2xl sm:leading-9">
                            Anyone can manufacture a box. We engineer the reveal: the grip, the lift, the finish, and the moment your customer decides the product feels worth more.
                        </p>

                        <div className="mt-8 flex flex-wrap items-center gap-3">
                            <YuccaButton href="#services" variant="blue">
                                Explore Boxes
                            </YuccaButton>
                            <YuccaButton
                                href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20discuss%20a%20custom%20rigid%20box%20with%20Praneel%20Packaging"
                                external
                                variant="outline"
                            >
                                Talk to us
                            </YuccaButton>
                        </div>
                    </Motion.div>
                </div>

                <div className="mt-12 grid gap-8 lg:mt-16 lg:grid-cols-[1.08fr_0.92fr] lg:items-stretch">
                    <Motion.div
                        initial={{ opacity: 0, y: 32 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="group relative min-h-[28rem] overflow-hidden rounded-[1.35rem] border border-[#1D1D1B]/14 bg-[#F6F0E4]"
                    >
                        <img
                            src={aboutImg}
                            alt="Premium rigid boxes made by Praneel Packaging"
                            className="gsap-parallax absolute inset-0 h-full w-full object-cover transition duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:scale-[1.035]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(255,253,245,0.05)_0%,rgba(255,253,245,0.08)_45%,rgba(29,29,27,0.42)_100%)]" />

                        <Motion.div
                            initial={{ opacity: 0, y: 22, rotate: -2 }}
                            whileInView={{ opacity: 1, y: 0, rotate: -1 }}
                            whileHover={{ y: -8, rotate: 0 }}
                            viewport={{ once: true }}
                            transition={{ delay: 0.25, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                            className="absolute bottom-5 left-5 right-5 overflow-hidden rounded-[1rem] border border-[#FFFDF5]/35 bg-[#FFFDF5]/82 p-5 shadow-[0_24px_60px_rgba(29,29,27,0.18)] backdrop-blur-xl sm:bottom-6 sm:left-6 sm:right-auto sm:w-[20rem]"
                        >
                            <div className="mb-4 flex items-center justify-between">
                                <Sparkles className="h-5 w-5 text-[#F07020]" strokeWidth={1.5} />
                                <span className="h-px w-20 bg-[#1D1D1B]/16" />
                            </div>
                            <p className="text-2xl font-[300] leading-tight tracking-[-0.025em] text-[#1D1D1B]">
                                Designed to look valuable before the product is even opened.
                            </p>
                        </Motion.div>
                    </Motion.div>

                    <div className="flex flex-col justify-between gap-8">
                        <div className="grid grid-cols-3 overflow-hidden rounded-[1.15rem] border border-[#1D1D1B]/14">
                            {STATS.map(([value, label]) => (
                                <Motion.div
                                    key={value}
                                    initial={{ opacity: 0, y: 18 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                                    className="gsap-card border-r border-[#1D1D1B]/12 p-4 last:border-r-0 sm:p-5"
                                >
                                    <p className="text-[1.55rem] font-[300] leading-none tracking-[-0.03em] text-[#1E56A0] sm:text-[2.1rem]">
                                        {value}
                                    </p>
                                    <p className="mt-2 text-xs font-[300] uppercase leading-4 tracking-[0.12em] text-[#1D1D1B]/58">
                                        {label}
                                    </p>
                                </Motion.div>
                            ))}
                        </div>

                        <div className="overflow-hidden rounded-[1.15rem] border border-[#1D1D1B]/14 bg-[#FFFDF5]/70">
                            {CAPABILITIES.map((item, index) => (
                                <Motion.div
                                    key={item.title}
                                    initial={{ opacity: 0, x: 18 }}
                                    whileInView={{ opacity: 1, x: 0 }}
                                    viewport={{ once: true, margin: "-80px" }}
                                    transition={{
                                        delay: index * 0.06,
                                        duration: 0.55,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group cursor-pointer border-b border-[#1D1D1B]/12 bg-transparent p-5 transition-colors duration-300 last:border-b-0 hover:bg-[#F5F5F5]/80 sm:p-6"
                                >
                                    <div className="flex items-start gap-4">
                                        <span className="grid h-11 w-11 shrink-0 place-items-center rounded-full border border-[#1D1D1B]/14 bg-[#FFFDF5] text-[#1E56A0] transition-[background-color,color,border-color] duration-300 will-change-auto group-hover:border-[#1E56A0]/35 group-hover:bg-[#1E56A0] group-hover:text-[#FFFDF5]">
                                            <item.icon className="h-5 w-5" strokeWidth={1.45} />
                                        </span>

                                        <div className="min-w-0 flex-1">
                                            <div className="flex items-center justify-between gap-4">
                                                <h3 className="text-[1.45rem] font-[300] leading-none tracking-[-0.02em] text-[#1D1D1B] sm:text-[1.9rem]">
                                                    {item.title}
                                                </h3>

                                                <ArrowRight
                                                    className="h-6 w-6 shrink-0 text-[#1E56A0] transition-transform duration-300 will-change-transform group-hover:translate-x-1"
                                                    strokeWidth={1.45}
                                                />
                                            </div>

                                            <p className="mt-3 max-w-xl text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                                                {item.text}
                                            </p>
                                        </div>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>

                        <div className="grid grid-cols-2 gap-4">
                            {[aboutImg2, aboutImg3].map((src, index) => (
                                <Motion.div
                                    key={src}
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true }}
                                    transition={{ delay: 0.18 + index * 0.08, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                                    className="gsap-card aspect-[4/3] overflow-hidden rounded-[1rem] border border-[#1D1D1B]/12 bg-[#F6F0E4]"
                                >
                                    <img
                                        src={src}
                                        alt={index === 0 ? "Drawer rigid box" : "Magnetic rigid box"}
                                        className="gsap-parallax h-full w-full object-cover transition duration-700 group-hover:scale-105"
                                    />
                                </Motion.div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default AboutSection;
