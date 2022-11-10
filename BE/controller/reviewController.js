const review = require('../models/review');
const HttpError = require('../models/http-error');
const moment = require('moment');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

function token(req, msg, next) {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  } catch (err) {
    const error = new HttpError(msg);
    return next(error);
  }
}

// const auth = function(req,res,next) {

// }
exports.getReview = async (req, res, next) => {
  const { stinCd } = req.query;
  try {
    const Review = await review.find({ stinCd: stinCd });
    await res.json({ Review });
  } catch (err) {
    const error = new HttpError('리뷰 정보를 불러올 수 없습니다.');
    return next(error);
  }
};

exports.getMyReview = async (req, res, next) => {
  // passport.authenticate('jwt', { session: false });
  // try {
  //   req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  // } catch (err) {
  //   const error = new HttpError('로그인 해주세요');
  //   return next(error);
  // }
  token(req, '로그인 해주세요', next);
  try {
    const myReview = await review.find({ id: req.decoded.user.id });
    res.json(myReview);
  } catch (err) {
    const error = new HttpError('리뷰 불러오기 실패');
    return next(error);
  }
};

exports.postReview = async (req, res, next) => {
  token(req, '로그인 해주세요', next);

  const { stinCd, cleanliness, count, size, convenience, text, rating } =
    req.body;
  const Review = new review({
    stinCd,
    id: req.decoded.user.id,
    cleanliness,
    count,
    size,
    convenience,
    text,
    rating,
    date: String(moment().format('YYYY-MM-DD HH:mm:ss')),
  });
  try {
    await Review.save();
    res.json({ message: '리뷰 작성 성공', Review });
  } catch (err) {
    const error = new HttpError('리뷰 작성 실패');
    return next(error);
  }
};

exports.patchReview = async (req, res, next) => {
  token(req, '로그인 해주세요', next);
  const { cleanliness, count, size, convenience, text, rating, date } =
    req.body;
  const Review = {
    cleanliness,
    count,
    size,
    convenience,
    text,
    rating,
    date: String(moment().format('YYYY-MM-DD HH:mm:ss')),
  };
  try {
    Review = await review.findOneAndUpdate({ _id, date }, Review);
    res.json({ message: '수정성공', Review });
  } catch (err) {
    const error = new HttpError('수정 실패');
    return next(error);
  }
};

exports.deleteReview = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  } catch (err) {
    const error = new HttpError('로그인 해주세요');
    return next(error);
  }

  const { stinCd, date } = req.body;
  try {
    await review.deleteOne({ stinCd, date }).then((result) => {
      res.json({ message: '삭제성공' });
    });
  } catch (err) {
    const error = new HttpError('삭제 실패.');
    return next(error);
  }
};
