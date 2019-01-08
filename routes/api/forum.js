const express = require("express");
const router = express.Router();
const mongoose = require("mongoose");
// const passport = require("passport");

// models
const Forum = require('../../models/Forum');
const Discussion = require('../../models/Discussion');

// test route
router.get("/test", (req, res) => res.json({ msg: "Forum Route Connected" }));

// get all forums
router.get('/', (req, res) => {
  Forum.find()
    .then(forums => res.json(forums))
    .catch(err => res.status(404).json({ noforumsfound: 'No forums Found' }));
});

// get all discussions of a forum
router.get('/:forum_id/discussions', (req, res) => {
  
});

module.exports = router;