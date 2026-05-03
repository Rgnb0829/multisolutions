<template>
  <div class="bg-base">
    <!-- HERO -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[600px] h-[600px] bg-pink top-[-200px] right-[-200px]" style="opacity:0.1"></div>
        <div class="glow-orb w-[400px] h-[400px] bg-violet bottom-0 left-[-100px]" style="opacity:0.07"></div>
      </div>
      <div class="container-ms relative z-10">
        <div class="max-w-3xl">
          <ScrollReveal>
            <SectionBadge variant="creative" :dot="true" class="mb-6">Creative Studio</SectionBadge>
          </ScrollReveal>
          <ScrollReveal :delay="1">
            <h1 class="font-heading font-black text-4xl md:text-6xl leading-tight mb-6">
              Bespoke Visual Identity<br/>
              for <span class="gradient-text-creative">Startups & Corporations</span><br/>
              that Demand Distinction.
            </h1>
          </ScrollReveal>
          <ScrollReveal :delay="2">
            <p class="text-text-secondary text-xl leading-relaxed mb-10 max-w-2xl">
              We craft <strong class="text-text-primary">memorable brand identities</strong> that go beyond aesthetics —
              visual systems built to communicate authority, trust, and character at every touchpoint.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contact" class="btn-creative-ms text-base px-7 py-3.5">
                Bring Your Brand to Life
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
              <router-link to="/creative-studio/portfolio" class="btn-outline-ms text-base px-7 py-3.5">
                Lihat Galeri →
              </router-link>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- SERVICES -->
    <section class="section-ms bg-surface">
      <div class="container-ms">
        <ScrollReveal>
          <div class="section-header-ms">
            <SectionBadge variant="creative" class="mb-4">Layanan</SectionBadge>
            <h2>What We <span class="gradient-text-creative">Create</span></h2>
            <p>Dari logo pertama hingga brand kit yang lengkap — setiap karya dirancang dengan presisi dan intuisi.</p>
            <div class="divider-ms" style="background: linear-gradient(135deg, #f472b6, #a855f7)"></div>
          </div>
        </ScrollReveal>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal v-for="(svc, i) in services" :key="svc.title" :delay="i % 4">
            <div class="bento-card bento-interactive border-pink/15 hover:border-pink/35 hover:shadow-creative h-full">
              <div class="w-12 h-12 rounded-xl bg-pink/10 border border-pink/20 flex items-center justify-center text-2xl mb-5">{{ svc.icon }}</div>
              <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">{{ svc.title }}</h3>
              <p class="text-text-muted text-sm leading-relaxed mb-4">{{ svc.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in svc.tags" :key="tag" class="tech-badge text-xs">{{ tag }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- MASONRY GALLERY -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="section-header-ms">
            <SectionBadge variant="creative" class="mb-4">Portfolio Preview</SectionBadge>
            <h2>Selected <span class="gradient-text-creative">Works</span></h2>
            <p>Sepilihan karya terbaik kami — identitas merek yang berkarakter dan berkesan.</p>
            <div class="divider-ms" style="background: linear-gradient(135deg, #f472b6, #a855f7)"></div>
          </div>
        </ScrollReveal>

        <div class="masonry-grid">
          <ScrollReveal v-for="(item, i) in galleryItems" :key="item.title" :delay="i % 3">
            <div class="rounded-xl overflow-hidden border border-border-subtle hover:border-pink/30 transition-all duration-300 group relative">
              <div
                :class="['flex items-center justify-center', item.height]"
                :style="{ background: item.bg }"
              >
                <div class="text-6xl">{{ item.emoji }}</div>
              </div>
              <div class="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-end p-5">
                <div>
                  <div class="text-xs font-bold uppercase tracking-widest mb-1" :style="{ color: item.accentColor }">{{ item.category }}</div>
                  <div class="text-sm font-semibold text-white">{{ item.title }}</div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal :delay="3">
          <div class="text-center mt-10">
            <router-link to="/creative-studio/portfolio" class="btn-creative-ms text-sm px-6 py-2.5 inline-flex">
              Lihat Semua Karya →
            </router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- PROCESS -->
    <section class="section-ms bg-surface">
      <div class="container-ms">
        <ScrollReveal>
          <div class="section-header-ms">
            <SectionBadge variant="creative" class="mb-4">Proses Kreatif</SectionBadge>
            <h2>From Idea to <span class="gradient-text-creative">Identity</span></h2>
            <p>Proses terstruktur yang memastikan setiap keputusan desain adalah keputusan strategis.</p>
          </div>
        </ScrollReveal>
        <div class="grid grid-cols-1 md:grid-cols-4 gap-6 relative">
          <!-- Connector line -->
          <div class="absolute top-8 left-[12.5%] right-[12.5%] h-px bg-gradient-to-r from-pink/30 via-violet/30 to-pink/30 hidden md:block"></div>
          <ScrollReveal v-for="(step, i) in process" :key="step.title" :delay="i">
            <div class="text-center relative">
              <div class="w-16 h-16 rounded-2xl mx-auto mb-5 flex items-center justify-center text-2xl border relative z-10"
                   :style="{ background: step.bg, borderColor: step.border }">
                {{ step.icon }}
              </div>
              <div class="text-xs font-bold uppercase tracking-widest text-pink-light mb-2">{{ String(i+1).padStart(2,'0') }}</div>
              <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">{{ step.title }}</h3>
              <p class="text-text-muted text-sm leading-relaxed">{{ step.desc }}</p>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="relative rounded-2xl border border-pink/20 overflow-hidden p-12 md:p-20 text-center">
            <div class="absolute inset-0 bg-gradient-card pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none"
                 style="background: radial-gradient(ellipse, rgba(244,114,182,0.12) 0%, transparent 70%)"></div>
            <div class="relative z-10">
              <SectionBadge variant="creative" :dot="true" class="mb-5">Ready to Create?</SectionBadge>
              <h2 class="font-heading font-black text-3xl md:text-5xl mb-4">
                Your Brand Deserves<br/><span class="gradient-text-creative">More Than a Logo</span>
              </h2>
              <p class="text-text-secondary text-lg max-w-lg mx-auto mb-10">
                Mari diskusikan identitas merek yang ingin Anda bangun. Konsultasi pertama gratis.
              </p>
              <router-link to="/contact" class="btn-creative-ms text-base px-8 py-3.5 inline-flex">
                Start Your Brand Journey
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
            </div>
          </div>
        </ScrollReveal>
      </div>
    </section>
  </div>
</template>

<script setup>
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const services = [
  { icon: '✏️', title: 'Logo & Brand Identity Design', desc: 'Logo yang bukan sekadar gambar — simbol yang merepresentasikan nilai, visi, dan karakter bisnis Anda secara utuh.', tags: ['Logo Design', 'Symbol Mark', 'Wordmark', 'Brand Concept'] },
  { icon: '📚', title: 'Brand Kit & Visual Guidelines', desc: 'Panduan merek komprehensif yang memastikan konsistensi identitas di setiap touchpoint — digital maupun cetak.', tags: ['Brand Guidelines', 'Color Palette', 'Typography', 'Usage Rules'] },
  { icon: '🖌️', title: 'Digital Illustration & Visual Assets', desc: 'Ilustrasi custom dan aset visual yang memberikan karakter unik pada komunikasi merek Anda di era digital.', tags: ['Custom Illustration', 'Icon Sets', 'UI Illustration', 'Social Assets'] },
  { icon: '✨', title: 'Motion & Visual Identity System', desc: 'Sistem identitas visual yang mencakup animasi logo, transisi merek, dan panduan gerak untuk platform digital modern.', tags: ['Logo Animation', 'Motion Graphics', 'Brand Motion', 'After Effects'] },
]

const galleryItems = [
  { emoji: '⬡', title: 'HexaBrand Identity', category: 'Brand Identity', height: 'h-48', bg: 'linear-gradient(135deg, #1a0533 0%, #2d0a5e 100%)', accentColor: '#c084fc', border: '#7c3aed' },
  { emoji: '🌊', title: 'AquaFlow Logo', category: 'Logo Design', height: 'h-64', bg: 'linear-gradient(135deg, #0a1a2e 0%, #0d3060 100%)', accentColor: '#38bdf8', border: '#0284c7' },
  { emoji: '🔥', title: 'Ignite Startup Brand', category: 'Brand Kit', height: 'h-48', bg: 'linear-gradient(135deg, #1c0a00 0%, #431407 100%)', accentColor: '#fb923c', border: '#c2410c' },
  { emoji: '🌿', title: 'EcoVerda Identity', category: 'Brand Identity', height: 'h-56', bg: 'linear-gradient(135deg, #052e16 0%, #064e3b 100%)', accentColor: '#34d399', border: '#059669' },
  { emoji: '💎', title: 'Luxara Jewelry Brand', category: 'Logo Design', height: 'h-44', bg: 'linear-gradient(135deg, #1c1017 0%, #3b1028 100%)', accentColor: '#f9a8d4', border: '#be185d' },
  { emoji: '🚀', title: 'LaunchPad Startup Kit', category: 'Brand Kit', height: 'h-60', bg: 'linear-gradient(135deg, #0f0c29 0%, #302b63 50%, #24243e 100%)', accentColor: '#818cf8', border: '#4f46e5' },
  { emoji: '🏗️', title: 'StructCorp Identity', category: 'Brand Identity', height: 'h-48', bg: 'linear-gradient(135deg, #111827 0%, #1f2937 100%)', accentColor: '#94a3b8', border: '#374151' },
  { emoji: '🎵', title: 'Melodix Music Brand', category: 'Illustration', height: 'h-56', bg: 'linear-gradient(135deg, #1a0a2e 0%, #3b0764 100%)', accentColor: '#e879f9', border: '#a21caf' },
  { emoji: '☕', title: 'Aroma Cafe Brand', category: 'Brand Kit', height: 'h-44', bg: 'linear-gradient(135deg, #1c1007 0%, #451a03 100%)', accentColor: '#d97706', border: '#92400e' },
]

const process = [
  { icon: '🔍', title: 'Discovery', desc: 'Memahami bisnis, target market, kompetitor, dan value proposition Anda secara mendalam.', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
  { icon: '💡', title: 'Concept', desc: 'Mengembangkan konsep visual yang mencerminkan identitas dan posisi merek Anda di pasar.', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.25)' },
  { icon: '🎨', title: 'Refinement', desc: 'Iterasi dan penyempurnaan berdasarkan feedback — hingga setiap detail terasa tepat.', bg: 'rgba(244,114,182,0.08)', border: 'rgba(244,114,182,0.25)' },
  { icon: '📦', title: 'Delivery', desc: 'Paket final berisi seluruh aset dalam format siap pakai untuk digital dan cetak.', bg: 'rgba(168,85,247,0.08)', border: 'rgba(168,85,247,0.25)' },
]
</script>
