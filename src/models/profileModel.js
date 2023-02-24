const profiles = require('../data/profiles.json');

function findAll() {
  return new Promise((resolve, reject) => {
    if (profiles !== null && profiles.length > 0) {
      resolve(profiles);
      return;
    }

    resolve([]);
  });
}

module.exports = { findAll };
