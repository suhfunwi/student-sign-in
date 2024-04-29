import { createApp } from 'vue'
import {createPinia} from 'pinia'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap-icons/font/bootstrap-icons.css'
import './style.css'
import App from './App.vue'

// createApp(App).mount('#app')

const app = createApp(App)
//vue app
const pinia = createPinia()
//pinia store
app.use(pinia)
//tells the app to use the pinia store
app.mount('#app')
//all this is rewriting the commented code above and including pinia