const Task = require("../models/Tasks.js");


async function createTask(req, res) {
  try {
    const newTask = await Task.create(req.body);

    res.json({
      success: true,
      savedTask: newTask,
    });
  } catch (e) {
    console.log(typeof e);
    console.log(e);
    res.json({
      error: e.toString(),
    });
  }
}

async function updateTaskStatus(req, res) {
  if (!req.params.id) {
    res.json({
      success: false,
      message: "The task id must be provided in the url parameters",
    });
    return;
  }

  try {
    const updates = {
      status: req.params.status
    }

    if (req.params.status === "complete") {
      updates.completed = true;
      updates.dateCompleted = Date.now();

    } else {
      updates.completed = false;
      updates.dateCompleted = null;
    }
    
    const taskToUpdate = await Task.updateOne({ id: req.params.id }, updates);

    res.json({
      success: true,
      message: `Updated task with id: ${req.params.id} to ${req.params.status}`,
      task: taskToUpdate
    });
  } catch (e) {
    console.log(e.message);
    res.json({
      success: false,
      message: e.message,
    });
  }
}

async function deleteOneTask(req, res) {
  if (!req.params.id) {
    res.json({
      success: false,
      message: "The task id must be provided in the url parameters",
    });
    return;
  }

  try {
    await Task.deleteOne({ id: req.params.id });
    res.json({
      success: true,
      message: `Deleted one task with id: ${req.params.id}`,
    });
  } catch (e) {
    console.log(e.message);
  }
}

async function deleteMany(req, res) {
  if (!req.query) {
    res.json({
      success: false,
      message: "Query parameters must be provided",
    });
    return;
  }

  try {
    await Task.deleteMany(req.query);
    res.json({
      success: true,
      message: `Deleted multiple tasks matching: ${JSON.stringify(req.query)}`,
    });
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function createMany(req, res) {
    try {
      const newTask = await Task.create(req.body);

      res.json({
        success: true,
        savedTasks: newTask,
      });
    } catch (e) {
      console.log(typeof e);
      console.log(e);
      res.json({
        error: e.toString(),
      });
    }
}

async function getAllTasks(req, res) {
    try {
      const allTasks = await Task.find({});
      res.json({ tasks: allTasks });
    } catch (e) {
      console.log(e);
    }
}



module.exports = {
  createTask,
  updateTaskStatus,
  deleteOneTask,
  deleteMany,
  createMany,
  getAllTasks
};
