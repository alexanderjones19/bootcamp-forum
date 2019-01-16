const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateReplyInput(data) {
  let errors = {};

  data.reply = !isEmpty(data.reply) ? data.reply : '';

  if (Validator.isEmpty(data.reply)) {
    errors.reply = 'Text is required for your reply';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};