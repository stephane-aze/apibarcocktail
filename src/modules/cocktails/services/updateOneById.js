const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, cocktailToUpdate) => {
  return updateModel.validate(cocktailToUpdate)
    .then((cocktail) => {
      return connect()
        .then(db => db.collection(collections.COCKTAILS))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: cocktail }))
        .then((dbResponse) => {
          if (dbResponse.matchedCount === 1) {
            return findOneById(id);
          }

          const err = new Error('Not Found');
          err.status = 404;
          throw err;
        });
    });
};
