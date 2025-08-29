import { createRequestHandler } from "@remix-run/cloudflare";

import * as build from "./build/index.js";

export default {
    fetch(request, env, ctx) {
        return createRequestHandler(build)(request, env, ctx);
    },
};
