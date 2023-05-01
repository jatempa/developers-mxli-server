import { Router } from 'express';
const router = Router();
import { getProfiles } from '../controllers/profileController';

router.get('/profiles', (req, res) => {
  getProfiles(req, res);
});

export default router;
