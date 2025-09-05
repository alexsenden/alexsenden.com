export const fadeInFadeOut = {
    initial: "offscreen",
    whileInView: "onscreen",
    viewport: { amount: 0.1, once: true },
    variants: {
        offscreen: {
            opacity: 0,
            y: 150,
        },
        onscreen: {
            opacity: 1,
            y: 0,
            transition: {
                duration: 0.5,
            },
        },
    },
};
