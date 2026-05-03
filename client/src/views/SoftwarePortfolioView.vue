<template>
  <div class="bg-base">
    <!-- HERO -->
    <section class="relative pt-32 pb-20 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[500px] h-[500px] bg-brand top-[-100px] right-[-100px]" style="opacity:0.08"></div>
      </div>
      <div class="container-ms relative z-10 text-center">
        <ScrollReveal>
          <SectionBadge variant="brand" :dot="true" class="mb-6 justify-center">Software Portfolio</SectionBadge>
          <h1 class="font-heading font-black text-4xl md:text-6xl leading-tight mb-6">
            Engineering <span class="gradient-text">Case Studies</span>
          </h1>
          <p class="text-text-secondary text-xl max-w-2xl mx-auto mb-10">
            Studi kasus lengkap dari proyek-proyek enterprise yang telah kami selesaikan — dengan metodologi, tantangan, dan hasil terukur.
          </p>
        </ScrollReveal>

        <!-- Filter -->
        <ScrollReveal :delay="1">
          <div class="flex flex-wrap justify-center gap-3 mb-16">
            <button
              v-for="f in filters"
              :key="f"
              :class="['chip-ms text-sm px-4 py-2', activeFilter === f ? 'active' : '']"
              @click="activeFilter = f"
            >{{ f }}</button>
          </div>
        </ScrollReveal>
      </div>
    </section>

    <!-- PORTFOLIO GRID -->
    <section class="pb-24">
      <div class="container-ms">
        <div class="grid grid-cols-1 gap-8">
          <ScrollReveal v-for="(proj, i) in filteredProjects" :key="proj.title" :delay="i % 3">
            <div class="rounded-2xl border border-brand/20 overflow-hidden hover:border-brand/40 hover:shadow-brand transition-all duration-300">
              <!-- Header -->
              <div class="bg-gradient-to-br from-brand/10 via-card to-card p-8 border-b border-brand/15">
                <div class="flex flex-wrap items-start justify-between gap-4 mb-4">
                  <div class="flex items-center gap-4">
                    <div class="w-14 h-14 rounded-xl bg-brand/10 border border-brand/25 flex items-center justify-center text-3xl flex-shrink-0">
                      {{ proj.icon }}
                    </div>
                    <div>
                      <div class="flex items-center gap-2 mb-1">
                        <span class="text-xs font-bold uppercase tracking-widest text-brand-light">{{ proj.category }}</span>
                        <span class="text-border-default">·</span>
                        <span class="text-xs text-text-muted">{{ proj.year }}</span>
                      </div>
                      <h2 class="font-heading font-bold text-2xl text-text-primary">{{ proj.title }}</h2>
                    </div>
                  </div>
                  <span class="badge-ms">{{ proj.status }}</span>
                </div>
                <p class="text-text-secondary text-sm">{{ proj.client }}</p>
              </div>

              <!-- Body: PSO -->
              <div class="p-8 grid grid-cols-1 md:grid-cols-3 gap-6">
                <div v-for="pso in psoList" :key="pso.key" class="p-5 rounded-xl border" :class="pso.borderClass">
                  <div class="flex items-center gap-2 mb-3">
                    <span class="text-lg">{{ pso.icon }}</span>
                    <span :class="['text-xs font-bold uppercase tracking-widest', pso.labelClass]">{{ pso.label }}</span>
                  </div>
                  <p class="text-text-secondary text-sm leading-relaxed">{{ proj[pso.key] }}</p>
                </div>
              </div>

              <!-- Metrics -->
              <div class="px-8 pb-8">
                <div class="pt-6 border-t border-border-subtle">
                  <div class="text-xs uppercase tracking-widest text-text-muted font-semibold mb-4">Measured Outcomes</div>
                  <div class="grid grid-cols-2 sm:grid-cols-4 gap-4">
                    <div v-for="m in proj.metrics" :key="m.label" class="text-center p-4 rounded-xl bg-surface border border-border-subtle">
                      <div class="font-heading font-black text-2xl gradient-text mb-1">{{ m.value }}</div>
                      <div class="text-xs text-text-muted">{{ m.label }}</div>
                    </div>
                  </div>
                </div>

                <!-- Tech tags -->
                <div class="mt-5 flex flex-wrap gap-2">
                  <span v-for="t in proj.tech" :key="t" class="tech-badge text-xs">{{ t }}</span>
                </div>
              </div>
            </div>
          </ScrollReveal>
        </div>

        <ScrollReveal :delay="2">
          <div class="mt-16 p-8 rounded-2xl border border-dashed border-border-default text-center">
            <div class="text-3xl mb-3">📋</div>
            <h3 class="font-heading font-bold text-xl mb-2 text-text-primary">Punya Proyek Serupa?</h3>
            <p class="text-text-muted text-sm mb-6 max-w-sm mx-auto">Konsultasikan kebutuhan teknis Anda dan dapatkan roadmap solusi yang sesuai.</p>
            <router-link to="/contact" class="btn-primary-ms text-sm px-6 py-2.5 inline-flex">
              Mulai Diskusi →
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

const filters = ['All', 'ERP', 'Web App', 'System Information', 'API Integration']
const activeFilter = ref('All')

const projects = [
  {
    icon: '🗄️', category: 'Enterprise ERP', year: '2024', status: 'Delivered',
    title: 'Scalable ERP for Multi-Branch Retail Corporation',
    client: 'Corporate Client — Retail & Distribution Sector (12 Branches)',
    filterKey: 'ERP',
    problem: 'Klien mengoperasikan 12 cabang dengan sistem terpisah yang menyebabkan inkonsistensi data, duplikasi kerja manual, dan keterlambatan laporan keuangan hingga 7 hari.',
    solution: 'Membangun ERP terpusat dengan modul inventory real-time, otomasi laporan keuangan, manajemen SDM multi-cabang, dan dashboard eksekutif yang dapat diakses dari mana saja.',
    outcome: 'Laporan keuangan tersedia dalam <2 jam. Efisiensi operasional naik 40%. Duplikasi data antar cabang tereliminasi sepenuhnya. ROI tercapai dalam 8 bulan.',
    metrics: [
      { value: '40%', label: 'Efisiensi Naik' },
      { value: '<2h', label: 'Laporan Siap' },
      { value: '12', label: 'Cabang Terhubung' },
      { value: '8mo', label: 'ROI Tercapai' },
    ],
    tech: ['Vue 3', 'Node.js', 'PostgreSQL', 'Redis', 'Docker', 'Nginx'],
  },
  {
    icon: '🏛️', category: 'Government System', year: '2024', status: 'Delivered',
    title: 'Public Service Information System for Regional Government',
    client: 'Government Institution — Regional Public Administration Office',
    filterKey: 'System Information',
    problem: 'Proses administrasi publik masih manual: antrian panjang, potensi dokumen hilang, tidak ada visibilitas status permohonan, dan beban kerja pegawai yang tidak efisien.',
    solution: 'Mengembangkan portal layanan publik digital terintegrasi dengan manajemen permohonan online, notifikasi otomatis via SMS/email, dan dashboard monitoring real-time untuk supervisor.',
    outcome: 'Waktu pelayanan turun dari rata-rata 5 hari menjadi 1 hari. Zero dokumen hilang. Kepuasan warga meningkat. Beban kerja pegawai berkurang 60%.',
    metrics: [
      { value: '80%', label: 'Lebih Cepat' },
      { value: '5k+', label: 'Users Aktif' },
      { value: '99.9%', label: 'Uptime SLA' },
      { value: '60%', label: 'Beban Kerja Turun' },
    ],
    tech: ['React', 'Laravel', 'MySQL', 'Redis', 'AWS EC2', 'CI/CD'],
  },
  {
    icon: '🌐', category: 'Web Application', year: '2023', status: 'Delivered',
    title: 'Corporate Employee & Resource Management Portal',
    client: 'Manufacturing Corporation — 800+ Employees',
    filterKey: 'Web App',
    problem: 'Manajemen SDM dan aset perusahaan tersebar di spreadsheet dan email — tidak ada visibilitas terpusat untuk HR, Finance, dan manajemen senior.',
    solution: 'Portal web full-stack dengan modul HR (rekrutmen, absensi, payroll), manajemen aset, dan pelaporan terintegrasi dengan role-based access control yang granular.',
    outcome: 'Proses payroll yang sebelumnya memakan 3 hari kini diselesaikan dalam 2 jam. Akurasi data SDM meningkat 95%. Adopsi platform oleh karyawan mencapai 98%.',
    metrics: [
      { value: '95%', label: 'Akurasi Data' },
      { value: '2h', label: 'Proses Payroll' },
      { value: '98%', label: 'Adopsi User' },
      { value: '800+', label: 'Karyawan' },
    ],
    tech: ['Vue 3', 'Node.js', 'PostgreSQL', 'Tailwind', 'JWT', 'Docker'],
  },
]

const psoList = [
  { key: 'problem', label: 'Problem', icon: '🔴', labelClass: 'text-red-400', borderClass: 'border-red-500/20 bg-red-500/5' },
  { key: 'solution', label: 'Solution', icon: '🔵', labelClass: 'text-brand-light', borderClass: 'border-brand/20 bg-brand/5' },
  { key: 'outcome', label: 'Outcome', icon: '🟢', labelClass: 'text-teal', borderClass: 'border-teal/20 bg-teal/5' },
]

const filteredProjects = computed(() =>
  activeFilter.value === 'All'
    ? projects
    : projects.filter(p => p.filterKey === activeFilter.value)
)
</script>
