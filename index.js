import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.set('views', path.join(__dirname, 'component'));
app.set('view engine', 'ejs');

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const baseURL = '/api';
import users from './component/users/users_router';
app.use(baseURL, users);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

export default app;
