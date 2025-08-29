export const rawBreakpoints = {
    mobile: "(max-width: 768px)",
    twoColumn: "(max-width: 1120px)",
};

const breakpoints = {
    mobile: `@media ${rawBreakpoints.mobile}`,
    twoColumn: `@media ${rawBreakpoints.twoColumn}`,
};

export default breakpoints;
