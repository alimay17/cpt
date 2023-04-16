const mongoose = require('mongoose');

const shipSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  assignedRoute: { type: mongoose.Schema.Types.ObjectId, ref: 'Route' },
  capacity: { type: Number, required: true },
  status: { type: String, required: true }
});

module.exports = mongoose.model('Ship', shipSchema);