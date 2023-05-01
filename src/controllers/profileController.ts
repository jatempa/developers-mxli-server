import { findAll } from '../models/profileModel';

// @desc    Gets All Profiles
// @route   GET /api/profiles
export const getProfiles = async (req, res) => {
  try {
    const products = await findAll();

    res.status(200).send(products);
  } catch (error) {
    console.log(error);
  }
};
