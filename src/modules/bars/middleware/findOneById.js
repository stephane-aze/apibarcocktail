const findOneById = require('../services/findOneById');

module.exports = (req, res, next) => {
  const { barId } = req.params;
  findOneById(barId)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
