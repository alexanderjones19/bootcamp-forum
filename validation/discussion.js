const Validator = require("validator");
const isEmpty = require("./is-empty");

module.exports = function validateDiscussionInput(data) {
  let errors = {};

  data.title = !isEmpty(data.title) ? data.title: '';
  data.content = !isEmpty(data.content) ? data.content: '';

  if (!Validator.isLength(data.title, { min: 5, max: 50 })) {
    errors.title = 'Your discussion title must be between 5 and 50 characters';
  }

  if (Validator.isEmpty(data.title)) {
    errors.title = 'Text is required in title field';
  }

  if (Validator.isEmpty(data.content)) {
    errors.content = 'Text is required in content field';
  }

  return {
    errors,
    isValid: isEmpty(errors)
  };
};