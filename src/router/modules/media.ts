import { RouteRecordRaw } from 'vue-router'

const routers: RouteRecordRaw = {
  path: 'media',
  name: 'media',
  component: () => import('@/views/media/index.vue'),
  meta: {
    title: '媒体'
  }
}

export default routers
