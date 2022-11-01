const Suggest = require('../models/suggest');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

exports.writePost = async (req, res) => {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  } catch (err) {
    const error = new HttpError('오류..');
    return next(error);
  }
  console.log(req.body);
  const { title, content } = req.body;
  const object = {
    writer: req.decoded.user.id,
    title,
    content,
    date: Date.now(),
  };
  const writeInfo = new Suggest(object);
  await writeInfo.save();
  res.send('글작성 완료');
};

// 쓴 사람만 수정
exports.modifyPost = async (req, res) => {
  const { writer, title, content, _id } = req.body;
  passport.authenticate('jwt', { session: false });
  let msg = {};
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
    if (req.decoded.user.id === writer) {
      msg.message = '작성자 일치';
    }
  } catch (err) {
    const error = new HttpError('작성자가 아닙니다.');
    return next(error);
  }

  const object = {
    // 작성자는 로그인한 아이디니까 업데이트 안 되게 주석 처리를 하는 것이 어떨까합니다..
    // writer
    title,
    content,
  };
  const result = await Suggest.findOneAndUpdate({ _id: _id }, object);
  res.send(result);
};

exports.uploadImg = (req, res) => {
  console.log(req.file);
  res.status(200).json({
    uploaded: true,
    url: `http://localhost:8000/imgUploadFolder/${req.file.filename}`,
  });
};
// 게시글 보기
exports.viewList = async (req, res) => {
  const suggests = await Suggest.find().sort({ date: 'desc' });
  res.send(suggests);
};
exports.view5List = async (req, res) => {
  const suggests = await Suggest.find().sort({ date: 'desc' }).limit(5);
  res.send(suggests);
};

// 로그인한 사람만 건의사항 작성
exports.viewPost = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  } catch (err) {
    const error = new HttpError('로그인 해주세요.');
    return next(error);
  }
  // console.log(req);
  const post = await Suggest.findOne({ _id: req.query.postId });
  res.send(post);
};

// 쓴 사람만
exports.deletePost = async (req, res) => {
  const { writer } = req.body;
  passport.authenticate('jwt', { session: false });
  let msg = {};
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
    if (req.decoded.user.id === writer) {
      msg.message = '작성자 일치';
    }
  } catch (err) {
    const error = new HttpError('작성자가 아닙니다.');
    return next(error);
  }

  // console.log(req.body.postId);
  const deleted = await Suggest.findByIdAndDelete(req.body.postId);
  res.send(deleted);
};
