const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { cocktailId } = req.params;

  deleteOneById(cocktailId)
    .then((cocktail) => {
      res.json(cocktail);
    })
    .catch((err) => {
      next(err);
    });
};
