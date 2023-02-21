// const { v4: uuidv4 } = require("uuid");
const express = require("express");
const router = express.Router();
const Task = require("../models/Tasks"); // <----------  Is this needed ??
const {
  createTask,
  updateTaskStatus,
  deleteOneTask,
  deleteMany,
  createMany,
  getAllTasks,
} = require("../controllers/tasks-controller.js");



router.post("/create-task", createTask);

router.put("/update-status/:id/:status", updateTaskStatus);

router.get("/delete-one-task/:id", deleteOneTask);

router.get("/delete-many", deleteMany);

router.post("/create-many", createMany);

router.get("/all", getAllTasks);




module.exports = router;
