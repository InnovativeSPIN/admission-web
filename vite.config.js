import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'web',
  },
  base: './',
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.jpeg'],
});
