import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SoftwareHouseView from '@/views/SoftwareHouseView.vue'
import SoftwarePortfolioView from '@/views/SoftwarePortfolioView.vue'
import CreativeStudioView from '@/views/CreativeStudioView.vue'
import CreativePortfolioView from '@/views/CreativePortfolioView.vue'
import ContactView from '@/views/ContactView.vue'

const routes = [
  {
    path: '/',
    name: 'Home',
    component: HomeView,
    meta: {
      title: 'Fimosa Multi-Solution — Your Strategic Partner in Digital & Creative Excellence',
      description: 'A Strategic Division of PT Fimosa Technology Indonesia, delivering Software House and Creative Studio solutions for Corporate, Government, and Startups.'
    }
  },
  {
    path: '/software-house',
    name: 'SoftwareHouse',
    component: SoftwareHouseView,
    meta: {
      title: 'Software House | Fimosa Multi-Solution',
      description: 'Integrated Digital Engineering for Corporate & Government Ecosystems. Scalable ERP, System Information, and Custom Web Solutions.'
    }
  },
  {
    path: '/software-house/portfolio',
    name: 'SoftwarePortfolio',
    component: SoftwarePortfolioView,
    meta: {
      title: 'Software House Portfolio | Fimosa Multi-Solution',
      description: 'Case studies and project portfolio from Fimosa Multi-Solution Software House — enterprise solutions for corporations and government institutions.'
    }
  },
  {
    path: '/creative-studio',
    name: 'CreativeStudio',
    component: CreativeStudioView,
    meta: {
      title: 'Creative Studio | Fimosa Multi-Solution',
      description: 'Bespoke Visual Identity for Startups & Corporations. Logo Design, Brand Identity, Illustration, and Brand Kits.'
    }
  },
  {
    path: '/creative-studio/portfolio',
    name: 'CreativePortfolio',
    component: CreativePortfolioView,
    meta: {
      title: 'Creative Studio Portfolio | Fimosa Multi-Solution',
      description: 'Gallery of creative work from Fimosa Multi-Solution Creative Studio — logos, branding, illustrations, and visual assets.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Contact Us | Fimosa Multi-Solution',
      description: 'Consult your digital needs with the Fimosa Multi-Solution team. Start your project inquiry today.'
    }
  },
  // Legacy redirects
  { path: '/services',                             redirect: '/software-house' },
  { path: '/services/software-engineering',        redirect: '/software-house' },
  { path: '/services/software-engineering/portfolio', redirect: '/software-house/portfolio' },
  { path: '/services/creative-studio',             redirect: '/creative-studio' },
  { path: '/services/creative-studio/portfolio',   redirect: '/creative-studio/portfolio' },
  // Catch-all
  { path: '/:pathMatch(.*)*', redirect: '/' }
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

router.afterEach((to) => {
  document.title = to.meta.title || 'Fimosa Multi-Solution'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', to.meta.description || '')
})

export default router
