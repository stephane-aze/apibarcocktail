const bcrypt = require('bcrypt');
const jwt = require('jsonwebtoken');
const { userModel } = require('../model');
const findOneByEmail = require('../../users/services/findOneByEmail');

const jwtSecret = 'secret_key';
module.exports = (userToCreate) => {
  return userModel.validate(userToCreate)
    .then(() => {
      const user = {
        ...userToCreate,
      };
      return user;
    })

    .then((user) => {
      return findOneByEmail(user.email).then((userDB) => {
        console.log('DBuser1');
        console.log(userDB);
        console.log('user');
        console.log(user);
        const match = bcrypt.compareSync(user.password, userDB.password);
        if (match) {
          const token = jwt.sign({ id: userDB._id }, jwtSecret);
          const userAuth = {
            userId: userDB._id,
            token,
          };
          console.log(userAuth);
          return userAuth;
        }
        const err = { error: 'authentication failed', status: 403 };
        return err;
      });
    });
};
