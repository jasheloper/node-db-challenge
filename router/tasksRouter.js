const express = require("express");

const Task = require("../data/models/tasksModel");

const router = express.Router();

router.post("/", (req, res) => {});

router.get("/", (req, res) => {
  Task.getTasks()
    .then(tasks => {
      res.json(tasks);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occurred while trying to get the tasks from the database.",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {});

module.exports = router;
