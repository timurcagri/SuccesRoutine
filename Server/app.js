const express = require('express');
const app = express();

const { client, MongoClient } = require('./databaseConnection');
const { create, read, update, remove } = require('./Database/crud');

const bodyParser = require('body-parser');
app.use(bodyParser.json());

const cors = require('cors');
app.use(cors());

require('dotenv').config();

const port = process.env.PORT || 8080;

app.get('/', (req, res) => {
    res.sendFile("../Public/index.html");
});

