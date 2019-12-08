const updateOneById = require('../services/updateOneById');

module.exports = (req, res, next) => {
  const barToUpdate = req.body;
  const { barId } = req.params;

  updateOneById(barId, barToUpdate)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
