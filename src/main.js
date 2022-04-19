import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index.js'


// createApp(App).use(router).mount('#App')

const app = createApp(App)
app.use(router)
app.mount('#app')
