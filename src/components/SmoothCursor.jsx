import { motion, useMotionValue, useSpring } from "framer-motion";
import { useEffect, useState } from "react";

function SmoothCursor() {
    const [enabled, setEnabled] = useState(false);
    const [visible, setVisible] = useState(false);

    const x = useMotionValue(0);
    const y = useMotionValue(0);

    const smoothX = useSpring(x, { damping: 25, stiffness: 300 });
    const smoothY = useSpring(y, { damping: 25, stiffness: 300 });

    useEffect(() => {
        const finePointer = window.matchMedia("(hover: hover) and (pointer: fine)");
        const updateEnabled = () => setEnabled(finePointer.matches);
        updateEnabled();

        finePointer.addEventListener("change", updateEnabled);
        return () => finePointer.removeEventListener("change", updateEnabled);
    }, []);

    useEffect(() => {
        if (!enabled) return;

        const onPointerMove = (event) => {
            x.set(event.clientX);
            y.set(event.clientY);
            if (!visible) setVisible(true);
        };

        const onPointerLeave = () => setVisible(false);
        const onPointerEnter = () => setVisible(true);

        window.addEventListener("pointermove", onPointerMove);
        window.addEventListener("pointerleave", onPointerLeave);
        window.addEventListener("pointerenter", onPointerEnter);

        return () => {
            window.removeEventListener("pointermove", onPointerMove);
            window.removeEventListener("pointerleave", onPointerLeave);
            window.removeEventListener("pointerenter", onPointerEnter);
        };
    }, [enabled, x, y, visible]);

    if (!enabled) return null;

    return (
        <motion.div
            aria-hidden="true"
            className="pointer-events-none fixed left-0 top-0 z-[9999] h-3 w-3 rounded-full bg-white mix-blend-difference"
            style={{
                x: smoothX,
                y: smoothY,
                translateX: "-50%",
                translateY: "-50%",
                opacity: visible ? 1 : 0,
            }}
            transition={{ opacity: { duration: 0.2 } }}
        />
    );
}

export default SmoothCursor;
