import { ArrowRight, CheckCircle2, PackageCheck, RotateCw, Sparkles, XCircle } from "lucide-react";
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
        if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 768px)", () => {


                gsap.fromTo(
                    afterRef.current,
                    { scale: 1.12, yPercent: -4 },
                    {
                        scale: 1.03,
                        yPercent: 6,
                        ease: "none",
                        scrollTrigger: {
                            trigger: stageRef.current,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.9,
                        },
                    }
                );

                // gsap.fromTo(
                //     beforeRef.current,
                //     { yPercent: 18, rotate: -6 },
                //     {
                //         yPercent: -10,
                //         rotate: -1,
                //         ease: "none",
                //         scrollTrigger: {
                //             trigger: stageRef.current,
                //             start: "top bottom",
                //             end: "bottom top",
                //             scrub: 0.65,
                //         },
                //     }
                // );

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
            });

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} className="relative z-10 overflow-hidden bg-[#FFFDF5] text-[#1D1D1B]">
            <div className="pointer-events-none absolute inset-x-0 top-0 h-40 bg-gradient-to-b from-[#FFFDF5] via-[#FFFDF5]/92 to-[#FFFDF5]/0" />
            <div className="pointer-events-none absolute -right-[18vw] top-24 h-[34rem] w-[52vw] rounded-full bg-[#1E56A0]/[0.045] blur-3xl" />
            <div className="pointer-events-none absolute -left-[18vw] bottom-20 h-[36rem] w-[54vw] rounded-full bg-[#F07020]/[0.04] blur-3xl" />

            <div className="relative mx-auto max-w-[1440px] px-6 py-16 sm:px-8 sm:py-20 lg:px-12 lg:py-28 xl:px-14">
                <div className="grid gap-10 lg:grid-cols-[0.82fr_1.18fr] lg:items-top lg:gap-16">
                    <Motion.div
                        initial={{ opacity: 0, y: 28 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <h2 ref={headingRef} className="heading-font max-w-[9ch] text-[clamp(3rem,7.4vw,7rem)] font-[200] leading-[0.92] tracking-[-0.035em] will-change-transform">
                            Make the box sell.
                        </h2>
                    </Motion.div>

                    <Motion.div
                        initial={{ opacity: 0, y: 24 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ delay: 0.12, duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl lg:ml-auto"
                    >
                        <p className="max-w-[34rem] text-xl font-[300] leading-8 text-[#1D1D1B]/72 sm:text-2xl sm:leading-9">
                            Rigid packaging turns delivery into a reveal: stronger in hand, richer on camera, and good enough to keep.
                        </p>
                        <div className="mt-8 flex flex-wrap items-center gap-3">
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
                    transition={{ duration: 0.9, ease: [0.22, 1, 0.36, 1] }}
                    className="group relative mt-12 min-h-[46rem] overflow-hidden rounded-[1.35rem] lg:mt-16 lg:min-h-[42rem]"
                >
                    <img
                        ref={afterRef}
                        src={after}
                        alt="Premium rigid packaging box"
                        className="absolute inset-0 h-full w-full object-cover pp-premium-drift will-change-transform"
                    />
                    <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,29,27,0.68)_0%,rgba(29,29,27,0.30)_37%,rgba(29,29,27,0.08)_70%,rgba(29,29,27,0.30)_100%)]" />
                    <div className="absolute inset-0 pp-luxury-shimmer" />

                    <div className="absolute left-5 top-5 z-10 flex items-center gap-2 rounded-full border border-[#FFFDF5]/24 bg-[#FFFDF5]/14 px-4 py-2 text-xs uppercase tracking-[0.18em] text-[#FFFDF5]/78 backdrop-blur-xl sm:left-8 sm:top-8">
                        <CheckCircle2 className="h-4 w-4 text-[#F07020]" strokeWidth={1.5} />
                        Premium rigid box
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
                        className="absolute mt-16 left-5 top-5 z-10 w-[min(19rem,calc(100%-2.5rem))] overflow-hidden rounded-[1rem] border border-[#FFFDF5]/24 bg-[#FFFDF5]/84 shadow-[0_20px_55px_rgba(29,29,27,0.18)] sm:left-8 sm:top-8 lg:w-[20rem]"
                    >
                        <div className="relative aspect-[4/3] overflow-hidden bg-[#F6F0E4]">
                            <img
                                src={before}
                                alt="Ordinary cardboard box"
                                className="h-full w-full object-cover"
                            />
                            <div className="absolute inset-0 bg-[#FFFDF5]/16" />
                        </div>

                        <div className="flex items-center justify-between gap-3 border-t border-[#1D1D1B]/10 px-3.5 py-2.5 text-[#1D1D1B]/62">
                            <span className="flex items-center gap-2 text-[0.68rem] uppercase tracking-[0.16em]">
                                <XCircle className="h-3.5 w-3.5" strokeWidth={1.5} />
                                Ordinary box
                            </span>

                            <span className="text-xs line-through decoration-[#F07020]/50">
                                Forgotten fast
                            </span>
                        </div>
                    </Motion.div>

                    <div className="relative z-10 flex min-h-[46rem] flex-col justify-end p-5 sm:p-8 lg:min-h-[42rem] lg:p-10">
                        <div className="ml-auto max-w-[40rem] text-[#FFFDF5]">
                            <p className="mb-5 text-sm uppercase tracking-[0.22em] text-[#F07020]">
                                Value shift
                            </p>
                            <h3 className="heading-font text-[clamp(3rem,7vw,7.2rem)] font-[200] leading-[0.9] tracking-[-0.045em]">
                                Same product. Better first impression.
                            </h3>
                        </div>

                        <div className="mt-8 grid gap-3 lg:grid-cols-3">
                            {MOMENTS.map((moment, index) => (
                                <Motion.div
                                    key={moment.label}
                                    ref={(el) => {
                                        momentsRef.current[index] = el;
                                    }}
                                    initial={{ opacity: 0, y: 24 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-100px" }}
                                    transition={{ delay: 0.18 + index * 0.08, duration: 0.72, ease: [0.22, 1, 0.36, 1] }}
                                    className="group/card rounded-[1rem] border border-[#FFFDF5]/22 bg-[#FFFDF5]/13 p-4 text-[#FFFDF5] backdrop-blur-xl transition duration-500 hover:-translate-y-1 hover:bg-[#FFFDF5]/18 sm:p-5"
                                >
                                    <div className="mb-8 flex items-center justify-between">
                                        <span className="grid h-10 w-10 place-items-center rounded-full border border-[#FFFDF5]/20 bg-[#FFFDF5]/12 text-[#F07020]">
                                            <moment.icon className="h-5 w-5" strokeWidth={1.45} />
                                        </span>
                                        {/* <span className="text-sm text-[#F07020]">0{index + 1}</span> */}
                                    </div>
                                    <h4 className="text-[1.7rem] font-[300] leading-none tracking-[-0.025em]">
                                        {moment.label}
                                    </h4>
                                    <div className="mt-5 border-t border-[#FFFDF5]/18 pt-4">
                                        <p className="text-sm font-[300] text-[#FFFDF5]/46 line-through decoration-[#F07020]/70">
                                            {moment.from}
                                        </p>
                                        <div className="mt-2 flex items-center justify-between text-base font-[300]">
                                            <span>{moment.to}</span>
                                            <ArrowRight className="h-4 w-4 text-[#F07020] transition duration-500 group-hover/card:translate-x-1" strokeWidth={1.45} />
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
