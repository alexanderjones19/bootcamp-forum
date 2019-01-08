const mongoose = require("mongoose");
const Schema = mongoose.Schema;

<<<<<<< HEAD
=======
// Create Schema
>>>>>>> gfp_branch
const UserSchema = new Schema({
  name: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true
  },
  password: {
    type: String,
    required: true
  },
  avatar: {
    type: String,
    required: true
  },
  date: {
    type: Date,
    default: Date.now
<<<<<<< HEAD
  },
  // Role field
  role: {
    type: String,
    default: 'user'
  }
});

module.exports = User = mongoose.model('users', UserSchema);
=======
  }
});

module.exports = User = mongoose.model("users", UserSchema);
>>>>>>> gfp_branch
