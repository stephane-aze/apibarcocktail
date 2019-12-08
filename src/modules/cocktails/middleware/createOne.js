const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const cocktailToCreate = req.body;

  console.log(cocktailToCreate);

  createOne(cocktailToCreate)
    .then((cocktail) => {
      res.json(cocktail);
    })
    .catch((err) => {
      next(err);
    });
};
