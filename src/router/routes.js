const { Router } = require('express');
const router = Router();
const { getProfiles } = require('../controllers/profileController.js');

router.get('/profiles', (req, res) => {
  getProfiles(req, res);
});

module.exports = router;
