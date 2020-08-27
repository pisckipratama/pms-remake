import express from 'express';
import morgan from 'morgan';
import dotenv from 'dotenv';
import path from 'path';

const app = express();
dotenv.config();

app.set('views', path.join(__dirname, 'component'));
app.set('view engine', 'ejs');

app.use(express.urlencoded({ extended: true }));
app.use(express.json());
app.use(express.static(path.join(__dirname, 'public')));

if (process.env.NODE_ENV === 'development') {
  app.use(morgan('dev'));
}

const baseURL = '/';
import users from './component/users/users_router';
import auth from './component/auth/auth_router';
import dashboard from './component/dashboard/dashboard_router';
app.use(baseURL, users);
app.use(baseURL, auth);
app.use(baseURL, dashboard);

const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
  console.log(`server running in ${process.env.NODE_ENV} mode on port ${PORT}`);
});

export default app;
