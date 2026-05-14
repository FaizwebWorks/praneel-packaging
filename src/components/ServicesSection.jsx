import { ArrowRight, ChevronLeft, ChevronRight } from "lucide-react";
import magneticBox from "/magnetic-box.webp";
import drawerBox from "/drawer-box.webp";
import topBottomBox from "/top-bottom-box.webp";
import collapsibleBox from "/collapsible-box.webp";
import shoulderNeckBox from "/shoulder-neck-box.webp";
import { PrimaryButton } from "./Button";
import { motion } from "framer-motion";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { useState, useRef } from "react";

const services = [
    {
        id: "magnetic",
        title: "Magnetic Box",
        tagline: "The Premium Snap",
        desc: "Experience the satisfying 'click' that defines luxury packaging. Engineered with precision magnets for perfect alignment and repeated use.",
        img: magneticBox,
        features: ["Hidden Magnets", "Seamless Finish", "Reusable"]
    },
    {
        id: "drawer",
        title: "Drawer Box",
        tagline: "Smooth Discovery",
        desc: "A sliding experience that feels effortless and premium. Ideal for showcasing jewelry, electronics, and luxury accessories.",
        img: drawerBox,
        features: ["Ribbon Pull", "Smooth Sliding", "Rigid Structure"]
    },
    {
        id: "top-bottom",
        title: "Top & Bottom Box",
        tagline: "Classic Elegance",
        desc: "A timeless packaging style with a perfect lift-off lid. Built for durability and designed to elevate premium products.",
        img: topBottomBox,
        features: ["Perfect Fit Lid", "Sturdy Build", "Premium Finish"]
    },
    {
        id: "collapsible",
        title: "Collapsible Box",
        tagline: "Smart Luxury",
        desc: "Space-saving design meets premium feel. Easy to assemble while maintaining the strength and elegance of rigid packaging.",
        img: collapsibleBox,
        features: ["Foldable Design", "Magnetic Assembly", "Space Efficient"]
    },
    {
        id: "shoulder-neck",
        title: "Shoulder Neck Box",
        tagline: "Layered Luxury",
        desc: "A distinctive structure with an elevated inner neck that adds depth and sophistication to your packaging presentation.",
        img: shoulderNeckBox,
        features: ["Elevated Neck", "Premium Structure", "Luxury Appeal"]
    }
];

function ServicesSection() {
    const [activeIndex, setActiveIndex] = useState(-1);
    const [scrollIndex, setScrollIndex] = useState(0);
    const scrollRef = useRef(null);

    const scrollTo = (index) => {
        const container = scrollRef.current;
        if (!container) return;

        // 👉 Desktop behavior
        if (window.innerWidth >= 1024) {
            if (index > scrollIndex) {
                // RIGHT click → scroll to END
                container.scrollTo({
                    left: container.scrollWidth,
                    behavior: "smooth",
                });
                setScrollIndex(services.length - 1);
            } else {
                // LEFT click → scroll to START
                container.scrollTo({
                    left: 0,
                    behavior: "smooth",
                });
                setScrollIndex(0);
            }
            return;
        }

        // 👉 Mobile behavior (same as before)
        setScrollIndex(index);

        const child = container.children[index];
        if (child) {
            child.scrollIntoView({
                behavior: "smooth",
                inline: "center",
                block: "nearest",
            });
        }
    };

    const handleScroll = () => {
        const container = scrollRef.current;
        if (!container) return;

        const children = Array.from(container.children);
        const containerCenter = container.scrollLeft + container.offsetWidth / 2;

        let closestIndex = 0;
        let closestDistance = Infinity;

        children.forEach((child, i) => {
            const childCenter = child.offsetLeft + child.offsetWidth / 2;
            const distance = Math.abs(containerCenter - childCenter);

            if (distance < closestDistance) {
                closestDistance = distance;
                closestIndex = i;
            }
        });

        setScrollIndex(closestIndex);
    };

    return (
        <section id="services" className="gsap-section relative z-10 w-full overflow-hidden py-16 sm:py-20 lg:py-24">
            <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                <div className="flex flex-col md:flex-row md:items-end justify-between mb-10 lg:mb-12 gap-4 lg:gap-6">
                    <div className="max-w-2xl">
                        <FadeIn direction="none">
                            <span className="mb-3 lg:mb-4 inline-block text-xs uppercase tracking-[0.2em] text-[#1E56A0]/70">
                                Engineering Luxury
                            </span>
                        </FadeIn>
                        <AnimatedText
                            text="Packaging Styles"
                            className="gsap-heading heading-font text-3xl lg:text-4xl font-semibold leading-tight text-[#1E56A0] sm:text-5xl"
                        />
                    </div>

                    <div className="flex items-center gap-2 lg:gap-4">
                        <button
                            onClick={() => scrollTo(Math.max(0, scrollIndex - 1))}
                            className="p-2 lg:p-3 group rounded-full border border-[#1E56A0]/30 bg-[#1E56A0]/5 text-[#1E56A0] hover:bg-[#1E56A0] hover:text-white transition-all duration-300"
                        >
                            <ChevronLeft className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-[1.2] transition-all duration-300 ease-in" />
                        </button>
                        <button
                            onClick={() => scrollTo(Math.min(services.length - 1, scrollIndex + 1))}
                            className="p-2 lg:p-3 group rounded-full border border-[#1E56A0]/30 bg-[#1E56A0]/5 text-[#1E56A0] hover:bg-[#1E56A0] hover:text-white transition-all duration-300"
                        >
                            <ChevronRight className="h-5 w-5 lg:h-6 lg:w-6 group-hover:scale-[1.2] transition-all duration-300 ease-in" />
                        </button>
                    </div>
                </div>

                <div
                    ref={scrollRef}
                    onScroll={handleScroll}
                    className="flex gap-4 lg:gap-6 overflow-x-auto pb-10 lg:pb-12 no-scrollbar snap-x snap-mandatory"
                >
                    {services.map((service, i) => (
                        <div
                            key={service.id}
                            className="gsap-card min-w-[75%] sm:min-w-[60%] md:min-w-[45%] lg:min-w-[30%] xl:min-w-[24%] snap-start lg:snap-center"
                        >
                            <motion.div
                                onMouseEnter={() => setActiveIndex(i)}
                                onMouseLeave={() => setActiveIndex(-1)}
                                className="group relative h-[380px] sm:h-[420px] overflow-hidden rounded-2xl lg:rounded-3xl bg-white border border-gray-100 shadow-lg shadow-gray-100/30 hover:shadow-xl hover:shadow-gray-200/50 transition-all duration-500"
                            >
                                <div className="absolute top-0 left-0 right-0 h-[45%] z-0 overflow-hidden rounded-t-2xl lg:rounded-t-3xl">
                                    <img
                                        src={service.img}
                                        alt={service.title}
                                        className="gsap-parallax w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                                    />
                                </div>

                                <div className="absolute bottom-0 left-0 right-0 h-[55%] bg-white z-10 rounded-b-2xl lg:rounded-b-3xl" />

                                <div className="absolute inset-0 z-20 p-4 lg:p-6 flex flex-col justify-end h-full">
                                    <div className="space-y-2">
                                        <span
                                            className="block text-xs uppercase tracking-widest font-medium text-[#1E56A0]/70"
                                        >
                                            {service.tagline}
                                        </span>
                                        <h3 className="text-lg lg:text-xl font-bold text-[#1E56A0]">{service.title}</h3>

                                        <p className="text-[#455A64] text-xs lg:text-sm leading-relaxed line-clamp-2">
                                            {service.desc}
                                        </p>

                                        <div className="flex flex-wrap gap-1.5 lg:gap-2 pt-1">
                                            {service.features.map(f => (
                                                <span key={f} className="text-[9px] lg:text-[10px] px-2 lg:px-2.5 py-1 rounded-full bg-gray-50 border border-gray-100 text-[#455A64]">
                                                    {f}
                                                </span>
                                            ))}
                                        </div>
                                    </div>
                                </div>
                            </motion.div>
                        </div>
                    ))}
                </div>

                <div className="mt-8 flex lg:hidden lg:mt-12 justify-center items-center gap-2 lg:gap-3">
                    {services.map((_, i) => (
                        <button
                            key={i}
                            onClick={() => scrollTo(i)}
                            className={`h-1.5 lg:h-2 transition-all duration-300 rounded-full ${scrollIndex === i ? "w-6 lg:w-8 bg-[#1E56A0]" : "w-1.5 lg:w-2 bg-[#1E56A0]/20 hover:bg-[#1E56A0]"
                                }`}
                        />
                    ))}
                </div>

                <div className="gsap-rise mt-12 lg:mt-16 text-center">
                    <PrimaryButton icon={ArrowRight} href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20build%20a%20custom%20packaging%20design" className="px-10 lg:px-12 py-4 lg:py-5 text-base lg:text-lg rounded-2xl">
                        Build Your Custom Design
                    </PrimaryButton>
                </div>
            </div>
        </section>
    );
}

export default ServicesSection;
