const express = require('express');
const router = express.Router();
const mainRouter = require('@/routers/main.route');

router.use('/welcome', mainRouter);

module.exports = router;
