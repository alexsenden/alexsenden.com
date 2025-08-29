import { Flex, Heading, Text } from "@radix-ui/themes";

import Headshot from "../components/Headshot";
import LinkButton from "../components/LinkButton";
import styled from "@emotion/styled";
import breakpoints from "~/breakpoints";
import useIsMobile from "~/hooks/useIsMobile";

const TitleText = styled(Heading)`
    font-size: 64pt;
    line-height: 64pt;
    ${breakpoints.mobile} {
        font-size: 42pt;
        line-height: 42pt;
        inline-size: min-content;
    }
`;

const SubtitleText = styled(Text)`
    font-size: 32pt;
    line-height: 32pt;
    ${breakpoints.mobile} {
        font-size: 16pt;
        line-height: 16pt;
    }
`;

const ProfileHeader = (): React.ReactElement => {
    const isMobile = useIsMobile();

    const linkButtons = (
        <Flex
            direction="row"
            align="center"
            gap="20px"
            style={{ paddingTop: "12px" }}
        >
            <LinkButton
                imgSrc="/linkedin-logo.png"
                linkUrl="https://www.linkedin.com/in/alexsenden/"
                text="LinkedIn"
            />
            <LinkButton
                imgSrc="/github-logo.png"
                linkUrl="https://github.com/alexsenden"
                text="GitHub"
            />
        </Flex>
    );

    return (
        <Flex direction="row" gap="8" style={{ padding: "20px" }}>
            {!isMobile && <Headshot />}
            <Flex direction="column" justify="center">
                <Flex direction="row" align="center" justify={isMobile ? "center" : "start"} gap="4" >
                    {isMobile && <Headshot />}
                    <TitleText>Alex Senden</TitleText>
                </Flex>
                <SubtitleText style={isMobile ? { margin: "12px", textAlign: "center" } : {}}>
                    M.Sc. Student, ML/Software Developer
                </SubtitleText>
                <Flex
                    direction={isMobile ? "column" : "row"}
                    align="center"
                    gap="20px"
                    style={isMobile ? {} : { paddingTop: "12px" }}
                >
                    {linkButtons}
                    <Text size="5">📧 alexandersenden (at) gmail</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProfileHeader;
