import { useEffect, useRef } from "react";
import {
    motion,
    useAnimation,
    useInView,
    useMotionValueEvent,
    useScroll,
} from "motion/react";

import useIsMobile from "~/hooks/useIsMobile";

const MOBILE_SCROLL_AMOUNT = 0.02;
const BASE_SCROLL_AMOUNT = 0.1;

interface FadeInFadeOutProps {
    children: React.ReactNode;
    delay?: number;
}

const FadeInFadeOut = ({
    children,
    delay = 0,
}: FadeInFadeOutProps): React.ReactElement => {
    const isMobile = useIsMobile();
    const ref = useRef<HTMLDivElement | null>(null);
    const controls = useAnimation();

    const isInView = useInView(ref, {
        amount: isMobile ? MOBILE_SCROLL_AMOUNT : BASE_SCROLL_AMOUNT,
    });

    const { scrollY } = useScroll();
    const prevY = useRef(0);
    const direction = useRef<"up" | "down">("down");

    useMotionValueEvent(scrollY, "change", (latest) => {
        direction.current = latest > prevY.current ? "down" : "up";
        prevY.current = latest;
    });

    useEffect(() => {
        if (isInView) {
            controls.start({
                opacity: 1,
                y: 0,
                transition: { delay: delay, duration: 0.5, ease: "easeOut" },
            });
        } else {
            if (direction.current === "up") {
                controls.start({
                    opacity: 0,
                    y: 150,
                    transition: { duration: 0.5, ease: "easeOut" },
                });
            }
        }
    }, [isInView, controls]);

    return (
        <motion.div
            ref={ref}
            initial={{ opacity: 0, y: 150 }}
            animate={controls}
        >
            {children}
        </motion.div>
    );
};

export default FadeInFadeOut;
