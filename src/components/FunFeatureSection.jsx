import { Archive, Camera, Gem, Repeat2 } from "lucide-react";
import { motion as Motion } from "framer-motion";
import YuccaButton from "./YuccaButton";

const effects = [
    {
        id: "01",
        IconComponent: Archive,
        title: "It stays in the room",
        desc: "A rigid box becomes storage, display, and a small reminder of the brand long after delivery.",
        stat: "Keep",
        metric: "after use",
    },
    {
        id: "02",
        IconComponent: Camera,
        title: "It photographs better",
        desc: "Cleaner edges, slower reveals, and richer textures make the product feel more premium on camera.",
        stat: "Share",
        metric: "the reveal",
    },
    {
        id: "03",
        IconComponent: Gem,
        title: "It raises perceived value",
        desc: "The first touch makes the same product feel more considered, more giftable, and easier to price up.",
        stat: "Lift",
        metric: "brand value",
    },
    {
        id: "04",
        IconComponent: Repeat2,
        title: "It keeps working",
        desc: "Every time the box is opened again, the brand gets another quiet impression without buying attention.",
        stat: "Repeat",
        metric: "brand recall",
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

function FunFeatureSection() {
    return (
        <section className="gsap-section relative z-10 overflow-hidden bg-[#FFFDF5] py-14 text-[#1D1D1B] sm:py-20 lg:py-24">
            <div className="pointer-events-none absolute -left-[18vw] top-20 h-[28rem] w-[46vw] rounded-full bg-[#1E56A0]/[0.03] blur-3xl" />
            <div className="pointer-events-none absolute -right-[16vw] bottom-10 h-[26rem] w-[42vw] rounded-full bg-[#F07020]/[0.028] blur-3xl" />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
                <div className="grid gap-6 lg:grid-cols-[0.95fr_1.05fr] lg:items-end lg:gap-16">
                    <Motion.h2
                        initial={{ opacity: 0, y: 26 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                        className="gsap-heading heading-font max-w-[11ch] text-[clamp(2.9rem,7vw,6.8rem)] font-[200] leading-[0.9] tracking-[-0.04em]"
                    >
                        The box keeps selling.
                    </Motion.h2>

                    <Motion.p
                        initial={{ opacity: 0, y: 22 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true, margin: "-120px" }}
                        transition={{ delay: 0.08, duration: 0.78, ease: [0.22, 1, 0.36, 1] }}
                        className="max-w-2xl text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-xl sm:leading-8 lg:ml-auto"
                    >
                        Premium packaging does not finish at delivery. It keeps creating touchpoints in photos, shelves, gifting, and memory.
                    </Motion.p>
                </div>

                <div className="mt-10 grid gap-px overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#1D1D1B]/10 sm:grid-cols-2 lg:mt-14 lg:grid-cols-4">
                    {effects.map((effect, index) => (
                        <Motion.article
                            key={effect.id}
                            custom={index}
                            variants={reveal}
                            initial="hidden"
                            whileInView="visible"
                            viewport={{ once: true, margin: "-90px" }}
                            className="gsap-card group relative flex min-h-[19rem] flex-col bg-[#FFFDF5] p-5 transition duration-500 hover:bg-[#F8F2E8] sm:min-h-[21rem] lg:p-6"
                        >
                            <div className="flex items-start justify-between gap-4">
                                <span className="grid h-11 w-11 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020] transition duration-500 group-hover:-rotate-6 group-hover:border-[#1E56A0]/18 group-hover:bg-[#1E56A0] group-hover:text-[#FFFDF5]">
                                    <effect.IconComponent className="h-5 w-5" strokeWidth={1.45} />
                                </span>
                                <span className="text-xs font-[500] uppercase tracking-[0.2em] text-[#1D1D1B]/34">
                                    {effect.id}
                                </span>
                            </div>

                            <div className="mt-auto pt-10">
                                <h3 className="text-[2rem] font-[300] leading-[0.96] tracking-[-0.035em] text-[#1D1D1B] sm:text-[2.35rem] lg:text-[2.45rem]">
                                    {effect.title}
                                </h3>
                                <p className="mt-4 text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                                    {effect.desc}
                                </p>
                            </div>

                            <div className="mt-6 border-t border-[#1D1D1B]/10 pt-4">
                                <p className="text-[1.85rem] font-[300] leading-none tracking-[-0.03em] text-[#1E56A0]">
                                    {effect.stat}
                                </p>
                                <p className="mt-1 text-xs font-[300] uppercase tracking-[0.16em] text-[#1D1D1B]/42">
                                    {effect.metric}
                                </p>
                            </div>
                        </Motion.article>
                    ))}
                </div>

                <Motion.div
                    initial={{ opacity: 0, y: 24 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true, margin: "-100px" }}
                    transition={{ delay: 0.15, duration: 0.75, ease: [0.22, 1, 0.36, 1] }}
                    className="gsap-rise mt-10 flex flex-col gap-4 border-t border-[#1D1D1B]/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between"
                >
                    <p className="max-w-2xl text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                        Design the structure, finish, insert, and reveal around the moment your customer first opens it.
                    </p>

                    <YuccaButton
                        href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20engineer%20a%20premium%20unboxing%20experience"
                        external
                        variant="blue"
                        className="w-fit"
                    >
                        Engineer the Reveal
                    </YuccaButton>
                </Motion.div>
            </div>
        </section>
    );
}

export default FunFeatureSection;
