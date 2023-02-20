const Blog = require("../models/Blogs.js");


async function createTask(req, res) {
  try {
    const newTask = await Task.create({

      // Insert task parameters
    });

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
    await Task.updateOne({ id: req.params.id }, req.body.status);

    return res.json({
      success: true,
      message: `Updated task with id: ${req.params.id} to ${req.body.status}`,
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
      message: `Deleted multiple tasks matching: ${req.query}`,
    });
  } catch (e) {
    console.log(e.message);
    res.send(e.message);
  }
}

async function createMany(req, res) {}

async function getAllTasks(req, res) {}



module.exports = {
  createTask,
  updateTaskStatus,
  deleteOneTask,
  deleteMany,
  createMany,
  getAllTasks
};
