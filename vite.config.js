import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import SayHello from './src/components/SayHello.vue'

// https://vite.dev/config/
export default defineConfig({
  plugins: [vue()],

  // tambahkan untuk multiple html
  build: {
    rollupOptions: {
      input: {
        index: "index.html",
        hello: "hello.html",
        counter: "counter.html",
        sayhello: "sayHello.html",
      }
    }
  }
})
