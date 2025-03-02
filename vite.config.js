import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

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
        style: "style.html",
        ifElse: "ifelse.html",
        forLoop: "forloop.html",
        contact: "contact.html"
      }
    }
  }
})
