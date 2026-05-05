<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-heading font-bold text-2xl text-text-primary mb-1">Inquiry Inbox</h1>
        <p class="text-text-muted text-sm">Pesan dari formulir kontak website</p>
      </div>
      <div class="flex items-center gap-2">
        <button
          v-for="f in filterOptions"
          :key="f.value"
          :class="[
            'text-xs font-medium px-3 py-1.5 rounded-lg border transition-all duration-150',
            activeFilter === f.value
              ? 'bg-brand/10 border-brand/30 text-brand-light'
              : 'border-border-subtle text-text-muted hover:text-text-secondary hover:bg-white/5',
          ]"
          @click="activeFilter = f.value"
        >
          {{ f.label }}
          <span v-if="f.count !== null" class="ml-1 opacity-60">({{ f.count }})</span>
        </button>
      </div>
    </div>

    <!-- Empty -->
    <div v-if="filteredMessages.length === 0" class="text-center py-16 text-text-muted text-sm">
      <div class="text-4xl mb-3">📭</div>
      {{ activeFilter === 'all' ? 'Belum ada pesan masuk.' : 'Tidak ada pesan untuk filter ini.' }}
    </div>

    <!-- Table -->
    <div v-else class="rounded-xl border border-border-subtle overflow-hidden">
      <div class="overflow-x-auto">
        <table class="w-full text-sm">
          <thead>
            <tr class="bg-surface border-b border-border-subtle text-left">
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Nama</th>
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Email</th>
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Layanan</th>
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Tanggal</th>
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider">Status</th>
              <th class="px-4 py-3 font-semibold text-text-muted text-xs uppercase tracking-wider w-24">Aksi</th>
            </tr>
          </thead>
          <tbody>
            <tr
              v-for="msg in filteredMessages"
              :key="msg.id"
              class="border-b border-border-subtle hover:bg-white/[0.02] cursor-pointer transition-colors"
              @click="openMessage(msg)"
            >
              <td class="px-4 py-3">
                <div class="flex items-center gap-2.5">
                  <div class="w-8 h-8 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-xs font-bold text-brand-light flex-shrink-0">
                    {{ msg.name?.charAt(0)?.toUpperCase() || '?' }}
                  </div>
                  <span :class="['font-medium', msg.status === 'unread' ? 'text-text-primary' : 'text-text-secondary']">{{ msg.name }}</span>
                </div>
              </td>
              <td class="px-4 py-3 text-text-muted">{{ msg.email }}</td>
              <td class="px-4 py-3">
                <span class="chip-ms text-[10px]">{{ msg.service_type || msg.subject || 'General' }}</span>
              </td>
              <td class="px-4 py-3 text-text-muted text-xs">{{ formatDate(msg.submittedAt) }}</td>
              <td class="px-4 py-3">
                <span :class="[
                  'inline-flex items-center gap-1 text-[10px] font-bold uppercase tracking-widest px-2 py-0.5 rounded-full border',
                  msg.status === 'unread'
                    ? 'bg-teal/10 border-teal/25 text-teal'
                    : 'bg-white/5 border-border-subtle text-text-muted',
                ]">
                  {{ msg.status === 'unread' ? '● New' : '✓ Read' }}
                </span>
              </td>
              <td class="px-4 py-3" @click.stop>
                <div class="flex items-center gap-1.5">
                  <button
                    v-if="msg.status === 'unread'"
                    @click="markRead(msg)"
                    class="text-teal hover:text-teal-light text-xs p-1 rounded hover:bg-teal/10 transition-colors"
                    title="Mark as read"
                  >✓</button>
                  <button
                    @click="confirmDelete(msg)"
                    class="text-red-400 hover:text-red-300 text-xs p-1 rounded hover:bg-red-500/10 transition-colors"
                    title="Delete"
                  >🗑️</button>
                </div>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>

    <!-- Message Detail Panel -->
    <teleport to="body">
      <transition name="panel">
        <div v-if="selectedMessage" class="fixed inset-0 z-50 flex justify-end" @click.self="selectedMessage = null">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="selectedMessage = null"></div>
          <div class="relative w-full max-w-md bg-surface border-l border-border-subtle overflow-y-auto">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="font-heading font-bold text-lg text-text-primary">Detail Pesan</h2>
                <button @click="selectedMessage = null" class="text-text-muted hover:text-text-primary text-xl">×</button>
              </div>

              <!-- Sender Info -->
              <div class="flex items-center gap-3 mb-6 p-4 rounded-xl bg-card border border-border-subtle">
                <div class="w-12 h-12 rounded-full bg-brand/10 border border-brand/20 flex items-center justify-center text-lg font-bold text-brand-light">
                  {{ selectedMessage.name?.charAt(0)?.toUpperCase() || '?' }}
                </div>
                <div>
                  <div class="font-semibold text-text-primary">{{ selectedMessage.name }}</div>
                  <a :href="'mailto:' + selectedMessage.email" class="text-sm text-teal hover:text-teal-light transition-colors">{{ selectedMessage.email }}</a>
                </div>
              </div>

              <!-- Meta -->
              <div class="grid grid-cols-2 gap-3 mb-6">
                <div class="p-3 rounded-lg bg-card border border-border-subtle">
                  <div class="text-[10px] uppercase tracking-widest text-text-muted mb-1">Layanan</div>
                  <div class="text-sm font-medium text-text-primary">{{ selectedMessage.service_type || selectedMessage.subject || 'General' }}</div>
                </div>
                <div class="p-3 rounded-lg bg-card border border-border-subtle">
                  <div class="text-[10px] uppercase tracking-widest text-text-muted mb-1">Perusahaan</div>
                  <div class="text-sm font-medium text-text-primary">{{ selectedMessage.company || '—' }}</div>
                </div>
                <div class="p-3 rounded-lg bg-card border border-border-subtle">
                  <div class="text-[10px] uppercase tracking-widest text-text-muted mb-1">Tanggal</div>
                  <div class="text-sm font-medium text-text-primary">{{ formatDateFull(selectedMessage.submittedAt) }}</div>
                </div>
                <div class="p-3 rounded-lg bg-card border border-border-subtle">
                  <div class="text-[10px] uppercase tracking-widest text-text-muted mb-1">Status</div>
                  <div :class="['text-sm font-medium', selectedMessage.status === 'unread' ? 'text-teal' : 'text-text-muted']">
                    {{ selectedMessage.status === 'unread' ? '🟢 Unread' : '✓ Read' }}
                  </div>
                </div>
              </div>

              <!-- Message -->
              <div class="mb-6">
                <div class="text-[10px] uppercase tracking-widest text-text-muted mb-2">Pesan</div>
                <div class="p-4 rounded-xl bg-card border border-border-subtle text-sm text-text-secondary leading-relaxed whitespace-pre-wrap">{{ selectedMessage.message }}</div>
              </div>

              <!-- Actions -->
              <div class="flex items-center gap-3">
                <button
                  v-if="selectedMessage.status === 'unread'"
                  @click="markRead(selectedMessage); selectedMessage = null"
                  class="btn-ms bg-teal/15 text-teal border border-teal/30 text-sm px-4 py-2 hover:bg-teal/25 flex-1 justify-center"
                >✓ Mark as Read</button>
                <a
                  :href="'mailto:' + selectedMessage.email"
                  class="btn-outline-ms text-sm px-4 py-2 flex-1 justify-center"
                >📧 Reply via Email</a>
              </div>
            </div>
          </div>
        </div>
      </transition>
    </teleport>

    <!-- Delete Confirm -->
    <teleport to="body">
      <transition name="fade">
        <div v-if="deleteTarget" class="fixed inset-0 z-50 flex items-center justify-center p-6" @click.self="deleteTarget = null">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="deleteTarget = null"></div>
          <div class="relative bg-surface border border-border-subtle rounded-2xl p-6 max-w-sm w-full">
            <h3 class="font-heading font-bold text-lg text-text-primary mb-2">Hapus Pesan?</h3>
            <p class="text-text-muted text-sm mb-6">Pesan dari "{{ deleteTarget.name }}" akan dihapus permanen.</p>
            <div class="flex items-center gap-3 justify-end">
              <button @click="deleteTarget = null" class="btn-outline-ms text-sm px-4 py-2">Batal</button>
              <button @click="handleDelete" class="btn-ms bg-red-500/20 text-red-300 border border-red-500/30 text-sm px-4 py-2 hover:bg-red-500/30">🗑️ Hapus</button>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, computed, onMounted } from 'vue'
import axios from 'axios'
import { useAdminAuth } from '@/composables/useAdminAuth'
import { useToast } from '@/composables/useToast'

const { getToken } = useAdminAuth()
const { showToast } = useToast()
const headers = { 'x-admin-token': getToken() }

const messages = ref([])
const activeFilter = ref('all')
const selectedMessage = ref(null)
const deleteTarget = ref(null)

const filterOptions = computed(() => {
  const all = messages.value.length
  const unread = messages.value.filter(m => m.status === 'unread').length
  return [
    { label: 'All', value: 'all', count: all },
    { label: 'Unread', value: 'unread', count: unread },
    { label: 'Read', value: 'read', count: all - unread },
  ]
})

const filteredMessages = computed(() => {
  if (activeFilter.value === 'all') return messages.value
  return messages.value.filter(m => m.status === activeFilter.value)
})

const formatDate = (iso) => {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'short' })
}
const formatDateFull = (iso) => {
  if (!iso) return '—'
  return new Date(iso).toLocaleDateString('id-ID', { day: 'numeric', month: 'long', year: 'numeric', hour: '2-digit', minute: '2-digit' })
}

const loadMessages = async () => {
  try {
    const res = await axios.get('/api/admin/messages', { headers })
    messages.value = res.data.data || []
  } catch { showToast('Failed to load messages', 'error') }
}

const openMessage = (msg) => {
  selectedMessage.value = msg
  if (msg.status === 'unread') markRead(msg)
}

const markRead = async (msg) => {
  try {
    await axios.patch(`/api/admin/messages/${msg.id}/read`, {}, { headers })
    msg.status = 'read'
    showToast('Marked as read', 'success')
  } catch { showToast('Failed to update', 'error') }
}

const confirmDelete = (msg) => { deleteTarget.value = msg }

const handleDelete = async () => {
  if (!deleteTarget.value) return
  try {
    await axios.delete(`/api/admin/messages/${deleteTarget.value.id}`, { headers })
    showToast('Message deleted.', 'success')
    deleteTarget.value = null
    selectedMessage.value = null
    await loadMessages()
  } catch { showToast('Failed to delete', 'error') }
}

onMounted(loadMessages)
</script>

<style scoped>
.panel-enter-active, .panel-leave-active { transition: all 0.3s ease; }
.panel-enter-from, .panel-leave-to { transform: translateX(100%); opacity: 0.5; }
.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
