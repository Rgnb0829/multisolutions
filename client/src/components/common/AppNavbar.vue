<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': menuOpen }">
    <div class="container navbar__inner">
      <!-- Logo / Brand -->
      <router-link to="/" class="navbar__brand" @click="closeAll">
        <div class="brand-icon">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M4 8h24v3H4V8zm0 6.5h16v3H4v-3zm0 6.5h24v3H4v-3z" fill="url(#ng)" />
            <defs>
              <linearGradient id="ng" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="#5B6BF8"/>
                <stop offset="1" stop-color="#00D4AA"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <div class="brand-text">
          <span class="brand-name">Multi-Solution</span>
          <span class="brand-division">A Division of Fimosa Technology Indonesia</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="navbar__links">
        <router-link to="/" class="nav-link" exact-active-class="nav-link--active">
          <span>Home</span>
        </router-link>

        <!-- Services Mega-Menu -->
        <div class="nav-dropdown" @mouseenter="servicesOpen = true" @mouseleave="servicesOpen = false">
          <button
            class="nav-link nav-link--dropdown"
            :class="{ 'nav-link--active': isServicesActive }"
            aria-haspopup="true"
            :aria-expanded="servicesOpen"
          >
            <span>Services</span>
            <svg class="dropdown-chevron" :class="{ open: servicesOpen }" width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>

          <transition name="dropdown">
            <div v-if="servicesOpen" class="mega-menu" role="menu">
              <div class="mega-menu__inner">
                <!-- Software Engineering Column -->
                <div class="mega-col">
                  <div class="mega-col__header mega-col__header--corp">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/>
                    </svg>
                    <span>Software Engineering</span>
                  </div>
                  <router-link to="/services/software-engineering" class="mega-link" @click="servicesOpen = false">
                    <div class="mega-link__icon corp-icon">⚙️</div>
                    <div>
                      <div class="mega-link__title">Overview Layanan</div>
                      <div class="mega-link__desc">Website, ERP, sistem informasi enterprise</div>
                    </div>
                  </router-link>
                  <router-link to="/services/software-engineering/portfolio" class="mega-link" @click="servicesOpen = false">
                    <div class="mega-link__icon corp-icon">📁</div>
                    <div>
                      <div class="mega-link__title">Portfolio & Studi Kasus</div>
                      <div class="mega-link__desc">Proyek yang telah diimplementasikan</div>
                    </div>
                  </router-link>
                </div>

                <div class="mega-divider"></div>

                <!-- Creative Studio Column -->
                <div class="mega-col">
                  <div class="mega-col__header mega-col__header--creative">
                    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
                      <circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/>
                      <circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/>
                      <path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/>
                    </svg>
                    <span>Creative Studio</span>
                  </div>
                  <router-link to="/services/creative-studio" class="mega-link" @click="servicesOpen = false">
                    <div class="mega-link__icon creative-icon">🎨</div>
                    <div>
                      <div class="mega-link__title">Overview Layanan</div>
                      <div class="mega-link__desc">Logo, branding, ilustrasi digital</div>
                    </div>
                  </router-link>
                  <router-link to="/services/creative-studio/portfolio" class="mega-link" @click="servicesOpen = false">
                    <div class="mega-link__icon creative-icon">🖼️</div>
                    <div>
                      <div class="mega-link__title">Galeri Karya</div>
                      <div class="mega-link__desc">Portofolio visual dan aset grafis</div>
                    </div>
                  </router-link>
                </div>
              </div>
            </div>
          </transition>
        </div>

        <router-link to="/contact" class="nav-link" active-class="nav-link--active">
          <span>Kontak</span>
        </router-link>
        <router-link to="/contact" class="btn btn-primary nav-cta">
          Mulai Proyek
        </router-link>
      </nav>

      <!-- Hamburger -->
      <button class="hamburger" :class="{ 'hamburger--open': menuOpen }" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="menuOpen" class="navbar__mobile">
        <router-link to="/" class="mobile-link" @click="closeAll">Home</router-link>

        <!-- Mobile Services Accordion -->
        <div class="mobile-accordion">
          <button class="mobile-link mobile-accordion__trigger" @click="mobileServicesOpen = !mobileServicesOpen">
            <span>Services</span>
            <svg :class="{ open: mobileServicesOpen }" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5">
              <polyline points="6 9 12 15 18 9"/>
            </svg>
          </button>
          <transition name="accordion">
            <div v-if="mobileServicesOpen" class="mobile-accordion__content">
              <div class="mobile-service-group">
                <div class="mobile-service-label mobile-service-label--corp">Software Engineering</div>
                <router-link to="/services/software-engineering" class="mobile-sub-link" @click="closeAll">Overview Layanan</router-link>
                <router-link to="/services/software-engineering/portfolio" class="mobile-sub-link" @click="closeAll">Portfolio & Studi Kasus</router-link>
              </div>
              <div class="mobile-service-group">
                <div class="mobile-service-label mobile-service-label--creative">Creative Studio</div>
                <router-link to="/services/creative-studio" class="mobile-sub-link" @click="closeAll">Overview Layanan</router-link>
                <router-link to="/services/creative-studio/portfolio" class="mobile-sub-link" @click="closeAll">Galeri Karya</router-link>
              </div>
            </div>
          </transition>
        </div>

        <router-link to="/contact" class="mobile-link" @click="closeAll">Kontak</router-link>
        <router-link to="/contact" class="btn btn-primary mobile-cta" @click="closeAll">
          Mulai Proyek
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, computed, onMounted, onUnmounted } from 'vue'
import { useRoute } from 'vue-router'

const route = useRoute()
const isScrolled = ref(false)
const menuOpen = ref(false)
const servicesOpen = ref(false)
const mobileServicesOpen = ref(false)

const isServicesActive = computed(() => route.path.startsWith('/services'))

const closeAll = () => {
  menuOpen.value = false
  servicesOpen.value = false
  mobileServicesOpen.value = false
}

const handleScroll = () => {
  isScrolled.value = window.scrollY > 20
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))
</script>

<style scoped>
.navbar {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  padding: 18px 0;
  transition: all var(--transition-base);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(8, 12, 24, 0.94);
  backdrop-filter: blur(24px);
  -webkit-backdrop-filter: blur(24px);
  padding: 12px 0;
  border-bottom-color: var(--border-subtle);
  box-shadow: 0 4px 24px rgba(0,0,0,0.4);
}

.navbar__inner {
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 24px;
}

/* Brand */
.navbar__brand {
  display: flex;
  align-items: center;
  gap: 12px;
  text-decoration: none;
  flex-shrink: 0;
}

.brand-icon {
  width: 44px;
  height: 44px;
  border-radius: var(--radius-md);
  background: rgba(91, 107, 248, 0.12);
  border: 1px solid var(--border-default);
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all var(--transition-base);
}
.navbar__brand:hover .brand-icon {
  background: rgba(91, 107, 248, 0.22);
  box-shadow: var(--shadow-brand);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.15;
}
.brand-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.05rem;
  color: var(--text-primary);
}
.brand-division {
  font-family: var(--font-body);
  font-weight: 400;
  font-size: 0.65rem;
  color: var(--text-muted);
  letter-spacing: 0.04em;
}

/* Nav Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 6px;
}

.nav-link {
  padding: 8px 14px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.92rem;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  position: relative;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  display: flex;
  align-items: center;
  gap: 4px;
}
.nav-link::after {
  content: '';
  position: absolute;
  bottom: 4px;
  left: 50%;
  transform: translateX(-50%) scaleX(0);
  width: 20px;
  height: 2px;
  background: var(--gradient-brand);
  border-radius: 2px;
  transition: transform var(--transition-base);
}
.nav-link:hover { color: var(--text-primary); }
.nav-link--active {
  color: var(--brand-primary-light) !important;
}
.nav-link--active::after,
.nav-link:hover::after { transform: translateX(-50%) scaleX(1); }
.nav-link--dropdown::after { display: none; }

.dropdown-chevron {
  transition: transform var(--transition-base);
}
.dropdown-chevron.open { transform: rotate(180deg); }

.nav-cta { margin-left: 8px; padding: 10px 20px; font-size: 0.88rem; }

/* Mega Menu */
.nav-dropdown {
  position: relative;
}

.mega-menu {
  position: absolute;
  top: calc(100% + 12px);
  left: 50%;
  transform: translateX(-50%);
  width: 580px;
  background: rgba(10, 14, 28, 0.97);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  box-shadow: 0 24px 64px rgba(0,0,0,0.6), 0 0 0 1px rgba(91,107,248,0.08);
  backdrop-filter: blur(20px);
  overflow: hidden;
}

.mega-menu__inner {
  display: grid;
  grid-template-columns: 1fr auto 1fr;
  gap: 0;
}

.mega-divider {
  width: 1px;
  background: var(--border-subtle);
  margin: 16px 0;
}

.mega-col {
  padding: 20px 24px;
}

.mega-col__header {
  display: flex;
  align-items: center;
  gap: 8px;
  font-family: var(--font-heading);
  font-size: 0.78rem;
  font-weight: 700;
  letter-spacing: 0.08em;
  text-transform: uppercase;
  margin-bottom: 16px;
  padding-bottom: 12px;
  border-bottom: 1px solid var(--border-subtle);
}
.mega-col__header--corp {
  color: var(--corp-accent);
}
.mega-col__header--creative {
  color: var(--creative-primary);
}

.mega-link {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  padding: 10px 12px;
  border-radius: var(--radius-sm);
  text-decoration: none;
  transition: background var(--transition-fast);
  margin-bottom: 4px;
}
.mega-link:hover {
  background: var(--bg-glass-light);
}
.mega-link__icon {
  width: 36px;
  height: 36px;
  border-radius: var(--radius-sm);
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1rem;
  flex-shrink: 0;
}
.corp-icon {
  background: rgba(46, 58, 140, 0.2);
  border: 1px solid var(--corp-border);
}
.creative-icon {
  background: rgba(0, 212, 170, 0.1);
  border: 1px solid var(--creative-border);
}
.mega-link__title {
  font-size: 0.88rem;
  font-weight: 600;
  color: var(--text-primary);
  margin-bottom: 2px;
}
.mega-link__desc {
  font-size: 0.78rem;
  color: var(--text-muted);
  line-height: 1.4;
}

/* Dropdown transition */
.dropdown-enter-active, .dropdown-leave-active {
  transition: all 0.2s ease;
}
.dropdown-enter-from, .dropdown-leave-to {
  opacity: 0;
  transform: translateX(-50%) translateY(-8px);
}

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;
  border: none;
  cursor: pointer;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
  transform-origin: center;
}
.hamburger--open span:nth-child(1) { transform: translateY(7px) rotate(45deg); }
.hamburger--open span:nth-child(2) { opacity: 0; }
.hamburger--open span:nth-child(3) { transform: translateY(-7px) rotate(-45deg); }

/* Mobile Menu */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--border-subtle);
  background: rgba(8, 12, 24, 0.99);
}

.mobile-link {
  padding: 14px 16px;
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: none;
  border: none;
  cursor: pointer;
  font-family: inherit;
  text-decoration: none;
  width: 100%;
  text-align: left;
}
.mobile-link:hover { color: var(--text-primary); background: var(--bg-glass-light); }
.mobile-link svg { transition: transform var(--transition-base); }
.mobile-link svg.open { transform: rotate(180deg); }

.mobile-accordion__content {
  padding: 8px 0 4px 16px;
  border-left: 2px solid var(--border-subtle);
  margin: 0 16px 8px;
}

.mobile-service-group {
  margin-bottom: 16px;
}
.mobile-service-group:last-child { margin-bottom: 0; }

.mobile-service-label {
  font-size: 0.7rem;
  font-weight: 700;
  letter-spacing: 0.1em;
  text-transform: uppercase;
  padding: 8px 12px 4px;
}
.mobile-service-label--corp { color: var(--corp-accent); }
.mobile-service-label--creative { color: var(--creative-primary); }

.mobile-sub-link {
  display: block;
  padding: 9px 12px;
  font-size: 0.88rem;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: color var(--transition-fast);
  text-decoration: none;
}
.mobile-sub-link:hover { color: var(--text-primary); background: var(--bg-glass-light); }

.mobile-cta { margin-top: 12px; justify-content: center; }

/* Accordion transition */
.accordion-enter-active, .accordion-leave-active {
  transition: all 0.25s ease;
  overflow: hidden;
}
.accordion-enter-from, .accordion-leave-to {
  opacity: 0;
  max-height: 0;
}
.accordion-enter-to, .accordion-leave-from {
  max-height: 300px;
}

/* Mobile menu transition */
.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.25s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 900px) {
  .navbar__links { display: none; }
  .hamburger { display: flex; }
}
</style>
