const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, '../data/contacts.json');

// Simple in-memory rate limiter (IP → timestamps[])
const rateLimitMap = new Map();
const RATE_LIMIT_WINDOW_MS = 60 * 60 * 1000; // 1 hour
const RATE_LIMIT_MAX = 5;

const isRateLimited = (ip) => {
  const now = Date.now();
  const timestamps = (rateLimitMap.get(ip) || []).filter(t => now - t < RATE_LIMIT_WINDOW_MS);
  if (timestamps.length >= RATE_LIMIT_MAX) return true;
  timestamps.push(now);
  rateLimitMap.set(ip, timestamps);
  return false;
};

const VALID_SERVICE_TYPES = ['Software House', 'Creative Studio', 'Both', 'Consultation'];

// Helper: read contacts from JSON file
const readContacts = () => {
  try {
    const raw = fs.readFileSync(DATA_FILE, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

// Helper: write contacts to JSON file
const writeContacts = (contacts) => {
  const dir = path.dirname(DATA_FILE);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(DATA_FILE, JSON.stringify(contacts, null, 2), 'utf-8');
};

// GET /api/contact — list all submissions
const getAllContacts = (req, res) => {
  try {
    const contacts = readContacts();
    res.json({ success: true, data: contacts, count: contacts.length });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Gagal membaca data kontak', error: err.message });
  }
};

// POST /api/contact — submit a new contact form
const submitContact = (req, res) => {
  try {
    const ip = req.ip || req.connection.remoteAddress || 'unknown';

    // Rate limit check
    if (isRateLimited(ip)) {
      return res.status(429).json({
        success: false,
        message: 'Terlalu banyak permintaan. Silakan coba lagi dalam 1 jam.'
      });
    }

    const { name, email, company, service_type, message } = req.body;

    // Required field check
    if (!name || !email || !service_type || !message) {
      return res.status(400).json({
        success: false,
        message: 'Field nama, email, jenis layanan, dan pesan wajib diisi.'
      });
    }

    // Name length
    if (name.trim().length < 2) {
      return res.status(400).json({ success: false, message: 'Nama minimal 2 karakter.' });
    }

    // Email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({ success: false, message: 'Format email tidak valid.' });
    }

    // Service type enum
    if (!VALID_SERVICE_TYPES.includes(service_type)) {
      return res.status(400).json({ success: false, message: 'Jenis layanan tidak valid.' });
    }

    // Message length
    if (message.trim().length < 10) {
      return res.status(400).json({ success: false, message: 'Pesan minimal 10 karakter.' });
    }

    const newContact = {
      id: uuidv4(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      company: company ? company.trim() : '',
      service_type: service_type,
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'unread'
    };

    const contacts = readContacts();
    contacts.unshift(newContact); // newest first
    writeContacts(contacts);

    console.log(`📩  New inquiry from: ${newContact.name} <${newContact.email}> — Service: ${newContact.service_type}`);

    res.status(201).json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim! Tim Fimosa Multi-Solution akan menghubungi Anda dalam 1 hari kerja.',
      id: newContact.id
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Gagal menyimpan pesan. Silakan coba lagi.', error: err.message });
  }
};

module.exports = { getAllContacts, submitContact };
