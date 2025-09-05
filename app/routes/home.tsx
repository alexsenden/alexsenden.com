import type { Route } from "./+types/home";
import { Flex } from "@radix-ui/themes";

import Profile from "../pages/profile";

export const meta = ({}: Route.MetaArgs) => {
    return [
        { title: "Alex Senden - Machine Learning Developer" },
        {
            name: "description",
            content: "Personal Profile for Alex Senden, Software/ML Developer",
        },
    ];
};

const Home = () => {
    return (
        <Flex align="center" justify="center" >
            <Profile />
        </Flex>
    );
};

export default Home;
