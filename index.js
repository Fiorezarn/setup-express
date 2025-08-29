require('dotenv').config();
const express = require('express');
require('module-alias/register');
const app = express();
const bodyParser = require('body-parser');
const port = process.env.PORT || 3000;
const baseUrl = process.env.BASE_URL;
const dotenv = require('dotenv');
const routes = require('@/routers/index.js');

dotenv.config();

app.use(bodyParser.json());
app.use('/api/v1', routes);
app.get('/', (req, res) => {
 return res.send('Hello World');
});
app.listen(port, () => {
 console.log(`Server running on http://${baseUrl}:${port}`);
});
