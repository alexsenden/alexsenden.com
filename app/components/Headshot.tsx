import styled from "@emotion/styled";

import theme from "../theme";

const CircularImage = styled("img")`
    border-radius: 50%;
    border: 3px solid ${theme.light};
`;

const Headshot = (): React.ReactElement => {
    return <CircularImage src="/headshot.png" width={300} />;
};

export default Headshot;
