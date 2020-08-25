import express from 'express';
import { loginUser } from './auth_controller';

const router = express.Router();

router.post('/v1/login', loginUser);

export default router;
