import { ArrowUpRight, MessageCircle, Phone } from "lucide-react";
import { motion as Motion } from "framer-motion";
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

function RigidBoxAssembly() {
    return (
        <div className="group relative min-h-[22rem] overflow-hidden rounded-[0.9rem] border border-[#1D1D1B]/10 bg-[#FFFDF5] shadow-[0_28px_80px_rgba(29,29,27,0.10)] sm:min-h-[30rem] lg:min-h-full">
            <img
                src="/cta-image.webp"
                alt="Premium rigid box assembly"
                className="absolute inset-0 h-full w-full object-cover transition-all duration-700 ease-in-out-cubic will-change-transform group-hover:scale-105"
                loading="lazy"
            />
        </div>
    );
}

function CTASection() {

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

                            <div className="flex flex-wrap gap-3 lg:justify-end">
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
                        <RigidBoxAssembly />

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
