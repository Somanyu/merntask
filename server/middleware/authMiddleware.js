const jwt = require('jsonwebtoken');
const User = require('../model/User');

const requireAuth = (req, res, next) => {
  const token = req.cookies.jwt;

  // Verify JWT exists.
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, (err, decodedToken) => {
      if (err) {
        console.log(err.message);
        // res.redirect('/login');
        // res.send("Not able to login.")
        return res.status(401).json({ error: "Not able to login." });
      } else {
        // console.log(decodedToken);
        console.log("Logged In.");
        next();
      }
    });
  } else {
    // res.redirect('/login');
    // res.send("Login not successfull.")
    return res.json({ message: "You are not logged in." });
  }
};

// Access User's data from MongoDB.
const checkUser = (req, res, next) => {
  const token = req.cookies.jwt;
  if (token) {
    jwt.verify(token, process.env.JWT_SECRET, async (err, decodedToken) => {
      if (err) {
        res.locals.user = null;
        next();
      } else {
        let user = await User.findById(decodedToken.id);
        res.locals.user = user;
        next();
      }
    });
  } else {
    res.locals.user = null;
    next();
  }
};


module.exports = { requireAuth, checkUser };