const profiles = require('../data/profiles.json');

function findAll() {
  return new Promise((resolve, reject) => {
    if (profiles === null || profiles.length === 0) {
      reject('there is no data');
    }

    resolve(profiles);
  });
}

module.exports = { findAll };
