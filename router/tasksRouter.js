const express = require("express");

const Task = require("../data/db-config.js");

const router = express.Router();

// ** A D D ** T A S K S 
router.post("/", (req, res) => {
  const TaskData = req.body;

  Task.addTask(TaskData)
    .then(newTask => {
      res.status(201).json(newTask);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occurred while trying to add the Task to the database",
        error: err
      });
    });
});

// ** R E T R I E V E  ** T A S K S 

router.get("/", (req, res) => {
  Task.getTasks()
    .then(Tasks => {
      res.json(Tasks);
    })
    .catch(err => {
      res.status(500).json({
        message:
          "An error occured while trying to get the Tasks from the database.",
        error: err
      });
    });
});

router.get("/:id", (req, res) => {
  const { id } = req.params;

  Tasks.getTaskById(id).then(Task => {
    if (Task) {
      res.json(Task);
    } else {
      res
        .status(404)
        .json({
          message: "Could not find Task with given id"
        })
        .catch(err => {
          res.status(500).json({ message: "Failed to get Tasks" });
        });
    }
  });
});

module.exports = router;
