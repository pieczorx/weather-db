import {createApp} from 'vue'
import {createPinia} from 'pinia'
import '../styles/style.css'
import App from './App.vue'
import {setupClientRoutes} from './router/setupClientRoutes'
import {setupRouter} from './router/setupRouter'
import {runPostClientSetupTasks} from './runPostClientSetupTasks'

const vueApp = createApp(App)

const pinia = createPinia()
vueApp.use(pinia)

const routes = setupClientRoutes(pinia)
const router = setupRouter(routes)
vueApp.use(router)


runPostClientSetupTasks(
  router,
  pinia,
)

vueApp.mount('#app')
