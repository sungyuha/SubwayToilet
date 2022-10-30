const HttpError = require('../models/http-error');
const { validationResult } = require('express-validator');
const bcrypt = require('bcrypt');
const salt = 12;
const jwt = require('jsonwebtoken');
const secretKey = process.env.TOKEN_SECRET_KEY;
const user = require('../models/users');

exports.getSignUP = (req, res, next) => {
  res.send('signUP page');
};

exports.getLogin = (req, res, next) => {
  res.send('login page');
};

exports.getForgotId = (req, res, next) => {
  res.send('forgot id');
};

exports.getForgotPw = (req, res, next) => {
  res.send('forgot pw');
};

exports.postSignUP = async (req, res, next) => {
  const errors = validationResult(req);
  if (!errors.isEmpty()) {
    console.log(errors);
    return next(new HttpError('회원가입 오류', 422));
  }

  const { id, email, password, name } = req.body;

  let existingUser;

  try {
    existingUser = await user.findOne({ id: id });
  } catch (err) {
    const error = new HttpError('회원가입 실패', 500);
    return next(error);
  }

  if (existingUser) {
    const error = new HttpError('이미 존재하는 회원입니다.', 422);
    return next(error);
  }

  let cryptedPw = await bcrypt.hash(password, salt);

  const object = {
    id,
    email,
    password: cryptedPw,
    name,
  };
  const userInfo = new user(object);
  await userInfo.save();

  res.status(201).json({
    message: '회원가입 완료',
    id: userInfo.id,
    email: userInfo.email,
    name: userInfo.name,
  });
  // res.send('회원가입 완료');
};

// exports.postLogin = async (req, res, next) => {
//   const { id, password } = req.body;

//   let existingUser;

//   try {
//     existingUser = await user.findOne({ id: id });
//     console.log(existingUser);
//   } catch (err) {
//     const error = new HttpError('로그인 오류', 500);
//     return next(error);
//   }
//   if (!existingUser) {
//     const error = new HttpError('아이디가 없습니다.', 401);
//     return next(error);
//   }

//   let isValidPassword = false;
//   try {
//     isValidPassword = await bcrypt.compare(password, existingUser.password);
//   } catch (err) {
//     const error = new HttpError('로그인 실패', 500);
//     return next(error);
//   }

//   if (!isValidPassword) {
//     const error = new HttpError('로그인 실패, 비밀번호 불일치.', 401);
//     return next(error);
//   }

//   let token;
//   try {
//     token = jwt.sign(
//       {
//         id: existingUser.id,
//         email: existingUser.email,
//         name: existingUser.name,
//       },
//       secretKey,
//       { expiresIn: '10m' }
//       );
//     } catch (err) {
//       const error = new HttpError('로그인 오류.', 500);
//       return next(error);
//     }
//     res.json({
//       message: '로그인 성공',
//       id: id,
//       token: token,
//     });
//     // await user.findOne({ id: id }).then(async (result) => {
//     //   if (!result) return res.send('아이디가 없습니다.');
//     //   const checkPw = await bcrypt.compare(password, result.password);
//     //   if (checkPw) res.send('로그인 성공');
//     //   else res.send('로그인 실패, 비밀번호 불일치')
//     // });
//   };

exports.postIdFind = async (req, res, next) => {
  const { email, name } = req.body;
  try {
    await user.find({ email: email, name: name }).then((result) => {
      res.json({ id: result[0].id });
    });
  } catch (err) {
    const error = new HttpError('아이디 찾기 실패', 500);
    return next(error);
  }
};

// exports.postPwRest = (req, res, next) => {
//   const { id, email, name } = req.body;
//   try {
//     user.findOne({ id, email, name }).then((res) => {
//       res.send(res);
//     });
//   } catch (err) {
//     const error = new HttpError('비밀번호 재설정 실패', 500);
//     return next(error);
//   }
// };
