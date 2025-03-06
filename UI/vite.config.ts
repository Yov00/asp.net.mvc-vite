import {defineConfig} from 'vite'
export default defineConfig({
    appType: "custom",
    root: './',
    build: {
        manifest: true,
        outDir: './wwwroot',
        emptyOutDir: true,
        assetsDir: '',
        rollupOptions: {
            // input: {
            //     main: 'src/main.ts',
            // },
            output: {
                entryFileNames: '[name].js',
                chunkFileNames: '[name].js',
                assetFileNames: '[name].[ext]'
            }
        },

    },
    server: {
        port: 5173,
        strictPort: true,
        hmr: {
            clientPort: 5173
        }
    }
})