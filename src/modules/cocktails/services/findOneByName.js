const connect = require('../../../clients/mongodb');
const collections = require('../../../enums/collections');

module.exports = (name) => {
  return connect()
    .then(db => db.collection(collections.COCKTAILS))
    .then(collection => collection.findOne({ name }))
    .then((dbResponse) => {
      if (dbResponse) {
        return dbResponse;
      }

      const err = new Error(`Name cocktail not found: ${name}`);
      err.name = 'Not Found';
      err.status = 404;
      throw err;
    });
};
