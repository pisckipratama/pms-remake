import express from 'express';

import { getAllUsers } from './users_controller';

const router = express.Router();
router.get('/v1/users', getAllUsers);

export default router;
