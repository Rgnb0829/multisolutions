const express = require('express');
const router = express.Router();
const { getAllContacts, submitContact } = require('../controllers/contactController');

// GET /api/contact — retrieve all contact submissions
router.get('/', getAllContacts);

// POST /api/contact — submit contact form
router.post('/', submitContact);

module.exports = router;
