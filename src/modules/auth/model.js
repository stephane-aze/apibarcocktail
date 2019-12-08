const joi = require('@hapi/joi');

const userModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
});

const adminModel = joi.object().keys({
  password: joi.string().required(),
  email: joi.string().email().required(),
});

module.exports = {
  userModel,
  adminModel,
};
