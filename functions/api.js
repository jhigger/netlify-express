const express = require('express');
const serverless = require('serverless-http');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello, World!');
});

router.get('/jhigger', (req, res) => {
	res.send('Hello, Jhigger!');
});

app.use('/', router);

module.exports.handler = serverless(app);
