<template>
  <header
    :class="[
      'fixed top-0 left-0 right-0 z-50 transition-all duration-300',
      isScrolled
        ? 'bg-base/90 backdrop-blur-2xl border-b border-border-subtle shadow-glass py-3'
        : 'bg-transparent py-5'
    ]"
  >
    <div class="container-ms flex items-center justify-between gap-6">

      <!-- Brand -->
      <router-link to="/" class="flex items-center gap-3 group flex-shrink-0" @click="closeAll">
        <div class="w-9 h-9 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center transition-all duration-300 group-hover:bg-brand/25 group-hover:shadow-brand">
          <svg width="20" height="20" viewBox="0 0 32 32" fill="none">
            <path d="M4 8h24v3H4V8zm0 6.5h16v3H4v-3zm0 6.5h24v3H4v-3z" fill="url(#ng)" />
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6366f1"/>
                <stop offset="1" stop-color="#2dd4bf"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="flex flex-col leading-tight">
          <span class="font-heading font-black text-base text-text-primary tracking-tight">Fimosa MS</span>
          <span class="text-[10px] text-text-muted font-normal tracking-wide">A Division of PT Fimosa Technology</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="hidden md:flex items-center gap-1">
        <router-link to="/" class="nav-pill" exact-active-class="nav-pill--active">Home</router-link>

        <!-- Software House Dropdown -->
        <div class="relative" @mouseenter="swOpen = true" @mouseleave="swOpen = false">
          <button
            :class="['nav-pill flex items-center gap-1', isSoftwareActive ? 'nav-pill--active' : '']"
            aria-haspopup="true"
          >
            Software House
            <svg :class="['w-3.5 h-3.5 transition-transform duration-300', swOpen ? 'rotate-180' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <transition name="dropdown">
            <div v-if="swOpen" class="dropdown-panel">
              <router-link to="/software-house" class="dropdown-item" @click="swOpen = false">
                <div class="w-8 h-8 rounded-md bg-brand/10 border border-brand/20 flex items-center justify-center text-sm flex-shrink-0">⚙️</div>
                <div>
                  <div class="text-sm font-semibold text-text-primary mb-0.5">Layanan</div>
                  <div class="text-xs text-text-muted">ERP, Web, Sistem Informasi</div>
                </div>
              </router-link>
              <router-link to="/software-house/portfolio" class="dropdown-item" @click="swOpen = false">
                <div class="w-8 h-8 rounded-md bg-brand/10 border border-brand/20 flex items-center justify-center text-sm flex-shrink-0">📁</div>
                <div>
                  <div class="text-sm font-semibold text-text-primary mb-0.5">Portfolio</div>
                  <div class="text-xs text-text-muted">Studi kasus & proyek</div>
                </div>
              </router-link>
            </div>
          </transition>
        </div>

        <!-- Creative Studio Dropdown -->
        <div class="relative" @mouseenter="csOpen = true" @mouseleave="csOpen = false">
          <button
            :class="['nav-pill flex items-center gap-1', isCreativeActive ? 'nav-pill--active' : '']"
            aria-haspopup="true"
          >
            Creative Studio
            <svg :class="['w-3.5 h-3.5 transition-transform duration-300', csOpen ? 'rotate-180' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <transition name="dropdown">
            <div v-if="csOpen" class="dropdown-panel">
              <router-link to="/creative-studio" class="dropdown-item" @click="csOpen = false">
                <div class="w-8 h-8 rounded-md bg-pink/10 border border-pink/20 flex items-center justify-center text-sm flex-shrink-0">🎨</div>
                <div>
                  <div class="text-sm font-semibold text-text-primary mb-0.5">Layanan</div>
                  <div class="text-xs text-text-muted">Logo, Branding, Ilustrasi</div>
                </div>
              </router-link>
              <router-link to="/creative-studio/portfolio" class="dropdown-item" @click="csOpen = false">
                <div class="w-8 h-8 rounded-md bg-pink/10 border border-pink/20 flex items-center justify-center text-sm flex-shrink-0">🖼️</div>
                <div>
                  <div class="text-sm font-semibold text-text-primary mb-0.5">Galeri Karya</div>
                  <div class="text-xs text-text-muted">Portfolio visual & aset grafis</div>
                </div>
              </router-link>
            </div>
          </transition>
        </div>

        <router-link to="/contact" class="nav-pill" active-class="nav-pill--active">Kontak</router-link>

        <router-link to="/contact" class="btn-primary-ms ml-3 text-sm px-5 py-2.5">
          Mulai Proyek
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
            <path d="M5 12h14M12 5l7 7-7 7"/>
          </svg>
        </router-link>
      </nav>

      <!-- Hamburger -->
      <button
        class="md:hidden flex flex-col gap-1.5 p-2 rounded-md border border-border-subtle bg-card"
        @click="menuOpen = !menuOpen"
        aria-label="Toggle menu"
      >
        <span :class="['block w-5 h-0.5 bg-text-primary transition-all duration-300', menuOpen ? 'translate-y-2 rotate-45' : '']"></span>
        <span :class="['block w-5 h-0.5 bg-text-primary transition-all duration-300', menuOpen ? 'opacity-0' : '']"></span>
        <span :class="['block w-5 h-0.5 bg-text-primary transition-all duration-300', menuOpen ? '-translate-y-2 -rotate-45' : '']"></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="menuOpen" class="md:hidden bg-surface border-t border-border-subtle">
        <div class="container-ms py-4 flex flex-col gap-1">
          <router-link to="/" class="mobile-nav-link" @click="closeAll">Home</router-link>

          <div>
            <button class="mobile-nav-link w-full flex items-center justify-between" @click="mSwOpen = !mSwOpen">
              <span>Software House</span>
              <svg :class="['w-4 h-4 transition-transform duration-300', mSwOpen ? 'rotate-180' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <transition name="accordion">
              <div v-if="mSwOpen" class="ml-4 mt-1 mb-2 pl-4 border-l border-border-subtle flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-widest text-brand-light font-semibold px-2 py-1">Software House</span>
                <router-link to="/software-house" class="mobile-sub-link" @click="closeAll">Layanan</router-link>
                <router-link to="/software-house/portfolio" class="mobile-sub-link" @click="closeAll">Portfolio</router-link>
              </div>
            </transition>
          </div>

          <div>
            <button class="mobile-nav-link w-full flex items-center justify-between" @click="mCsOpen = !mCsOpen">
              <span>Creative Studio</span>
              <svg :class="['w-4 h-4 transition-transform duration-300', mCsOpen ? 'rotate-180' : '']" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
                <polyline points="6 9 12 15 18 9"/>
              </svg>
            </button>
            <transition name="accordion">
              <div v-if="mCsOpen" class="ml-4 mt-1 mb-2 pl-4 border-l border-border-subtle flex flex-col gap-1">
                <span class="text-[10px] uppercase tracking-widest text-pink-light font-semibold px-2 py-1">Creative Studio</span>
                <router-link to="/creative-studio" class="mobile-sub-link" @click="closeAll">Layanan</router-link>
                <router-link to="/creative-studio/portfolio" class="mobile-sub-link" @click="closeAll">Galeri Karya</router-link>
              </div>
            </transition>
          </div>

          <router-link to="/contact" class="mobile-nav-link" @click="closeAll">Kontak</router-link>
          <router-link to="/contact" class="btn-primary-ms mt-3 justify-center" @click="closeAll">Mulai Proyek →</router-link>
        </div>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled   = ref(false)
const menuOpen     = ref(false)
const swOpen       = ref(false)
const csOpen       = ref(false)
const mSwOpen      = ref(false)
const mCsOpen      = ref(false)

const isSoftwareActive = computed(() => route.path.startsWith('/software-house'))
const isCreativeActive = computed(() => route.path.startsWith('/creative-studio'))

const closeAll = () => {
  menuOpen.value = false
  swOpen.value   = false
  csOpen.value   = false
  mSwOpen.value  = false
  mCsOpen.value  = false
}

const handleScroll = () => { isScrolled.value = window.scrollY > 20 }

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.nav-pill {
  @apply px-3.5 py-2 rounded-lg text-sm font-medium text-text-secondary
         transition-all duration-150 bg-transparent border-none cursor-pointer
         font-body hover:text-text-primary hover:bg-white/5;
}
.nav-pill--active {
  @apply text-brand-light bg-brand/10;
}

.dropdown-panel {
  @apply absolute top-full left-1/2 -translate-x-1/2 mt-2
         w-56 bg-surface border border-border-subtle rounded-xl
         shadow-card-lg p-2 z-50;
  backdrop-filter: blur(20px);
}
.dropdown-item {
  @apply flex items-start gap-3 p-3 rounded-lg transition-colors duration-150
         text-text-secondary hover:bg-white/5 hover:text-text-primary no-underline;
}

.mobile-nav-link {
  @apply px-4 py-3 rounded-lg text-sm font-medium text-text-secondary
         transition-colors duration-150 hover:bg-white/5 hover:text-text-primary
         no-underline;
}
.mobile-sub-link {
  @apply px-3 py-2 rounded-md text-sm text-text-muted
         transition-colors duration-150 hover:text-text-primary
         hover:bg-white/5 no-underline block;
}

/* Dropdown transition */
.dropdown-enter-active, .dropdown-leave-active { transition: all 0.18s ease; }
.dropdown-enter-from, .dropdown-leave-to { opacity: 0; transform: translateX(-50%) translateY(-8px); }

/* Mobile menu */
.mobile-menu-enter-active, .mobile-menu-leave-active { transition: all 0.25s ease; }
.mobile-menu-enter-from, .mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }

/* Accordion */
.accordion-enter-active, .accordion-leave-active { transition: all 0.2s ease; overflow: hidden; }
.accordion-enter-from, .accordion-leave-to { opacity: 0; max-height: 0; }
.accordion-enter-to, .accordion-leave-from { max-height: 200px; }
</style>
