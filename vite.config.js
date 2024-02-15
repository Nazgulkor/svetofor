import { defineConfig } from "vite";
import laravel from "laravel-vite-plugin";

export default defineConfig({
    plugins: [
        laravel({
            input: [
                "resources/css/app.css",
                "resources/css/button_styles.css",
                "resources/css/table_styles.css",
                "resources/js/app.js",
                "resources/js/bootstrap.js",
                "resources/js/functions.js",
            ],
            refresh: true,
        }),
    ],
});
