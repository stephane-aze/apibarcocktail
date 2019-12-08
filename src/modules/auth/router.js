const { Router } = require('express');
const login = require('./middleware/login');

const router = new Router();

router.route('/auth')
  .post(login);


module.exports = router;
