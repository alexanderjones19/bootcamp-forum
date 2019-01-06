const mongoose = require('mongoose');

const postSchema = mongoose.Schema({
  forum_id: mongoose.Schema.ObjectId,
  forum: { type: mongoose.Schema.ObjectId, ref: 'forum' },
  discussion_id: mongoose.Schema.ObjectId,
  discussion: { type: mongoose.Schema.ObjectId, ref: 'discussion' },
  user_id: mongoose.Schema.ObjectId,
  user: { type: mongoose.Schema.ObjectId, ref: 'user' },
  date: Date,
  content: Object
});

module.exports = mongoose.model('post', postSchema);