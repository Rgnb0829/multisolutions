import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import ServicesView from '@/views/ServicesView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Beranda | Fimosa Multi-Solution',
      description: 'Company profile MS — Divisi Multi-Solution dari Fimosa Technology Indonesia, menghadirkan layanan Software House dan Creative Studio.'
    }
  },
  {
    path: '/services',
    name: 'Services',
    component: ServicesView,
    meta: {
      title: 'Layanan | Fimosa Multi-Solution',
      description: 'Layanan Software House dan Creative Studio dari Fimosa Multi-Solution untuk korporasi, pemerintah, dan startup.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Kontak | Fimosa Multi-Solution',
      description: 'Kontak resmi Fimosa Multi-Solution. Temukan lokasi kantor Fimosa Technology Indonesia dan hubungi tim kami.'
    }
  },
  {
    path: '/:pathMatch(.*)*',
    redirect: '/'
  }
]

const router = createRouter({
  history: createWebHistory(),
  routes,
  scrollBehavior(to, from, savedPosition) {
    if (savedPosition) return savedPosition
    if (to.hash) return { el: to.hash, behavior: 'smooth' }
    return { top: 0, behavior: 'smooth' }
  }
})

// Update page title & meta on route change
router.afterEach((to) => {
  document.title = to.meta.title || 'Fimosa Multi-Solution'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', to.meta.description || '')
})

export default router
