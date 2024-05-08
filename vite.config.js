// vite.config.js
import { defineConfig } from 'vite';
import cp from 'vite-plugin-cp';


export default defineConfig({
    base: '/node-web/',

    build: {
        outDir: 'dist',
        target: 'esnext',
    },

    plugins: [
        cp({
            targets: [
                { src: 'node_modules/coi-serviceworker/coi-serviceworker.js', dest: 'dist' }
            ]
        })
    ]
});