import { ArrowRight, Box, Sparkles } from "lucide-react";
import { motion as Motion } from "framer-motion";
import collapsibleBox from "/collapsible-box.png";
import drawerBox from "/drawer-box.png";
import magneticBox from "/magnetic-box.png";
import shoulderNeckBox from "/shoulder-neck-box.png";
import topBottomBox from "/top-bottom-box.png";
import YuccaButton from "./YuccaButton";

const services = [
    {
        id: "magnetic",
        title: "Magnetic Rigid Box",
        meta: "Quote on request",
        note: "Hidden closure, premium reveal",
        detail: "Best for gifting",
        img: magneticBox,
        badge: "Popular",
    },
    {
        id: "drawer",
        title: "Drawer Rigid Box",
        meta: "Custom size",
        note: "Slide-out tray, insert ready",
        detail: "Best for kits",
        img: drawerBox,
    },
    {
        id: "top-bottom",
        title: "Top & Bottom Box",
        meta: "Custom finish",
        note: "Classic lid-and-base structure",
        detail: "Best for retail",
        img: topBottomBox,
    },
    {
        id: "collapsible",
        title: "Collapsible Box",
        meta: "Space saving",
        note: "Flat-pack luxury structure",
        detail: "Best for shipping",
        img: collapsibleBox,
    },
    {
        id: "shoulder-neck",
        title: "Shoulder Neck Box",
        meta: "Premium reveal",
        note: "Layered depth for gifting",
        detail: "Best for launches",
        img: shoulderNeckBox,
    },
];

const cardTransition = {
    duration: 0.68,
    ease: [0.22, 1, 0.36, 1],
};

function ServicesSection() {
    return (
        <section id="services" className="gsap-section relative z-10 overflow-hidden bg-[#FFFDF5] py-14 text-[#1D1D1B] sm:py-20 lg:py-24">
            <div className="pointer-events-none absolute -left-[14vw] top-16 h-[24rem] w-[42vw] rounded-full bg-[#F07020]/[0.028] blur-3xl" />
            <div className="pointer-events-none absolute -right-[16vw] bottom-10 h-[28rem] w-[46vw] rounded-full bg-[#1E56A0]/[0.035] blur-3xl" />

            <div className="relative mx-auto max-w-[1440px] px-5 sm:px-8 lg:px-12 xl:px-14">
                <div className="mb-8 grid gap-5 sm:mb-10 lg:mb-12 lg:grid-cols-[0.9fr_1.1fr] lg:items-end">
                    <div>
                        {/* <p className="mb-3 text-xs font-[500] uppercase tracking-[0.28em] text-[#1E56A0] sm:text-sm">
                            Packaging styles
                        </p> */}
                        <h2 className="gsap-heading heading-font max-w-[11ch] text-[clamp(2.75rem,7vw,6.6rem)] font-[200] leading-[0.92] tracking-[-0.035em]">
                            Choose your box.
                        </h2>
                    </div>

                    <div className="max-w-2xl lg:ml-auto">
                        <p className="text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-xl sm:leading-8">
                            Clean rigid structures for gifting, cosmetics, jewelry, electronics, brand launches, and premium retail moments.
                        </p>
                    </div>
                </div>

                <div className="grid grid-cols-2 gap-x-3 gap-y-8 sm:gap-x-5 sm:gap-y-10 lg:grid-cols-4 xl:grid-cols-5">
                    {services.map((service, index) => (
                        <Motion.article
                            key={service.id}
                            initial={{ opacity: 0, y: 24 }}
                            whileInView={{ opacity: 1, y: 0 }}
                            viewport={{ once: true, margin: "-90px" }}
                            transition={{ ...cardTransition, delay: index * 0.045 }}
                            className="gsap-card group min-w-0 transition duration-500 hover:-translate-y-1"
                        >
                            <a
                                href={`https://wa.me/919023827460?text=Hi,%20I%20want%20details%20for%20${encodeURIComponent(service.title)}`}
                                target="_blank"
                                rel="noopener noreferrer"
                                className="block focus:outline-none focus-visible:ring-2 focus-visible:ring-[#1E56A0]/45 focus-visible:ring-offset-4 focus-visible:ring-offset-[#FFFDF5]"
                            >
                                <div className="relative aspect-square overflow-hidden rounded-[0.55rem] bg-[#F1E9DC]  transition duration-500 ">
                                    <div className="absolute left-3 top-3 z-10 text-[0.62rem] font-[500] uppercase tracking-[0.16em] text-[#1D1D1B]/34 transition duration-500 group-hover:text-[#1E56A0]/70 sm:left-4 sm:top-4">
                                        {String(index + 1).padStart(2, "0")}
                                    </div>

                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="h-full w-full object-contain p-4 transition duration-700 ease-out group-hover:-translate-y-1.5 group-hover:scale-[1.045] sm:p-6"
                                    />

                                    <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_50%_45%,rgba(255,253,245,0)_0%,rgba(255,253,245,0.18)_74%,rgba(29,29,27,0.045)_100%)] opacity-80" />

                                    {service.badge && (
                                        <div className="absolute right-0 top-5 flex h-[6.8rem] w-8 items-center justify-center rounded-l-[0.35rem] bg-[#B7653B] text-[0.64rem] font-[500] uppercase tracking-[0.12em] text-[#FFFDF5] [writing-mode:vertical-rl] sm:h-[7.4rem] sm:w-9 sm:text-xs">
                                            {service.badge}
                                        </div>
                                    )}
                                </div>

                                <div className="pt-3 sm:pt-4">
                                    <div className="flex items-start justify-between gap-2">
                                        <h3 className="text-[1.05rem] font-[300] leading-[1.15] tracking-[-0.02em] text-[#1D1D1B] transition duration-500 group-hover:text-[#1E56A0] sm:text-[1.28rem] lg:text-[1.18rem] xl:text-[1.25rem]">
                                            {service.title}
                                        </h3>
                                        <ArrowRight className="mt-1 hidden h-4 w-4 flex-none -rotate-45 text-[#F07020] opacity-0 transition duration-500 group-hover:translate-x-0.5 group-hover:opacity-100 sm:block" strokeWidth={1.45} />
                                    </div>
                                    <p className="mt-2 text-[0.92rem] leading-snug text-[#1D1D1B]/78 sm:text-base">
                                        <span className="font-[500] text-[#1D1D1B]">{service.meta}</span>
                                        <span className="hidden text-[#1D1D1B]/52 sm:inline"> / {service.note}</span>
                                    </p>
                                    <div className="mt-3 hidden h-px overflow-hidden bg-[#1D1D1B]/10 sm:block">
                                        <span className="block h-full w-full origin-left scale-x-0 bg-[#F07020]/70 transition duration-700 group-hover:scale-x-100" />
                                    </div>
                                    <p className="mt-2 hidden translate-y-1 text-xs font-[300] uppercase tracking-[0.16em] text-[#1D1D1B]/42 opacity-0 transition duration-500 group-hover:translate-y-0 group-hover:opacity-100 sm:block">
                                        {service.detail}
                                    </p>
                                </div>
                            </a>
                        </Motion.article>
                    ))}
                </div>

                <div className="mt-10 flex flex-col gap-4 border-t border-[#1D1D1B]/10 pt-6 sm:mt-12 sm:flex-row sm:items-center sm:justify-between">
                    <div className="flex max-w-2xl items-start gap-3 text-sm font-[300] leading-6 text-[#1D1D1B]/62 sm:text-base">
                        <span className="mt-0.5 grid h-8 w-8 flex-none place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020]">
                            <Sparkles className="h-4 w-4" strokeWidth={1.5} />
                        </span>
                        <span>
                            Need a different structure? We can build custom inserts, papers, foils, ribbons, closures, and finishes around your product.
                        </span>
                    </div>

                    <YuccaButton
                        href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20build%20a%20custom%20packaging%20design"
                        external
                        variant="blue"
                        className="w-fit"
                    >
                        Build Custom Design
                    </YuccaButton>
                </div>

                <div className="mt-7 flex items-center gap-2 text-xs font-[300] uppercase tracking-[0.18em] text-[#1D1D1B]/42">
                    <Box className="h-4 w-4 text-[#1E56A0]/70" strokeWidth={1.5} />
                    Made for premium rigid packaging
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
