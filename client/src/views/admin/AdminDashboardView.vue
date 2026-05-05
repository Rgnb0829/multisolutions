<template>
  <div>
    <div class="mb-8">
      <h1 class="font-heading font-bold text-2xl text-text-primary mb-1">Dashboard Overview</h1>
      <p class="text-text-muted text-sm">Ringkasan aktivitas Fimosa Multi-Solution</p>
    </div>

    <!-- Stats Cards -->
    <div class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
      <div v-for="stat in statCards" :key="stat.label" class="bento-card flex items-start gap-4">
        <div :class="['w-11 h-11 rounded-xl flex items-center justify-center text-xl flex-shrink-0 border', stat.iconClass]">
          {{ stat.icon }}
        </div>
        <div>
          <div class="font-heading font-black text-2xl text-text-primary">{{ stat.value }}</div>
          <div class="text-xs text-text-muted mt-0.5">{{ stat.label }}</div>
        </div>
      </div>
    </div>

    <!-- Recent Messages -->
    <div class="bento-card">
      <div class="flex items-center justify-between mb-5">
        <h2 class="font-heading font-bold text-lg text-text-primary">Pesan Terbaru</h2>
        <router-link to="/ms-vault-2026/inbox" class="text-xs text-brand-light hover:text-brand font-medium transition-colors">
          Lihat Semua →
        </router-link>
      </div>

      <div v-if="recentMessages.length === 0" class="text-center py-10 text-text-muted text-sm">
        <div class="text-3xl mb-2">📭</div>
        Belum ada pesan masuk.
      </div>

      <div v-else class="flex flex-col gap-2">
        <div
          v-for="msg in recentMessages"
          :key="msg.id"
          class="flex items-center gap-4 p-3 rounded-lg border border-border-subtle hover:bg-white/[0.02] transition-colors duration-150"
        >
          <div class="w-9 h-9 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-light flex-shrink-0">
            {{ msg.name?.charAt(0)?.toUpperCase() || '?' }}
          </div>
          <div class="flex-1 min-w-0">
            <div class="flex items-center gap-2">
              <span class="text-sm font-semibold text-text-primary truncate">{{ msg.name }}</span>
              <span v-if="msg.status === 'unread'" class="w-2 h-2 rounded-full bg-teal flex-shrink-0"></span>
            </div>
            <div class="text-xs text-text-muted truncate">{{ msg.service_type || msg.subject || 'General' }} · {{ msg.email }}</div>
          </div>
          <div class="text-xs text-text-muted flex-shrink-0">{{ formatDate(msg.submittedAt) }}</div>
        </div>
      </div>
    </div>

    <!-- Quick Actions -->
    <div class="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-6">
      <router-link to="/ms-vault-2026/portfolio" class="bento-card bento-interactive border-brand/15 hover:border-brand/30 hover:shadow-brand flex items-center gap-4 group">
        <div class="w-11 h-11 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-xl">🖼️</div>
        <div>
          <div class="text-sm font-semibold text-text-primary group-hover:text-brand-light transition-colors">Manage Portfolio</div>
          <div class="text-xs text-text-muted">Tambah, edit, atau hapus karya</div>
        </div>
      </router-link>
      <router-link to="/ms-vault-2026/inbox" class="bento-card bento-interactive border-teal/15 hover:border-teal/30 hover:shadow-teal flex items-center gap-4 group">
        <div class="w-11 h-11 rounded-xl bg-teal/10 border border-teal/20 flex items-center justify-center text-xl">📬</div>
        <div>
          <div class="text-sm font-semibold text-text-primary group-hover:text-teal transition-colors">View Inbox</div>
          <div class="text-xs text-text-muted">Baca dan kelola pesan masuk</div>
        </div>
      </router-link>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted } from 'vue'
import axios from 'axios'
import { useAdminAuth } from '@/composables/useAdminAuth'

const { getToken } = useAdminAuth()
const headers = { 'x-admin-token': getToken() }

const statCards = ref([
  { icon: '🖼️', label: 'Portfolio Items',  value: '—', iconClass: 'bg-brand/10 border-brand/20' },
  { icon: '📬', label: 'Total Messages',   value: '—', iconClass: 'bg-teal/10 border-teal/20' },
  { icon: '🔔', label: 'Unread Messages',  value: '—', iconClass: 'bg-yellow-500/10 border-yellow-500/20' },
  { icon: '🕐', label: 'Last Activity',    value: '—', iconClass: 'bg-pink/10 border-pink/20' },
])

const recentMessages = ref([])

const formatDate = (iso) => {
  if (!iso) return '—'
  const d = new Date(iso)
  return d.toLocaleDateString('id-ID', { day: 'numeric', month: 'short', year: 'numeric' })
}

onMounted(async () => {
  try {
    const [statsRes, msgRes] = await Promise.all([
      axios.get('/api/admin/stats', { headers }),
      axios.get('/api/admin/messages', { headers }),
    ])

    const s = statsRes.data.data
    statCards.value[0].value = String(s.totalPortfolio)
    statCards.value[1].value = String(s.totalMessages)
    statCards.value[2].value = String(s.unreadMessages)
    statCards.value[3].value = s.lastActivity ? formatDate(s.lastActivity) : 'None'

    recentMessages.value = (msgRes.data.data || []).slice(0, 5)
  } catch { /* silently fail — stats show '—' */ }
})
</script>
