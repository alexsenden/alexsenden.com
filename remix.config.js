/** @type {import('@remix-run/dev').AppConfig} */
export default {
    server: "./worker.js",
    serverBuildPath: "build/index.js",
    serverConditions: ["worker"],
    serverDependenciesToBundle: "all",
    serverMainFields: ["browser", "module", "main"],
    serverModuleFormat: "esm",
    serverPlatform: "neutral",
    future: {
        v3_fetcherPersist: true,
        v3_relativeSplatPath: true,
        v3_throwAbortReason: true,
    },
};
