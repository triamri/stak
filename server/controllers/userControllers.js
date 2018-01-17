const User = require('../models/userModels');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');


let signUp = (req, res) => {
  const newUser = new User({
    name: req.body.name,
    email: req.body.email,
    password: req.body.password
  })

  newUser.save()
    .then((result) => {
      res.status(200).json({
        msg: 'Sukses',
        data: result
      });
    })
    .catch(err => {
      res.status(500).json(err);
    })

}

let signIn = (req, res) => {
  User.findOne({
      email: req.body.email
    })
    .then((result) => {
      if (!result) {
        res.status(403).json({
          msg: 'Maaf User Tidak Ada',
          login: false
        })
      }

      if (!bcrypt.compareSync(req.body.password, result.password)) {
        res.status(403).json({
          msg: 'Maaf Password Anda Salah',
          login: false
        })
      }

      jwt.sign({
        id: result._id,
        email: result.email,
        name: result.name
      }, process.env.RAHASIA, (err, token) => {
        res.status(200).json({
          msg: 'Login Sukses',
          data: token
        })
      });

    })
    .catch((err) => {
      res.status(500).json(err);
    })
}

module.exports = {
  signIn,
  signUp
}