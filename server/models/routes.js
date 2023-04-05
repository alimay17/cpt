const mongoose = require('mongoose');

const routeSchema = mongoose.Schema({
  id: { type: String, required: true },
  name: { type: String, required: true },
  quadrant: { type: String, required: true },
  pilot: { type: String, required: true },
  ship: { type: String, required: true },
  status: { type: Boolean, required: true },
  stops: [{
    stopId: { type: Number, required: true },
    stopTime: { type: String, required: true },
    averageRiders: { type: String, required: true },
    location: { type: String, required: true }
  }]
});

module.exports = mongoose.model('Route', routeSchema);