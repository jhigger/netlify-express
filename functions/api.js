const express = require('express');
const serverless = require('serverless-http');
const cron = require('node-cron');

const app = express();
const router = express.Router();

router.get('/', (req, res) => {
	res.send('Hello, World!');
});

router.get('/jhigger', (req, res) => {
	res.send('Hello, Jhigger!');
});

app.use('/', router);

console.log('log test');
cron.schedule(
	'* * * * *',
	() => {
		console.log('cron job running every minute');
	},
	{
		timezone: 'Asia/Manila'
	}
);

module.exports.handler = serverless(app);
