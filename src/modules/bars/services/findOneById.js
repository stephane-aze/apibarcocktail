const { ObjectId } = require('mongodb');
const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');
const deleteUserPrivateKeys = require('../../../helpers/deleteUserPrivateKeys');

module.exports = (id) => {
  return connect()
    .then(db => db.collection(collections.BARS))
    .then(collection => collection.findOne({ _id: ObjectId(id) }))
    .then((bar) => {
      if (bar) {
        return deleteUserPrivateKeys(bar);
      }

      const err = new Error(`Bar not found for id: ${id}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
