import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react({
            include: "**/*.tsx",
        }),
    ],
    server: {
        watch: {
            usePolling: true,
        },
        host: true,
    },
    resolve: {
        alias: {
            public: "/public",
            src: "/src",
        },
    },
    // mode: "production",
    // esbuild: {
    //     drop: ["console", "debugger"],
    // },

    /**TODO: Production*/
    // base: "//static.assets.sadlierconnect.com/sc-content/javascript/fpr/audio/v2",

    /**TODO: Development - Run At Local after build*/
    // base: "./",
});
