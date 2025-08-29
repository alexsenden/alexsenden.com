import { createRequestHandler } from "@remix-run/cloudflare";

import * as build from "virtual:remix/server-build";

export default {
    fetch(request, env, ctx) {
        return createRequestHandler(build)(request, env, ctx);
    },
};
