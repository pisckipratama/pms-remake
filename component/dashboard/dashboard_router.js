import express from 'express';

const router = express.Router();

router.get('/dashboard', (_, res) => {
  res.render('dashboard/dashboard_views');
});

export default router;
