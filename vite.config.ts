import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
  server: {
    host: '0.0.0.0',  // Expõe o servidor para acesso externo
    port: 5175,        // Porta específica para evitar conflitos
    strictPort: false, // Tenta outra porta se esta estiver em uso
    open: false,       // Não abre o navegador automaticamente
  },
});
