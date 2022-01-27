const router = require('express').Router();
const loginUser = require('../controllers/loginUser.js');
const postUser = require('../controllers/postUser.js');

router.post('/login', loginUser);
router.post('/register', postUser);

module.exports = router;