import dotenv from 'dotenv';

dotenv.config();

const env = process.env.NODE_ENV || 'development';

import app from '../index';
import http from 'http';
const port = process.env.PORT || 1337;
const server = http.createServer(app);

server.listen(port, () => {
  console.log(`This server running in ${env} mode on port ${port}`);
});