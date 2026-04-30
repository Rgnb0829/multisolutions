<template>
  <div class="home">
    <!-- ── HERO SECTION ─────────────────────────── -->
    <section class="hero">
      <div class="hero__bg">
        <div class="glow-orb hero__orb-1"></div>
        <div class="glow-orb hero__orb-2"></div>
        <div class="hero__grid-lines"></div>
      </div>
      <div class="container hero__content">
        <div class="badge hero__badge">
          <span class="badge-dot"></span>
          Fimosa Technology Indonesia — Divisi MS
        </div>
        <h1 class="hero__title">
          Company profile <span class="gradient-text">MS</span>
        </h1>
        <p class="hero__subtitle">
          Divisi Multi-Solution dari Fimosa Technology Indonesia.
        </p>
        <p class="hero__desc">
          Menghadirkan layanan digital terpadu yang menggabungkan kekuatan <strong>Software House</strong>
          dan <strong>Creative Studio</strong> — solusi hibrida untuk korporasi, pemerintah, dan startup yang ingin
          bertransformasi secara digital.
        </p>
        <div class="hero__actions">
          <router-link to="/services" class="btn btn-primary">
            Lihat Layanan Kami
            <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
          </router-link>
          <router-link to="/contact" class="btn btn-outline">
            Hubungi Tim MS
          </router-link>
        </div>
        <div class="hero__stats">
          <div class="stat" v-for="s in stats" :key="s.label">
            <span class="stat__number gradient-text">{{ s.number }}</span>
            <span class="stat__label">{{ s.label }}</span>
          </div>
        </div>
      </div>
      <div class="hero__scroll-hint">
        <div class="scroll-indicator"></div>
      </div>
    </section>

    <!-- ── ABOUT US SECTION ───────────────────── -->
    <section class="section about" id="about">
      <div class="container">
        <div class="about__grid">
          <div class="about__text">
            <div class="badge" style="margin-bottom:20px">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><path d="M12 8v4l2 2"/></svg>
              About Us
            </div>
            <h2 class="about__title">
              website berisikkan 3 page<br/>
              <span class="gradient-text">Home page: About us,</span><br/>
              profile singkat Fimosa Company
            </h2>
            <p class="about__lead">
              Fimosa Multi-Solution (MS) adalah divisi hibrida dari <strong>Fimosa Company</strong> yang
              mengkhususkan diri dalam penyediaan solusi teknologi informasi dan kreatif secara terpadu.
              Kami percaya bahwa transformasi digital yang sesungguhnya membutuhkan dua sayap: teknologi
              yang kuat dan identitas visual yang memikat.
            </p>
            <p class="about__body">
              Sebagai bagian dari ekosistem <strong>Fimosa Technology Indonesia</strong>, divisi MS hadir
              untuk menjawab kebutuhan pasar yang semakin dinamis. Kami tidak sekadar membangun produk —
              kami membangun solusi yang bertahan, berkembang, dan memberikan dampak nyata bagi bisnis klien kami.
            </p>
            <div class="about__values">
              <div class="value-item" v-for="v in values" :key="v.title">
                <div class="value-icon">{{ v.icon }}</div>
                <div>
                  <h4>{{ v.title }}</h4>
                  <p>{{ v.desc }}</p>
                </div>
              </div>
            </div>
          </div>
          <div class="about__visual">
            <div class="visual-card visual-card--main">
              <div class="vc-header">
                <div class="vc-dots"><span></span><span></span><span></span></div>
                <span class="vc-title">Fimosa MS — Overview</span>
              </div>
              <div class="vc-body">
                <div class="vc-metric" v-for="m in metrics" :key="m.label">
                  <div class="vc-metric__bar">
                    <div class="vc-metric__fill" :style="{ width: m.pct }"></div>
                  </div>
                  <div class="vc-metric__info">
                    <span>{{ m.label }}</span>
                    <strong>{{ m.pct }}</strong>
                  </div>
                </div>
              </div>
            </div>
            <div class="visual-card visual-card--secondary">
              <div class="vc-stat">
                <span class="vc-stat__num gradient-text">2+</span>
                <span class="vc-stat__lbl">Divisi Layanan</span>
              </div>
              <div class="vc-divider"></div>
              <div class="vc-tag" v-for="t in tags" :key="t">{{ t }}</div>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── PARENT COMPANY SECTION ─────────────── -->
    <section class="section parent-co">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:16px">Ekosistem Kami</div>
          <h2>Bagian dari <span class="gradient-text">Fimosa Company</span></h2>
          <p>Fimosa Multi-Solution beroperasi di bawah naungan induk yang kuat.</p>
          <div class="divider"></div>
        </div>
        <div class="parent-grid">
          <div class="parent-card" v-for="unit in companyUnits" :key="unit.name">
            <div class="parent-card__icon" :class="unit.color">{{ unit.icon }}</div>
            <h3>{{ unit.name }}</h3>
            <p>{{ unit.desc }}</p>
            <div v-if="unit.isMS" class="parent-card__badge">
              <span class="badge" style="font-size:0.7rem">Divisi Aktif</span>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── SERVICES PREVIEW ───────────────────── -->
    <section class="section services-preview">
      <div class="container">
        <div class="section-header">
          <div class="badge" style="margin-bottom:16px">Layanan Kami</div>
          <h2>Solusi <span class="gradient-text">Hibrida Terpadu</span></h2>
          <p>Dua divisi, satu visi: mengakselerasi pertumbuhan klien secara digital.</p>
          <div class="divider"></div>
        </div>
        <div class="sp-cards">
          <div class="sp-card" v-for="svc in servicePreviews" :key="svc.title">
            <div class="sp-card__icon">{{ svc.icon }}</div>
            <h3>{{ svc.title }}</h3>
            <p>{{ svc.desc }}</p>
            <router-link to="/services" class="sp-link">
              Pelajari Lebih Lanjut
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
          </div>
        </div>
      </div>
    </section>

    <!-- ── CTA SECTION ────────────────────────── -->
    <section class="cta-section">
      <div class="container">
        <div class="cta-box">
          <div class="cta-box__glow"></div>
          <div class="badge" style="margin-bottom:20px">Mulai Berkolaborasi</div>
          <h2>Siap Memulai Proyek Anda?</h2>
          <p>Tim Fimosa Multi-Solution siap mendampingi perjalanan digital Anda dari awal hingga rilis.</p>
          <div class="cta-box__actions">
            <router-link to="/contact" class="btn btn-primary">
              Konsultasi Gratis
              <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </router-link>
            <router-link to="/services" class="btn btn-outline">Lihat Portofolio</router-link>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
const stats = [
  { number: '50+', label: 'Proyek Selesai' },
  { number: '2', label: 'Divisi Layanan' },
  { number: '100%', label: 'Kepuasan Klien' },
  { number: '5+', label: 'Tahun Pengalaman' },
]

const values = [
  { icon: '🎯', title: 'Berorientasi Hasil', desc: 'Setiap solusi dirancang untuk menghasilkan dampak bisnis yang terukur.' },
  { icon: '🤝', title: 'Mitra Terpercaya', desc: 'Kami membangun relasi jangka panjang, bukan sekadar transaksi proyek.' },
  { icon: '⚡', title: 'Inovatif & Adaptif', desc: 'Teknologi terkini dipadukan dengan pendekatan desain yang relevan.' },
]

const metrics = [
  { label: 'Software House', pct: '85%' },
  { label: 'Creative Studio', pct: '78%' },
  { label: 'Client Satisfaction', pct: '98%' },
]

const tags = ['Vue.js', 'Node.js', 'ERP', 'Branding']

const companyUnits = [
  { icon: '🏢', name: 'Fimosa Company', desc: 'Perusahaan induk yang menaungi seluruh divisi dan menetapkan arah strategi bisnis jangka panjang.', color: 'icon--gold', isMS: false },
  { icon: '💻', name: 'Fimosa Multi-Solution', desc: 'Divisi hibrida yang menggabungkan Software House dan Creative Studio untuk pasar korporasi, pemerintah, dan startup.', color: 'icon--blue', isMS: true },
  { icon: '🔧', name: 'Fimosa Technology', desc: 'Lini teknologi inti yang menyediakan infrastruktur, riset, dan pengembangan platform bagi seluruh unit bisnis.', color: 'icon--teal', isMS: false },
]

const servicePreviews = [
  {
    icon: '🖥️',
    title: 'Software House',
    desc: 'Melayani pembuatan website, custom ERP, dan pembuatan aplikasi sistem informasi untuk segment market korporasi dan pemerintah.',
  },
  {
    icon: '🎨',
    title: 'Creative Studio',
    desc: 'Melayani pembuatan logo, ilustrasi, dan aset grafis untuk korporasi dan startup.',
  },
]
</script>

<style scoped>
/* ── Hero ─────────────────────────────────────── */
.hero {
  position: relative;
  min-height: 100vh;
  display: flex;
  align-items: center;
  overflow: hidden;
  padding-top: 100px;
}
.hero__bg { position: absolute; inset: 0; pointer-events: none; }
.hero__orb-1 {
  width: 600px; height: 600px;
  background: #5B6BF8;
  top: -100px; right: -100px;
}
.hero__orb-2 {
  width: 400px; height: 400px;
  background: #00D4AA;
  bottom: 0; left: -50px;
  opacity: 0.2;
}
.hero__grid-lines {
  position: absolute; inset: 0;
  background-image:
    linear-gradient(rgba(91,107,248,0.04) 1px, transparent 1px),
    linear-gradient(90deg, rgba(91,107,248,0.04) 1px, transparent 1px);
  background-size: 60px 60px;
}

.hero__content {
  position: relative;
  z-index: 1;
  max-width: 780px;
  padding-top: 40px;
  padding-bottom: 80px;
}

.hero__badge {
  margin-bottom: 28px;
  animation: fadeUp 0.6s ease both;
}
.badge-dot {
  width: 7px; height: 7px;
  border-radius: 50%;
  background: var(--brand-secondary);
  box-shadow: 0 0 8px var(--brand-secondary);
  animation: pulse 2s infinite;
}
@keyframes pulse {
  0%,100% { opacity: 1; }
  50% { opacity: 0.4; }
}

.hero__title {
  font-size: clamp(3rem, 7vw, 5.5rem);
  font-weight: 900;
  line-height: 1.05;
  margin-bottom: 20px;
  animation: fadeUp 0.6s 0.1s ease both;
}
.hero__subtitle {
  font-size: clamp(1.1rem, 2.5vw, 1.4rem);
  color: var(--brand-primary-light);
  font-weight: 600;
  margin-bottom: 20px;
  animation: fadeUp 0.6s 0.2s ease both;
}
.hero__desc {
  font-size: 1.05rem;
  color: var(--text-secondary);
  max-width: 640px;
  margin-bottom: 40px;
  animation: fadeUp 0.6s 0.3s ease both;
}
.hero__desc strong { color: var(--text-primary); }

.hero__actions {
  display: flex;
  gap: 16px;
  flex-wrap: wrap;
  margin-bottom: 56px;
  animation: fadeUp 0.6s 0.4s ease both;
}

.hero__stats {
  display: flex;
  gap: 40px;
  flex-wrap: wrap;
  animation: fadeUp 0.6s 0.5s ease both;
}
.stat {
  display: flex;
  flex-direction: column;
}
.stat__number { font-family: var(--font-heading); font-size: 2rem; font-weight: 800; }
.stat__label { font-size: 0.85rem; color: var(--text-muted); margin-top: 2px; }

.hero__scroll-hint {
  position: absolute;
  bottom: 32px;
  left: 50%;
  transform: translateX(-50%);
}
.scroll-indicator {
  width: 24px; height: 40px;
  border: 2px solid var(--border-default);
  border-radius: 12px;
  position: relative;
}
.scroll-indicator::after {
  content: '';
  position: absolute;
  top: 6px; left: 50%;
  transform: translateX(-50%);
  width: 4px; height: 8px;
  background: var(--brand-primary-light);
  border-radius: 2px;
  animation: scrollDown 1.8s ease-in-out infinite;
}
@keyframes scrollDown {
  0% { transform: translateX(-50%) translateY(0); opacity: 1; }
  100% { transform: translateX(-50%) translateY(16px); opacity: 0; }
}

/* ── About ────────────────────────────────────── */
.about__grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 80px;
  align-items: center;
}
.about__title {
  font-size: clamp(1.6rem, 3vw, 2.4rem);
  margin-bottom: 24px;
  line-height: 1.25;
}
.about__lead {
  font-size: 1.05rem;
  color: var(--text-secondary);
  margin-bottom: 16px;
  line-height: 1.8;
}
.about__lead strong, .about__body strong { color: var(--text-primary); }
.about__body {
  color: var(--text-secondary);
  font-size: 0.95rem;
  line-height: 1.8;
  margin-bottom: 36px;
}
.about__values {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.value-item {
  display: flex;
  gap: 16px;
  align-items: flex-start;
}
.value-icon {
  font-size: 1.5rem;
  width: 44px; height: 44px;
  display: flex; align-items: center; justify-content: center;
  background: var(--bg-glass-light);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-md);
  flex-shrink: 0;
}
.value-item h4 { font-size: 0.95rem; margin-bottom: 4px; color: var(--text-primary); }
.value-item p { font-size: 0.85rem; color: var(--text-muted); }

/* Visual cards */
.about__visual {
  display: flex;
  flex-direction: column;
  gap: 20px;
}
.visual-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 24px;
}
.vc-header {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 24px;
}
.vc-dots {
  display: flex;
  gap: 6px;
}
.vc-dots span {
  width: 10px; height: 10px;
  border-radius: 50%;
  background: var(--bg-glass-light);
}
.vc-dots span:nth-child(1) { background: #FF6B6B; }
.vc-dots span:nth-child(2) { background: var(--brand-gold); }
.vc-dots span:nth-child(3) { background: var(--brand-secondary); }
.vc-title { font-size: 0.85rem; color: var(--text-muted); font-weight: 500; }

.vc-body { display: flex; flex-direction: column; gap: 16px; }
.vc-metric__bar {
  height: 6px; background: var(--bg-glass-light);
  border-radius: 3px; margin-bottom: 6px; overflow: hidden;
}
.vc-metric__fill {
  height: 100%;
  background: var(--gradient-brand);
  border-radius: 3px;
  animation: barGrow 1.2s ease forwards;
}
@keyframes barGrow {
  from { width: 0 !important; }
}
.vc-metric__info {
  display: flex; justify-content: space-between;
  font-size: 0.82rem;
}
.vc-metric__info span { color: var(--text-muted); }
.vc-metric__info strong { color: var(--brand-primary-light); }

.visual-card--secondary {
  display: flex;
  align-items: center;
  gap: 16px;
  flex-wrap: wrap;
}
.vc-stat { text-align: center; min-width: 80px; }
.vc-stat__num { font-family: var(--font-heading); font-size: 2rem; font-weight: 800; display: block; }
.vc-stat__lbl { font-size: 0.78rem; color: var(--text-muted); }
.vc-divider { width: 1px; height: 40px; background: var(--border-subtle); }
.vc-tag {
  padding: 6px 12px;
  border-radius: var(--radius-pill);
  background: var(--bg-glass-light);
  border: 1px solid var(--border-subtle);
  font-size: 0.78rem;
  color: var(--text-muted);
}

/* ── Parent Company ───────────────────────────── */
.parent-co { background: var(--bg-surface); }
.parent-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 28px;
}
.parent-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 32px 28px;
  transition: all var(--transition-base);
}
.parent-card:hover {
  border-color: var(--border-default);
  transform: translateY(-4px);
  box-shadow: var(--shadow-brand);
}
.parent-card__icon {
  font-size: 2rem;
  margin-bottom: 16px;
}
.parent-card h3 {
  font-size: 1.15rem;
  margin-bottom: 10px;
  color: var(--text-primary);
}
.parent-card p {
  font-size: 0.88rem;
  color: var(--text-muted);
  line-height: 1.7;
}
.parent-card__badge { margin-top: 16px; }
.icon--blue { filter: drop-shadow(0 0 12px rgba(91,107,248,0.5)); }
.icon--gold { filter: drop-shadow(0 0 12px rgba(245,166,35,0.4)); }
.icon--teal { filter: drop-shadow(0 0 12px rgba(0,212,170,0.4)); }

/* ── Services Preview ─────────────────────────── */
.sp-cards {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 28px;
}
.sp-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 40px;
  transition: all var(--transition-base);
  position: relative;
  overflow: hidden;
}
.sp-card::before {
  content: '';
  position: absolute;
  top: 0; left: 0; right: 0;
  height: 3px;
  background: var(--gradient-brand);
  transform: scaleX(0);
  transition: transform var(--transition-base);
}
.sp-card:hover::before { transform: scaleX(1); }
.sp-card:hover {
  border-color: var(--border-default);
  transform: translateY(-4px);
  box-shadow: var(--shadow-brand);
}
.sp-card__icon { font-size: 2.5rem; margin-bottom: 20px; }
.sp-card h3 { font-size: 1.4rem; margin-bottom: 12px; }
.sp-card p { color: var(--text-secondary); font-size: 0.95rem; line-height: 1.7; margin-bottom: 24px; }
.sp-link {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  color: var(--brand-primary-light);
  font-weight: 600;
  font-size: 0.9rem;
  transition: gap var(--transition-base);
}
.sp-link:hover { gap: 12px; }

/* ── CTA ─────────────────────────────────────── */
.cta-section { padding: 80px 0; }
.cta-box {
  position: relative;
  background: var(--gradient-card);
  border: 1px solid var(--border-default);
  border-radius: var(--radius-xl);
  padding: 80px 60px;
  text-align: center;
  overflow: hidden;
}
.cta-box__glow {
  position: absolute;
  top: 50%; left: 50%;
  transform: translate(-50%, -50%);
  width: 500px; height: 300px;
  background: radial-gradient(ellipse, rgba(91,107,248,0.12) 0%, transparent 70%);
}
.cta-box h2 {
  font-size: clamp(1.8rem, 4vw, 2.8rem);
  margin-bottom: 16px;
  position: relative;
}
.cta-box p {
  color: var(--text-secondary);
  font-size: 1.05rem;
  margin-bottom: 36px;
  max-width: 480px;
  margin-left: auto;
  margin-right: auto;
  position: relative;
}
.cta-box__actions {
  display: flex;
  gap: 16px;
  justify-content: center;
  flex-wrap: wrap;
  position: relative;
}

/* ── Animations ──────────────────────────────── */
@keyframes fadeUp {
  from { opacity: 0; transform: translateY(24px); }
  to { opacity: 1; transform: translateY(0); }
}

/* ── Responsive ──────────────────────────────── */
@media (max-width: 1024px) {
  .about__grid { grid-template-columns: 1fr; gap: 48px; }
  .parent-grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 768px) {
  .hero__title { font-size: 2.8rem; }
  .hero__stats { gap: 24px; }
  .sp-cards { grid-template-columns: 1fr; }
  .parent-grid { grid-template-columns: 1fr; }
  .cta-box { padding: 48px 24px; }
}
</style>
