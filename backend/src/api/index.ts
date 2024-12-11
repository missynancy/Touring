import express from 'express';

import MessageResponse from '../interfaces/MessageResponse';
import register from './auth/register';
import login from './auth/login';

const router = express.Router();

router.get<{}, MessageResponse>('/', (req, res) => {
  res.json({
    message: 'API - Home',
  });
});

router.use("/register", register);
router.use("/login", login);

export default router;