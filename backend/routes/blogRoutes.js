const express = require('express');
const { createBlog, getBlogsByLocation } = require('../controllers/blogController');
const { protect } = require('../middleware/authMiddleware');
const router = express.Router();

router.post('/', protect, createBlog);
router.get('/:location', getBlogsByLocation);

module.exports = router;
