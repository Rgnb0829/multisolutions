<template>
  <div class="bg-base">
    <!-- HERO -->
    <section class="relative pt-32 pb-16 overflow-hidden">
      <div class="absolute inset-0 pointer-events-none">
        <div class="grid-lines"></div>
        <div class="glow-orb w-[500px] h-[500px] bg-teal top-[-150px] right-[-150px]" style="opacity:0.08"></div>
      </div>
      <div class="container-ms relative z-10">
        <ScrollReveal>
          <SectionBadge variant="teal" :dot="true" class="mb-6">Hubungi Kami</SectionBadge>
          <h1 class="font-heading font-black text-4xl md:text-6xl leading-tight mb-4">
            Let's Build Something<br/><span class="gradient-text">Extraordinary Together</span>
          </h1>
          <p class="text-text-secondary text-xl max-w-2xl mb-0">
            Ceritakan kebutuhan Anda — kami akan merespons dalam 1 hari kerja dengan roadmap awal yang konkret.
          </p>
        </ScrollReveal>
      </div>
    </section>

    <!-- MAIN CONTENT -->
    <section class="pb-24">
      <div class="container-ms">
        <div class="grid grid-cols-1 lg:grid-cols-5 gap-10">

          <!-- Left: Contact Info -->
          <div class="lg:col-span-2 flex flex-col gap-5">
            <ScrollReveal>
              <div class="bento-card">
                <div class="w-11 h-11 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center text-xl mb-4">📧</div>
                <h3 class="font-heading font-bold text-base text-text-primary mb-1">Email</h3>
                <a href="mailto:ms@fimosa.id" class="text-teal text-sm hover:text-teal-light transition-colors duration-150">operation@fimosa.id</a>
                <p class="text-text-muted text-xs mt-1">Respons dalam 1 hari kerja</p>
              </div>
            </ScrollReveal>

            <ScrollReveal :delay="1">
              <div class="bento-card">
                <div class="w-11 h-11 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center text-xl mb-4">💬</div>
                <h3 class="font-heading font-bold text-base text-text-primary mb-1">WhatsApp</h3>
                <a href="https://wa.me/6281234567890" target="_blank" rel="noopener" class="text-teal text-sm hover:text-teal-light transition-colors duration-150">+62 882-1650-6429</a>
                <p class="text-text-muted text-xs mt-1">Senin–Jumat, 09.00–17.00 WIB</p>
              </div>
            </ScrollReveal>

            <ScrollReveal :delay="2">
              <div class="bento-card">
                <div class="w-11 h-11 rounded-xl bg-teal/10 border border-teal/25 flex items-center justify-center text-xl mb-4">📍</div>
                <h3 class="font-heading font-bold text-base text-text-primary mb-1">Kantor</h3>
                <p class="text-text-secondary text-sm leading-relaxed">
                  Gedung HQ Senopati, Jl. Panembahan Senopati No.17, Ngupasan, Kec. Gondomanan, Kota Yogyakarta, Daerah Istimewa Yogyakarta 55121
                </p>
              </div>
            </ScrollReveal>

            <!-- Map embed -->
            <ScrollReveal :delay="3">
              <div class="rounded-xl overflow-hidden border border-border-subtle h-52">
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3952.891983794849!2d110.36701937571672!3d-7.801259177441871!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e7a575656fbddf1%3A0x4b6d27cf13253f34!2sHQ%20Senopati!5e0!3m2!1sen!2sid!4v1777804674190!5m2!1sen!2sid"
                width="800" 
                height="600" 
                style="border:0;" 
                allowfullscreen="" 
                loading="lazy" 
                referrerpolicy="no-referrer-when-downgrade">
                </iframe>
              </div>
              <p class="text-xs text-text-muted text-center mt-2">PT Fimosa Technology Indonesia — Yogyakarta, Indonesia</p>
            </ScrollReveal>
          </div>

          <!-- Right: Inquiry Form -->
          <div class="lg:col-span-3">
            <ScrollReveal :delay="1">
              <div class="bento-card border-teal/20 hover:border-teal/35 p-8 md:p-10">
                <h2 class="font-heading font-bold text-2xl mb-1 text-text-primary">Project Inquiry</h2>
                <p class="text-text-muted text-sm mb-8">Isi formulir di bawah dan tim kami akan menghubungi Anda secepatnya.</p>

                <!-- Success State -->
                <div v-if="submitted" class="text-center py-12">
                  <div class="text-5xl mb-4">✅</div>
                  <h3 class="font-heading font-bold text-xl mb-2 text-text-primary">Pesan Terkirim!</h3>
                  <p class="text-text-muted text-sm mb-6">Tim kami akan menghubungi Anda dalam 1 hari kerja.</p>
                  <button @click="submitted = false" class="btn-outline-ms text-sm px-5 py-2">Kirim Pesan Lain</button>
                </div>

                <!-- Form -->
                <form v-else @submit.prevent="handleSubmit" class="flex flex-col gap-5">
                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label">Nama Lengkap *</label>
                      <input v-model="form.name" type="text" required class="form-input" placeholder="Budi Santoso" id="contact-name" />
                      <p v-if="errors.name" class="text-red-400 text-xs mt-1">{{ errors.name }}</p>
                    </div>
                    <div>
                      <label class="form-label">Email *</label>
                      <input v-model="form.email" type="email" required class="form-input" placeholder="budi@perusahaan.com" id="contact-email" />
                      <p v-if="errors.email" class="text-red-400 text-xs mt-1">{{ errors.email }}</p>
                    </div>
                  </div>

                  <div class="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label class="form-label">Nama Perusahaan</label>
                      <input v-model="form.company" type="text" class="form-input" placeholder="PT Maju Bersama" id="contact-company" />
                    </div>
                    <div>
                      <label class="form-label">Layanan yang Diminati *</label>
                      <select v-model="form.service_type" required class="form-input" id="contact-service">
                        <option value="" disabled>Pilih layanan...</option>
                        <option value="Software House">Software House</option>
                        <option value="Creative Studio">Creative Studio</option>
                        <option value="Both">Software House + Creative Studio</option>
                        <option value="Consultation">Konsultasi Umum</option>
                      </select>
                      <p v-if="errors.service_type" class="text-red-400 text-xs mt-1">{{ errors.service_type }}</p>
                    </div>
                  </div>

                  <div>
                    <label class="form-label">Deskripsi Proyek *</label>
                    <textarea
                      v-model="form.message" required rows="5"
                      class="form-input resize-none"
                      placeholder="Ceritakan kebutuhan Anda secara singkat — jenis sistem/desain yang dibutuhkan, skala bisnis, dan timeline yang diharapkan..."
                      id="contact-message"
                    ></textarea>
                    <p v-if="errors.message" class="text-red-400 text-xs mt-1">{{ errors.message }}</p>
                  </div>

                  <p v-if="serverError" class="text-red-400 text-sm p-3 rounded-lg bg-red-500/10 border border-red-500/20">{{ serverError }}</p>

                  <button type="submit" :disabled="loading" class="btn-primary-ms justify-center text-base py-3.5" id="contact-submit">
                    <svg v-if="loading" class="animate-spin w-4 h-4" viewBox="0 0 24 24" fill="none">
                      <circle class="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" stroke-width="4"/>
                      <path class="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"/>
                    </svg>
                    {{ loading ? 'Mengirim...' : 'Kirim Inquiry' }}
                    <svg v-if="!loading" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
                  </button>
                  <p class="text-xs text-text-muted text-center">
                    Dengan mengirim formulir ini, Anda menyetujui bahwa kami dapat menghubungi Anda terkait inquiry ini.
                  </p>
                </form>
              </div>
            </ScrollReveal>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref, reactive } from 'vue'
import axios from 'axios'
import ScrollReveal from '@/components/ui/ScrollReveal.vue'
import SectionBadge from '@/components/ui/SectionBadge.vue'

const form = reactive({ name: '', email: '', company: '', service_type: '', message: '' })
const errors = reactive({})
const loading = ref(false)
const submitted = ref(false)
const serverError = ref('')

const validate = () => {
  Object.keys(errors).forEach(k => delete errors[k])
  let valid = true
  if (!form.name || form.name.trim().length < 2) { errors.name = 'Nama minimal 2 karakter.'; valid = false }
  if (!form.email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(form.email)) { errors.email = 'Masukkan alamat email yang valid.'; valid = false }
  if (!form.service_type) { errors.service_type = 'Pilih layanan yang diminati.'; valid = false }
  if (!form.message || form.message.trim().length < 10) { errors.message = 'Deskripsi minimal 10 karakter.'; valid = false }
  return valid
}

const handleSubmit = async () => {
  if (!validate()) return
  loading.value = true
  serverError.value = ''
  try {
    await axios.post('/api/contact', form)
    submitted.value = true
    Object.assign(form, { name: '', email: '', company: '', service_type: '', message: '' })
  } catch (err) {
    serverError.value = err?.response?.data?.message || 'Terjadi kesalahan. Silakan coba lagi atau hubungi kami langsung.'
  } finally {
    loading.value = false
  }
}
</script>

<style scoped>
.form-label {
  @apply block text-sm font-medium text-text-secondary mb-2;
}
.form-input {
  @apply w-full bg-surface border border-border-default rounded-lg px-4 py-3
         text-sm text-text-primary placeholder-text-muted
         focus:outline-none focus:border-teal/50 focus:ring-1 focus:ring-teal/25
         transition-all duration-200;
}
</style>
