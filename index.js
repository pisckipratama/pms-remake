import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.set('views', path.join(__dirname, 'app'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'app/public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

import authRoutes from './app/routes/auth_router';
app.use('/', authRoutes);

export default app;
