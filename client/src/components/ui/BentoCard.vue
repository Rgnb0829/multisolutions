<template>
  <div
    :class="[
      'bento-card',
      spanClass,
      rowClass,
      { 'bento-interactive': interactive },
      variant === 'brand' ? 'border-brand/20 hover:border-brand/40 hover:shadow-brand' : '',
      variant === 'teal'  ? 'border-teal/20  hover:border-teal/40  hover:shadow-teal'  : '',
      variant === 'creative' ? 'border-pink/20 hover:border-pink/40 hover:shadow-creative' : '',
    ]"
  >
    <slot />
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  span:        { type: Number, default: 1 },   // column span
  rowSpan:     { type: Number, default: 1 },   // row span
  interactive: { type: Boolean, default: true },
  variant:     { type: String, default: 'default' }, // 'default' | 'brand' | 'teal' | 'creative'
})

const spanClass = computed(() => {
  const map = { 1: '', 2: 'md:col-span-2', 3: 'md:col-span-3' }
  return map[props.span] || ''
})

const rowClass = computed(() => {
  const map = { 1: '', 2: 'md:row-span-2' }
  return map[props.rowSpan] || ''
})
</script>
