const express = require("express");
const router = express.Router();

const db = require('./../../models');

// api/discussion

// create discussion
router.post('/', (req, res) => {
  db.Discussion.create(req.body)
    .then(discussion => {
      discussion.populate('user').populate('forum', (err) => {
        res.json(discussion);
      });
    })
    .catch(err => res.status(400).json(err));
});

// find discussion by id
router.get('/:discussion_id', (req, res) => {
  db.Discussion.findById({ _id: req.params.discussion_id})
    .populate('forum')
    .populate('user')
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// update a discussion
router.put('/:discussion_id', (req, res) => {
  db.Discussion.findOneAndUpdate({ _id: req.params.discussion_id }, req.body)
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// delete a discussion
router.delete('/:discussion_id', (req, res) => {
  db.Discussion.findById({ _id: req.params.discussion_id })
    .then(discussion => discussion.remove())
    .then(discussion => res.json(discussion))
    .catch(err => res.status(400).json(err));
});

// get all discussions of a forum
// router.get('/', (req, res) => {
//   Discussion.find({ forum: req.query.forum_id })
//     .sort({ date: -1 })
//     .populate('forum')
//     .populate('user')
//     .then(discussions => res.json(discussions))
//     .catch(err => res.status(400).json(err));
// });

// get discussions by forum slug
router.get('/', (req, res) => {
  db.Forum.findOne({ forum_slug: req.query.forum_slug })
    .then(forum => {
      db.Discussion.find({ forum: forum._id })
        .sort({ date: -1 })
        .populate('forum')
        .populate('user')
        .then(discussions => {
          res.json({
            forum: forum,
            discussions: discussions
          })
        })
        .catch(err => res.status(400).json(err));
    })
    .catch(err => res.status(400).json(err))
});

module.exports = router;