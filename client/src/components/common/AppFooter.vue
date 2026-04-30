<template>
  <footer class="footer">
    <div class="footer__glow"></div>
    <div class="container">
      <div class="footer__grid">
        <!-- Brand Column -->
        <div class="footer__brand">
          <div class="brand-logo">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <path d="M4 8h24v3H4V8zm0 6.5h16v3H4v-3zm0 6.5h24v3H4v-3z" fill="url(#fg)" />
              <defs>
                <linearGradient id="fg" x1="0" y1="0" x2="32" y2="32" gradientUnits="userSpaceOnUse">
                  <stop stop-color="#5B6BF8"/>
                  <stop offset="1" stop-color="#00D4AA"/>
                </linearGradient>
              </defs>
            </svg>
            <div>
              <div class="logo-name">Fimosa Multi-Solution</div>
              <div class="logo-parent">A Division of Fimosa Company</div>
            </div>
          </div>
          <p class="footer__desc">
            Divisi hibrida dari Fimosa Technology Indonesia yang menghadirkan solusi digital terpadu — dari pengembangan perangkat lunak hingga kreasi aset visual untuk korporasi dan pemerintah.
          </p>
          <div class="social-links">
            <a href="#" class="social-btn" aria-label="LinkedIn">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433c-1.144 0-2.063-.926-2.063-2.065 0-1.138.92-2.063 2.063-2.063 1.14 0 2.064.925 2.064 2.063 0 1.139-.925 2.065-2.064 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="Instagram">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98-1.281-.059-1.69-.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z"/></svg>
            </a>
            <a href="#" class="social-btn" aria-label="Twitter/X">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-4.714-6.231-5.401 6.231H2.736l7.748-8.867L1.254 2.25H8.08l4.253 5.622zm-1.161 17.52h1.833L7.084 4.126H5.117z"/></svg>
            </a>
          </div>
        </div>

        <!-- Links Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">Navigasi</h4>
          <ul class="footer__list">
            <li><router-link to="/">Beranda</router-link></li>
            <li><router-link to="/services">Layanan</router-link></li>
            <li><router-link to="/contact">Kontak</router-link></li>
          </ul>
        </div>

        <!-- Services Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">Layanan</h4>
          <ul class="footer__list">
            <li><a href="/services#software-house">Software House</a></li>
            <li><a href="/services#creative-studio">Creative Studio</a></li>
            <li><a href="/services#software-house">Custom ERP</a></li>
            <li><a href="/services#software-house">Pengembangan Website</a></li>
            <li><a href="/services#creative-studio">Desain Logo & Branding</a></li>
          </ul>
        </div>

        <!-- Contact Column -->
        <div class="footer__col">
          <h4 class="footer__col-title">Kontak</h4>
          <ul class="footer__list footer__list--contact">
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>Fimosa Technology Indonesia<br/>Jakarta, Indonesia</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="2" y="4" width="20" height="16" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>
              <span>info@fimosa-ms.co.id</span>
            </li>
            <li>
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07A19.5 19.5 0 0 1 4.76 13a19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 3.77 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L7.91 9.91a16 16 0 0 0 6.06 6.06l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>
              <span>+62 21 xxxx xxxx</span>
            </li>
          </ul>
        </div>
      </div>

      <!-- Bottom Bar -->
      <div class="footer__bottom">
        <p class="footer__copyright">
          © {{ currentYear }} Fimosa Multi-Solution. All Rights Reserved. A Division of Fimosa Company.
        </p>
        <div class="footer__legal">
          <a href="#">Kebijakan Privasi</a>
          <span>·</span>
          <a href="#">Syarat & Ketentuan</a>
        </div>
      </div>
    </div>
  </footer>
</template>

<script setup>
const currentYear = new Date().getFullYear()
</script>

<style scoped>
.footer {
  position: relative;
  background: var(--bg-surface);
  border-top: 1px solid var(--border-subtle);
  padding: 80px 0 0;
  overflow: hidden;
}

.footer__glow {
  position: absolute;
  top: -100px;
  left: 50%;
  transform: translateX(-50%);
  width: 600px;
  height: 300px;
  background: radial-gradient(ellipse, rgba(91,107,248,0.08) 0%, transparent 70%);
  pointer-events: none;
}

.footer__grid {
  display: grid;
  grid-template-columns: 2fr 1fr 1fr 1.5fr;
  gap: 48px;
  padding-bottom: 56px;
  border-bottom: 1px solid var(--border-subtle);
}

/* Brand */
.brand-logo {
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;
}
.logo-name {
  font-family: var(--font-heading);
  font-weight: 800;
  font-size: 1rem;
  color: var(--text-primary);
}
.logo-parent {
  font-size: 0.72rem;
  color: var(--text-muted);
  letter-spacing: 0.05em;
}
.footer__desc {
  color: var(--text-muted);
  font-size: 0.9rem;
  line-height: 1.7;
  margin-bottom: 24px;
}

.social-links {
  display: flex;
  gap: 10px;
}
.social-btn {
  width: 38px;
  height: 38px;
  border-radius: var(--radius-sm);
  background: var(--bg-glass-light);
  border: 1px solid var(--border-subtle);
  display: flex;
  align-items: center;
  justify-content: center;
  color: var(--text-muted);
  transition: all var(--transition-base);
}
.social-btn:hover {
  color: var(--brand-primary-light);
  border-color: var(--border-default);
  background: rgba(91,107,248,0.1);
  transform: translateY(-2px);
}

/* Columns */
.footer__col-title {
  font-family: var(--font-heading);
  font-size: 0.85rem;
  font-weight: 700;
  color: var(--text-primary);
  text-transform: uppercase;
  letter-spacing: 0.1em;
  margin-bottom: 20px;
}
.footer__list {
  list-style: none;
  display: flex;
  flex-direction: column;
  gap: 12px;
}
.footer__list a {
  color: var(--text-muted);
  font-size: 0.9rem;
  transition: color var(--transition-fast);
}
.footer__list a:hover { color: var(--brand-primary-light); }

.footer__list--contact li {
  display: flex;
  gap: 10px;
  align-items: flex-start;
  color: var(--text-muted);
  font-size: 0.88rem;
}
.footer__list--contact svg { flex-shrink: 0; margin-top: 2px; color: var(--brand-primary-light); }

/* Bottom */
.footer__bottom {
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 24px 0;
}
.footer__copyright {
  color: var(--text-muted);
  font-size: 0.85rem;
}
.footer__legal {
  display: flex;
  align-items: center;
  gap: 12px;
  font-size: 0.85rem;
  color: var(--text-muted);
}
.footer__legal a { transition: color var(--transition-fast); }
.footer__legal a:hover { color: var(--brand-primary-light); }
.footer__legal span { opacity: 0.4; }

@media (max-width: 1024px) {
  .footer__grid { grid-template-columns: 1fr 1fr; }
}
@media (max-width: 600px) {
  .footer__grid { grid-template-columns: 1fr; gap: 36px; }
  .footer__bottom { flex-direction: column; gap: 12px; text-align: center; }
}
</style>
