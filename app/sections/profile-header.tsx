import { Flex, Heading, Text } from "@radix-ui/themes";

import Headshot from "../components/Headshot";
import LinkButton from "../components/LinkButton";

const ProfileHeader = (): React.ReactElement => {
    return (
        <Flex direction="row" style={{ padding: "20px" }}>
            <Headshot />
            <Flex
                direction="column"
                justify="center"
                style={{ padding: "20px", paddingLeft: "50px" }}
            >
                <Heading
                    style={{
                        fontSize: "64pt",
                        lineHeight: "64pt",
                    }}
                >
                    Alex Senden
                </Heading>
                <Text style={{ fontSize: "32pt" }}>
                    M.Sc. Student, ML/Software Developer
                </Text>
                <Flex direction="row" align='center' gap="20px" style={{ paddingTop: "12px" }}>
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
                    <Text size="5">📧 alexandersenden (at) gmail</Text>
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProfileHeader;
