const { v4: uuidv4 } = require("uuid");
var express = require("express");
var router = express.Router();
const Task = require("../models/Tasks");
const {
  createTask,
  updateTaskStatus,
  deleteOneTask,
  deleteMany,
  createMany,
  getAllTasks,
} = require("../controllers/tasks-controller.js");



router.post("/create-task", createTask);

router.put("/update-status/:id", updateTaskStatus);

router.get("/delete-one-task/:id", deleteOneTask);

router.get("/delete-many", deleteMany);

router.get("/create-many", createMany);

router.get("/all", getAllTasks);




module.exports = router;
