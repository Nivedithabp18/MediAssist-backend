const Report = require('../models/Report');

// Generate report (mock for now)
const generateReport = async (req, res) => {
  res.status(200).json({ message: "Mock generate report", diagnosis: [] });
};

// Save report
const saveReport = async (req, res) => {
  try {
    const { userId, symptoms, diagnosis } = req.body;

    if (!userId || !symptoms) {
      return res.status(400).json({ message: 'userId and symptoms are required' });
    }

    const newReport = new Report({
      userId,
      symptoms,
      diagnosis: diagnosis || [],
      status: false
    });

    const savedReport = await newReport.save();
    res.status(201).json({ message: 'Report saved successfully', report: savedReport });
  } catch (error) {
    console.error('Error saving report:', error);
    res.status(500).json({ message: 'Server error', error: error.message });
  }
};

// Get all reports by user (mock)
const getReportsByUser = async (req, res) => {
  res.status(200).json({ message: "Mock getReportsByUser" });
};

// Delete report (mock)
const deleteReport = async (req, res) => {
  res.status(200).json({ message: "Mock deleteReport" });
};

// Update report status (mock)
const updateReportStatus = async (req, res) => {
  res.status(200).json({ message: "Mock updateReportStatus" });
};

module.exports = {
  generateReport,
  saveReport,
  getReportsByUser,
  deleteReport,
  updateReportStatus
};
