const deleteOneById = require('../services/deleteOneById');

module.exports = (req, res, next) => {
  const { barId } = req.params;

  deleteOneById(barId)
    .then((bar) => {
      res.json(bar);
    })
    .catch((err) => {
      next(err);
    });
};
