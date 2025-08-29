import { Flex, Theme } from "@radix-ui/themes";
import { Links, Meta, Outlet, Scripts } from "@remix-run/react";

import "@radix-ui/themes/styles.css";

import Profile from "./pages/profile";

export default function App() {
    return (
        <html>
            <head>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body>
                <Theme
                    appearance="dark"
                    accentColor="gray"
                    grayColor="slate"
                    radius="small"
                >
                    <Outlet />
                    <Scripts />

                    <Flex align="center" justify="center">
                        <Profile />
                    </Flex>
                </Theme>
            </body>
        </html>
    );
}
