const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const userSchema = new Schema({
  name: String,
  username: String,
  avatarUrl: String,
  email: String,
  role: { type: String, default: 'user' }
});

const User = mongoose.model('User', userSchema);

module.exports = User;