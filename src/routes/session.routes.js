'use strict';

const express = require('express');
const router = express.Router();

// Placeholder route until Module 2 session endpoints are fully wired
router.get('/', (req, res) => {
  res.status(200).json({ message: 'Session routes endpoint active' });
});

module.exports = router;
