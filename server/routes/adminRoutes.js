const express = require('express');
const router = express.Router();
const adminAuth = require('../middleware/adminAuth');
const {
  getDashboardStats,
  getPortfolio,
  createPortfolio,
  updatePortfolio,
  deletePortfolio,    
  getMessages,
  markMessageRead,
  deleteMessage,
} = require('../controllers/adminController');

// All routes protected by admin token middleware
router.use(adminAuth);

// Dashboard
router.get('/stats', getDashboardStats);

// Portfolio CRUD
router.get('/portfolio', getPortfolio);
router.post('/portfolio', createPortfolio);
router.put('/portfolio/:id', updatePortfolio);
router.delete('/portfolio/:id', deletePortfolio);

// Messages
router.get('/messages', getMessages);
router.patch('/messages/:id/read', markMessageRead);
router.delete('/messages/:id', deleteMessage);

module.exports = router;
