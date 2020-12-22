import express from 'express';
import mongoose from 'mongoose';
import Cors from 'cors';
// though using the type : module technic, need to add .js at the end.
import Card from './models/dbCards.js';

// app config
const app = express();
const port = process.env.PORT || 8001;

// middleware
app.use(express.json());
app.use(Cors());

// DB config
const mongoURI = 'mongodb://127.0.0.1:27017/tinder-clone';
mongoose.connect(mongoURI, {
  useNewUrlParser: true,
  useCreateIndex: true,
  useUnifiedTopology: true,
});

// API Endpoints
app.get('/', (req, res) => res.send('Hello programmers'));
app.post('/cards', (req, res) => {
  const dbcard = req.body;
  console.log('dbcard', dbcard);
  Card.create(dbcard, (err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      res.status(201).send(data);
    }
  });
});

app.get('/cards', (req, res) => {
  Card.find((err, data) => {
    if (err) {
      res.status(500).send(err);
    } else {
      console.log('cards', data);
      res.status(200).send(data);
    }
  });
});

// Listener

app.listen(port, () => console.log('listening on localhost', port));
