const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
  forum_id: Schema.Types.ObjectId,
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'forum'
  },
  user_id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'user'
  },
  date: Date,
  title: String,
  content: Object,
  favorites: Array,
  tags: Array,
  pinned: Boolean
});

module.exports = Discussion = mongoose.model('discussions', DiscussionSchema);