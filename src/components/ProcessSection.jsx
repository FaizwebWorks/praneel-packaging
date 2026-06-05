import { CheckCircle2, Factory, MessageSquare, PackageCheck, PenTool } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { useEffect, useRef } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import YuccaButton from "./YuccaButton";

gsap.registerPlugin(ScrollTrigger);

const steps = [
    {
        id: "01",
        title: "Brief",
        desc: "We map your product, size, brand feel, opening moment, quantity, and finish goals.",
        icon: MessageSquare,
        detail: "Product + brand language",
    },
    {
        id: "02",
        title: "Structure",
        desc: "We choose the box format, insert logic, paper, closure, and reveal sequence.",
        icon: PenTool,
        detail: "Box style + insert system",
    },
    {
        id: "03",
        title: "Finish",
        desc: "Foil, texture, ribbons, magnetic closures, paper wrap, and tactile details are refined.",
        icon: PackageCheck,
        detail: "Material + luxury cues",
    },
    {
        id: "04",
        title: "Make",
        desc: "Production moves through sampling, approval, manufacturing, quality check, and dispatch.",
        icon: Factory,
        detail: "Sample to dispatch",
    },
];

const reveal = {
    hidden: { opacity: 0, y: 24 },
    visible: (index = 0) => ({
        opacity: 1,
        y: 0,
        transition: {
            delay: index * 0.06,
            duration: 0.68,
            ease: [0.22, 1, 0.36, 1],
        },
    }),
};

function ProcessSection() {
    const sectionRef = useRef(null);
    const pinRef = useRef(null);
    const trackRef = useRef(null);
    const viewportRef = useRef(null);
    const progressRef = useRef(null);
    const markerRef = useRef(null);
    const cardRefs = useRef([]);

    useEffect(() => {
        if (!sectionRef.current || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            const mm = gsap.matchMedia();

            mm.add("(min-width: 1024px)", () => {
                const pin = pinRef.current;
                const track = trackRef.current;
                const viewport = viewportRef.current;
                if (!pin || !track || !viewport) return undefined;

                const getDistance = () => Math.max(0, track.scrollWidth - viewport.clientWidth);
                const getScrollLength = () => getDistance() + window.innerHeight * 0.22;

                gsap.set(track, { x: 0 });
                gsap.set(progressRef.current, { scaleX: 0, transformOrigin: "left center" });
                gsap.set(markerRef.current, { x: 0 });
                gsap.set(cardRefs.current, { y: 40, autoAlpha: 0 });

                const intro = gsap.to(cardRefs.current, {
                    y: 0,
                    autoAlpha: 1,
                    duration: 0.9,
                    ease: "power3.out",
                    stagger: 0.08,
                    scrollTrigger: {
                        trigger: pin,
                        start: "top 70%",
                        toggleActions: "play none none reverse",
                    },
                });

                const timeline = gsap.timeline({
                    defaults: { ease: "none" },
                    scrollTrigger: {
                        trigger: pin,
                        start: "top top",
                        end: () => `+=${getScrollLength()}`,
                        scrub: 0.75,
                        pin: true,
                        anticipatePin: 1,
                        invalidateOnRefresh: true,
                    },
                });

                timeline.to(track, { x: () => -getDistance() }, 0);
                timeline.to(progressRef.current, { scaleX: 1 }, 0);
                timeline.to(
                    markerRef.current,
                    { x: () => Math.max(0, viewport.clientWidth - 44) },
                    0
                );
                return () => {
                    intro.kill();
                    timeline.kill();
                };
            });

            return () => mm.revert();
        }, sectionRef);

        return () => ctx.revert();
    }, []);

    return (
        <section ref={sectionRef} id="process" className="relative z-10 overflow-hidden bg-[#FFFDF5] text-[#1D1D1B]">
            <div className="pointer-events-none absolute -left-[20vw] top-24 h-[28rem] w-[48vw] rounded-full bg-[#1E56A0]/[0.03] blur-3xl" />
            <div className="pointer-events-none absolute -right-[20vw] bottom-16 h-[30rem] w-[50vw] rounded-full bg-[#F07020]/[0.028] blur-3xl" />

            <div ref={pinRef} className="relative hidden min-h-screen items-center py-8 lg:flex">
                <div className="mx-auto flex w-full max-w-[1440px] flex-col px-12 xl:px-14">
                    <div className="grid gap-8 lg:grid-cols-[0.8fr_1.2fr] lg:items-end">
                        <div>
                            <h2 className="heading-font max-w-[10.5ch] text-[clamp(3.4rem,7.2vw,7rem)] font-[200] leading-[0.9] tracking-[-0.04em]">
                                From idea to reveal.
                            </h2>
                        </div>

                        <div className="ml-auto max-w-2xl">
                            <p className="text-xl font-[300] leading-8 text-[#1D1D1B]/68">
                                A horizontal production journey: brief the box, engineer the structure, refine the finish, then move into making.
                            </p>
                        </div>
                    </div>

                    <div className="mt-8">
                        <div className="relative h-12">
                            <div className="absolute left-0 right-0 top-1/2 h-px bg-[#1D1D1B]/10" />
                            <div ref={progressRef} className="absolute left-0 right-0 top-1/2 h-px scale-x-0 bg-[#1E56A0]/70" />
                            <div
                                ref={markerRef}
                                className="absolute left-0 top-1/2 grid h-11 w-11 -translate-y-1/2 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#FFFDF5] text-[#F07020] shadow-[0_12px_35px_rgba(29,29,27,0.10)]"
                            >
                                <PackageCheck className="h-5 w-5" strokeWidth={1.45} />
                            </div>
                        </div>
                    </div>

                    <div ref={viewportRef} className="mt-5 overflow-hidden">
                        <div ref={trackRef} className="flex w-max gap-4 will-change-transform">
                            {steps.map((step, index) => (
                                <article
                                    key={step.id}
                                    ref={(el) => {
                                        cardRefs.current[index] = el;
                                    }}
                                    className="group relative flex h-[23rem] w-[min(34rem,31vw)] flex-col overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] p-6 shadow-[0_24px_70px_rgba(29,29,27,0.045)] transition-colors duration-500 hover:bg-[#F8F2E8]"
                                >
                                    <span className="pointer-events-none absolute -right-5 -top-9 text-[11rem] font-[200] leading-none tracking-[-0.08em] text-[#1D1D1B]/[0.035] transition duration-500 group-hover:text-[#1E56A0]/[0.055]">
                                        {step.id}
                                    </span>

                                    <div className="relative z-10 flex items-start justify-between gap-4">
                                        <span className="grid h-12 w-12 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020] transition-colors duration-500 group-hover:border-[#1E56A0]/20 group-hover:bg-[#1E56A0] group-hover:text-[#FFFDF5]">
                                            <step.icon className="h-5 w-5" strokeWidth={1.45} />
                                        </span>
                                        <span className="text-xs font-[500] uppercase tracking-[0.2em] text-[#1D1D1B]/34">
                                            Station {step.id}
                                        </span>
                                    </div>

                                    <div className="relative z-10 mt-auto max-w-[31rem]">
                                        <p className="mb-4 text-xs font-[400] uppercase tracking-[0.18em] text-[#1E56A0]/72">
                                            {step.detail}
                                        </p>
                                        <h3 className="heading-font text-[4rem] font-[200] leading-[0.86] tracking-[-0.055em] text-[#1D1D1B]">
                                            {step.title}
                                        </h3>
                                        <p className="mt-6 max-w-md text-base font-[300] leading-7 text-[#1D1D1B]/62">
                                            {step.desc}
                                        </p>
                                    </div>
                                </article>
                            ))}
                        </div>
                    </div>

                    <div className="mt-6 flex items-center justify-between gap-5 border-t border-[#1D1D1B]/10 pt-5">
                        <div className="flex max-w-2xl items-center gap-3 text-base font-[300] leading-6 text-[#1D1D1B]/62">
                            <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#1E56A0]">
                                <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
                            </span>
                            <span>
                                Average turnaround: <span className="font-[500] text-[#1D1D1B]">12-15 business days</span> after approvals.
                            </span>
                        </div>

                        <YuccaButton
                            href="https://wa.me/918320826551?text=Hi,%20I%20want%20to%20start%20the%20discovery%20process%20for%20my%20packaging%20project"
                            external
                            variant="blue"
                            className="w-fit"
                        >
                            Start Discovery
                        </YuccaButton>
                    </div>
                </div>
            </div>

            <div className="relative mx-auto max-w-[1440px] px-5 py-14 sm:px-8 sm:py-20 lg:hidden">
                <div className="grid gap-6">
                    <Motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                        className="heading-font max-w-[11ch] text-[clamp(2.9rem,13vw,5.5rem)] font-[200] leading-[0.9] tracking-[-0.04em]"
                    >
                        From idea to reveal.
                    </Motion.h2>

                    <p className="max-w-2xl text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-xl sm:leading-8">
                        A focused packaging workflow: define the moment, engineer the structure, refine the finish, then produce with care.
                    </p>
                </div>

                <div className="relative mt-10">
                    <div className="absolute bottom-0 left-5 top-0 w-px bg-[#1D1D1B]/10" />

                    <div className="grid gap-4">
                        {steps.map((step, index) => (
                            <Motion.article
                                key={step.id}
                                custom={index}
                                variants={reveal}
                                initial="hidden"
                                whileInView="visible"
                                viewport={{ once: true, margin: "-90px" }}
                                className="relative ml-10 rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] p-5"
                            >
                                <span className="absolute -left-[3.1rem] top-5 grid h-10 w-10 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020]">
                                    <step.icon className="h-4 w-4" strokeWidth={1.45} />
                                </span>
                                <div className="flex items-start justify-between gap-4">
                                    <p className="text-xs font-[400] uppercase tracking-[0.18em] text-[#1E56A0]/72">
                                        {step.detail}
                                    </p>
                                    <span className="text-xs font-[500] uppercase tracking-[0.2em] text-[#1D1D1B]/34">
                                        {step.id}
                                    </span>
                                </div>
                                <h3 className="mt-7 text-[2.8rem] font-[300] leading-[0.92] tracking-[-0.04em] text-[#1D1D1B] sm:text-[3.4rem]">
                                    {step.title}
                                </h3>
                                <p className="mt-5 text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                                    {step.desc}
                                </p>
                            </Motion.article>
                        ))}
                    </div>
                </div>

                <Motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="mt-10 flex flex-col gap-4 border-t border-[#1D1D1B]/10 pt-6 sm:flex-row sm:items-center sm:justify-between"
                >
                    <div className="flex max-w-2xl items-start gap-3 text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                        <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#1E56A0]">
                            <CheckCircle2 className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <span>
                            Average turnaround: <span className="font-[500] text-[#1D1D1B]">12-15 business days</span> after approvals.
                        </span>
                    </div>

                    <YuccaButton
                        href="https://wa.me/918320826551?text=Hi,%20I%20want%20to%20start%20the%20discovery%20process%20for%20my%20packaging%20project"
                        external
                        variant="blue"
                        className="w-fit"
                    >
                        Start Discovery
                    </YuccaButton>
                </Motion.div>
            </div>
        </section>
    );
}

export default ProcessSection;
