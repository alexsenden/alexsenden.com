import styled from "@emotion/styled";
import { Flex, Heading } from "@radix-ui/themes";

import theme from "../utils/theme";

const SectionSeparator = styled("hr")`
    border: none;
    height: 2px;
    background-color: ${theme.light};
    margin-left: -12px;
    margin-right: -12px;
`;

interface SectionTitleProps {
    title: string;
}

const SectionTitle = ({ title }: SectionTitleProps): React.ReactElement => {
    return (
        <Flex direction="column" style={{marginLeft: 48, marginRight: 48, marginTop: 24, marginBottom: 12}}>
            <SectionSeparator />
            <Heading>{title}</Heading>
            <SectionSeparator />
        </Flex>
    );
};

export default SectionTitle;
