import styled from "@emotion/styled";

import theme from "~/utils/theme";
import breakpoints from "~/utils/breakpoints";

const CircularImage = styled("img")`
    border-radius: 50%;
    border: 3px solid ${theme.light};
    width: 300px;
    height: 300px;
    ${breakpoints.mobile} {
        width: 120px;
        height: 120px;
    }
`;

const Headshot = (): React.ReactElement => {
    return <CircularImage src="/headshot.png" />;
};

export default Headshot;
