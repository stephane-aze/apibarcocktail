const { Router } = require('express');

const usersRouter = require('../modules/users/router');
const cocktailsRouter = require('../modules/cocktails/router');
const authRouter = require('../modules/auth/router');

const barsRouter = require('../modules/bars/router');


const router = new Router();

// Service  API

router.use('/api', usersRouter);
router.use('/api', cocktailsRouter);
router.use('/api', barsRouter);
router.use('/api', authRouter);

// End of service API

module.exports = router;
