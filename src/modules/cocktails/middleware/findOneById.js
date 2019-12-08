const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { cocktailId } = req.params;
  findOneById(cocktailId)
    .then((cocktail) => {
      res.json(cocktail);
    })
    .catch((err) => {
      next(err);
    });
};
