import { ref, computed } from 'vue'

const STORAGE_KEY = 'fms_admin_token'

const token = ref(localStorage.getItem(STORAGE_KEY) || '')

export function useAdminAuth() {
  const isAuthenticated = computed(() => !!token.value)

  const setToken = (t) => {
    token.value = t
    localStorage.setItem(STORAGE_KEY, t)
  }

  const clearToken = () => {
    token.value = ''
    localStorage.removeItem(STORAGE_KEY)
  }

  const getToken = () => token.value

  /** Check URL param on mount — auto-store if present */
  const checkUrlToken = () => {
    const params = new URLSearchParams(window.location.search)
    const urlToken = params.get('token')
    if (urlToken) {
      setToken(urlToken)
      // Clean URL
      const url = new URL(window.location.href)
      url.searchParams.delete('token')
      window.history.replaceState({}, '', url.toString())
    }
  }

  return { isAuthenticated, token, setToken, clearToken, getToken, checkUrlToken }
}
