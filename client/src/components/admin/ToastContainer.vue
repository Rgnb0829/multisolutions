<template>
  <teleport to="body">
    <div class="fixed bottom-6 right-6 z-[9999] flex flex-col gap-3 pointer-events-none">
      <transition-group name="toast">
        <div
          v-for="toast in toasts"
          :key="toast.id"
          :class="[
            'pointer-events-auto flex items-center gap-3 px-5 py-3 rounded-xl border shadow-card-lg backdrop-blur-xl text-sm font-medium min-w-[280px] max-w-sm cursor-pointer transition-all duration-300',
            typeClasses[toast.type] || typeClasses.success,
          ]"
          @click="removeToast(toast.id)"
        >
          <span class="text-lg flex-shrink-0">{{ typeIcons[toast.type] || '✅' }}</span>
          <span class="flex-1">{{ toast.message }}</span>
          <button class="text-white/40 hover:text-white/80 text-xs flex-shrink-0 ml-2">✕</button>
        </div>
      </transition-group>
    </div>
  </teleport>
</template>

<script setup>
import { useToast } from '@/composables/useToast'

const { toasts, removeToast } = useToast()

const typeClasses = {
  success: 'bg-teal/15 border-teal/30 text-teal-light',
  error:   'bg-red-500/15 border-red-500/30 text-red-300',
  warning: 'bg-yellow-500/15 border-yellow-500/30 text-yellow-300',
  info:    'bg-brand/15 border-brand/30 text-brand-light',
}

const typeIcons = {
  success: '✅',
  error:   '❌',
  warning: '⚠️',
  info:    'ℹ️',
}
</script>

<style scoped>
.toast-enter-active { transition: all 0.3s ease; }
.toast-leave-active { transition: all 0.25s ease; }
.toast-enter-from { opacity: 0; transform: translateX(60px) scale(0.95); }
.toast-leave-to   { opacity: 0; transform: translateX(60px) scale(0.95); }
.toast-move       { transition: transform 0.3s ease; }
</style>
