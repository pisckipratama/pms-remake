import express from 'express';
import { postLoginUser, getLoginPage } from '../controllers/auth_controller';

const router = express.Router();

router.get('/login', getLoginPage);
router.post('/login', postLoginUser);

export default router;
