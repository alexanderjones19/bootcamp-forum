const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'forum'
  },
  // discussion slug perhaps unique: true?
  discussion_slug: String,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  },
  title: String,
  content: String,
  // favorites: Array,
  // tags: Array,
  // pinned: Boolean,
  // description: String
});

module.exports = Discussion = mongoose.model('discussion', DiscussionSchema);