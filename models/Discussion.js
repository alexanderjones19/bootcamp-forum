const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const DiscussionSchema = new Schema({
  forum_id: Schema.Types.ObjectId,
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'forum'
  },
  discussion_slug: String,
  user_id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: Date,
  title: String,
  // content maybe another type than object?
  content: Object,
  favorites: Array,
  tags: Array,
  pinned: Boolean,
  //description
  description: String
});

module.exports = Discussion = mongoose.model('discussion', DiscussionSchema);