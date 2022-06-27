var express = require('express');
var router = express.Router();
const { requireAuth, checkUser } = require('../middleware/authMiddleware');

router.get('*', checkUser);

// /* GET home page. */
// router.get('/', function(req, res, next) {
//   res.render('index', { title: 'Express' });
// });

/* GET /register listing. */
router.get('/register', function (req, res, next) {
  res.send('Register Page.');
});

/* GET /login listing. */
router.get('/login', function (req, res, next) {
  res.send('Login Page.');
});

/* GET profile details after logged in. */
router.get('/profile', requireAuth, (req, res) => {
  res.send(req.user);
  // console.log(req.user);
})

module.exports = router;
