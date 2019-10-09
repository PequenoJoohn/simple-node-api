const express = require('express');
const cors = require('cors');
const mongoose = require('mongoose');
const requireDir = require('require-dir');
//Starting App
const app = express();
app.use(express.json());
app.use(cors());

//Starting Data Base
mongoose.connect(
    'URL MONGO DB',
    { useNewUrlParser: true }
);
requireDir('./src/models');

//Routes
app.use('/api', require('./src/routes'));

app.listen(3001);
