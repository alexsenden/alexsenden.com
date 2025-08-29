import styled from "@emotion/styled";
import { Flex } from "@radix-ui/themes";
import type { ComponentProps } from "react";

import breakpoints, { rawBreakpoints } from "../breakpoints";
import ImageCard from "./ImageCard";
import useMediaQuery from "~/hooks/useMediaQuery";

const CollectionRow = styled(Flex)`
    justify-content: center;
    align-items: center;
    flex-direction: row;
    ${breakpoints.mobile} {
        flex-direction: column;
        gap: 0;
    }}
`;

interface CardCollectionProps {
    cards: Array<ComponentProps<typeof ImageCard>>;
}

const CardCollection = ({ cards }: CardCollectionProps): React.ReactElement => {
    const twoColumn = useMediaQuery(rawBreakpoints.twoColumn);
    console.log(twoColumn);

    const rows: Array<Array<ComponentProps<typeof ImageCard>>> = [];
    for (const card of cards) {
        if (
            rows.length === 0 ||
            rows[rows.length - 1].length === (twoColumn ? 2 : 3)
        )
            rows.push([]);
        rows[rows.length - 1].push(card);
    }

    return (
        <Flex direction="column" gap="4">
            {rows.map((row, index) => (
                <CollectionRow key={index} gap="4">
                    {row.map((cardProps, cardIndex) => (
                        <ImageCard key={cardIndex} {...cardProps} />
                    ))}
                </CollectionRow>
            ))}
        </Flex>
    );
};

export default CardCollection;
