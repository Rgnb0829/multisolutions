<template>
  <header class="navbar" :class="{ 'navbar--scrolled': isScrolled, 'navbar--open': menuOpen }">
    <div class="container navbar__inner">
      <!-- Logo / Brand -->
      <router-link to="/" class="navbar__brand" @click="menuOpen = false">
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
          <span class="brand-name">Fimosa</span>
          <span class="brand-division">Multi-Solution</span>
        </div>
      </router-link>

      <!-- Desktop Nav -->
      <nav class="navbar__links">
        <router-link to="/" class="nav-link" exact-active-class="nav-link--active">
          <span>Home</span>
        </router-link>
        <router-link to="/services" class="nav-link" active-class="nav-link--active">
          <span>Services</span>
        </router-link>
        <router-link to="/contact" class="nav-link" active-class="nav-link--active">
          <span>Contact</span>
        </router-link>
        <router-link to="/contact" class="btn btn-primary nav-cta">
          Hubungi Kami
        </router-link>
      </nav>

      <!-- Hamburger -->
      <button class="hamburger" @click="menuOpen = !menuOpen" aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>

    <!-- Mobile Menu -->
    <transition name="mobile-menu">
      <div v-if="menuOpen" class="navbar__mobile">
        <router-link to="/" class="mobile-link" @click="menuOpen = false">Home</router-link>
        <router-link to="/services" class="mobile-link" @click="menuOpen = false">Services</router-link>
        <router-link to="/contact" class="mobile-link" @click="menuOpen = false">Contact</router-link>
        <router-link to="/contact" class="btn btn-primary mobile-cta" @click="menuOpen = false">
          Hubungi Kami
        </router-link>
      </div>
    </transition>
  </header>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isScrolled = ref(false)
const menuOpen = ref(false)

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
  padding: 20px 0;
  transition: all var(--transition-base);
  border-bottom: 1px solid transparent;
}

.navbar--scrolled {
  background: rgba(8, 12, 24, 0.92);
  backdrop-filter: blur(20px);
  -webkit-backdrop-filter: blur(20px);
  padding: 14px 0;
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
  background: rgba(91, 107, 248, 0.2);
  box-shadow: var(--shadow-brand);
}

.brand-text {
  display: flex;
  flex-direction: column;
  line-height: 1.1;
}
.brand-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1.1rem;
  color: var(--text-primary);
}
.brand-division {
  font-family: var(--font-heading);
  font-weight: 500;
  font-size: 0.72rem;
  color: var(--brand-primary-light);
  letter-spacing: 0.08em;
  text-transform: uppercase;
}

/* Nav Links */
.navbar__links {
  display: flex;
  align-items: center;
  gap: 8px;
}

.nav-link {
  padding: 8px 16px;
  border-radius: var(--radius-sm);
  font-weight: 500;
  font-size: 0.95rem;
  color: var(--text-secondary);
  transition: all var(--transition-fast);
  position: relative;
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

.nav-cta { margin-left: 12px; padding: 10px 22px; font-size: 0.9rem; }

/* Hamburger */
.hamburger {
  display: none;
  flex-direction: column;
  gap: 5px;
  background: none;
  padding: 8px;
}
.hamburger span {
  display: block;
  width: 24px;
  height: 2px;
  background: var(--text-primary);
  border-radius: 2px;
  transition: all var(--transition-base);
}

/* Mobile Menu */
.navbar__mobile {
  display: flex;
  flex-direction: column;
  gap: 4px;
  padding: 16px 24px 24px;
  border-top: 1px solid var(--border-subtle);
  background: rgba(8, 12, 24, 0.98);
}
.mobile-link {
  padding: 14px 16px;
  font-weight: 500;
  color: var(--text-secondary);
  border-radius: var(--radius-sm);
  transition: all var(--transition-fast);
}
.mobile-link:hover { color: var(--text-primary); background: var(--bg-glass-light); }
.mobile-cta { margin-top: 12px; justify-content: center; }

.mobile-menu-enter-active,
.mobile-menu-leave-active { transition: all 0.25s ease; }
.mobile-menu-enter-from,
.mobile-menu-leave-to { opacity: 0; transform: translateY(-10px); }

@media (max-width: 768px) {
  .navbar__links { display: none; }
  .hamburger { display: flex; }
}
</style>
