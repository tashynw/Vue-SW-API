import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import '@/assets/css/App.css'
import '@/assets/css/HomeView.css'
import '@/assets/css/CardView.css'

createApp(App).use(router).mount('#app')
