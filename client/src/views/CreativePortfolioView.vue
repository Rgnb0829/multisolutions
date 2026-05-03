<template>
  <div class="bg-base">
    <!-- HERO -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[500px] h-[500px] bg-pink top-[-100px] right-[-100px]" style="opacity:0.08"></div>
        <div class="glow-orb w-[400px] h-[400px] bg-violet bottom-0 left-[-100px]" style="opacity:0.06"></div>
      </div>
      <div class="container-ms relative z-10 text-center">
        <ScrollReveal>
          <SectionBadge variant="creative" :dot="true" class="mb-6 justify-center">Creative Portfolio</SectionBadge>
          <h1 class="font-heading font-black text-4xl md:text-6xl leading-tight mb-6">
            Our Creative <span class="gradient-text-creative">Works</span>
          </h1>
          <p class="text-text-secondary text-xl max-w-2xl mx-auto mb-10">
            Koleksi lengkap karya Creative Studio kami — identitas merek, logo, ilustrasi, dan brand kit yang telah kami ciptakan untuk berbagai industri.
          </p>
        </ScrollReveal>

        <!-- Filter -->
        <ScrollReveal :delay="1">
          <div class="flex flex-wrap justify-center gap-3 mb-16">
            <button
              v-for="f in filters"
              :key="f.label"
              :class="['chip-ms text-sm px-4 py-2 flex items-center gap-1.5', activeFilter === f.label ? 'active' : '']"
              @click="activeFilter = f.label"
            >
              <span>{{ f.emoji }}</span>
              {{ f.label }}
            </button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- MASONRY GALLERY -->
    <section class="pb-24">
      <div class="container-ms">
        <div class="masonry-grid">
          <ScrollReveal v-for="(item, i) in filteredItems" :key="item.title" :delay="i % 3">
            <div class="rounded-xl overflow-hidden border border-border-subtle hover:border-pink/30 transition-all duration-300 group relative cursor-pointer mb-4">
              <div
                class="flex items-center justify-center"
                :style="{ background: item.bg, minHeight: item.height }"
              >
                <div class="text-7xl group-hover:scale-110 transition-transform duration-500">{{ item.emoji }}</div>
              </div>
              <!-- Overlay -->
              <div class="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div class="text-xs font-bold uppercase tracking-widest mb-1" :style="{ color: item.accentColor }">{{ item.category }}</div>
                  <div class="text-base font-bold text-white mb-0.5">{{ item.title }}</div>
                  <div class="text-xs text-white/60">{{ item.client }}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <!-- Empty state -->
        <div v-if="filteredItems.length === 0" class="text-center py-20">
          <div class="text-4xl mb-3">🎨</div>
          <p class="text-text-muted">Karya untuk kategori ini akan segera hadir.</p>
        </div>

        <!-- CTA Card -->
        <ScrollReveal :delay="2">
          <div class="mt-16 p-8 rounded-2xl border border-dashed border-pink/20 text-center">
            <div class="text-3xl mb-3">✨</div>
            <h3 class="font-heading font-bold text-xl mb-2 text-text-primary">Ingin Karya Anda Di Sini?</h3>
            <p class="text-text-muted text-sm mb-6 max-w-sm mx-auto">Diskusikan proyek kreatif Anda bersama tim Creative Studio kami.</p>
            <router-link to="/contact" class="btn-creative-ms text-sm px-6 py-2.5 inline-flex">
              Mulai Proyek Kreatif →
            </router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, computed } from 'vue'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const filters = [
  { label: 'All', emoji: '✦' },
  { label: 'Logo', emoji: '✏️' },
  { label: 'Branding', emoji: '📚' },
  { label: 'Illustration', emoji: '🖌️' },
  { label: 'Brand Kit', emoji: '📦' },
]
const activeFilter = ref('All')

const galleryItems = [
  { emoji: '⬡', title: 'HexaBrand Identity', client: 'Tech Startup', category: 'Logo', height: '220px', bg: 'linear-gradient(135deg,#1a0533,#2d0a5e)', accentColor: '#c084fc' },
  { emoji: '🌊', title: 'AquaFlow Brand', client: 'SaaS Company', category: 'Branding', height: '280px', bg: 'linear-gradient(135deg,#0a1a2e,#0d3060)', accentColor: '#38bdf8' },
  { emoji: '🔥', title: 'Ignite Startup', client: 'E-commerce', category: 'Brand Kit', height: '200px', bg: 'linear-gradient(135deg,#1c0a00,#431407)', accentColor: '#fb923c' },
  { emoji: '🌿', title: 'EcoVerda Identity', client: 'Sustainability Brand', category: 'Logo', height: '240px', bg: 'linear-gradient(135deg,#052e16,#064e3b)', accentColor: '#34d399' },
  { emoji: '💎', title: 'Luxara Brand', client: 'Jewelry Retailer', category: 'Branding', height: '180px', bg: 'linear-gradient(135deg,#1c1017,#3b1028)', accentColor: '#f9a8d4' },
  { emoji: '🚀', title: 'LaunchPad Kit', client: 'VC-backed Startup', category: 'Brand Kit', height: '260px', bg: 'linear-gradient(135deg,#0f0c29,#302b63,#24243e)', accentColor: '#818cf8' },
  { emoji: '🏗️', title: 'StructCorp Identity', client: 'Construction Corp', category: 'Logo', height: '200px', bg: 'linear-gradient(135deg,#111827,#1f2937)', accentColor: '#94a3b8' },
  { emoji: '🎵', title: 'Melodix Music', client: 'Music Platform', category: 'Illustration', height: '240px', bg: 'linear-gradient(135deg,#1a0a2e,#3b0764)', accentColor: '#e879f9' },
  { emoji: '☕', title: 'Aroma Cafe Brand', client: 'F&B Chain', category: 'Brand Kit', height: '180px', bg: 'linear-gradient(135deg,#1c1007,#451a03)', accentColor: '#d97706' },
  { emoji: '🌸', title: 'Bloom Wellness', client: 'Health & Beauty', category: 'Branding', height: '220px', bg: 'linear-gradient(135deg,#1f0a0f,#4c0519)', accentColor: '#fb7185' },
  { emoji: '⚡', title: 'VoltTech Icons', client: 'Electric Vehicle Brand', category: 'Illustration', height: '200px', bg: 'linear-gradient(135deg,#0a0a1a,#1e1b4b)', accentColor: '#fbbf24' },
  { emoji: '🏔️', title: 'Summit Adventure', client: 'Outdoor Lifestyle Brand', category: 'Brand Kit', height: '260px', bg: 'linear-gradient(135deg,#0a1628,#164e63)', accentColor: '#22d3ee' },
]

const filteredItems = computed(() =>
  activeFilter.value === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === activeFilter.value)
)
</script>
