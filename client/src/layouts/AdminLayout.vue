<template>
  <div v-if="isAuthenticated" class="flex min-h-screen bg-base">
    <!-- Sidebar -->
    <aside class="w-60 flex-shrink-0 bg-surface border-r border-border-subtle flex flex-col">
      <!-- Brand -->
      <div class="px-5 py-6 border-b border-border-subtle">
        <div class="flex items-center gap-2.5">
          <div class="w-8 h-8 rounded-lg bg-brand/15 border border-brand/30 flex items-center justify-center">
            <svg width="16" height="16" viewBox="0 0 32 32" fill="none">
              <path d="M4 8h24v3H4V8zm0 6.5h16v3H4v-3zm0 6.5h24v3H4v-3z" fill="url(#sng)" />
              <defs>
                <linearGradient id="sng" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#6366f1"/><stop offset="1" stop-color="#2dd4bf"/>
                </linearGradient>
              </defs>
            </svg>
          </div>
          <div class="flex flex-col leading-tight">
            <span class="font-heading font-bold text-sm text-text-primary">Fimosa MS</span>
            <span class="text-[9px] text-text-muted tracking-wide">Admin Dashboard</span>
          </div>
        </div>
      </div>

      <!-- Nav -->
      <nav class="flex-1 px-3 py-4 flex flex-col gap-1">
        <router-link
          v-for="item in navItems"
          :key="item.to"
          :to="item.to"
          :class="[
            'flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-all duration-150',
            isActive(item.to)
              ? 'bg-brand/10 text-brand-light border border-brand/20'
              : 'text-text-muted hover:text-text-primary hover:bg-white/5 border border-transparent',
          ]"
        >
          <span class="text-base">{{ item.icon }}</span>
          <span>{{ item.label }}</span>
          <span v-if="item.badge" class="ml-auto text-[10px] font-bold px-1.5 py-0.5 rounded-full bg-red-500/20 text-red-300 border border-red-500/30">
            {{ item.badge }}
          </span>
        </router-link>
      </nav>

      <!-- Footer -->
      <div class="px-3 py-4 border-t border-border-subtle">
        <router-link to="/" class="flex items-center gap-2 px-3 py-2 rounded-lg text-xs text-text-muted hover:text-text-secondary hover:bg-white/5 transition-colors duration-150">
          <span>←</span>
          <span>Kembali ke Website</span>
        </router-link>
        <button
          @click="handleLogout"
          class="w-full flex items-center gap-2 px-3 py-2 mt-1 rounded-lg text-xs text-red-400 hover:text-red-300 hover:bg-red-500/10 transition-colors duration-150"
        >
          <span>⏻</span>
          <span>Logout</span>
        </button>
      </div>
    </aside>

    <!-- Main Content -->
    <div class="flex-1 flex flex-col min-w-0">
      <!-- Top Bar -->
      <header class="h-14 border-b border-border-subtle bg-surface/80 backdrop-blur-xl flex items-center px-6 flex-shrink-0">
        <div class="flex items-center gap-2 text-xs text-text-muted">
          <span>Admin</span>
          <span class="text-border-default">/</span>
          <span class="text-text-secondary font-medium">{{ currentPageTitle }}</span>
        </div>
        <div class="ml-auto flex items-center gap-3">
          <span class="text-[10px] text-text-muted px-2 py-1 rounded-md bg-card border border-border-subtle">🔒 Authenticated</span>
        </div>
      </header>

      <!-- Page Content -->
      <main class="flex-1 overflow-y-auto p-6">
        <router-view />
      </main>
    </div>

    <!-- Toast -->
    <ToastContainer />
  </div>

  <!-- Gate if not authenticated -->
  <AdminGate v-else />
</template>

<script setup>
import { computed, onMounted } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { useAdminAuth } from '@/composables/useAdminAuth'
import ToastContainer from '@/components/admin/ToastContainer.vue'
import AdminGate from '@/views/admin/AdminGate.vue'

const route = useRoute()
const router = useRouter()
const { isAuthenticated, checkUrlToken, clearToken } = useAdminAuth()

onMounted(() => {
  checkUrlToken()
})

const navItems = [
  { icon: '📊', label: 'Dashboard',  to: '/ms-vault-2026/dashboard' },
  { icon: '🖼️', label: 'Portfolio',   to: '/ms-vault-2026/portfolio' },
  { icon: '📬', label: 'Inbox',       to: '/ms-vault-2026/inbox' },
]

const isActive = (path) => route.path === path

const currentPageTitle = computed(() => {
  const map = {
    '/ms-vault-2026/dashboard': 'Dashboard',
    '/ms-vault-2026/portfolio': 'Portfolio Manager',
    '/ms-vault-2026/inbox':     'Inquiry Inbox',
  }
  return map[route.path] || 'Dashboard'
})

const handleLogout = () => {
  clearToken()
  router.push('/')
}
</script>
