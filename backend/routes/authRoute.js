const { Signup, Login } = require('../controllers/authController');
const { userVerification } = require('../middleware/authUser');
const router = require('express').Router();

router.post('/home', userVerification);
router.post('/', Signup);
router.post('login', Login);

module.exports = router;