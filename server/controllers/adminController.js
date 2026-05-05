const fs = require('fs');
const path = require('path');
const { v4: uuidv4 } = require('uuid');

const PORTFOLIO_FILE = path.join(__dirname, '../data/portfolio.json');
const CONTACTS_FILE = path.join(__dirname, '../data/contacts.json');

// ── Helpers ──────────────────────────────────────
const readJSON = (filePath) => {
  try {
    const raw = fs.readFileSync(filePath, 'utf-8');
    return JSON.parse(raw);
  } catch {
    return [];
  }
};

const writeJSON = (filePath, data) => {
  const dir = path.dirname(filePath);
  if (!fs.existsSync(dir)) fs.mkdirSync(dir, { recursive: true });
  fs.writeFileSync(filePath, JSON.stringify(data, null, 2), 'utf-8');
};

// ── Dashboard Stats ──────────────────────────────
const getDashboardStats = (req, res) => {
  try {
    const portfolio = readJSON(PORTFOLIO_FILE);
    const messages = readJSON(CONTACTS_FILE);
    const unread = messages.filter(m => m.status === 'unread').length;

    res.json({
      success: true,
      data: {
        totalPortfolio: portfolio.length,
        totalMessages: messages.length,
        unreadMessages: unread,
        lastActivity: messages.length > 0 ? messages[0].submittedAt : null,
      },
    });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to fetch stats', error: err.message });
  }
};

// ── Portfolio CRUD ───────────────────────────────
const getPortfolio = (req, res) => {
  try {
    const portfolio = readJSON(PORTFOLIO_FILE);
    res.json({ success: true, data: portfolio, count: portfolio.length });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to read portfolio', error: err.message });
  }
};

const createPortfolio = (req, res) => {
  try {
    const { title, category, imageUrl, emoji, description, client, bgGradient, accentColor } = req.body;

    if (!title || !category) {
      return res.status(400).json({ success: false, message: 'Title and Category are required.' });
    }

    const newItem = {
      id: `port-${uuidv4().slice(0, 8)}`,
      title: title.trim(),
      category: category.trim(),
      imageUrl: imageUrl || '',
      emoji: emoji || '📁',
      description: (description || '').trim(),
      client: (client || '').trim(),
      bgGradient: bgGradient || 'linear-gradient(135deg, #111827 0%, #1f2937 100%)',
      accentColor: accentColor || '#818cf8',
      createdAt: new Date().toISOString(),
    };

    const portfolio = readJSON(PORTFOLIO_FILE);
    portfolio.unshift(newItem);
    writeJSON(PORTFOLIO_FILE, portfolio);

    console.log(`📎 Portfolio created: "${newItem.title}" [${newItem.category}]`);
    res.status(201).json({ success: true, message: 'Portfolio item published.', data: newItem });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to create portfolio item', error: err.message });
  }
};

const updatePortfolio = (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = readJSON(PORTFOLIO_FILE);
    const index = portfolio.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found.' });
    }

    const allowed = ['title', 'category', 'imageUrl', 'emoji', 'description', 'client', 'bgGradient', 'accentColor'];
    allowed.forEach(key => {
      if (req.body[key] !== undefined) {
        portfolio[index][key] = typeof req.body[key] === 'string' ? req.body[key].trim() : req.body[key];
      }
    });
    portfolio[index].updatedAt = new Date().toISOString();

    writeJSON(PORTFOLIO_FILE, portfolio);
    console.log(`📝 Portfolio updated: "${portfolio[index].title}"`);
    res.json({ success: true, message: 'Portfolio item updated.', data: portfolio[index] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update portfolio item', error: err.message });
  }
};

const deletePortfolio = (req, res) => {
  try {
    const { id } = req.params;
    const portfolio = readJSON(PORTFOLIO_FILE);
    const index = portfolio.findIndex(p => p.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Portfolio item not found.' });
    }

    const removed = portfolio.splice(index, 1)[0];
    writeJSON(PORTFOLIO_FILE, portfolio);

    console.log(`🗑️ Portfolio deleted: "${removed.title}"`);
    res.json({ success: true, message: 'Portfolio item deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete portfolio item', error: err.message });
  }
};

// ── Messages ────────────────────────────────────
const getMessages = (req, res) => {
  try {
    const messages = readJSON(CONTACTS_FILE);
    res.json({ success: true, data: messages, count: messages.length });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to read messages', error: err.message });
  }
};

const markMessageRead = (req, res) => {
  try {
    const { id } = req.params;
    const messages = readJSON(CONTACTS_FILE);
    const index = messages.findIndex(m => m.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Message not found.' });
    }

    messages[index].status = 'read';
    messages[index].readAt = new Date().toISOString();
    writeJSON(CONTACTS_FILE, messages);

    console.log(`✅ Message marked read: ${messages[index].name}`);
    res.json({ success: true, message: 'Message marked as read.', data: messages[index] });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to update message', error: err.message });
  }
};

const deleteMessage = (req, res) => {
  try {
    const { id } = req.params;
    const messages = readJSON(CONTACTS_FILE);
    const index = messages.findIndex(m => m.id === id);

    if (index === -1) {
      return res.status(404).json({ success: false, message: 'Message not found.' });
    }

    const removed = messages.splice(index, 1)[0];
    writeJSON(CONTACTS_FILE, messages);

    console.log(`🗑️ Message deleted from: ${removed.name}`);
    res.json({ success: true, message: 'Message deleted.' });
  } catch (err) {
    res.status(500).json({ success: false, message: 'Failed to delete message', error: err.message });
  }
};

module.exports = {
  getDashboardStats,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,
  getMessages,
  markMessageRead,
  deleteMessage,
};
