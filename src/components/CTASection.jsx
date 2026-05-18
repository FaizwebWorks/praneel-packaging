import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { motion as Motion } from "framer-motion";
import { useState } from "react";
import YuccaButton from "./YuccaButton";

const contactLinks = [
    {
        label: "WhatsApp",
        value: "+91 90238 27460",
        href: "https://wa.me/919023827460?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging",
        icon: MessageCircle,
    },
    {
        label: "Call",
        value: "+91 83208 26551",
        href: "tel:+918320826551",
        icon: Phone,
    },
];

const pieceMotion = {
    transition: {
        duration: 0.85,
        ease: [0.22, 1, 0.36, 1],
    },
};

function AssemblyStage({ assembled, setAssembled }) {
    return (
        <div
            className="relative min-h-[22rem] overflow-hidden rounded-[0.75rem] border border-[#1D1D1B]/10 bg-[#FFFDF5]/58 p-4 shadow-[0_24px_70px_rgba(29,29,27,0.08)] backdrop-blur-xl sm:min-h-[28rem] sm:p-5 lg:min-h-full"
            onMouseEnter={() => setAssembled(true)}
            onMouseLeave={() => setAssembled(false)}
            onFocus={() => setAssembled(true)}
            onBlur={() => setAssembled(false)}
            onTouchStart={() => setAssembled(true)}
        >
            <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(29,29,27,0.035)_1px,transparent_1px),linear-gradient(180deg,rgba(29,29,27,0.035)_1px,transparent_1px)] bg-[size:3.25rem_3.25rem] opacity-60" />
            <div className="pointer-events-none absolute inset-x-5 top-5 flex items-center justify-between text-[0.62rem] font-[500] uppercase tracking-[0.2em] text-[#1D1D1B]/36">
                <span>Assembly kit</span>
                <span>{assembled ? "Aligned" : "Hover to assemble"}</span>
            </div>

            <div className="absolute left-1/2 top-[52%] h-[15rem] w-[19rem] -translate-x-1/2 -translate-y-1/2 sm:h-[18rem] sm:w-[24rem]">
                <Motion.div
                    aria-hidden="true"
                    animate={assembled ? { x: 0, y: -66, rotate: 0, scale: 1 } : { x: -70, y: -104, rotate: -8, scale: 0.96 }}
                    transition={{ ...pieceMotion.transition, delay: 0.02 }}
                    className="pp-assembly-float absolute left-[2.2rem] top-[5.8rem] h-[4.2rem] w-[14.6rem] rounded-[0.42rem] border border-[#1D1D1B]/14 bg-[#14233B] shadow-[0_20px_45px_rgba(29,29,27,0.18)] sm:left-[3rem] sm:h-[5rem] sm:w-[18rem]"
                >
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-[#C46E3F]" />
                </Motion.div>

                <Motion.div
                    aria-hidden="true"
                    animate={assembled ? { x: 0, y: 42, rotate: 0, scale: 1 } : { x: 78, y: 70, rotate: 7, scale: 0.97 }}
                    transition={{ ...pieceMotion.transition, delay: 0.06 }}
                    className="pp-assembly-float pp-assembly-delay absolute left-[1.9rem] top-[6.85rem] h-[6.6rem] w-[15.2rem] rounded-[0.5rem] border border-[#1D1D1B]/14 bg-[#18263F] shadow-[0_28px_55px_rgba(29,29,27,0.20)] sm:left-[2.4rem] sm:h-[7.9rem] sm:w-[19.2rem]"
                >
                    <span className="absolute left-0 top-0 h-1 w-full bg-[#C46E3F]" />
                    <span className="absolute bottom-0 left-0 h-1 w-full bg-[#C46E3F]/80" />
                </Motion.div>

                <Motion.div
                    aria-hidden="true"
                    animate={assembled ? { x: 0, y: 42, rotate: 0, scale: 1 } : { x: -94, y: 64, rotate: 5, scale: 0.92 }}
                    transition={{ ...pieceMotion.transition, delay: 0.1 }}
                    className="pp-assembly-float pp-assembly-slow absolute left-[3rem] top-[7.35rem] h-[4.2rem] w-[13rem] rounded-[0.38rem] border border-[#1D1D1B]/12 bg-[#F7F0E5] shadow-[0_16px_30px_rgba(29,29,27,0.12),inset_0_0_0_1px_rgba(255,253,245,0.7)] sm:left-[3.8rem] sm:h-[5rem] sm:w-[16.4rem]"
                >
                    <span className="absolute left-1/2 top-1/2 h-[2rem] w-[6.4rem] -translate-x-1/2 -translate-y-1/2 rounded-[0.3rem] border border-[#1D1D1B]/10 sm:h-[2.4rem] sm:w-[8.1rem]" />
                </Motion.div>

                <Motion.div
                    aria-hidden="true"
                    animate={assembled ? { x: 0, y: 42, rotate: 0, scale: 1 } : { x: 112, y: -66, rotate: 84, scale: 0.95 }}
                    transition={{ ...pieceMotion.transition, delay: 0.14 }}
                    className="absolute left-[15.95rem] top-[7.9rem] h-[5rem] w-2 rounded-full bg-[#C46E3F] shadow-[0_10px_24px_rgba(196,110,63,0.25)] sm:left-[19.75rem] sm:h-[6rem]"
                />
            </div>

            <div className="pointer-events-none absolute inset-x-5 bottom-5 grid grid-cols-4 gap-2 text-[0.6rem] font-[400] uppercase tracking-[0.16em] text-[#1D1D1B]/38 sm:text-xs">
                {["Lid", "Base", "Insert", "Foil"].map((label) => (
                    <span key={label} className="border-t border-[#1D1D1B]/10 pt-2">
                        {label}
                    </span>
                ))}
            </div>
        </div>
    );
}

function CTASection() {
    const [assembled, setAssembled] = useState(false);

    return (
        <section id="contact" className="relative z-20 overflow-hidden bg-[#FFFDF5] px-5 py-14 text-[#1D1D1B] sm:px-8 sm:py-20 lg:px-10 lg:py-24">
            <Motion.div
                initial={{ opacity: 0, y: 34 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-120px" }}
                transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
                className="relative mx-auto max-w-[1440px] overflow-hidden rounded-[0.9rem] border border-[#1D1D1B]/10 bg-[#F6EFE3]"
            >
                <div className="pointer-events-none absolute -right-16 -top-16 h-72 w-72 rounded-full bg-[#F07020]/[0.08] blur-3xl" />
                <div className="pointer-events-none absolute bottom-0 left-0 h-48 w-80 bg-[#1E56A0]/[0.045] blur-3xl" />

                <div className="relative grid min-h-[38rem] gap-8 p-5 sm:p-8 lg:grid-cols-[0.98fr_0.82fr] lg:p-12 xl:p-14">
                    <div className="flex max-w-4xl flex-col justify-between">
                        <div>
                            <p className="mb-6 text-xs font-[500] uppercase tracking-[0.26em] text-[#1E56A0]">
                                Assemble your packaging brief
                            </p>
                            <h2 className="heading-font max-w-[12ch] text-[clamp(3rem,7.2vw,7rem)] font-[200] leading-[0.88] tracking-[-0.045em]">
                                Build the box your product deserves.
                            </h2>
                        </div>

                        <div className="mt-10 grid gap-6 lg:grid-cols-[0.78fr_1fr] lg:items-end">
                            <p className="max-w-xl text-base font-[300] leading-7 text-[#1D1D1B]/68 sm:text-xl sm:leading-8">
                                Send us your product size, quantity, finish direction, and launch timeline. We will shape the lid, base, insert, and reveal around it.
                            </p>

                            <div
                                className="flex flex-wrap gap-3 lg:justify-end"
                                onMouseEnter={() => setAssembled(true)}
                                onMouseLeave={() => setAssembled(false)}
                                onFocus={() => setAssembled(true)}
                                onBlur={() => setAssembled(false)}
                            >
                                <YuccaButton
                                    href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging"
                                    external
                                    variant="blue"
                                >
                                    Assemble My Box
                                </YuccaButton>
                                <YuccaButton
                                    href="#services"
                                    variant="outline"
                                >
                                    View Boxes
                                </YuccaButton>
                            </div>
                        </div>
                    </div>

                    <div className="grid gap-3 lg:grid-rows-[1fr_auto]">
                        <AssemblyStage assembled={assembled} setAssembled={setAssembled} />

                        <div className="w-full rounded-[0.75rem] border border-[#FFFDF5]/48 bg-[#FFFDF5]/74 p-4 shadow-[0_18px_55px_rgba(29,29,27,0.08)] backdrop-blur-xl sm:p-5">
                            <div className="flex items-center justify-between gap-4 border-b border-[#1D1D1B]/10 pb-4">
                                <p className="text-xs font-[500] uppercase tracking-[0.22em] text-[#1D1D1B]/48">
                                    Quick route
                                </p>
                                <ArrowUpRight className="h-4 w-4 text-[#F07020]" strokeWidth={1.5} />
                            </div>

                            <div className="grid divide-y divide-[#1D1D1B]/10 sm:grid-cols-2 sm:divide-x sm:divide-y-0">
                                {contactLinks.map((link) => (
                                    <a
                                        key={link.label}
                                        href={link.href}
                                        target={link.href.startsWith("http") ? "_blank" : undefined}
                                        rel={link.href.startsWith("http") ? "noopener noreferrer" : undefined}
                                        className="group flex items-center justify-between gap-4 py-4 sm:px-4 sm:first:pl-0 sm:last:pr-0"
                                    >
                                        <span className="flex items-center gap-3">
                                            <span className="grid h-10 w-10 place-items-center rounded-full border border-[#1D1D1B]/10 bg-[#F4EFE6] text-[#F07020] transition duration-500 group-hover:bg-[#1E56A0] group-hover:text-[#FFFDF5]">
                                                <link.icon className="h-4 w-4" strokeWidth={1.5} />
                                            </span>
                                            <span>
                                                <span className="block text-xs font-[400] uppercase tracking-[0.18em] text-[#1D1D1B]/42">
                                                    {link.label}
                                                </span>
                                                <span className="mt-1 block text-sm font-[300] text-[#1D1D1B] sm:text-base">
                                                    {link.value}
                                                </span>
                                            </span>
                                        </span>
                                    </a>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Motion.div>
        </section>
    );
}

export default CTASection;
