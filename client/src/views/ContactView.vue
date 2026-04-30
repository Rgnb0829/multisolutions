<template>
  <div class="contact-page">
    <!-- ── PAGE HERO ─────────────────────────────── -->
    <section class="page-hero">
      <div class="hero-glow"></div>
      <div class="container">
        <div class="badge" style="margin-bottom:20px">
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.76 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
          Hubungi Kami
        </div>
        <h1 class="page-hero__title">
          Contact page: <span class="gradient-text">Kontak resmi fimosa</span>
        </h1>
        <p class="page-hero__sub">
          map point kantor fimosa technology indonesia
        </p>
      </div>
    </section>

    <!-- ── CONTACT INFO CARDS ────────────────────── -->
    <section class="section contact-info-section">
      <div class="container">
        <div class="contact-info-grid">
          <div class="info-card" v-for="c in contactDetails" :key="c.label">
            <div class="info-card__icon">{{ c.icon }}</div>
            <div>
              <h3>{{ c.label }}</h3>
              <p v-html="c.value"></p>
            </div>
          </div>
        </div>
      </div>
    </section>

    <!-- ── MAIN CONTENT: FORM + MAP ──────────────── -->
    <section class="section contact-main">
      <div class="container">
        <div class="contact-grid">

          <!-- LEFT: Contact Form -->
          <div class="form-col">
            <h2 class="form-title">Kirim <span class="gradient-text">Pesan</span></h2>
            <p class="form-subtitle">Isi formulir di bawah ini. Tim kami akan merespons dalam 1×24 jam kerja.</p>

            <!-- Success Alert -->
            <transition name="fade">
              <div v-if="submitStatus === 'success'" class="alert alert--success">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><polyline points="20 6 9 17 4 12"/></svg>
                {{ submitMessage }}
              </div>
            </transition>
            <!-- Error Alert -->
            <transition name="fade">
              <div v-if="submitStatus === 'error'" class="alert alert--error">
                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><circle cx="12" cy="12" r="10"/><line x1="12" y1="8" x2="12" y2="12"/><line x1="12" y1="16" x2="12.01" y2="16"/></svg>
                {{ submitMessage }}
              </div>
            </transition>

            <form class="contact-form" @submit.prevent="handleSubmit" novalidate>
              <div class="form-row">
                <div class="form-group" :class="{ 'form-group--error': errors.name }">
                  <label for="contact-name">Nama Lengkap *</label>
                  <input id="contact-name" v-model="form.name" type="text" placeholder="Masukkan nama Anda" @blur="validateField('name')" />
                  <span v-if="errors.name" class="error-msg">{{ errors.name }}</span>
                </div>
                <div class="form-group" :class="{ 'form-group--error': errors.email }">
                  <label for="contact-email">Alamat Email *</label>
                  <input id="contact-email" v-model="form.email" type="email" placeholder="nama@perusahaan.com" @blur="validateField('email')" />
                  <span v-if="errors.email" class="error-msg">{{ errors.email }}</span>
                </div>
              </div>
              <div class="form-group">
                <label for="contact-subject">Subjek</label>
                <input id="contact-subject" v-model="form.subject" type="text" placeholder="Topik yang ingin dibicarakan" />
              </div>
              <div class="form-group" :class="{ 'form-group--error': errors.message }">
                <label for="contact-message">Pesan *</label>
                <textarea id="contact-message" v-model="form.message" rows="6" placeholder="Ceritakan kebutuhan proyek Anda..." @blur="validateField('message')"></textarea>
                <span v-if="errors.message" class="error-msg">{{ errors.message }}</span>
              </div>

              <!-- Service Interest -->
              <div class="form-group">
                <label>Layanan yang Diminati</label>
                <div class="service-chips">
                  <button type="button" class="chip" :class="{ 'chip--active': form.services.includes(s) }" v-for="s in serviceOptions" :key="s" @click="toggleService(s)">{{ s }}</button>
                </div>
              </div>

              <button type="submit" class="btn btn-primary submit-btn" :disabled="isSubmitting">
                <span v-if="!isSubmitting">
                  Kirim Pesan
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><line x1="22" y1="2" x2="11" y2="13"/><polygon points="22 2 15 22 11 13 2 9 22 2"/></svg>
                </span>
                <span v-else class="loading-dots">Mengirim<span>.</span><span>.</span><span>.</span></span>
              </button>
            </form>
          </div>

          <!-- RIGHT: Map + Quick Info -->
          <div class="map-col">
            <h2 class="form-title">Lokasi <span class="gradient-text">Kantor</span></h2>
            <p class="form-subtitle">map point kantor fimosa technology indonesia</p>

            <!-- Google Maps Embed — Jl. Pluit Raya area, Jakarta (demo point) -->
            <div class="map-wrapper">
              <iframe
                title="Fimosa Technology Indonesia Office Location"
                src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d126748.42522432!2d106.6894!3d-6.2088!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e945e34b9d%3A0x5371bf0fdad786a2!2sJakarta%2C%20Indonesia!5e0!3m2!1sen!2sid!4v1714490000000"
                width="100%"
                height="360"
                style="border:0;"
                allowfullscreen=""
                loading="lazy"
                referrerpolicy="no-referrer-when-downgrade"
              ></iframe>
              <div class="map-overlay">
                <div class="map-pin">
                  <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
                  Fimosa Technology Indonesia — Jakarta
                </div>
              </div>
            </div>

            <!-- Office Hours -->
            <div class="office-hours">
              <h4>🕐 Jam Operasional</h4>
              <div class="hours-grid">
                <div class="hours-row" v-for="h in officeHours" :key="h.day">
                  <span class="hours-day">{{ h.day }}</span>
                  <span class="hours-time" :class="{ 'hours-time--closed': h.time === 'Tutup' }">{{ h.time }}</span>
                </div>
              </div>
            </div>

            <!-- Social Quick Links -->
            <div class="social-quick">
              <p class="social-quick__label">Terhubung Juga Via</p>
              <div class="social-quick__btns">
                <a href="#" class="sq-btn sq-btn--wa">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413Z"/></svg>
                  WhatsApp
                </a>
                <a href="mailto:info@fimosa-ms.co.id" class="sq-btn sq-btn--email">
                  <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
                  Email Langsung
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'

// Form state
const form = reactive({ name: '', email: '', subject: '', message: '', services: [] })
const errors = reactive({ name: '', email: '', message: '' })
const isSubmitting = ref(false)
const submitStatus = ref(null) // 'success' | 'error' | null
const submitMessage = ref('')

const serviceOptions = ['Software House', 'Custom ERP', 'Website', 'Creative Studio', 'Logo & Branding', 'Konsultasi']

const toggleService = (s) => {
  const idx = form.services.indexOf(s)
  if (idx > -1) form.services.splice(idx, 1)
  else form.services.push(s)
}

const validateField = (field) => {
  if (field === 'name') errors.name = form.name.trim() ? '' : 'Nama wajib diisi.'
  if (field === 'email') {
    if (!form.email.trim()) errors.email = 'Email wajib diisi.'
    else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) errors.email = 'Format email tidak valid.'
    else errors.email = ''
  }
  if (field === 'message') errors.message = form.message.trim() ? '' : 'Pesan wajib diisi.'
}

const validateAll = () => {
  validateField('name'); validateField('email'); validateField('message')
  return !errors.name && !errors.email && !errors.message
}

const handleSubmit = async () => {
  if (!validateAll()) return
  isSubmitting.value = true
  submitStatus.value = null
  try {
    const res = await axios.post('/api/contact', {
      name: form.name,
      email: form.email,
      subject: form.subject || form.services.join(', ') || 'Pertanyaan Umum',
      message: form.message
    })
    submitStatus.value = 'success'
    submitMessage.value = res.data.message
    // Reset form
    Object.assign(form, { name: '', email: '', subject: '', message: '', services: [] })
  } catch (err) {
    submitStatus.value = 'error'
    submitMessage.value = err.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi.'
  } finally {
    isSubmitting.value = false
    setTimeout(() => { submitStatus.value = null }, 7000)
  }
}

const contactDetails = [
  { icon: '📍', label: 'Alamat Kantor', value: 'Fimosa Technology Indonesia<br/>Jakarta, Indonesia' },
  { icon: '📧', label: 'Email Resmi', value: 'info@fimosa-ms.co.id<br/>support@fimosa-ms.co.id' },
  { icon: '📞', label: 'Telepon', value: '+62 21 xxxx xxxx<br/>+62 812 xxxx xxxx (WA)' },
  { icon: '🕐', label: 'Jam Kerja', value: 'Senin – Jumat<br/>08:00 – 17:00 WIB' },
]

const officeHours = [
  { day: 'Senin – Jumat', time: '08:00 – 17:00 WIB' },
  { day: 'Sabtu', time: '09:00 – 13:00 WIB' },
  { day: 'Minggu', time: 'Tutup' },
]
</script>

<style scoped>
/* Hero */
.page-hero {
  position: relative;
  padding: 160px 0 56px;
  overflow: hidden;
}
.hero-glow {
  position: absolute;
  top: -100px; right: -100px;
  width: 500px; height: 500px;
  background: radial-gradient(ellipse, rgba(91,107,248,0.2) 0%, transparent 65%);
  pointer-events: none;
}
.page-hero__title {
  font-size: clamp(2.2rem, 4.5vw, 3.6rem);
  font-weight: 900;
  margin-top: 12px;
  margin-bottom: 12px;
}
.page-hero__sub {
  font-size: 1rem;
  color: var(--text-muted);
  font-style: italic;
}

/* Contact Info Cards */
.contact-info-section { padding-top: 0; }
.contact-info-grid {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
}
.info-card {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 24px;
  display: flex;
  align-items: flex-start;
  gap: 16px;
  transition: all var(--transition-base);
}
.info-card:hover { border-color: var(--border-default); transform: translateY(-3px); box-shadow: var(--shadow-brand); }
.info-card__icon { font-size: 1.6rem; flex-shrink: 0; }
.info-card h3 { font-size: 0.82rem; font-weight: 700; text-transform: uppercase; letter-spacing: 0.06em; color: var(--text-muted); margin-bottom: 6px; }
.info-card p { font-size: 0.88rem; color: var(--text-secondary); line-height: 1.6; }

/* Main Grid */
.contact-main { background: var(--bg-surface); }
.contact-grid {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 64px;
  align-items: start;
}
.form-title { font-size: clamp(1.6rem, 3vw, 2.2rem); margin-bottom: 8px; }
.form-subtitle { color: var(--text-muted); font-size: 0.9rem; margin-bottom: 32px; font-style: italic; }

/* Alerts */
.alert {
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px 20px;
  border-radius: var(--radius-md);
  font-size: 0.9rem;
  font-weight: 500;
  margin-bottom: 24px;
}
.alert--success { background: rgba(0,212,170,0.1); border: 1px solid rgba(0,212,170,0.3); color: #00D4AA; }
.alert--error { background: rgba(255,107,107,0.1); border: 1px solid rgba(255,107,107,0.3); color: #FF6B6B; }

/* Form */
.contact-form { display: flex; flex-direction: column; gap: 20px; }
.form-row { display: grid; grid-template-columns: 1fr 1fr; gap: 20px; }
.form-group { display: flex; flex-direction: column; gap: 8px; }
.form-group label { font-size: 0.85rem; font-weight: 600; color: var(--text-secondary); }
.form-group input,
.form-group textarea {
  background: var(--bg-card);
  border: 1.5px solid var(--border-subtle);
  border-radius: var(--radius-md);
  padding: 14px 16px;
  color: var(--text-primary);
  font-size: 0.95rem;
  transition: border-color var(--transition-fast);
  outline: none;
  resize: vertical;
}
.form-group input:focus,
.form-group textarea:focus { border-color: var(--brand-primary); box-shadow: 0 0 0 3px rgba(91,107,248,0.12); }
.form-group--error input,
.form-group--error textarea { border-color: #FF6B6B; }
.error-msg { font-size: 0.78rem; color: #FF6B6B; }

/* Service chips */
.service-chips { display: flex; flex-wrap: wrap; gap: 8px; }
.chip {
  padding: 8px 16px;
  border-radius: var(--radius-pill);
  background: var(--bg-glass-light);
  border: 1.5px solid var(--border-subtle);
  color: var(--text-muted);
  font-size: 0.82rem;
  font-weight: 500;
  cursor: pointer;
  transition: all var(--transition-fast);
}
.chip:hover { border-color: var(--border-default); color: var(--text-primary); }
.chip--active { background: rgba(91,107,248,0.12); border-color: var(--brand-primary); color: var(--brand-primary-light); }

.submit-btn { width: 100%; justify-content: center; padding: 16px; font-size: 1rem; }
.submit-btn:disabled { opacity: 0.6; cursor: not-allowed; transform: none !important; }
.loading-dots span { animation: blink 1.4s infinite; }
.loading-dots span:nth-child(2) { animation-delay: 0.2s; }
.loading-dots span:nth-child(3) { animation-delay: 0.4s; }
@keyframes blink { 0%,80%,100% { opacity: 0; } 40% { opacity: 1; } }

/* Map */
.map-wrapper {
  position: relative;
  border-radius: var(--radius-lg);
  overflow: hidden;
  border: 1px solid var(--border-subtle);
  margin-bottom: 24px;
}
.map-overlay {
  position: absolute;
  bottom: 0; left: 0; right: 0;
  padding: 12px 16px;
  background: linear-gradient(transparent, rgba(8,12,24,0.9));
}
.map-pin {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  font-size: 0.85rem;
  color: var(--brand-primary-light);
  font-weight: 600;
}

/* Office Hours */
.office-hours {
  background: var(--gradient-card);
  border: 1px solid var(--border-subtle);
  border-radius: var(--radius-lg);
  padding: 24px;
  margin-bottom: 20px;
}
.office-hours h4 { font-size: 0.95rem; margin-bottom: 16px; }
.hours-grid { display: flex; flex-direction: column; gap: 10px; }
.hours-row { display: flex; justify-content: space-between; align-items: center; font-size: 0.88rem; }
.hours-day { color: var(--text-muted); }
.hours-time { color: var(--brand-secondary); font-weight: 600; }
.hours-time--closed { color: var(--text-muted); font-weight: 400; }

/* Social Quick */
.social-quick__label { font-size: 0.82rem; color: var(--text-muted); margin-bottom: 12px; text-transform: uppercase; letter-spacing: 0.06em; font-weight: 600; }
.social-quick__btns { display: flex; gap: 12px; }
.sq-btn {
  flex: 1;
  display: flex; align-items: center; justify-content: center; gap: 8px;
  padding: 12px 16px;
  border-radius: var(--radius-md);
  font-weight: 600; font-size: 0.88rem;
  transition: all var(--transition-base);
  border: 1.5px solid;
}
.sq-btn--wa { background: rgba(37,211,102,0.1); border-color: rgba(37,211,102,0.3); color: #25D366; }
.sq-btn--wa:hover { background: rgba(37,211,102,0.18); transform: translateY(-2px); }
.sq-btn--email { background: rgba(91,107,248,0.1); border-color: var(--border-default); color: var(--brand-primary-light); }
.sq-btn--email:hover { background: rgba(91,107,248,0.18); transform: translateY(-2px); }

/* Transitions */
.fade-enter-active, .fade-leave-active { transition: opacity 0.3s ease, transform 0.3s ease; }
.fade-enter-from, .fade-leave-to { opacity: 0; transform: translateY(-8px); }

/* Responsive */
@media (max-width: 1024px) {
  .contact-info-grid { grid-template-columns: 1fr 1fr; }
  .contact-grid { grid-template-columns: 1fr; gap: 48px; }
}
@media (max-width: 600px) {
  .contact-info-grid { grid-template-columns: 1fr; }
  .form-row { grid-template-columns: 1fr; }
  .page-hero { padding-top: 120px; }
}
</style>
