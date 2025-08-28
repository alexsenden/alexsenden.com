import { Links, Meta, Outlet, Scripts } from "@remix-run/react";
import { Theme } from "@radix-ui/themes";

import "@radix-ui/themes/styles.css";

export default function App() {
    return (
        <html>
            <head>
                <link rel="icon" href="data:image/x-icon;base64,AA" />
                <Meta />
                <Links />
            </head>
            <body>
                <Theme>
                    <h1>Hello world!</h1>
                    <Outlet />

                    <Scripts />
                </Theme>
            </body>
        </html>
    );
}
