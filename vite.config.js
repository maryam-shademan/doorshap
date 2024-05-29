import { defineConfig } from 'vite';
import { resolve } from 'path'
import fs from 'fs';

export default defineConfig({
    build: {
        rollupOptions: {
            input: {
                about: resolve(__dirname, 'src/aboutus.html'),
                contact: resolve(__dirname, 'src/cantactus.html'),
                framework: resolve(__dirname, 'src/framework.html'),
                outdooor: resolve(__dirname, 'src/outdoor.html'),
                indoor: resolve(__dirname, 'src/indoor.html'),
                register: resolve(__dirname, 'src/register.html'),
                shop: resolve(__dirname, 'src/shop.html'),
            },
            output: {
                assetFileNames: (assetInfo) => {
                    
                    return assetInfo.name;
                },
            }
        }
    }
})