const { ADMIN_TOKEN } = require('../config/adminConfig');

/**
 * Middleware: validate admin token from header or query param.
 * Header:  x-admin-token: <token>
 * Query:   ?token=<token>
 */
const adminAuth = (req, res, next) => {
  const token = req.headers['x-admin-token'] || req.query.token;

  if (!token) {
    return res.status(401).json({
      success: false,
      message: 'Access denied. No admin token provided.',
    });
  }

  if (token !== ADMIN_TOKEN) {
    return res.status(403).json({
      success: false,
      message: 'Access denied. Invalid admin token.',
    });
  }

  next();
};

module.exports = adminAuth;
