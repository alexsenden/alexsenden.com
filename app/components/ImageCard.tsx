import styled from "@emotion/styled";
import { Card as UnstyledCard, Flex, Heading, Text } from "@radix-ui/themes";

import theme from "../theme";
import breakpoints from "~/breakpoints";

const BORDER_WIDTH = 3;

const StyledCard = styled(UnstyledCard)`
    width: 300px;
    height: fit-content;
    min-height: ${(props) => props.height || "520px"};
    font-size: 1.5rem;
    overflow: hidden;
    border-color: ${theme.light};
    border-width: ${BORDER_WIDTH}px;
    border-style: solid;
    border-radius: 2px;
    margin: 12px;
    ${breakpoints.mobile} {
        min-height: 0
    }
`;

const ContentBreak = styled("hr")`
    border: none;
    height: ${BORDER_WIDTH}px;
    background-color: ${theme.light};
    margin-left: -12px;
    margin-right: -12px;
    margin-top: -10px;
`;

interface CardProps {
    title: string;
    subtitle?: string;
    content: string;
    imageUrl: string;
    height?: string;
}

const ImageCard = ({
    title,
    subtitle,
    content,
    imageUrl,
    height,
}: CardProps): React.ReactElement => {
    return (
        <StyledCard variant="ghost" height={height}>
            <Flex
                justify="flex-start"
                align="flex-start"
                direction="column"
                gap="2"
            >
                <img
                    width="300px"
                    src={imageUrl}
                    style={{ marginLeft: -14, marginTop: -12 }}
                />
                <ContentBreak />
                <Heading size="4">{title}</Heading>
                {subtitle && (
                    <Heading
                        size="2"
                        style={{ marginTop: "-4px", whiteSpace: "pre-line" }}
                    >
                        {subtitle}
                    </Heading>
                )}
                <Text
                    size="1"
                    style={{ paddingTop: "10px", whiteSpace: "pre-line" }}
                >
                    {content}
                </Text>
            </Flex>
        </StyledCard>
    );
};

export default ImageCard;
