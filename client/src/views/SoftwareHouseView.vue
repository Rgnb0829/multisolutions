<template>
  <div class="bg-base">
    <!-- HERO -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[600px] h-[600px] bg-brand top-[-200px] right-[-200px]" style="opacity:0.1"></div>
      </div>
      <div class="container-ms relative z-10">
        <div class="max-w-3xl">
          <ScrollReveal>
            <SectionBadge variant="brand" :dot="true" class="mb-6">Software House</SectionBadge>
          </ScrollReveal>
          <ScrollReveal :delay="1">
            <h1 class="font-heading font-black text-4xl md:text-6xl leading-tight mb-6">
              Integrated Digital Engineering<br/>
              for <span class="gradient-text">Corporate & Government</span><br/>
              Ecosystems.
            </h1>
          </ScrollReveal>
          <ScrollReveal :delay="2">
            <p class="text-text-secondary text-xl leading-relaxed mb-10 max-w-2xl">
              We architect and deliver <strong class="text-text-primary">scalable, secure, and maintainable</strong>
              digital systems — from enterprise ERP to mission-critical government information platforms.
            </p>
            <div class="flex flex-wrap gap-4">
              <router-link to="/contact" class="btn-primary-ms text-base px-7 py-3.5">
                Request Technical Consultation
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
              </router-link>
              <router-link to="/software-house/portfolio" class="btn-outline-ms text-base px-7 py-3.5">
                Lihat Case Studies →
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
            <SectionBadge variant="brand" class="mb-4">Kapabilitas</SectionBadge>
            <h2>What We <span class="gradient-text">Build</span></h2>
            <p>Solusi teknis untuk kompleksitas nyata — scalable, reliable, dan enterprise-ready.</p>
            <div class="divider-ms"></div>
          </div>
        </ScrollReveal>
        <div class="grid grid-cols-1 md:grid-cols-2 gap-5">
          <ScrollReveal v-for="(svc, i) in services" :key="svc.title" :delay="i % 4">
            <div class="bento-card bento-interactive border-brand/15 hover:border-brand/35 hover:shadow-brand h-full">
              <div class="w-12 h-12 rounded-xl bg-brand/10 border border-brand/20 flex items-center justify-center text-2xl mb-5">{{ svc.icon }}</div>
              <h3 class="font-heading font-bold text-lg mb-2 text-text-primary">{{ svc.title }}</h3>
              <p class="text-text-muted text-sm leading-relaxed mb-4">{{ svc.desc }}</p>
              <div class="flex flex-wrap gap-2">
                <span v-for="tag in svc.tags" :key="tag" class="tech-badge">{{ tag }}</span>
              </div>
            </div>
          </ScrollReveal>
        </div>
      </div>
    </section>

    <!-- CASE STUDIES -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="section-header-ms">
            <SectionBadge variant="teal" class="mb-4">Portfolio</SectionBadge>
            <h2>Case <span class="gradient-text">Studies</span></h2>
            <p>Proyek nyata, dampak terukur — solusi enterprise yang telah kami implementasikan.</p>
            <div class="divider-ms"></div>
          </div>
        </ScrollReveal>
        <div class="grid grid-cols-1 lg:grid-cols-2 gap-6">
          <ScrollReveal v-for="(cs, i) in caseStudies" :key="cs.title" :delay="i">
            <div class="rounded-2xl border border-brand/20 overflow-hidden hover:border-brand/40 hover:shadow-brand transition-all duration-300 h-full">
              <div class="bg-gradient-to-br from-brand/10 via-card to-card p-6 border-b border-brand/15">
                <div class="flex items-start justify-between gap-4 mb-2">
                  <div>
                    <div class="text-xs font-bold uppercase tracking-widest text-brand-light mb-1">{{ cs.category }}</div>
                    <h3 class="font-heading font-bold text-xl text-text-primary">{{ cs.title }}</h3>
                  </div>
                  <span class="badge-ms whitespace-nowrap flex-shrink-0">{{ cs.status }}</span>
                </div>
                <p class="text-text-secondary text-sm">{{ cs.client }}</p>
              </div>
              <div class="p-6 flex flex-col gap-5">
                <div v-for="pso in ['problem', 'solution', 'outcome']" :key="pso">
                  <div class="flex items-center gap-2 mb-2">
                    <span :class="['w-6 h-6 rounded-full flex items-center justify-center text-xs font-bold flex-shrink-0', psoStyle[pso].badge]">{{ psoStyle[pso].letter }}</span>
                    <span :class="['text-xs font-bold uppercase tracking-widest', psoStyle[pso].color]">{{ psoStyle[pso].label }}</span>
                  </div>
                  <p class="text-text-secondary text-sm leading-relaxed pl-8">{{ cs[pso] }}</p>
                </div>
                <div class="grid grid-cols-3 gap-3 pt-4 border-t border-border-subtle">
                  <div v-for="m in cs.metrics" :key="m.label" class="text-center p-3 rounded-lg bg-surface border border-border-subtle">
                    <div class="font-heading font-black text-xl gradient-text">{{ m.value }}</div>
                    <div class="text-xs text-text-muted mt-1">{{ m.label }}</div>
                  </div>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>
        <ScrollReveal :delay="2">
          <div class="text-center mt-10">
            <router-link to="/software-house/portfolio" class="btn-outline-ms text-sm px-6 py-2.5">
              Lihat Semua Portfolio →
            </router-link>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- TECH STACK -->
    <section class="py-16 bg-surface border-y border-border-subtle">
      <div class="container-ms">
        <ScrollReveal>
          <p class="text-center text-xs uppercase tracking-widest text-text-muted font-semibold mb-8">Technology Stack</p>
          <div class="flex flex-wrap justify-center gap-3">
            <span v-for="tech in techStack" :key="tech" class="tech-badge px-4 py-2 text-sm">{{ tech }}</span>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- CTA -->
    <section class="section-ms">
      <div class="container-ms">
        <ScrollReveal>
          <div class="relative rounded-2xl border border-brand/20 overflow-hidden p-12 md:p-20 text-center">
            <div class="absolute inset-0 bg-gradient-card pointer-events-none"></div>
            <div class="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-64 pointer-events-none"
                 style="background: radial-gradient(ellipse, rgba(99,102,241,0.12) 0%, transparent 70%)"></div>
            <div class="relative z-10">
              <SectionBadge variant="brand" :dot="true" class="mb-5">Ready to Build?</SectionBadge>
              <h2 class="font-heading font-black text-3xl md:text-5xl mb-4">
                Let's Architect Your<br/><span class="gradient-text">Next System Together</span>
              </h2>
              <p class="text-text-secondary text-lg max-w-lg mx-auto mb-10">
                Konsultasikan kebutuhan teknis Anda dengan tim engineer kami — gratis, tanpa commitment.
              </p>
              <router-link to="/contact" class="btn-primary-ms text-base px-8 py-3.5 inline-flex">
                Request Consultation
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
  { icon: '🗄️', title: 'Scalable ERP Systems for Complex Corporate Ecosystems', desc: 'Custom ERP yang dirancang untuk mengelola alur kerja multi-departemen, rantai pasok, dan pelaporan keuangan real-time.', tags: ['Multi-module', 'Real-time Analytics', 'Role-based Access', 'Audit Trail'] },
  { icon: '🏛️', title: 'Enterprise-Grade Information Systems for Government Institutions', desc: 'Sistem informasi berstandar keamanan pemerintahan — dari manajemen data warga hingga sistem pelayanan publik digital.', tags: ['Security Compliant', 'High Availability', 'Data Integrity', 'E-Government Ready'] },
  { icon: '🌐', title: 'Custom Web Applications & Digital Portals', desc: 'Aplikasi web full-stack modern — dari company profile enterprise hingga portal manajemen internal yang kompleks.', tags: ['Vue / React', 'Node.js / Laravel', 'REST API', 'Progressive Web App'] },
  { icon: '🔌', title: 'Enterprise API Integration & Middleware', desc: 'Penghubung antar sistem yang memungkinkan data mengalir mulus antara ERP, CRM, payment gateway, dan layanan pihak ketiga.', tags: ['RESTful API', 'Webhooks', 'OAuth 2.0', 'API Gateway'] },
]

const caseStudies = [
  {
    category: 'Enterprise ERP', title: 'Scalable ERP for Multi-Branch Retail Corporation',
    client: 'Corporate Client — Retail & Distribution Sector', status: 'Delivered',
    problem: 'Klien mengoperasikan 12 cabang dengan sistem terpisah, mengakibatkan inkonsistensi data dan keterlambatan laporan keuangan hingga 7 hari.',
    solution: 'Membangun ERP terpusat dengan modul inventory, keuangan, SDM, dan pelaporan terintegrasi — diakses real-time oleh seluruh cabang.',
    outcome: 'Laporan keuangan tersedia dalam <2 jam. Efisiensi operasional meningkat 40%. Eliminasi duplikasi data antar cabang.',
    metrics: [{ value: '40%', label: 'Efisiensi Naik' }, { value: '<2h', label: 'Laporan Siap' }, { value: '12', label: 'Cabang' }],
  },
  {
    category: 'Government System', title: 'Public Service Information System for Regional Government',
    client: 'Government Institution — Regional Public Administration', status: 'Delivered',
    problem: 'Proses administrasi masih manual — antrian panjang, dokumen hilang, tidak ada visibilitas status permohonan bagi warga.',
    solution: 'Portal layanan publik digital dengan manajemen permohonan, notifikasi otomatis, dan dashboard monitoring untuk pejabat.',
    outcome: 'Waktu pelayanan turun dari 5 hari menjadi 1 hari. Zero dokumen hilang. Kepuasan warga meningkat signifikan.',
    metrics: [{ value: '80%', label: 'Lebih Cepat' }, { value: '5k+', label: 'Users Aktif' }, { value: '99.9%', label: 'Uptime' }],
  },
]

const psoStyle = {
  problem: { label: 'Problem', letter: 'P', color: 'text-red-400', badge: 'bg-red-500/10 text-red-400' },
  solution: { label: 'Solution', letter: 'S', color: 'text-brand-light', badge: 'bg-brand/10 text-brand-light' },
  outcome:  { label: 'Outcome', letter: 'O', color: 'text-teal', badge: 'bg-teal/10 text-teal' },
}

const techStack = ['Vue 3', 'React', 'Node.js', 'Laravel', 'PostgreSQL', 'MySQL', 'Redis', 'Docker', 'Nginx', 'REST API', 'WebSocket', 'Linux', 'CI/CD']
</script>
