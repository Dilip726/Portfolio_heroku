const express = require('express');
const app = express();
const port = process.env.PORT || 3000;
const db = require('./db');
require('dotenv').config();
const cors = require('cors');

db();
app.use(express.json());
app.use(cors());

app.use('/api', require('./Route/index'))

if (process.env.NODE_ENV === "production") {
    app.use(express.static("frontend/build"));
}

app.listen(port, (() => {
    console.log('Server Connected on', port);
}))