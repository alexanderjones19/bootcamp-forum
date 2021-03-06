const express = require("express");
const router = express.Router();
const passport = require('passport');
const Reply = require('../../models/Reply');
const validateReplyInput = require('../../validation/reply');

// api/reply

// create reply
router.post('/', passport.authenticate('jwt', { session: false }), (req, res) => {
  const { errors, isValid } = validateReplyInput(req.body);
  if (!isValid) {
    return res.status(400).json(errors);
  }
  
  Reply.create(req.body)
    .then(reply => res.json(reply))
    .catch(err => res.status(400).json(err));
});

// find reply by id
router.get('/:reply_id', (req, res) => {
  Reply.findById({ _id: req.params.reply_id})
    .then(reply => res.json(reply))
    .catch(err => res.status(400).json(err));
});

// update a reply
router.put('/:reply_id', (req, res) => {
  Reply.findOneAndUpdate({ _id: req.params.reply_id }, req.body)
    .then(reply => res.json(reply))
    .catch(err => res.status(400).json(err));
});

// delete a reply
router.delete('/:reply_id', (req, res) => {
  Reply.findById({ _id: req.params.reply_id })
    .then(reply => reply.remove())
    .then(reply => res.json(reply))
    .catch(err => res.status(400).json(err));
});

// get all replies of a discussion by discussion id
router.get('/', (req, res) => {
  Reply.find({ discussion: req.query.discussion_id })
    .sort({ date: 1 })
    .populate('forum')
    .populate('user')
    .populate('discussion')
    .then(replies => res.json(replies))
    .catch(err => res.status(400).json(err));
});

module.exports = router;