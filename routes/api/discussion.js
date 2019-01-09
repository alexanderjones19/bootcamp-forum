const express = require("express");
const router = express.Router();

// const Forum = require('../../models/Forum');
const Discussion = require('../../models/Discussion');

// create discussion
router.post('/', (req, res) => {
  Discussion.create(req.body)
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// find discussion by id
router.get('/:discussion_id', (req, res) => {
  Discussion.findById({ _id: req.params.discussion_id})
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// update a discussion
router.put('/:discussion_id', (req, res) => {
  Discussion.findOneAndUpdate({ _id: req.params.discussion_id }, req.body)
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// delete a discussion
router.delete('/:discussion_id', (req, res) => {
  Discussion.findById({ _id: req.params.discussion_id })
    .then(discussion => discussion.remove())
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// get all discussions of a forum
router.get('/', (req, res) => {
  Discussion.find({ forum_id: req.query.forum_id })
    .then(discussions => res.json(discussions))
    .catch(err => res.status(400).json(err));
});

module.exports = router;