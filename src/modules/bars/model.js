const joi = require('@hapi/joi');

const createModel = joi.object().keys({
  name: joi.string().required(),
  email: joi.string().email().required(),
  password: joi.string().required(),
  address: joi.string().required(),
  city: joi.string().required(),
  image: joi.string(),
  site: joi.string(),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  email: joi.string().email(),
  password: joi.string(),
  address: joi.string(),
  city: joi.string(),
  image: joi.string(),
  site: joi.string(),
});

module.exports = {
  createModel,
  updateModel,
};
