<template>
  <div class="bg-base">

    <!-- ── HERO ─────────────────────────────────────── -->
    <section class="relative min-h-screen flex items-center overflow-hidden pt-20">
      <!-- Background -->
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[700px] h-[700px] bg-brand top-[-150px] right-[-150px]" style="opacity:0.12"></div>
        <div class="glow-orb w-[500px] h-[500px] bg-teal bottom-0 left-[-100px]" style="opacity:0.07"></div>
      </div>

      <div class="container-ms relative z-10 py-24">
        <div class="max-w-4xl">
          <div class="flex items-center gap-2 mb-8 animate-fade-up">
            <span class="dot-pulse"></span>
            <span class="text-xs font-semibold uppercase tracking-widest text-brand-light">Fimosa Multi-Solution</span>
            <span class="text-border-default">·</span>
            <span class="text-xs text-text-muted">A Strategic Division of PT Fimosa Technology Indonesia</span>
          </div>

          <h1 class="font-heading font-black text-5xl md:text-7xl xl:text-8xl leading-[1.02] tracking-tight mb-7" style="animation: fadeUp 0.7s 0.1s ease both; opacity:0">
            Your Strategic Partner<br class="hidden md:block"/>
            in <span class="gradient-text">Digital & Creative</span><br class="hidden md:block"/>
            Excellence.
          </h1>

          <p class="text-text-secondary text-lg md:text-xl max-w-2xl leading-relaxed mb-10" style="animation: fadeUp 0.7s 0.25s ease both; opacity:0">
            We combine precision <strong class="text-text-primary font-semibold">Software Engineering</strong> with
            bespoke <strong class="text-text-primary font-semibold">Creative Studio</strong> capabilities —
            delivering end-to-end digital solutions for corporations, government institutions, and startups.
          </p>

          <div class="flex flex-wrap gap-4 mb-16" style="animation: fadeUp 0.7s 0.4s ease both; opacity:0">
            <router-link to="/software-house" class="btn-primary-ms text-base px-7 py-3.5">
              Software House
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <router-link to="/creative-studio" class="btn-creative-ms text-base px-7 py-3.5">
              Creative Studio
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <router-link to="/contact" class="btn-outline-ms text-base px-7 py-3.5">
              Mulai Proyek
            </router-link>
          </div>

          <!-- Stats row -->
          <div class="flex flex-wrap gap-x-12 gap-y-6" style="animation: fadeUp 0.7s 0.55s ease both; opacity:0">
            <div v-for="s in stats" :key="s.label" class="flex flex-col">
              <span class="font-heading font-black text-3xl gradient-text">{{ s.number }}</span>
              <span class="text-xs text-text-muted mt-1">{{ s.label }}</span>
            </div>
          </div>
        </div>
      </div>

      <!-- Scroll hint -->
      <div class="absolute bottom-10 left-1/2 -translate-x-1/2">
        <div class="w-6 h-10 rounded-xl border-2 border-border-default relative">
          <div class="absolute top-1.5 left-1/2 w-1 h-2 bg-brand-light rounded-sm animate-scroll-down"></div>
        </div>
      </div>
    </section>

    <!-- ── BENTO GRID ─────────────────────────────── -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="text-center mb-14">
            <SectionBadge variant="brand" :dot="true" class="mb-4">Tentang Fimosa MS</SectionBadge>
            <h2 class="font-heading font-black text-3xl md:text-5xl mb-4">
              Hybrid Division.<br/><span class="gradient-text">One Unified Vision.</span>
            </h2>
            <p class="text-text-secondary text-lg max-w-xl mx-auto">
              Satu-satunya divisi yang menyatukan kekuatan teknik digital dan identitas visual dalam satu ekosistem.
            </p>
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 md:grid-cols-3 gap-4 auto-rows-auto">
          <!-- Card 1: Big intro (span 2) -->
          <ScrollReveal class="md:col-span-2">
            <div class="bento-card bento-interactive h-full min-h-[240px] relative overflow-hidden">
              <div class="absolute top-0 right-0 w-48 h-48 bg-brand/5 rounded-full -translate-y-1/2 translate-x-1/2 pointer-events-none"></div>
              <div class="badge-ms mb-4">Hybrid Division</div>
              <h3 class="font-heading font-bold text-2xl md:text-3xl mb-3">
                Engineering meets<br/><span class="gradient-text">Creative Excellence</span>
              </h3>
              <p class="text-text-secondary text-sm leading-relaxed max-w-lg">
                Fimosa Multi-Solution adalah divisi hibrida yang mengintegrasikan Software House dan Creative Studio
                dalam satu operasi strategis — memberikan klien solusi digital yang kohesif dari infrastruktur
                teknis hingga identitas visual.
              </p>
            </div>
          </ScrollReveal>

          <!-- Card 2: Segment -->
          <ScrollReveal :delay="1">
            <div class="bento-card bento-interactive h-full min-h-[240px]">
              <div class="text-3xl mb-4">🏛️</div>
              <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">Segment Pasar</h3>
              <div class="flex flex-col gap-2.5 mt-4">
                <div v-for="seg in segments" :key="seg.name" class="flex items-center gap-3 p-2.5 rounded-lg bg-surface border border-border-subtle">
                  <span class="text-xl">{{ seg.icon }}</span>
                  <div>
                    <div class="text-sm font-semibold text-text-primary">{{ seg.name }}</div>
                    <div class="text-xs text-text-muted">{{ seg.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>

          <!-- Card 3: Software House preview -->
          <ScrollReveal :delay="2">
            <div class="bento-card bento-interactive border-brand/20 hover:border-brand/40 hover:shadow-brand h-full min-h-[220px] relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-br from-brand/5 to-transparent pointer-events-none rounded-xl"></div>
              <div class="relative">
                <div class="w-11 h-11 rounded-xl bg-brand/15 border border-brand/25 flex items-center justify-center text-xl mb-4">⚙️</div>
                <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">Software House</h3>
                <p class="text-text-muted text-sm mb-4">Scalable ERP Systems, System Information & Enterprise Web Solutions</p>
                <router-link to="/software-house" class="inline-flex items-center gap-1.5 text-brand-light text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Explore →
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <!-- Card 4: Creative Studio preview -->
          <ScrollReveal :delay="3">
            <div class="bento-card bento-interactive border-pink/20 hover:border-pink/40 hover:shadow-creative h-full min-h-[220px] relative overflow-hidden group">
              <div class="absolute inset-0 bg-gradient-to-br from-pink/5 to-transparent pointer-events-none rounded-xl"></div>
              <div class="relative">
                <div class="w-11 h-11 rounded-xl bg-pink/15 border border-pink/25 flex items-center justify-center text-xl mb-4">🎨</div>
                <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">Creative Studio</h3>
                <p class="text-text-muted text-sm mb-4">Bespoke Visual Identity, Logo Design & Brand Kit for Modern Businesses</p>
                <router-link to="/creative-studio" class="inline-flex items-center gap-1.5 text-pink-light text-xs font-semibold group-hover:gap-2.5 transition-all duration-300">
                  Explore →
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <!-- Card 5: Values -->
          <ScrollReveal :delay="1">
            <div class="bento-card h-full min-h-[220px]">
              <div class="badge-teal mb-4">Why Fimosa MS</div>
              <div class="flex flex-col gap-3 mt-2">
                <div v-for="val in values" :key="val.title" class="flex items-start gap-3">
                  <div class="w-8 h-8 rounded-lg bg-teal/10 border border-teal/20 flex items-center justify-center text-sm flex-shrink-0">{{ val.icon }}</div>
                  <div>
                    <div class="text-sm font-semibold text-text-primary">{{ val.title }}</div>
                    <div class="text-xs text-text-muted mt-0.5">{{ val.desc }}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- ── SERVICES SPLIT ──────────────────────────── -->
    <section class="section-ms bg-surface">
      <div class="container-ms">
        <ScrollReveal>
          <div class="section-header-ms">
            <SectionBadge variant="brand" class="mb-4">Layanan Kami</SectionBadge>
            <h2>Dua Jalur, <span class="gradient-text">Satu Tujuan</span></h2>
            <p>Solusi digital lengkap yang dirancang untuk mengakselerasi pertumbuhan bisnis Anda.</p>
            <div class="divider-ms"></div>
          </div>
        </ScrollReveal>

        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <!-- Software House -->
          <ScrollReveal :delay="1">
            <div class="rounded-2xl border border-brand/20 overflow-hidden group hover:border-brand/40 transition-all duration-300 hover:shadow-brand">
              <div class="bg-gradient-to-br from-brand/10 via-card to-card p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-brand/15 border border-brand/30 flex items-center justify-center text-2xl">⚙️</div>
                  <div>
                    <div class="text-xs uppercase tracking-widest text-brand-light font-bold mb-0.5">Integrated Digital Engineering</div>
                    <h3 class="font-heading font-black text-xl text-text-primary">Software House</h3>
                  </div>
                </div>
                <p class="text-text-secondary text-sm leading-relaxed mb-6">
                  Solusi rekayasa digital terintegrasikan untuk ekosistem korporasi dan pemerintahan — dari arsitektur sistem hingga deployment production-ready.
                </p>
                <div class="grid grid-cols-2 gap-3 mb-6">
                  <div v-for="svc in swServices" :key="svc" class="flex items-center gap-2 text-xs text-text-muted p-2.5 rounded-lg bg-surface border border-border-subtle">
                    <span class="w-1.5 h-1.5 rounded-full bg-brand flex-shrink-0"></span>
                    {{ svc }}
                  </div>
                </div>
                <router-link to="/software-house" class="btn-primary-ms w-full justify-center">
                  Lihat Layanan Lengkap →
                </router-link>
              </div>
            </div>
          </ScrollReveal>

          <!-- Creative Studio -->
          <ScrollReveal :delay="2">
            <div class="rounded-2xl border border-pink/20 overflow-hidden group hover:border-pink/40 transition-all duration-300 hover:shadow-creative">
              <div class="bg-gradient-to-br from-pink/10 via-card to-card p-8">
                <div class="flex items-center gap-3 mb-6">
                  <div class="w-12 h-12 rounded-xl bg-pink/15 border border-pink/30 flex items-center justify-center text-2xl">🎨</div>
                  <div>
                    <div class="text-xs uppercase tracking-widest text-pink-light font-bold mb-0.5">Bespoke Visual Identity</div>
                    <h3 class="font-heading font-black text-xl text-text-primary">Creative Studio</h3>
                  </div>
                </div>
                <p class="text-text-secondary text-sm leading-relaxed mb-6">
                  Identitas visual bespoke yang dirancang untuk startup dan korporasi — menghadirkan karakter merek yang autentik dan berkesan.
                </p>
                <div class="grid grid-cols-2 gap-3 mb-6">
                  <div v-for="svc in csServices" :key="svc" class="flex items-center gap-2 text-xs text-text-muted p-2.5 rounded-lg bg-surface border border-border-subtle">
                    <span class="w-1.5 h-1.5 rounded-full bg-pink flex-shrink-0"></span>
                    {{ svc }}
                  </div>
                </div>
                <router-link to="/creative-studio" class="btn-creative-ms w-full justify-center">
                  Lihat Layanan Lengkap →
                </router-link>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- ── TRUST BAR ───────────────────────────────── -->
    <section class="py-16 border-y border-border-subtle">
      <div class="container-ms">
        <div class="grid grid-cols-2 md:grid-cols-4 gap-8">
          <ScrollReveal v-for="(stat, i) in trustStats" :key="stat.label" :delay="i">
            <div class="text-center">
              <div class="font-heading font-black text-4xl md:text-5xl gradient-text mb-2">{{ stat.number }}</div>
              <div class="text-text-muted text-sm">{{ stat.label }}</div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- ── CTA ────────────────────────────────────── -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="relative rounded-2xl border border-border-default overflow-hidden p-12 md:p-20 text-center">
            <div class="absolute inset-0 bg-gradient-card pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none"
                 style="background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)"></div>
            <div class="relative z-10">
              <SectionBadge variant="teal" :dot="true" class="mb-5">Mulai Berkolaborasi</SectionBadge>
              <h2 class="font-heading font-black text-3xl md:text-5xl mb-4">
                Siap Memulai Proyek Anda?
              </h2>
              <p class="text-text-secondary text-lg max-w-lg mx-auto mb-10">
                Tim Fimosa Multi-Solution siap mendampingi perjalanan digital Anda — dari konsultasi hingga delivery.
              </p>
              <div class="flex flex-wrap gap-4 justify-center">
                <router-link to="/contact" class="btn-primary-ms text-base px-8 py-3.5">
                  Konsultasi Gratis
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                </router-link>
                <router-link to="/software-house/portfolio" class="btn-outline-ms text-base px-8 py-3.5">
                  Lihat Portfolio
                </router-link>
              </div>
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

const stats = [
  { number: '50+', label: 'Proyek Selesai' },
  { number: '2',   label: 'Divisi Layanan' },
  { number: '100%',label: 'Kepuasan Klien' },
  { number: '5+',  label: 'Tahun Pengalaman' },
]

const segments = [
  { icon: '🏢', name: 'Korporasi', desc: 'Enterprise & B2B solutions' },
  { icon: '🏛️', name: 'Pemerintah', desc: 'Public sector systems' },
  { icon: '🚀', name: 'Startup',   desc: 'Growth-stage companies' },
]

const values = [
  { icon: '🎯', title: 'Outcome-Oriented', desc: 'Setiap solusi diukur dari dampak bisnis nyata.' },
  { icon: '🤝', title: 'Long-Term Partner', desc: 'Kami membangun relasi, bukan sekadar proyek.' },
  { icon: '⚡', title: 'Agile & Adaptive',  desc: 'Teknologi terkini dengan pendekatan yang relevan.' },
]

const swServices = [
  'Scalable ERP Systems',
  'System Information',
  'Custom Web Applications',
  'Enterprise API & Integration',
]

const csServices = [
  'Logo & Brand Identity',
  'Brand Kit & Guidelines',
  'Digital Illustration',
  'Motion & Visual Assets',
]

const trustStats = [
  { number: '50+',  label: 'Proyek Berhasil Dikirim' },
  { number: '98%',  label: 'Client Satisfaction Rate' },
  { number: '2',    label: 'Divisi Layanan Aktif' },
  { number: '5+',   label: 'Tahun di Industri' },
]
</script>
