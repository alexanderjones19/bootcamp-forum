const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const ReplySchema = new Schema({
  forum: {
    type: Schema.Types.ObjectId,
    ref: 'forum'
  },
  discussion: {
    type: Schema.Types.ObjectId,
    ref: 'discussion'
  },
  user: {
    type: Schema.Types.ObjectId,
    ref: 'users'
  },
  date: {
    type: Date,
    default: Date.now
  },
  reply: String
});

module.exports = Reply = mongoose.model('reply', ReplySchema);