import {defineConfig} from 'vite'
import {glob} from 'glob';
import {resolve,relative} from 'path';


const entries: any = {};
const entryFiles = glob.sync('src/*/**.{js,ts,jsx,tsx}');


entryFiles.forEach(file => {
    const filename: string | undefined = file.split('/').pop()?.split('.')[0];
    if (filename) {
        entries[filename] = file;
    }
});

export default defineConfig({
    appType: "custom",
    root: './',
    build: {
        manifest: true,
        outDir: './wwwroot',
        emptyOutDir: true,
        assetsDir: '',
        rollupOptions: {
            input: entries,
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