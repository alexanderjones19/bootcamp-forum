const express = require("express");
const router = express.Router();

const db = require('./../../models');
// models
// const Discussion = require('../../models/Discussion');

// api/forum

// create forum
router.post('/', (req, res) => {
  db.Forum.create(req.body)
    .then(forum => res.json(forum))
    .catch(err => res.status(400).json(err));
}); 

// get all forums
router.get('/', (req, res) => {
  db.Forum.find()
    .then(forums => res.json(forums))
    .catch(err => res.status(400).json(err));
});

// update a forum
router.put('/:forum_id', (req, res) => {
  db.Forum.findOneAndUpdate({ _id: req.params.forum_id }, req.body)
    .then(forum => res.json(forum))
    .catch(err => res.status(400).json(err));
});

// delete a forum
router.delete('/:forum_id', (req, res) => {
  db.Forum.findById({ _id: req.params.forum_id })
    .then(forum => forum.remove())
    .then(forum => res.json(forum))
    .catch(err => res.status(400).json(err));
});

// get forum by slug
router.get('/:forum_slug', (req, res) => {
  db.Forum.findOne({ forum_slug: req.params.forum_slug })
    .then(forum => res.json(forum))
    .catch(err => res.status(400).json(err));
});

module.exports = router;