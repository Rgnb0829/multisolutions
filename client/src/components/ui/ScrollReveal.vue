<template>
  <div
    ref="el"
    :class="['reveal', `reveal-delay-${delay}`, { visible: isVisible }]"
  >
    <slot />
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const props = defineProps({
  delay: { type: Number, default: 0 },
  threshold: { type: Number, default: 0.15 },
})

const el = ref(null)
const isVisible = ref(false)

let observer

onMounted(() => {
  observer = new IntersectionObserver(
    ([entry]) => {
      if (entry.isIntersecting) {
        isVisible.value = true
        observer.unobserve(el.value)
      }
    },
    { threshold: props.threshold }
  )
  if (el.value) observer.observe(el.value)
})

onUnmounted(() => observer?.disconnect())
</script>
