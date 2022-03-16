const express = require("express");
const router = express.Router();
const { signup, login } = require('../Controller/user');
const User = require("../Models/user");


// router.route("/signup").post((req, res)=>{
//   const name = req.body.name;
//   const email = req.body.email;
//   const password = req.body.password;

//   const newUser = new User({
//     name,
//     email,
//     password
//   });

//   newUser.save();
// })
router.post("/signup", signup);

router.post('/login', login);

module.exports = router;