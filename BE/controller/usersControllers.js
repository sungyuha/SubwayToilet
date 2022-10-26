const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const bcrypt = require("bcrypt");
const salt = 12;
const user = require('../models/users');

exports.getSignUP = (req, res, next) => {
  res.send('signUP page');
};

exports.getLogin = (req, res, next) => {
  res.send('login Page');
};

exports.postSignUP = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors) ;
    return next(new HttpError('회원가입 오류', 422));
  }

  const {id, email, password, name} = req.body;

  let existingUser;
  
  try {
    existingUser = await user.findOne({id : id});
  } catch(err) {
    const error = new HttpError(
      '회원가입 실패', 500
    );
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError(
      '이미 존재하는 회원입니다.', 422
    );
    return next(error);
  }

  let cryptedPw = await bcrypt.hash(password, salt)

  const object = {
    id ,
    email,
    password : cryptedPw,
    name
  }
  const userInfo = new user(object);
  await userInfo.save();
  res.send('회원 가입 완료')
};


exports.postLogin = (req, res, next) => {
  console.log(req.body);
  const {id, password} = req.body;

  user.findOne({id : id}).then(async(result) => {
    if(!result) return res.send('아이디가 없습니다.');
    const checkPw= await bcrypt.compare(password, result.password);
    if (checkPw) res.send('로그인 완료');
    else res.send('로그인 실패, 비밀번호 불일치')
  })
}
