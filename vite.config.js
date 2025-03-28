import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';
import react from '@vitejs/plugin-react';

import tailwindcss from "tailwindcss";
import autoprefixer from "autoprefixer";

export default defineConfig({
    plugins: [
        react(),
        laravel({
            input: ["resources/css/app.css", "resources/js/app.jsx"],
            refresh: true,
        }),
    ],
    css: {
        postcss: {
            plugins: [tailwindcss(), autoprefixer()],
        },
    },
});
``