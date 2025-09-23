import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import tsconfigPaths from 'vite-tsconfig-paths'
import svgr from 'vite-plugin-svgr'

export default defineConfig({
  plugins: [tsconfigPaths(), svgr(), react({ plugins: [['@swc/plugin-styled-components', {}]] })],
  server: {
    port: 3000,
  },
})