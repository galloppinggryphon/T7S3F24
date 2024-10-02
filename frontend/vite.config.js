import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import alias from '@rollup/plugin-alias'
import svgr from 'vite-plugin-svgr'
import path from 'path'
import { fileURLToPath } from 'url'
import { TanStackRouterVite } from '@tanstack/router-plugin/vite'

const __filename = fileURLToPath( import.meta.url )
const __dirname = path.dirname( __filename )

// See documentation at https://vitejs.dev/config/
export default defineConfig( {
    build: {
        outDir: '../frontend-dist',
        emptyOutDir: true,
    },
    css: {
        devSourcemap: true,
    },
    plugins: [
        alias( {
            entries: [
                { find: '@', replacement: path.resolve( __dirname, './src' ) },
            ],
        } ),
        react(),
        svgr( {
            include: '**/*.svg',
        } ),
        TanStackRouterVite(),
    ],
} )
