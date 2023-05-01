import { Router } from 'express';
const router = Router();
const { getProfiles } = require('../controllers/profileController.js');

router.get('/profiles', (req, res) => {
  getProfiles(req, res);
});

export default router;
