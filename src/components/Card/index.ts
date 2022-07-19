import Component from './index.vue'
import { App } from 'vue'
export default {
  install (app:App) {
    app.component('AppCard', Component)
  }
}
