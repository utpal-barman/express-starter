import dotenv from 'dotenv';
import express from 'express';
import bodyParser from 'body-parser';
import mongoose from 'mongoose';

import usersRoutes from './routes/users.js';

dotenv.config();

const app = express();
const PORT = 55555;

mongoose.connect(process.env.DATABASE_URL, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const db = mongoose.connection;
db.on('connected', () => {
  console.log('mongoose connected');
});

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use('/users', usersRoutes);

app.get('/', (req, res) => {
  console.log('/ get');
  res.send('hello');
});

app.listen(PORT, () => console.log(`running on port ${PORT}`));
