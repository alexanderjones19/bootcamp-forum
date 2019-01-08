const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  forum_id: Schema.Types.ObjectId,
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'forum'
  },
  discussion_id: Schema.Types.ObjectId,
  discussion: {
    type: Schema.Types.ObjectId,
    ref: 'discussion'
  },
  user_id: Schema.Types.ObjectId,
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: Date,
  // maybe content other than Object type?
  content: Object
});

module.exports = Reply = mongoose.model('reply', ReplySchema);