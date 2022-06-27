var express = require('express');
var router = express.Router();
const User = require('../model/User');
const bcrypt = require('bcryptjs');
const jwt = require('jsonwebtoken');
const { registerValidation, loginValidation } = require('../validation/userValidation');


/* POST register users. */
router.post('/auth/register', async (req, res, next) => {
  console.log("Register Router");

  const { firstName, lastName, email, phone, password, confirmPassword, profession, about } = req.body;

  // if (!firstName || !lastName || !email || !phone || !password || !profession) {
  //   return res.json({ error: "Error" });
  // }

  // Checks for the validation.
  const { error } = registerValidation(req.body);
  if (error) {
    return res.status(422).json({ error: error.details[0].message });
    // return res.render('register', {
    //   title: 'Library MS | Register',
    //   error: error.details[0].message
    // });
  }
  // Check if email exists in DB.
  const emailExist = await User.findOne({ email: email });
  if (emailExist) {
    return res.status(422).json({ error: 'Email already exists.' });
    // return res.render('register', {
    //   title: 'Library MS | Register',
    //   message: 'Email already exists.'
    // })
  } else if (password != confirmPassword) {
    return res.status(422).json({ error: 'Passwords should match.' });
    // return res.render('register', {
    //   title: 'Library MS | Register',
    //   passMessage: 'Passwords should match.'
    // })
  }

  // Hash the password
  const hashPassword = await bcrypt.hash(password, 8);

  const user = new User({
    firstName: firstName,
    lastName: lastName,
    email: email,
    phone: phone,
    password: hashPassword,
    profession: profession,
    about: about
  });
  try {
    const savedUser = await user.save();
    res.send({ user: user._id, firstName: user.firstName, lastName: user.lastName });
    // res.render('login', {
    //   title: 'Library MS | Login',
    // })
  } catch (err) {
    console.log(err);
  }

});

// Create JWT for login
const maxAge = 3 * 24 * 60 * 60;
const createToken = (id) => {
  return jwt.sign({ id }, process.env.JWT_SECRET, {
    expiresIn: maxAge
  });
};


/* POST login users. */
router.post('/auth/login', async (req, res, next) => {
  console.log('Login Router.');
  try {

    // Checks for the validation.
    const { error } = loginValidation(req.body);
    if (error) {
      return res.status(400).json({ error: error.details[0].message });
      // return res.render('login', {
      //   title: 'Library MS | Login',
      //   error: error.details[0].message
      // })
    }

    // Check if email exists in DB.
    const user = await User.findOne({ email: req.body.email });
    if (!user) {
      return res.status(400).json({ error: 'Email is not registered.' });
      // return res.render('login', {
      //   title: 'Library MS | Login',
      //   message: 'Email is not registered.'
      // })
    }

    // Check if password is correct.
    const validPassword = await bcrypt.compare(req.body.password, user.password)
    if (!validPassword) {
      return res.status(400).json({ error: 'Inavlid Password or Email.' });
      // return res.render('login', {
      //   title: 'Library MS | Login',
      //   passMessage: 'Inavlid Password or Email.'
      // })
    }

    const token = createToken(user._id);
    res.cookie('jwt', token, { httpOnly: true, maxAge: maxAge * 1000 });
    // res.status(200).redirect('/users/profile');
    res.status(200).json({ email: user.email, name: user.firstName });

  } catch (error) {
    console.log(error);
  }
});

/* GET logout users. */
router.get('/auth/logout', function (req, res, next) {
  console.log('Logout Router.');
  res.cookie('jwt', '', { maxAge: 1 });
  // res.redirect('/');
  res.json({ status: 'You are logout successfully.' });
});

module.exports = router;
