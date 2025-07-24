import { createApp } from 'vue'
import App from './App.vue'
import router from './router' // Import the router
import './style.css' // Import global styles

const app = createApp(App)
app.use(router) // use the router
app.mount('#app')