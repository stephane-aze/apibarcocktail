const joi = require('@hapi/joi');

const ingredientModel = joi.object().keys({
  product: joi.string().required(),
  quantity: joi.number().required(),
});
const comparatorIngredient = ((a, b) => {
  return a.product === b.product;
});
const createModel = joi.object().keys({
  name: joi.string().required(),
  description: joi.string().required(),
  isAlcohol: joi.boolean().required(),
  ingredients: joi.array().items(ingredientModel).unique(comparatorIngredient),
});

const updateModel = joi.object().keys({
  name: joi.string(),
  description: joi.string(),
  isAlcohol: joi.boolean(),
  ingredients: joi.array().items(ingredientModel).unique(comparatorIngredient),
});

module.exports = {
  createModel,
  updateModel,
};
