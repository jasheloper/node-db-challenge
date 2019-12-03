const db = require('../db-config.js')

module.exports = {
   getTasks,
   getTaskById,
   addTask
}

function getTasks() {
   return db('task')
}
function getTaskById(id) {
   return db("task").where({ id })
}
function addTask(task) {
   return db("task").insert(task)
}