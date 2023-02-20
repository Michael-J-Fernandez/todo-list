const mongoose = require("mongoose");
const { v4: uuidv4 } = require("uuid");

const taskSchema = new mongoose.Schema({
  name: {
    type: String,
    validation: required
  },
  text: String,
  description: String,
  completed: {
    type: Boolean,
    validation: required
  },
  dateCompleted: Date,
  status: {
    type: String,
    default: 'incomplete',
    validation: required,
    enum: [
      'incomplete', 'complete', 'deferred'
    ]
  },
  id: {
    type: String,
    default: uuidv4,
  },
  createdAt: { type: Date, default: Date.now },
});

const Task = mongoose.model("tasks", taskSchema);

module.exports = Task;
