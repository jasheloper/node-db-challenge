
const express = require('express');

const db = require('../data/db-config.js');

const router = express.Router(); 

// add projects
router.post('/', (req, res) => {
  res.status(200).send('hello from the POST /users endpoint');
});

// retrieve projects

router.get('/', (req, res) => {
  res.status(200).send('hello from the GET /users endpoint');
});

router.get('/:id', (req, res) => {
  res.status(200).send('hello from the GET /users/:id endpoint');
});




module.exports = router; 