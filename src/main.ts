import { createApp } from 'vue'
import App from './App.vue'
import router from './router/index'
import { store, key } from './store'
import elementPlus from './plugins/element-plus'
import './styles/index.scss'
const app = createApp(App)
app.use(router)
app.use(store, key)
app.use(elementPlus)
const modules = import.meta.globEager('./components/**/*.ts')

for (const path in modules) {
  app.use(modules[path].default)
}
app.mount('#app')
