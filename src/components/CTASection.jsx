import { MessageCircle } from "lucide-react";
import { PrimaryButton, SecondaryButton } from "./Button";
import { AnimatedText, FadeIn } from "./AnimatedText";
import { motion, useScroll, useTransform } from "framer-motion";

function CTASection() {
    const { scrollYProgress } = useScroll();
    const scale = useTransform(scrollYProgress, [0.8, 1], [1, 0.9]);
    const opacity = useTransform(scrollYProgress, [0.8, 1], [1, 0.6]);

    return (
        <section id="contact" className="gsap-section sticky top-0 z-[5] bg-transparent mx-4 sm:mx-6 lg:mx-10 rounded-[2.5rem] sm:rounded-[4rem] min-h-[70vh] flex items-center justify-center py-20 sm:py-28 overflow-hidden mb-0">
            <div className="absolute inset-0 z-0 bg-transparent">
                <img
                    src="/CTA-bg.webp"
                    className="gsap-parallax h-full w-full object-cover object-right lg:object-center"
                    alt="CTA Background"
                />
            </div>

            <motion.div
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                transition={{ duration: 1.5 }}
                className="absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 h-[500px] w-[500px] rounded-full blur-[120px] pointer-events-none" 
            />

            <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 text-center">
                <AnimatedText
                    text="Your Product Deserves Better Packaging."
                    className="gsap-heading heading-font mx-auto max-w-3xl text-4xl font-semibold leading-tight text-[#1E56A0] sm:text-5xl lg:text-6xl justify-center"
                />

                <FadeIn delay={0.5}>
                    <p className="mt-6 mx-auto max-w-xl text-base leading-relaxed text-[#455A64] sm:text-lg">
                        Stop putting premium products in average boxes.<br className="hidden sm:block" />
                        Let's upgrade your packaging game.
                    </p>
                </FadeIn>

                <FadeIn delay={0.8} direction="up" className="mt-12 flex flex-col sm:flex-row items-center justify-center gap-4">
                    <PrimaryButton href="https://wa.me/919023827460?text=Hi,%20I%20want%20to%20get%20a%20quote%20for%20custom%20packaging" className="px-8 py-4 text-base">Get a Quote</PrimaryButton>
                    <SecondaryButton icon={MessageCircle} href="https://wa.me/919023827460?text=Hi,%20I%20would%20like%20to%20contact%20you%20about%20packaging%20services" className="px-8 py-4 text-base">Contact Us</SecondaryButton>
                </FadeIn>
            </div>
        </section>
    );
}

export default CTASection;
