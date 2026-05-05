<template>
  <div class="min-h-screen bg-base flex items-center justify-center p-6">
    <div class="w-full max-w-sm">
      <!-- Logo -->
      <div class="text-center mb-10">
        <div class="w-14 h-14 rounded-2xl bg-brand/15 border border-brand/30 flex items-center justify-center mx-auto mb-5">
          <svg width="28" height="28" viewBox="0 0 32 32" fill="none">
            <path d="M4 8h24v3H4V8zm0 6.5h16v3H4v-3zm0 6.5h24v3H4v-3z" fill="url(#gng)" />
            <defs>
              <linearGradient id="gng" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                <stop stop-color="#6366f1"/><stop offset="1" stop-color="#2dd4bf"/>
              </linearGradient>
            </defs>
          </svg>
        </div>
        <h1 class="font-heading font-bold text-xl text-text-primary mb-1">Admin Access</h1>
        <p class="text-text-muted text-sm">Fimosa Multi-Solution Dashboard</p>
      </div>

      <!-- Token Form -->
      <form @submit.prevent="handleAccess" class="flex flex-col gap-4">
        <div>
          <label class="block text-sm font-medium text-text-secondary mb-2">Access Token</label>
          <input
            v-model="inputToken"
            type="password"
            placeholder="Enter admin token..."
            class="w-full bg-surface border border-border-default rounded-lg px-4 py-3 text-sm text-text-primary placeholder-text-muted focus:outline-none focus:border-brand/50 focus:ring-1 focus:ring-brand/25 transition-all duration-200"
            autofocus
          />
        </div>

        <p v-if="error" class="text-red-400 text-sm p-3 rounded-lg bg-red-500/10 border border-red-500/20 flex items-center gap-2">
          <span>❌</span> {{ error }}
        </p>

        <button
          type="submit"
          :disabled="loading"
          class="btn-primary-ms justify-center py-3 text-sm"
        >
          <svg v-if="loading" class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
            <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
            <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
          </svg>
          {{ loading ? 'Verifying...' : 'Access Dashboard' }}
        </button>
      </form>

      <!-- Footer -->
      <p class="text-center text-xs text-text-muted mt-8">
        Protected area · Fimosa Multi-Solution
      </p>
    </div>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import axios from 'axios'
import { useAdminAuth } from '@/composables/useAdminAuth'

const { setToken } = useAdminAuth()

const inputToken = ref('')
const error = ref('')
const loading = ref(false)

const handleAccess = async () => {
  error.value = ''
  if (!inputToken.value.trim()) {
    error.value = 'Please enter an access token.'
    return
  }

  loading.value = true
  try {
    // Verify token against backend
    await axios.get('/api/admin/stats', {
      headers: { 'x-admin-token': inputToken.value.trim() }
    })
    // Token valid — store and let AdminLayout re-render
    setToken(inputToken.value.trim())
  } catch (err) {
    if (err.response?.status === 401 || err.response?.status === 403) {
      error.value = 'Invalid token. Access denied.'
    } else {
      error.value = 'Server unreachable. Start the backend first.'
    }
  } finally {
    loading.value = false
  }
}
</script>
