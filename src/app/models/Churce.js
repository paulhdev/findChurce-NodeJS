const mongoose = require('mongoose');

const ChurceSchema = new mongoose.Schema({
  name: {
    type: String,
    unique: true,
    required: true,
  },
  locale: {
    type: String,
    required: true,
  },
  numberMembers: {
    type: Number,
    required: true,
  },
  createdAt: {
    type: Date,
    default: Date.now
  },
  updatedAt: {
    type: Date,
    default: Date.now
  }
});

module.exports = mongoose.model('Churce', ChurceSchema);
