const createOne = require('../services/createOne');

module.exports = (req, res, next) => {
  const barToCreate = req.body;

  console.log(barToCreate);

  createOne(barToCreate)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
