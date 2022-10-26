const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const salt = 10;
const user = require('../models/users');

exports.getSignUP = (req, res, next) => {
  res.send('signUP page');
};

exports.getLogin = (req, res, next) => {
  res.send('login Page');
};

exports.postSignUP = async (req, res, next) => {
  // const errors = validationResult(req);
  // if (!errors.isEmpty()) {
  //   console.log(errors) ;
  //   return next(new HttpError('회원가입 오류'));
  // }
  const object = {
    email : req.body.email,
    password : await bcrypt.hash(req.body.password, salt),
    name : req.body.name
  }
  const userInfo = new user(object
  );
  await userInfo.save();
  res.send('signup finished')
};


exports.postLogin = (req, res, next) => {
  user.findOne({email : req.body.email}).then(async (id) => {
    if(!id) return res.send(false);
    const password = await bcrypt.compare(req.body.password, id.password);
    if (password) res.send(true);
    else res.send(false)
  })
}
