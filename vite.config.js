import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import tailwindcss from '@tailwindcss/vite';

// https://vite.dev/config/
export default defineConfig({
  base: './', // 👈 ESSA LINHA resolve o problema de 404 no deploy
  plugins: [react(), tailwindcss()],
});
