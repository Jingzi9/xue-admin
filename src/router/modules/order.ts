import { RouteRecordRaw, RouterView } from 'vue-router'
const routes: RouteRecordRaw = {
  path: '/order',
  name: '',
  component: RouterView,
  children: [
    {
      path: 'order_list',
      name: 'order_list',
      component: () => import('@/views/order/list/index.vue')
    },
    {
      path: 'order_offlife',
      name: 'order_offlife',
      component: () => import('@/views/order/offlife/index.vue')
    }
  ]
}
export default routes
