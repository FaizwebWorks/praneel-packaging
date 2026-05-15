import {
    ArrowRight,
    CheckCircle2,
    PackageCheck,
    RotateCw,
    Sparkles,
    XCircle,
} from "lucide-react";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { motion as Motion } from "framer-motion";
import after from "/praneel.png";
import before from "/ordinary.png";
import YuccaButton from "./YuccaButton";

gsap.registerPlugin(ScrollTrigger);

const MOMENTS = [
    {
        icon: PackageCheck,
        label: "Shipping",
        from: "Parcel protected",
        to: "Gift-like arrival",
    },
    {
        icon: Sparkles,
        label: "Unboxing",
        from: "Quick tear",
        to: "Slower reveal",
    },
    {
        icon: RotateCw,
        label: "After use",
        from: "Thrown away",
        to: "Kept on display",
    },
];

function WhyRigidBoxes() {
    const sectionRef = useRef(null);
    const stageRef = useRef(null);
    const afterRef = useRef(null);
    const beforeRef = useRef(null);
    const headingRef = useRef(null);
    const momentsRef = useRef([]);

    useEffect(() => {
        if (
            !sectionRef.current ||
            window.matchMedia("(prefers-reduced-motion: reduce)").matches
        )
            return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {
                gsap.fromTo(
                    afterRef.current,
                    { scale: 1.08, yPercent: -3 },
                    {
                        scale: 1.04,
                        yPercent: 4,
                        ease: "none",
                        scrollTrigger: {
                            trigger: stageRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.9,
                        },
                    }
                );

                gsap.fromTo(
                    momentsRef.current,
                    { y: 54, opacity: 0 },
                    {
                        y: 0,
                        opacity: 1,
                        duration: 0.9,
                        ease: "power3.out",
                        stagger: 0.09,
                        scrollTrigger: {
                            trigger: stageRef.current,
                            start: "top 58%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            mm.add("(max-width: 767px)", () => {
                gsap.set(afterRef.current, { scale: 1, yPercent: 0 });
                gsap.set(momentsRef.current, { clearProps: "all" });
            });

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative z-10 overflow-hidden bg-[#FFFDF5] text-[#1D1D1B]"
        >
            <div className="pointer-events-none absolute inset-x-0 top-0 h-32 bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/92 to-[#FFFDF5]/0 sm:h-40" />
            <div className="pointer-events-none absolute -right-[40vw] top-20 h-[22rem] w-[85vw] rounded-full bg-[#1E56A0]/[0.045] blur-3xl sm:-right-[28vw] sm:h-[30rem] sm:w-[65vw] lg:-right-[18vw] lg:top-24 lg:h-[34rem] lg:w-[52vw]" />
            <div className="pointer-events-none absolute -left-[42vw] bottom-20 h-[24rem] w-[90vw] rounded-full bg-[#F07020]/[0.04] blur-3xl sm:-left-[30vw] sm:h-[30rem] sm:w-[70vw] lg:-left-[18vw] lg:h-[36rem] lg:w-[54vw]" />

            <div className="relative mx-auto max-w-[1440px] px-4 py-14 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-14">
                <div className="grid gap-7 sm:gap-9 lg:grid-cols-[0.82fr_1.18fr] lg:items-top lg:gap-16">
                    <Motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                    >
                        <h2
                            ref={headingRef}
                            className="heading-font max-w-[10ch] text-[clamp(3.4rem,15vw,5.8rem)] font-[200] leading-[0.9] tracking-[-0.04em] will-change-transform sm:max-w-[9ch] sm:text-[clamp(4.8rem,12vw,7rem)] lg:text-[clamp(3rem,7.4vw,7rem)]"
                        >
                            Make the box sell.
                        </h2>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{
                            delay: 0.12,
                            duration: 0.85,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="max-w-2xl lg:ml-auto"
                    >
                        <p className="max-w-[34rem] text-[1.05rem] font-[300] leading-7 text-[#1D1D1B]/72 sm:text-2xl sm:leading-9">
                            Rigid packaging turns delivery into a reveal: stronger in hand,
                            richer on camera, and good enough to keep.
                        </p>

                        <div className="mt-7 flex w-full flex-col gap-3 min-[420px]:flex-row min-[420px]:flex-wrap min-[420px]:items-center sm:mt-8">
                            <YuccaButton href="#services" variant="blue">
                                See Box Types
                            </YuccaButton>

                            <YuccaButton
                                href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20compare%20ordinary%20packaging%20with%20premium%20rigid%20boxes"
                                external
                                variant="outline"
                            >
                                Upgrade Mine
                            </YuccaButton>
                        </div>
                    </Motion.div>
                </div>

                <Motion.div
                    ref={stageRef}
                    initial={{ opacity: 0, y: 34 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-120px" }}
                    transition={{
                        duration: 0.9,
                        ease: [0.22, 1, 0.36, 1],
                    }}
                    className="group relative mt-10 overflow-hidden rounded-[1.15rem] bg-[#1D1D1B] sm:mt-12 sm:rounded-[1.35rem] md:min-h-[52rem] lg:mt-16 lg:min-h-[42rem]"
                >
                    <img
                        ref={afterRef}
                        src={after}
                        alt="Premium rigid packaging box"
                        className="hidden md:absolute md:inset-0 md:block md:h-full md:w-full md:object-cover md:object-center md:pp-premium-drift md:will-change-transform"
                    />

                    <div className="hidden md:absolute md:inset-0 md:block md:bg-[linear-gradient(180deg,rgba(29,29,27,0.30)_0%,rgba(29,29,27,0.28)_28%,rgba(29,29,27,0.72)_72%,rgba(29,29,27,0.82)_100%)] lg:bg-[linear-gradient(90deg,rgba(29,29,27,0.68)_0%,rgba(29,29,27,0.30)_37%,rgba(29,29,27,0.08)_70%,rgba(29,29,27,0.30)_100%)]" />
                    <div className="hidden md:absolute md:inset-0 md:block md:pp-luxury-shimmer" />

                    <div className="absolute left-4 top-4 z-20 flex items-center gap-2 rounded-full border border-[#FFFDF5]/24 bg-[#1D1D1B]/48 px-3 py-2 text-[0.62rem] uppercase tracking-[0.16em] text-[#FFFDF5]/88 backdrop-blur-xl sm:left-8 sm:top-8 sm:px-4 sm:text-xs sm:tracking-[0.18em] md:bg-[#FFFDF5]/14 md:text-[#FFFDF5]/78">
                        <CheckCircle2
                            className="h-3.5 w-3.5 text-[#F07020] sm:h-4 sm:w-4"
                            strokeWidth={1.5}
                        />
                        Premium rigid box
                    </div>

                    <div className="relative h-[24rem] overflow-hidden md:hidden">
                        <img
                            src={after}
                            alt="Premium rigid packaging box"
                            className="h-full w-full object-cover object-[58%_50%]"
                        />
                        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(29,29,27,0.08)_0%,rgba(29,29,27,0.18)_52%,rgba(29,29,27,0.72)_100%)]" />
                    </div>

                    <Motion.div
                        ref={beforeRef}
                        initial={{ opacity: 0, x: -18, y: 0 }}
                        whileInView={{ opacity: 1, x: 0, y: 0 }}
                        viewport={{ once: true }}
                        transition={{
                            delay: 0.2,
                            duration: 0.55,
                            ease: [0.22, 1, 0.36, 1],
                        }}
                        className="relative z-20 mx-4 -mt-16 w-[calc(100%-2rem)] max-w-[22rem] overflow-hidden rounded-[0.9rem] border border-[#FFFDF5]/34 bg-[#FFFDF5]/90 shadow-[0_20px_55px_rgba(29,29,27,0.24)] sm:mx-8 sm:-mt-[4.5rem] sm:w-[18rem] md:absolute md:left-8 md:top-20 md:mx-0 md:mt-0 md:w-[19rem] md:bg-[#FFFDF5]/84 lg:left-8 lg:top-5 lg:mt-16 lg:w-[20rem]"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F0E4]">
                            <img
                                src={before}
                                alt="Ordinary cardboard box"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#FFFDF5]/16" />
                        </div>

                        <div className="flex items-center justify-between gap-2 border-t border-[#1D1D1B]/10 px-3 py-2 text-[#1D1D1B]/62 sm:gap-3 sm:px-3.5 sm:py-2.5">
                            <span className="flex items-center gap-1.5 text-[0.58rem] uppercase tracking-[0.13em] sm:gap-2 sm:text-[0.68rem] sm:tracking-[0.16em]">
                                <XCircle className="h-3 w-3 sm:h-3.5 sm:w-3.5" strokeWidth={1.5} />
                                Ordinary box
                            </span>

                            <span className="text-[0.65rem] line-through decoration-[#F07020]/50 sm:text-xs">
                                Forgotten fast
                            </span>
                        </div>
                    </Motion.div>

                    <div className="relative z-10 flex flex-col justify-end p-4 pt-8 sm:p-8 sm:pt-10 md:min-h-[52rem] md:pt-8 lg:min-h-[42rem] lg:p-10">
                        <div className="max-w-[40rem] text-[#FFFDF5] md:ml-auto">
                            <p className="mb-4 text-xs uppercase tracking-[0.2em] text-[#F07020] sm:mb-5 sm:text-sm sm:tracking-[0.22em]">
                                Value shift
                            </p>

                            <h3 className="heading-font max-w-[11ch] text-[clamp(2.7rem,12vw,4.7rem)] font-[200] leading-[0.9] tracking-[-0.045em] sm:max-w-[12ch] sm:text-[clamp(4rem,10vw,6.6rem)] lg:max-w-none lg:text-[clamp(3rem,7vw,7.2rem)]">
                                Same product. Better first impression.
                            </h3>
                        </div>

                        <div className="mt-7 grid gap-3 sm:mt-8 md:grid-cols-3">
                            {MOMENTS.map((moment, index) => (
                                <Motion.div
                                    key={moment.label}
                                    ref={(el) => {
                                        momentsRef.current[index] = el;
                                    }}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{
                                        delay: 0.18 + index * 0.08,
                                        duration: 0.72,
                                        ease: [0.22, 1, 0.36, 1],
                                    }}
                                    className="group/card rounded-[0.95rem] border border-[#FFFDF5]/22 bg-[#FFFDF5]/13 p-4 text-[#FFFDF5] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[#FFFDF5]/18 sm:rounded-[1rem] sm:p-5"
                                >
                                    <div className="mb-5 flex items-center justify-between sm:mb-8">
                                        <span className="grid h-9 w-9 place-items-center rounded-full border border-[#FFFDF5]/20 bg-[#FFFDF5]/12 text-[#F07020] sm:h-10 sm:w-10">
                                            <moment.icon
                                                className="h-4.5 w-4.5 sm:h-5 sm:w-5"
                                                strokeWidth={1.45}
                                            />
                                        </span>
                                    </div>

                                    <h4 className="text-[1.35rem] font-[300] leading-none tracking-[-0.025em] sm:text-[1.55rem] lg:text-[1.7rem]">
                                        {moment.label}
                                    </h4>

                                    <div className="mt-4 border-t border-[#FFFDF5]/18 pt-4 sm:mt-5">
                                        <p className="text-sm font-[300] text-[#FFFDF5]/46 line-through decoration-[#F07020]/70">
                                            {moment.from}
                                        </p>

                                        <div className="mt-2 flex items-center justify-between gap-4 text-sm font-[300] sm:text-base">
                                            <span>{moment.to}</span>
                                            <ArrowRight
                                                className="h-4 w-4 shrink-0 text-[#F07020] transition duration-500 group-hover/card:translate-x-1"
                                                strokeWidth={1.45}
                                            />
                                        </div>
                                    </div>
                                </Motion.div>
                            ))}
                        </div>
                    </div>
                </Motion.div>
            </div>
        </section>
    );
}

export default WhyRigidBoxes;
