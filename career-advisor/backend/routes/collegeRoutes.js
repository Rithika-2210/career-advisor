// ===== collegeRoutes.js =====
const express = require('express');
const router = express.Router();
const { getColleges, getCollege, getFilterOptions, addCollege, updateCollege } = require('../controllers/collegeController');
const { protect, authorize } = require('../middleware/auth');

router.get('/', getColleges);
router.get('/filters/options', getFilterOptions);
router.get('/:id', getCollege);
router.post('/', protect, authorize('admin'), addCollege);
router.put('/:id', protect, authorize('admin'), updateCollege);

module.exports = router;
