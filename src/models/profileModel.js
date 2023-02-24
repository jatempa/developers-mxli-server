const profiles = require('../data/profiles.json');

function findAll() {
  return new Promise((resolve, reject) => resolve(profiles));
}

module.exports = { findAll };
