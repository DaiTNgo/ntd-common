import react from "@vitejs/plugin-react";
import path from "path";
import { defineConfig } from "vite";
import dts from "vite-plugin-dts";

// https://vitejs.dev/config/
export default defineConfig({
    plugins: [
        react(),
        dts({
            insertTypesEntry: true,
        }),
    ],
    build: {
        minify: true,
        lib: {
            entry: path.resolve(__dirname, "src/index.ts"),
            name: "NtdCommon",
            formats: ["es", "umd"],
            fileName: (format) => `ntd-common.${format}.js`,
        },
        rollupOptions: {
            external: ["react"],
            output: {
                globals: {
                    react: "React",
                },
            },
        },
    },
    resolve: {
        alias: {
            src: "/src",
            public: "/public",
        },
    },
    mode: "production",
});
