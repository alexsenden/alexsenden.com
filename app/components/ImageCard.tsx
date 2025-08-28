import styled from "@emotion/styled";
import { Card as UnstyledCard, Flex, Heading, Text } from "@radix-ui/themes";

import theme from "../theme";

const BORDER_WIDTH = 3;

const StyledCard = styled(UnstyledCard)`
    width: 300px;
    height: 500px;
    font-size: 1.5rem;
    overflow: hidden;
    border-color: ${theme.light};
    border-width: ${BORDER_WIDTH}px;
    border-style: solid;
    border-radius: 2px;
    margin: 12px;
`;

const ContentBreak = styled("hr")`
    border: none;
    height: ${BORDER_WIDTH}px;
    background-color: ${theme.light};
    margin-left: -12px;
    margin-right: -12px;
    margin-top: -12px;
`;

interface CardProps {
    title: string;
    content: string;
    imageUrl: string;
}

const ImageCard = ({
    title,
    content,
    imageUrl,
}: CardProps): React.ReactElement => {
    return (
        <StyledCard variant="ghost">
            <Flex
                justify="flex-start"
                align="flex-start"
                direction="column"
                gap="2"
            >
                <img
                    width="300px"
                    src={imageUrl}
                    style={{ marginLeft: -12, marginTop: -20 }}
                />
                <ContentBreak />
                <Heading size="4">{title}</Heading>
                <Text size="1">{content}</Text>
            </Flex>
        </StyledCard>
    );
};

export default ImageCard;
