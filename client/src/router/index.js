import { createRouter, createWebHistory } from 'vue-router'
import HomeView from '@/views/HomeView.vue'
import SoftwareEngineeringView from '@/views/SoftwareEngineeringView.vue'
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
      title: 'Beranda | Multi-Solution — A Division of Fimosa Technology Indonesia',
      description: 'Multi-Solution adalah divisi hibrida Fimosa Technology Indonesia yang menghadirkan solusi Software Engineering dan Creative Studio untuk korporasi, pemerintah, dan startup.'
    }
  },
  {
    path: '/services',
    redirect: '/services/software-engineering'
  },
  {
    path: '/services/software-engineering',
    name: 'SoftwareEngineering',
    component: SoftwareEngineeringView,
    meta: {
      title: 'Software Engineering | Multi-Solution — Fimosa Technology Indonesia',
      description: 'Layanan Software Engineering profesional dari Multi-Solution: pengembangan website, sistem informasi enterprise, dan custom ERP dengan arsitektur terukur dan protokol keamanan industry-standard.'
    }
  },
  {
    path: '/services/software-engineering/portfolio',
    name: 'SoftwarePortfolio',
    component: SoftwarePortfolioView,
    meta: {
      title: 'Portfolio Software Engineering | Multi-Solution',
      description: 'Studi kasus dan portofolio proyek Software Engineering dari Multi-Solution — solusi enterprise yang telah diimplementasikan untuk korporasi dan institusi pemerintah.'
    }
  },
  {
    path: '/services/creative-studio',
    name: 'CreativeStudio',
    component: CreativeStudioView,
    meta: {
      title: 'Creative Studio | Multi-Solution — Fimosa Technology Indonesia',
      description: 'Layanan Creative Studio profesional dari Multi-Solution: desain logo, identitas merek, ilustrasi digital, dan aset grafis untuk korporasi dan startup.'
    }
  },
  {
    path: '/services/creative-studio/portfolio',
    name: 'CreativePortfolio',
    component: CreativePortfolioView,
    meta: {
      title: 'Portfolio Creative Studio | Multi-Solution',
      description: 'Galeri karya Creative Studio Multi-Solution — logo, branding, ilustrasi, dan aset visual untuk berbagai industri.'
    }
  },
  {
    path: '/contact',
    name: 'Contact',
    component: ContactView,
    meta: {
      title: 'Hubungi Kami | Multi-Solution — Fimosa Technology Indonesia',
      description: 'Konsultasikan kebutuhan digital Anda bersama tim Multi-Solution. Temukan lokasi kantor Fimosa Technology Indonesia dan ajukan inquiry proyek Anda.'
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
  document.title = to.meta.title || 'Multi-Solution | Fimosa Technology Indonesia'
  const metaDesc = document.querySelector('meta[name="description"]')
  if (metaDesc) metaDesc.setAttribute('content', to.meta.description || '')
})

export default router
