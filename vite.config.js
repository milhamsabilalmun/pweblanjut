import { defineConfig } from 'vite';
import laravel from 'laravel-vite-plugin';

export default defineConfig({
    plugins: [
        laravel({
            input: [
                'resources/css/app.css',
                'resources/js/app.js',
            ],
            manifest: true, // Aktifkan manifest untuk mencatat file yang dibundle
        }),
    ],
    build: {
        outDir: 'public/build', // Pastikan outDir sesuai dengan struktur proyek Anda
        emptyOutDir: true, // Kosongkan direktori output sebelum membangun ulang
    },
});
