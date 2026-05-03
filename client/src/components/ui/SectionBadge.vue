<template>
  <div :class="['inline-flex items-center gap-2', variantClass]">
    <span v-if="dot" class="dot-pulse"></span>
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  variant: { type: String, default: 'brand' }, // 'brand' | 'teal' | 'creative'
  dot:     { type: Boolean, default: false },
})

const variantClass = computed(() => ({
  brand:    'badge-ms',
  teal:     'badge-teal',
  creative: 'badge-creative',
}[props.variant] || 'badge-ms'))
</script>
