const bcrypt = require('bcrypt');
const { ObjectId } = require('mongodb');
const { updateModel } = require('../model');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const findOneById = require('./findOneById');

module.exports = (id, barToUpdate) => {
  return updateModel.validate(barToUpdate)
    .then(() => {
      if (barToUpdate.password) {
        const bar = {
          ...barToUpdate,
          password: bcrypt.hashSync(barToUpdate.password, 10),
        };
        return bar;
      }
      return barToUpdate;
    })
    .then((bar) => {
      return connect()
        .then(db => db.collection(collections.BARS))
        .then(collection => collection.updateOne({ _id: ObjectId(id) }, { $set: bar }))
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
