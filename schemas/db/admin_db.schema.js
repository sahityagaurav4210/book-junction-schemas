const joi = require('joi');
const Patterns = require('@book-junction/patterns');
const Messages = require('../messages');

function createAdmin(payload = {}) {
  const schema = joi.object().keys({
    name: joi.string().regex(Patterns.common.name).required().messages(Messages.db.admin_db.name),
    email: joi.string().regex(Patterns.common.email).required().messages(Messages.db.admin_db.email),
    password: joi.string().regex(Patterns.common.password).required().messages(Messages.db.admin_db.password),
    isLoggedIn: joi.boolean().optional().messages(Messages.db.admin_db.isLoggedIn),
  });

  const validationResult = schema.validate(payload);
  return validationResult?.error?.details[0];
}

module.exports = { createAdmin };
