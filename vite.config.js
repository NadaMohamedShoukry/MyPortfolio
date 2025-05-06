import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  css:{
    modules:{
      //to use camelcase in all css modules
      localsConvention:'camelCase',
    }
  }
})
