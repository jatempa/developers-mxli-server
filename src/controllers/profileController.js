const Profile = require('../models/profileModel');

// @desc    Gets All Profiles
// @route   GET /api/profiles
async function getProfiles(req, res) {
  try {
    const products = await Profile.findAll();

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
}

module.exports = {
  getProfiles,
};
