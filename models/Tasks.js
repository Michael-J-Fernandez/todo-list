const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true
  },
  text: String,
  description: String,
  completed: {
    type: Boolean,
    required: true,
    default: false
  },
  dateCompleted: Date,
  status: {
    type: String,
    default: 'incomplete',
    required: true,
    enum: [
      'incomplete', 'complete', 'deferred'
    ]
  },
  id: {
    type: String,
    default: uuidv4,
  },
  createdAt: {
    type: Date,
    default: Date.now
  }
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
