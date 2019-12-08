const bcrypt = require('bcrypt');
const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');
const findOneByEmail = require('./findOneByEmail');

module.exports = (barToCreate) => {
  return createModel.validate(barToCreate)
    .then(() => {
      const bar = {
        ...barToCreate,
        password: bcrypt.hashSync(barToCreate.password, 10),
      };
      return bar;
    })
    .then((bar) => {
      return findOneByEmail(bar.email)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.BARS))
            .then(collection => collection.insertOne(bar))
            .then(dbResponse => deleteUserPrivateKeys(dbResponse.ops[0]));
        });
    });
};
