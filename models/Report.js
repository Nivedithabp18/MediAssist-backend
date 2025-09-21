// models/Report.js
const mongoose = require('mongoose');

const reportSchema = new mongoose.Schema(
  {
    userId: { type: mongoose.Schema.Types.ObjectId, ref: 'User', required: true },
    symptoms: { type: [String], required: true },
    diagnosis: { type: [{ disease: String, percentage: Number }], default: [] },
    status: { type: Boolean, default: false } // changed from enum to Boolean
  },
  { timestamps: true } // createdAt, updatedAt
);

module.exports = mongoose.model('Report', reportSchema);
