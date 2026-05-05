<template>
  <div>
    <div class="flex items-center justify-between mb-8">
      <div>
        <h1 class="font-heading font-bold text-2xl text-text-primary mb-1">Portfolio Manager</h1>
        <p class="text-text-muted text-sm">Kelola karya Creative Studio</p>
      </div>
      <button @click="openForm(null)" class="btn-primary-ms text-sm px-4 py-2.5">
        + Tambah Item
      </button>
    </div>

    <!-- Portfolio Grid -->
    <div v-if="items.length === 0" class="text-center py-16 text-text-muted text-sm">
      <div class="text-4xl mb-3">🖼️</div>
      Belum ada portfolio item. Klik "Tambah Item" untuk memulai.
    </div>

    <div v-else class="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
      <div
        v-for="item in items"
        :key="item.id"
        class="rounded-xl border border-border-subtle overflow-hidden hover:border-border-default transition-all duration-200 group"
      >
        <!-- Preview -->
        <div
          class="h-36 flex items-center justify-center"
          :style="{ background: item.bgGradient || 'linear-gradient(135deg, #111827, #1f2937)' }"
        >
          <span class="text-5xl group-hover:scale-110 transition-transform duration-300">{{ item.emoji || '📁' }}</span>
        </div>
        <!-- Info -->
        <div class="p-4 bg-card">
          <div class="flex items-center gap-2 mb-1.5">
            <span class="text-[10px] font-bold uppercase tracking-widest text-brand-light">{{ item.category }}</span>
            <span class="text-[10px] text-text-muted">·</span>
            <span class="text-[10px] text-text-muted">{{ item.client || 'No client' }}</span>
          </div>
          <h3 class="font-heading font-bold text-sm text-text-primary mb-1 truncate">{{ item.title }}</h3>
          <p class="text-xs text-text-muted line-clamp-2">{{ item.description || 'No description' }}</p>
          <!-- Actions -->
          <div class="flex items-center gap-2 mt-3 pt-3 border-t border-border-subtle">
            <button @click="openForm(item)" class="text-xs text-brand-light hover:text-brand font-medium transition-colors">✏️ Edit</button>
            <span class="text-border-subtle">|</span>
            <button @click="confirmDelete(item)" class="text-xs text-red-400 hover:text-red-300 font-medium transition-colors">🗑️ Delete</button>
          </div>
        </div>
      </div>
    </div>

    <!-- Form Slide Panel -->
    <teleport to="body">
      <transition name="panel">
        <div v-if="showForm" class="fixed inset-0 z-50 flex justify-end" @click.self="showForm = false">
          <div class="absolute inset-0 bg-black/60 backdrop-blur-sm" @click="showForm = false"></div>
          <div class="relative w-full max-w-md bg-surface border-l border-border-subtle overflow-y-auto">
            <div class="p-6">
              <div class="flex items-center justify-between mb-6">
                <h2 class="font-heading font-bold text-lg text-text-primary">
                  {{ editing ? 'Edit Portfolio' : 'Tambah Portfolio' }}
                </h2>
                <button @click="showForm = false" class="text-text-muted hover:text-text-primary text-xl">×</button>
              </div>

              <form @submit.prevent="handleSave" class="flex flex-col gap-4">
                <div>
                  <label class="form-label">Title *</label>
                  <input v-model="form.title" type="text" required class="form-input" placeholder="HexaBrand Identity" />
                </div>
                <div>
                  <label class="form-label">Category *</label>
                  <select v-model="form.category" required class="form-input">
                    <option value="" disabled>Pilih kategori...</option>
                    <option v-for="c in categories" :key="c" :value="c">{{ c }}</option>
                  </select>
                </div>
                <div>
                  <label class="form-label">Client</label>
                  <input v-model="form.client" type="text" class="form-input" placeholder="Tech Startup" />
                </div>
                <div>
                  <label class="form-label">Emoji Icon</label>
                  <input v-model="form.emoji" type="text" class="form-input" placeholder="⬡" />
                </div>
                <div>
                  <label class="form-label">Image URL (optional)</label>
                  <input v-model="form.imageUrl" type="url" class="form-input" placeholder="https://example.com/image.jpg" />
                </div>
                <div>
                  <label class="form-label">BG Gradient CSS</label>
                  <input v-model="form.bgGradient" type="text" class="form-input" placeholder="linear-gradient(135deg, #1a0533, #2d0a5e)" />
                </div>
                <div>
                  <label class="form-label">Accent Color</label>
                  <div class="flex items-center gap-2">
                    <input v-model="form.accentColor" type="text" class="form-input flex-1" placeholder="#c084fc" />
                    <div class="w-10 h-10 rounded-lg border border-border-subtle flex-shrink-0" :style="{ background: form.accentColor || '#818cf8' }"></div>
                  </div>
                </div>
                <div>
                  <label class="form-label">Description</label>
                  <textarea v-model="form.description" rows="3" class="form-input resize-none" placeholder="Deskripsi karya..."></textarea>
                </div>

                <button type="submit" :disabled="saving" class="btn-primary-ms justify-center py-3 text-sm mt-2">
                  {{ saving ? 'Saving...' : (editing ? 'Update Item' : 'Publish Item') }}
                </button>
              </form>
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
            <h3 class="font-heading font-bold text-lg text-text-primary mb-2">Hapus Item?</h3>
            <p class="text-text-muted text-sm mb-6">
              "{{ deleteTarget.title }}" akan dihapus permanen. Tindakan ini tidak dapat dibatalkan.
            </p>
            <div class="flex items-center gap-3 justify-end">
              <button @click="deleteTarget = null" class="btn-outline-ms text-sm px-4 py-2">Batal</button>
              <button @click="handleDelete" :disabled="deleting" class="btn-ms bg-red-500/20 text-red-300 border border-red-500/30 text-sm px-4 py-2 hover:bg-red-500/30">
                {{ deleting ? 'Deleting...' : '🗑️ Hapus' }}
              </button>
            </div>
          </div>
        </div>
      </transition>
    </teleport>
  </div>
</template>

<script setup>
import { ref, reactive, onMounted } from 'vue'
import axios from 'axios'
import { useAdminAuth } from '@/composables/useAdminAuth'
import { useToast } from '@/composables/useToast'

const { getToken } = useAdminAuth()
const { showToast } = useToast()
const headers = { 'x-admin-token': getToken() }

const items = ref([])
const showForm = ref(false)
const editing = ref(null)
const saving = ref(false)
const deleteTarget = ref(null)
const deleting = ref(false)
const categories = ['Logo', 'Branding', 'Brand Kit', 'Illustration', 'Motion']

const form = reactive({
  title: '', category: '', client: '', emoji: '', imageUrl: '',
  description: '', bgGradient: '', accentColor: '',
})

const resetForm = () => {
  Object.assign(form, { title: '', category: '', client: '', emoji: '', imageUrl: '', description: '', bgGradient: '', accentColor: '' })
  editing.value = null
}

const openForm = (item) => {
  resetForm()
  if (item) {
    editing.value = item.id
    Object.keys(form).forEach(k => { if (item[k] !== undefined) form[k] = item[k] })
  }
  showForm.value = true
}

const confirmDelete = (item) => { deleteTarget.value = item }

const loadItems = async () => {
  try {
    const res = await axios.get('/api/admin/portfolio', { headers })
    items.value = res.data.data || []
  } catch { showToast('Failed to load portfolio', 'error') }
}

const handleSave = async () => {
  saving.value = true
  try {
    if (editing.value) {
      await axios.put(`/api/admin/portfolio/${editing.value}`, form, { headers })
      showToast('Portfolio item updated.', 'success')
    } else {
      await axios.post('/api/admin/portfolio', form, { headers })
      showToast('Portfolio item published!', 'success')
    }
    showForm.value = false
    resetForm()
    await loadItems()
  } catch (err) {
    showToast(err?.response?.data?.message || 'Failed to save', 'error')
  } finally { saving.value = false }
}

const handleDelete = async () => {
  if (!deleteTarget.value) return
  deleting.value = true
  try {
    await axios.delete(`/api/admin/portfolio/${deleteTarget.value.id}`, { headers })
    showToast('Portfolio item deleted.', 'success')
    deleteTarget.value = null
    await loadItems()
  } catch { showToast('Failed to delete', 'error') }
  finally { deleting.value = false }
}

onMounted(loadItems)
</script>

<style scoped>
.form-label { @apply block text-sm font-medium text-text-secondary mb-1.5; }
.form-input {
  @apply w-full bg-card border border-border-default rounded-lg px-3 py-2.5
         text-sm text-text-primary placeholder-text-muted
         focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/25
         transition-all duration-200;
}
.line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }

.panel-enter-active, .panel-leave-active { transition: all 0.3s ease; }
.panel-enter-from, .panel-leave-to { transform: translateX(100%); opacity: 0.5; }

.fade-enter-active, .fade-leave-active { transition: opacity 0.2s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; }
</style>
