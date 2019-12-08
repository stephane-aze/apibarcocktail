const login = require('../services/login');

module.exports = (req, res, next) => {
  const userToCreate = req.body;

  // console.log(userToCreate);

  login(userToCreate)
    .then((user) => {
      res.json(user);
    })
    .catch((err) => {
      next(err);
    });
};
