import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";
import react from "@vitejs/plugin-react";

export default defineConfig({
    plugins: [
        laravel({
            input: ["frontend/app.tsx"],
            refresh: true,
        }),
        react({
            babel: {
                plugins: ["babel-plugin-styled-components"],
            },
        }),
    ],
    resolve: {
        alias: {
            "@": "/frontend",
        },
    },
});
