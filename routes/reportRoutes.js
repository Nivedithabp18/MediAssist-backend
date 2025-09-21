const express = require('express');
const router = express.Router();

const {
  generateReport,
  saveReport,
  getReportsByUser,
  deleteReport,
  updateReportStatus
} = require('../controllers/reportController');

// Generate report (will call Python model later)
router.post('/report/generate', generateReport);

// Save report
router.post('/report/save', saveReport);

// Get all reports by user
router.get('/reports/:userId', getReportsByUser);

// Delete report
router.delete('/report/:reportId', deleteReport);

// Update report status (share/unshare)
router.patch('/report/:reportId/status', updateReportStatus);

module.exports = router;
