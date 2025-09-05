import useMediaQuery from "./useMediaQuery";
import { rawBreakpoints } from "~/utils/breakpoints";

const useIsMobile = (): boolean => {
    return useMediaQuery(rawBreakpoints.mobile);
};

export default useIsMobile;
