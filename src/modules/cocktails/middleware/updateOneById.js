const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const cocktailToUpdate = req.body;
  const { cocktailId } = req.params;

  updateOneById(cocktailId, cocktailToUpdate)
    .then((cocktail) => {
      res.json(cocktail);
    })
    .catch((err) => {
      next(err);
    });
};
