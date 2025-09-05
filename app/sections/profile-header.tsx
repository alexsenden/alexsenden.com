import { Flex, Text } from "@radix-ui/themes";
import { TypeAnimation } from "react-type-animation";
import { type CSSProperties } from "react";
import { motion } from "motion/react";

import Headshot from "../components/Headshot";
import LinkButton from "../components/LinkButton";
import useIsMobile from "~/hooks/useIsMobile";

const titleTextBaseProps: CSSProperties = {
    fontSize: "64pt",
    lineHeight: "64pt",
    display: "block",
};

const titleTextMobileProps: CSSProperties = {
    ...titleTextBaseProps,
    fontSize: "42pt",
    lineHeight: "42pt",
    inlineSize: "min-content",
    width: "191px",
};

const subtitleTextBaseStyle: CSSProperties = {
    fontSize: "32pt",
    lineHeight: "32pt",
};

const subtitleTextMobileStyle: CSSProperties = {
    ...subtitleTextBaseStyle,
    fontSize: "24pt",
    lineHeight: "24pt",
    margin: "12px",
    marginTop: "16px",
    textAlign: "center",
};

const ProfileHeader = (): React.ReactElement => {
    const isMobile = useIsMobile();

    const linkButtons = (
        <Flex
            direction="row"
            align="center"
            justify={isMobile ? "center" : "start"}
            gapX="20px"
            gapY="10px"
            style={{ flexWrap: "wrap" }}
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
            <LinkButton linkUrl="/Resume - Alex Senden.pdf" text="📋 Resume" />
        </Flex>
    );

    return (
        <Flex
            direction="row"
            gap="8"
            style={{
                padding: "20px",
                paddingBottom: isMobile ? "0px" : "20px",
            }}
        >
            {!isMobile && <Headshot />}
            <Flex direction="column" justify="center">
                <Flex
                    direction="row"
                    align="center"
                    justify={isMobile ? "center" : "start"}
                    gap="4"
                >
                    {isMobile && <Headshot />}
                    <TypeAnimation
                        key={isMobile ? "mobile" : "desktop"}
                        sequence={["Alex Senden"]}
                        speed={20}
                        cursor={false}
                        style={
                            isMobile ? titleTextMobileProps : titleTextBaseProps
                        }
                    />
                </Flex>
                <TypeAnimation
                    key={isMobile ? "mobile" : "desktop"} // forces re-render when isMobile changes
                    sequence={[
                        1500,
                        "Software Developer",
                        1500,
                        "ML Developer",
                        1500,
                        "Master's Student",
                    ]}
                    speed={50}
                    repeat={Infinity}
                    style={
                        isMobile
                            ? subtitleTextMobileStyle
                            : subtitleTextBaseStyle
                    }
                />
                <motion.div
                    initial={{ opacity: 0, x: 50 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 3, duration: 1 }}
                >
                    <Flex
                        direction={isMobile ? "column" : "row"}
                        align="center"
                        gapX="20px"
                        gapY="16px"
                        style={{ paddingTop: isMobile ? "8px" : "24px" }}
                    >
                        {linkButtons}
                        <Text size="5">📧 alexandersenden (at) gmail</Text>
                    </Flex>
                </motion.div>
            </Flex>
        </Flex>
    );
};

export default ProfileHeader;
