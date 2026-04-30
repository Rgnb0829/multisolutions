const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const DATA_FILE = path.join(__dirname, '../data/contacts.json');

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
    const { name, email, subject, message } = req.body;

    // Validation
    if (!name || !email || !message) {
      return res.status(400).json({
        success: false,
        message: 'Field nama, email, dan pesan wajib diisi.'
      });
    }

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return res.status(400).json({
        success: false,
        message: 'Format email tidak valid.'
      });
    }

    const newContact = {
      id: uuidv4(),
      name: name.trim(),
      email: email.trim().toLowerCase(),
      subject: subject ? subject.trim() : 'Tidak ada subjek',
      message: message.trim(),
      submittedAt: new Date().toISOString(),
      status: 'unread'
    };

    const contacts = readContacts();
    contacts.unshift(newContact); // newest first
    writeContacts(contacts);

    console.log(`📩  Pesan baru dari: ${newContact.name} <${newContact.email}>`);

    res.status(201).json({
      success: true,
      message: 'Pesan Anda telah berhasil dikirim! Tim Fimosa Multi-Solution akan segera menghubungi Anda.',
      data: { id: newContact.id, submittedAt: newContact.submittedAt }
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Gagal menyimpan pesan kontak', error: err.message });
  }
};

module.exports = { getAllContacts, submitContact };
