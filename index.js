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

app.get('/', (req, res) => {
  const { name } = req.query;
  if (!name) {
    return res.send('Hello!');
  }

  return res.send(`Hello ${name}!`)
});

export default app;
