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
                        paddingTop: "24px",
                        paddingBottom: "24px",
                    }}
                >
                    Alex Senden
                </Heading>
                <Text style={{ fontSize: "32pt" }}>
                    M.Sc. Student, ML/Software Developer
                </Text>
                <Flex direction="row" gap="20px" style={{ paddingTop: "12px" }}>
                    <LinkButton imgSrc="/linkedin-logo.png" linkUrl="https://www.linkedin.com/in/alexsenden/" text="LinkedIn" />
                    <LinkButton imgSrc="/github-logo.png" linkUrl="https://github.com/alexsenden" text="GitHub" />
                </Flex>
            </Flex>
        </Flex>
    );
};

export default ProfileHeader;
