import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

function ScrollEffects() {
    useEffect(() => {
        if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;

        const ctx = gsap.context(() => {
            gsap.utils.toArray(".gsap-section").forEach((section) => {
                gsap.fromTo(
                    section,
                    { autoAlpha: 0.96, y: 22 },
                    {
                        autoAlpha: 1,
                        y: 0,
                        duration: 0.85,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: section,
                            start: "top 86%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });

            gsap.utils.toArray(".gsap-heading").forEach((heading) => {
                gsap.fromTo(
                    heading,
                    { yPercent: 8 },
                    {
                        yPercent: -5,
                        ease: "none",
                        scrollTrigger: {
                            trigger: heading,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 0.75,
                        },
                    }
                );
            });

            gsap.utils.toArray(".gsap-image-parallax").forEach((media) => {
                gsap.fromTo(
                    media,
                    { yPercent: -4, scale: 1.04 },
                    {
                        yPercent: 4,
                        scale: 1.07,
                        ease: "none",
                        scrollTrigger: {
                            trigger: media.parentElement || media,
                            start: "top bottom",
                            end: "bottom top",
                            scrub: 1.50,
                        },
                    }
                );
            });

            ScrollTrigger.batch(".gsap-card", {
                interval: 0.08,
                batchMax: 6,
                start: "top 88%",
                onEnter: (batch) =>
                    gsap.fromTo(
                        batch,
                        { autoAlpha: 0, y: 32 },
                        { autoAlpha: 1, y: 0, duration: 0.75, ease: "power3.out", stagger: 0.08 }
                    ),
                onLeaveBack: (batch) =>
                    gsap.to(batch, { autoAlpha: 0, y: 24, duration: 0.35, ease: "power2.out", stagger: 0.04 }),
            });

            gsap.utils.toArray(".gsap-rise").forEach((item) => {
                gsap.fromTo(
                    item,
                    { y: 42, autoAlpha: 0 },
                    {
                        y: 0,
                        autoAlpha: 1,
                        duration: 0.85,
                        ease: "power3.out",
                        scrollTrigger: {
                            trigger: item,
                            start: "top 86%",
                            toggleActions: "play none none reverse",
                        },
                    }
                );
            });
        });

        return () => ctx.revert();
    }, []);

    return null;
}

export default ScrollEffects;
