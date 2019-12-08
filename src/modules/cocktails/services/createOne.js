const { createModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneByName = require('./findOneByName');

module.exports = (cocktailToCreate) => {
  return createModel.validate(cocktailToCreate)
    .then(() => {
      return findOneByName(cocktailToCreate.name)
        .catch((err) => {
          if (err.status !== 404) {
            throw err;
          }

          return connect()
            .then(db => db.collection(collections.COCKTAILS))
            .then(collection => collection.insertOne(cocktailToCreate))
            .then(dbResponse => dbResponse.ops[0]);
        });
    });
};
