import { ArrowRight } from "lucide-react";
import { motion as Motion } from "framer-motion";
import YuccaButton from "./YuccaButton";

const SOLUTIONS = [
    {
        title: "Rigid Boxes",
        text: "Premium structures for gifting, cosmetics, jewelry, electronics, and brand launches.",
        href: "#services",
    },
    {
        title: "Custom Packaging",
        text: "Designed around your product, insert, opening moment, finish, and brand language.",
        href: "#about",
    },
    {
        title: "Luxury Finishes",
        text: "Foil, ribbons, textured paper, magnetic closures, inserts, and tactile details.",
        href: "#process",
    },
];

const ArrowPair = () => (
    <span className="yucca-arrow h-6 w-6">
        <ArrowRight className="h-6 w-6" strokeWidth={1.6} />
        <ArrowRight className="h-6 w-6" strokeWidth={1.6} />
    </span>
);

function HeroSection() {
    return (
        <section className="relative z-10 min-h-screen overflow-hidden bg-[#FFFDF5] text-[#1D1D1B]">
            <picture className="absolute inset-0 block">
                <source media="(max-width: 767px)" srcSet="/hero-mobile.png" />
                <img
                    src="/hero-desktop.png"
                    alt="Premium Praneel rigid packaging boxes"
                    className="h-full w-full object-cover object-center max-[767px]:object-[50%_61%] md:gsap-parallax"
                />
            </picture>

            <div className="pointer-events-none absolute inset-0 bg-[linear-gradient(90deg,rgba(255,253,245,0.97)_0%,rgba(255,253,245,0.82)_31%,rgba(255,253,245,0.16)_60%,rgba(255,253,245,0)_100%)] md:bg-[linear-gradient(90deg,rgba(255,253,245,0.96)_0%,rgba(255,253,245,0.72)_32%,rgba(255,253,245,0.06)_60%,rgba(255,253,245,0)_100%)]" />
            <div className="pointer-events-none absolute inset-x-0 bottom-0 h-[39vh] bg-gradient-to-t from-[#FFFDF5] via-[#FFFDF5]/70 to-transparent md:hidden" />
            <div className="pointer-events-none absolute bottom-[22.5rem] right-6 hidden h-px w-24 bg-[#1D1D1B]/20 max-[767px]:block" />

            <div className="relative mx-auto flex min-h-screen w-full max-w-[1440px] flex-col px-6 pt-20 sm:px-8 md:pt-24 lg:px-12 xl:px-14">
                <div className="flex flex-1 items-start pb-8 pt-8 max-[767px]:min-h-[29.5rem] max-[767px]:pb-0 max-[767px]:pt-7 md:items-center md:pb-44 md:pt-0">
                    <Motion.div
                        initial={{ opacity: 0, y: 24 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-[42rem] max-[767px]:max-w-[22rem]"
                    >
                        <h1 className="heading-font max-w-[11.5ch] text-[clamp(2.85rem,8.2vw,7.35rem)] font-[200] leading-[0.94] tracking-[-0.025em] text-[#1D1D1B] max-[767px]:text-[3.05rem]">
                            Packaging that Performs.
                        </h1>

                        <Motion.p
                            initial={{ opacity: 0, y: 16 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.22, duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-5 max-w-md text-base font-[300] leading-7 text-[#12271D] sm:text-lg max-[767px]:mt-4 max-[767px]:max-w-[20rem] max-[767px]:text-[0.94rem] max-[767px]:leading-6"
                        >
                            Luxury rigid boxes engineered for brands that care about the first touch, the reveal, and the memory after unboxing.
                        </Motion.p>

                        <Motion.div
                            initial={{ opacity: 0, y: 14 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.38, duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
                            className="mt-7 flex flex-wrap items-center gap-2.5 max-[767px]:mt-6"
                        >
                            <YuccaButton
                                href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20start%20a%20premium%20packaging%20project%20with%20Praneel%20Packaging"
                                external
                                variant="blue"
                                className="max-[767px]:h-10 max-[767px]:min-w-[5.8rem] max-[767px]:text-[0.78rem]"
                            >
                                Get Quote
                            </YuccaButton>

                            <YuccaButton
                                href="#services"
                                variant="outline"
                                className="max-[767px]:h-10 max-[767px]:min-w-[6.6rem] max-[767px]:text-[0.78rem]"
                            >
                                Explore Boxes
                            </YuccaButton>
                        </Motion.div>
                    </Motion.div>
                </div>

                <Motion.div
                    initial={{ opacity: 0, y: 32 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.5, duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="relative z-20 mb-4 grid overflow-hidden rounded-[1.15rem] border border-[#1D1D1B]/18 bg-[#FFFDF5]/84 backdrop-blur-xl max-[767px]:mx-auto max-[767px]:mb-7 max-[767px]:w-full max-[767px]:max-w-[22.5rem] max-[767px]:shadow-[0_24px_70px_rgba(29,29,27,0.13)] md:absolute md:bottom-6 md:left-8 md:right-8 md:mb-0 md:grid-cols-3 md:rounded-[1.35rem] lg:left-12 lg:right-12 xl:left-14 xl:right-14"
                >
                    {SOLUTIONS.map((solution) => (
                        <a
                            key={solution.title}
                            href={solution.href}
                            className="group relative min-h-[4.35rem] overflow-hidden border-b border-[#1D1D1B]/14 px-5 py-3 transition-all duration-500 last:border-b-0 hover:bg-[#FFFDF5] hover:text-[#1E56A0] md:min-h-[10.5rem] md:border-b-0 md:border-r md:px-6 md:py-5 md:last:border-r-0"
                        >
                            {/* <span className="pointer-events-none absolute right-4 top-4 h-8 w-8 rounded-full border border-[#1D1D1B]/10 opacity-0 transition-all duration-500 group-hover:translate-x-1 group-hover:opacity-100 max-[767px]:hidden" /> */}

                            <div className="flex h-full flex-col justify-between gap-4 max-[767px]:flex-row max-[767px]:items-center max-[767px]:gap-3">
                                <div>
                                    <h3 className="relative h-8 overflow-hidden text-[1.28rem] font-[300] leading-none tracking-[-0.015em] text-[#1D1D1B] max-[767px]:h-7 max-[767px]:text-[1.35rem] md:text-[1.75rem]">
                                        <span className="block transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                                            {solution.title}
                                        </span>
                                        <span className="absolute left-0 top-full block text-[#1E56A0] transition-transform duration-700 ease-[cubic-bezier(0.22,1,0.36,1)] group-hover:-translate-y-full">
                                            {solution.title}
                                        </span>
                                    </h3>
                                    <p className="mt-2 max-w-sm text-sm font-[300] leading-5 text-[#1D1D1B]/66 max-[767px]:hidden md:mt-3 md:text-[0.95rem] md:leading-6">
                                        {solution.text}
                                    </p>
                                </div>

                                <span className="inline-flex items-center justify-between text-sm font-[500] text-[#1D1D1B] transition-transform duration-500 group-hover:translate-x-1 max-[767px]:shrink-0">
                                    <span className="max-[767px]:hidden">Tell me more</span>
                                    <span className="text-[#1E56A0]">
                                        <ArrowPair />
                                    </span>
                                </span>
                            </div>
                        </a>
                    ))}
                </Motion.div>
            </div>
        </section>
    );
}

export default HeroSection;
