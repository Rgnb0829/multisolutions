<template>
  <div class="services-page">
    <!-- ── PAGE HERO ─────────────────────────────── -->
    <section class="page-hero">
      <div class="page-hero__bg">
        <div class="glow-orb" style="width:500px;height:500px;background:#5B6BF8;top:-150px;right:-100px;opacity:0.25;"></div>
        <div class="glow-orb" style="width:300px;height:300px;background:#00D4AA;bottom:-50px;left:0;opacity:0.15;"></div>
      </div>
      <div class="container page-hero__content">
        <div class="badge" style="margin-bottom:20px">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="3" width="20" height="14" rx="2"/><path d="M8 21h8M12 17v4"/></svg>
          Layanan Fimosa Multi-Solution
        </div>
        <h1 class="page-hero__title">
          Solusi Digital <span class="gradient-text">Dua Sayap</span>
        </h1>
        <p class="page-hero__desc">
          Fimosa Multi-Solution menghadirkan dua lini layanan yang saling melengkapi —
          <strong>Software House</strong> untuk kebutuhan teknologi, dan
          <strong>Creative Studio</strong> untuk kebutuhan visual. Semua dalam satu atap divisi.
        </p>
        <div class="page-hero__tabs">
          <button
            v-for="tab in tabs"
            :key="tab.id"
            class="tab-btn"
            :class="{ 'tab-btn--active': activeTab === tab.id }"
            @click="scrollTo(tab.id)"
          >
            <span>{{ tab.icon }}</span>
            {{ tab.label }}
          </button>
        </div>
      </div>
    </section>

    <!-- ── SOFTWARE HOUSE ─────────────────────────── -->
    <section class="section svc-section" id="software-house">
      <div class="container">
        <div class="svc-grid">
          <!-- Left: Info -->
          <div class="svc-info">
            <div class="svc-badge svc-badge--blue">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><polyline points="16 18 22 12 16 6"/><polyline points="8 6 2 12 8 18"/></svg>
              Software House
            </div>
            <h2 class="svc-title">
              software house page
            </h2>
            <p class="svc-verbatim">
              melayani pembuatan website, custom ERP, dan pembuatan aplikasi sistem informasi
              untuk segment market <strong>korporasi</strong> dan <strong>pemerintah</strong>
            </p>
            <p class="svc-body">
              Tim Software House kami terdiri dari engineer berpengalaman yang siap membangun
              solusi teknologi end-to-end. Dari portal perusahaan sederhana hingga sistem ERP
              yang kompleks, kami memastikan setiap produk terbangun dengan arsitektur yang
              skalabel, aman, dan mudah dikelola.
            </p>
            <div class="svc-targets">
              <div class="target-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Korporasi
              </div>
              <div class="target-chip">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M3 9l9-7 9 7v11a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"/><polyline points="9 22 9 12 15 12 15 22"/></svg>
                Pemerintah
              </div>
            </div>
            <router-link to="/contact" class="btn btn-primary" style="margin-top:32px">
              Konsultasi Software House
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>

          <!-- Right: Service Cards -->
          <div class="svc-cards">
            <div class="svc-card" v-for="item in softwareServices" :key="item.title">
              <div class="svc-card__icon">{{ item.icon }}</div>
              <div class="svc-card__body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <ul class="svc-card__features">
                  <li v-for="f in item.features" :key="f">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>

        <!-- Tech Stack -->
        <div class="tech-stack">
          <p class="tech-stack__label">Teknologi yang Kami Gunakan</p>
          <div class="tech-stack__pills">
            <span class="tech-pill" v-for="tech in techStack" :key="tech">{{ tech }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── DIVIDER ──────────────────────────────── -->
    <div class="section-divider">
      <div class="container">
        <div class="divider-line"></div>
      </div>
    </div>

    <!-- ── CREATIVE STUDIO ────────────────────────── -->
    <section class="section svc-section" id="creative-studio">
      <div class="container">
        <div class="svc-grid svc-grid--reversed">
          <!-- Left: Service Cards -->
          <div class="svc-cards">
            <div class="svc-card svc-card--creative" v-for="item in creativeServices" :key="item.title">
              <div class="svc-card__icon">{{ item.icon }}</div>
              <div class="svc-card__body">
                <h3>{{ item.title }}</h3>
                <p>{{ item.desc }}</p>
                <ul class="svc-card__features">
                  <li v-for="f in item.features" :key="f">
                    <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="#00D4AA" stroke-width="3"><polyline points="20 6 9 17 4 12"/></svg>
                    {{ f }}
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <!-- Right: Info -->
          <div class="svc-info">
            <div class="svc-badge svc-badge--teal">
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="13.5" cy="6.5" r=".5"/><circle cx="17.5" cy="10.5" r=".5"/><circle cx="8.5" cy="7.5" r=".5"/><circle cx="6.5" cy="12.5" r=".5"/><path d="M12 2C6.5 2 2 6.5 2 12s4.5 10 10 10c.926 0 1.648-.746 1.648-1.688 0-.437-.18-.835-.437-1.125-.29-.289-.438-.652-.438-1.125a1.64 1.64 0 0 1 1.668-1.668h1.996c3.051 0 5.555-2.503 5.555-5.554C21.965 6.012 17.461 2 12 2z"/></svg>
              Creative Studio
            </div>
            <h2 class="svc-title">
              Creative Studio page
            </h2>
            <p class="svc-verbatim svc-verbatim--teal">
              melayani pembuatan logo, ilustrasi, dan aset grafis untuk
              <strong>korporasi</strong> dan <strong>startup</strong>
            </p>
            <p class="svc-body">
              Tim Creative Studio kami adalah kreator visual yang memahami kebutuhan brand modern.
              Kami menggabungkan prinsip desain timeless dengan tren visual terkini untuk menghasilkan
              identitas visual yang berkesan dan konsisten di seluruh media komunikasi.
            </p>
            <div class="svc-targets">
              <div class="target-chip target-chip--teal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><rect x="2" y="7" width="20" height="14" rx="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>
                Korporasi
              </div>
              <div class="target-chip target-chip--teal">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M12 2L2 7l10 5 10-5-10-5zM2 17l10 5 10-5M2 12l10 5 10-5"/></svg>
                Startup
              </div>
            </div>
            <router-link to="/contact" class="btn" style="margin-top:32px;background:linear-gradient(135deg,#00D4AA,#5B6BF8);color:white;box-shadow:0 8px 32px rgba(0,212,170,0.25)">
              Konsultasi Creative Studio
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>

        <!-- Creative Tools -->
        <div class="tech-stack">
          <p class="tech-stack__label">Tools Desain Kami</p>
          <div class="tech-stack__pills">
            <span class="tech-pill tech-pill--teal" v-for="tool in designTools" :key="tool">{{ tool }}</span>
          </div>
        </div>
      </div>
    </section>

    <!-- ── WHY CHOOSE US ──────────────────────────── -->
    <section class="section why-us">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:16px">Mengapa Kami?</div>
          <h2>Keunggulan <span class="gradient-text">Fimosa MS</span></h2>
          <p>Kami bukan vendor biasa — kami adalah mitra digital jangka panjang Anda.</p>
          <div class="divider"></div>
        </div>
        <div class="why-grid">
          <div class="why-card" v-for="w in whyUs" :key="w.title">
            <div class="why-card__num">{{ w.num }}</div>
            <h3>{{ w.title }}</h3>
            <p>{{ w.desc }}</p>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA ───────────────────────────────────── -->
    <section class="services-cta">
      <div class="container">
        <div class="cta-inner">
          <div class="cta-inner__glow"></div>
          <h2>Siap Memulai dengan <span class="gradient-text">Fimosa MS?</span></h2>
          <p>Konsultasikan kebutuhan digital Anda dengan tim kami secara gratis.</p>
          <router-link to="/contact" class="btn btn-primary" style="font-size:1rem;padding:16px 36px">
            Mulai Konsultasi Gratis
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const activeTab = ref('software-house')

const tabs = [
  { id: 'software-house', label: 'Software House', icon: '🖥️' },
  { id: 'creative-studio', label: 'Creative Studio', icon: '🎨' },
]

const scrollTo = (id) => {
  const el = document.getElementById(id)
  if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' })
  activeTab.value = id
}

// Update active tab on scroll
const handleScroll = () => {
  const sh = document.getElementById('software-house')
  const cs = document.getElementById('creative-studio')
  if (!sh || !cs) return
  const scrollY = window.scrollY + 200
  if (scrollY >= cs.offsetTop) activeTab.value = 'creative-studio'
  else if (scrollY >= sh.offsetTop) activeTab.value = 'software-house'
}

onMounted(() => window.addEventListener('scroll', handleScroll))
onUnmounted(() => window.removeEventListener('scroll', handleScroll))

const softwareServices = [
  {
    icon: '🌐',
    title: 'Pembuatan Website',
    desc: 'Website profesional dari landing page hingga portal perusahaan skala enterprise dengan performa tinggi.',
    features: ['Responsive Design', 'SEO Optimized', 'CMS Terintegrasi', 'Hosting & Domain'],
  },
  {
    icon: '⚙️',
    title: 'Custom ERP',
    desc: 'Sistem Enterprise Resource Planning yang disesuaikan penuh dengan alur bisnis dan proses operasional klien.',
    features: ['Modul HR & Payroll', 'Inventori & Logistik', 'Laporan & Analitik', 'Multi-Branch Support'],
  },
  {
    icon: '📱',
    title: 'Aplikasi Sistem Informasi',
    desc: 'Aplikasi digital yang mengotomasi dan mendigitalkan proses bisnis pemerintah dan korporasi secara menyeluruh.',
    features: ['Web & Mobile App', 'API Integration', 'Role-based Access', 'Audit Trail'],
  },
]

const creativeServices = [
  {
    icon: '✏️',
    title: 'Pembuatan Logo',
    desc: 'Identitas merek yang kuat dan berkesan — dari konsep hingga file final siap pakai semua media.',
    features: ['Brand Discovery', 'Logo Variations', 'Brand Guidelines', 'File Format Lengkap'],
  },
  {
    icon: '🖼️',
    title: 'Ilustrasi',
    desc: 'Konten visual custom yang memperkuat narasi brand dan memenangkan perhatian audiens target.',
    features: ['Character Design', 'Infografis', 'Ilustrasi Editorial', 'Konten Media Sosial'],
  },
  {
    icon: '🎭',
    title: 'Aset Grafis Korporat',
    desc: 'Paket desain aset menyeluruh untuk kebutuhan komunikasi perusahaan di seluruh touchpoint.',
    features: ['Presentasi & Pitch Deck', 'Stationery & Merchandise', 'Banner & Signage', 'Template Brand'],
  },
]

const techStack = ['Vue.js', 'React', 'Node.js', 'Laravel', 'PostgreSQL', 'MongoDB', 'Docker', 'AWS', 'REST API', 'GraphQL']
const designTools = ['Figma', 'Adobe Illustrator', 'Adobe Photoshop', 'After Effects', 'Procreate', 'Canva Pro']

const whyUs = [
  { num: '01', title: 'Tim Berpengalaman', desc: 'Engineer dan desainer bersertifikat dengan portofolio proyek korporasi & pemerintah yang terverifikasi.' },
  { num: '02', title: 'Solusi Hibrida Unik', desc: 'Satu-satunya divisi di bawah Fimosa Company yang menawarkan Software House sekaligus Creative Studio.' },
  { num: '03', title: 'Proses Transparan', desc: 'Laporan progres mingguan, akses demo setiap sprint, dan komunikasi tanpa hambatan sepanjang proyek.' },
  { num: '04', title: 'Dukungan Pasca-Rilis', desc: 'Kami tidak menghilang setelah delivery. SLA dukungan teknis dan pemeliharaan tersedia untuk semua klien.' },
]
</script>

<style scoped>
/* ── Page Hero ──────────────────────────────── */
.page-hero {
  position: relative;
  padding: 160px 0 80px;
  overflow: hidden;
}
.page-hero__bg { position: absolute; inset: 0; pointer-events: none; }
.page-hero__content { position: relative; z-index: 1; max-width: 760px; }
.page-hero__title {
  font-size: clamp(2.5rem, 5vw, 4rem);
  font-weight: 900;
  margin-bottom: 20px;
  margin-top: 12px;
}
.page-hero__desc {
  color: var(--text-secondary);
  font-size: 1.05rem;
  line-height: 1.8;
  margin-bottom: 36px;
  max-width: 620px;
}
.page-hero__desc strong { color: var(--text-primary); }

.page-hero__tabs {
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
}
.tab-btn {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 12px 22px;
  border-radius: var(--radius-md);
  background: var(--bg-glass-light);
  border: 1.5px solid var(--border-subtle);
  color: var(--text-secondary);
  font-weight: 600;
  font-size: 0.9rem;
  transition: all var(--transition-base);
  cursor: pointer;
}
.tab-btn:hover { border-color: var(--border-default); color: var(--text-primary); }
.tab-btn--active {
  background: rgba(91,107,248,0.12);
  border-color: var(--brand-primary);
  color: var(--brand-primary-light);
}

/* ── Service Section ────────────────────────── */
.svc-section { background: var(--bg-base); }
.svc-section:nth-child(even) { background: var(--bg-surface); }

.svc-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 72px;
  align-items: start;
  margin-bottom: 56px;
}
.svc-grid--reversed { direction: rtl; }
.svc-grid--reversed > * { direction: ltr; }

.svc-badge {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  font-size: 0.82rem;
  font-weight: 700;
  letter-spacing: 0.06em;
  text-transform: uppercase;
  margin-bottom: 20px;
}
.svc-badge--blue {
  background: rgba(91,107,248,0.1);
  border: 1px solid rgba(91,107,248,0.3);
  color: var(--brand-primary-light);
}
.svc-badge--teal {
  background: rgba(0,212,170,0.1);
  border: 1px solid rgba(0,212,170,0.3);
  color: #00D4AA;
}

.svc-title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin-bottom: 16px;
  font-style: italic;
  color: var(--text-primary);
}

.svc-verbatim {
  font-size: 1rem;
  color: var(--text-secondary);
  padding: 16px 20px;
  border-left: 3px solid var(--brand-primary);
  background: rgba(91,107,248,0.05);
  border-radius: 0 var(--radius-sm) var(--radius-sm) 0;
  margin-bottom: 20px;
  font-style: italic;
  line-height: 1.7;
}
.svc-verbatim--teal {
  border-left-color: #00D4AA;
  background: rgba(0,212,170,0.05);
}
.svc-verbatim strong { color: var(--text-primary); font-style: normal; }

.svc-body {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 24px;
}

.svc-targets { display: flex; gap: 10px; flex-wrap: wrap; }
.target-chip {
  display: inline-flex;
  align-items: center;
  gap: 6px;
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: rgba(91,107,248,0.08);
  border: 1px solid rgba(91,107,248,0.2);
  color: var(--brand-primary-light);
  font-size: 0.85rem;
  font-weight: 600;
}
.target-chip--teal {
  background: rgba(0,212,170,0.08);
  border-color: rgba(0,212,170,0.2);
  color: #00D4AA;
}

/* Service Cards */
.svc-cards { display: flex; flex-direction: column; gap: 20px; }
.svc-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 28px;
  display: flex;
  gap: 20px;
  transition: all var(--transition-base);
}
.svc-card:hover {
  border-color: rgba(91,107,248,0.4);
  box-shadow: 0 8px 32px rgba(91,107,248,0.15);
  transform: translateX(4px);
}
.svc-card--creative:hover {
  border-color: rgba(0,212,170,0.4);
  box-shadow: 0 8px 32px rgba(0,212,170,0.15);
}
.svc-card__icon {
  font-size: 1.8rem;
  width: 52px; height: 52px;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-glass-light);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}
.svc-card__body h3 { font-size: 1rem; margin-bottom: 6px; }
.svc-card__body p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.6; margin-bottom: 12px; }
.svc-card__features {
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 6px 16px;
}
.svc-card__features li {
  display: flex;
  align-items: center;
  gap: 6px;
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* Tech Stack */
.tech-stack {
  padding: 28px;
  background: var(--bg-glass-light);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  display: flex;
  align-items: center;
  gap: 20px;
  flex-wrap: wrap;
}
.tech-stack__label {
  font-size: 0.82rem;
  font-weight: 700;
  color: var(--text-muted);
  text-transform: uppercase;
  letter-spacing: 0.08em;
  white-space: nowrap;
}
.tech-stack__pills { display: flex; flex-wrap: wrap; gap: 8px; }
.tech-pill {
  padding: 5px 14px;
  border-radius: var(--radius-pill);
  background: rgba(91,107,248,0.08);
  border: 1px solid rgba(91,107,248,0.15);
  color: var(--brand-primary-light);
  font-size: 0.78rem;
  font-weight: 500;
}
.tech-pill--teal {
  background: rgba(0,212,170,0.08);
  border-color: rgba(0,212,170,0.15);
  color: #00D4AA;
}

/* Divider */
.section-divider { padding: 0; }
.divider-line {
  height: 1px;
  background: linear-gradient(90deg, transparent, var(--border-default), transparent);
}

/* Why Us */
.why-us { background: var(--bg-surface); }
.why-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;
}
.why-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px 24px;
  transition: all var(--transition-base);
}
.why-card:hover {
  border-color: var(--border-default);
  transform: translateY(-4px);
  box-shadow: var(--shadow-brand);
}
.why-card__num {
  font-family: var(--font-heading);
  font-size: 2.5rem;
  font-weight: 900;
  background: var(--gradient-brand);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  line-height: 1;
}
.why-card h3 { font-size: 1rem; margin-bottom: 10px; }
.why-card p { font-size: 0.85rem; color: var(--text-muted); line-height: 1.7; }

/* CTA */
.services-cta { padding: 80px 0; }
.cta-inner {
  position: relative;
  text-align: center;
  padding: 72px 40px;
  background: var(--gradient-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  overflow: hidden;
}
.cta-inner__glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%,-50%);
  width: 600px; height: 300px;
  background: radial-gradient(ellipse, rgba(91,107,248,0.1) 0%, transparent 70%);
}
.cta-inner h2 { font-size: clamp(1.8rem,4vw,2.6rem); margin-bottom: 14px; position: relative; }
.cta-inner p { color: var(--text-secondary); font-size: 1.05rem; margin-bottom: 36px; max-width: 480px; margin-left: auto; margin-right: auto; position: relative; }

/* Responsive */
@media (max-width: 1024px) {
  .svc-grid { grid-template-columns: 1fr; gap: 48px; }
  .svc-grid--reversed { direction: ltr; }
  .why-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .why-grid { grid-template-columns: 1fr; }
  .page-hero { padding-top: 120px; }
}
</style>
