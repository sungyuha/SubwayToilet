const HttpError = require('../models/http-error');
const Suggest = require('../models/suggest');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

exports.checkID = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
    res.send(req.decoded.user.id);
  } catch (err) {
    const error = new HttpError('로그인 해주세요');
    return next(error);
  }
}


exports.writePost = async (req, res, next) => {
  
  console.log(req.body);
  const { writer, title, content } = req.body;
  const object = {
    writer,
    title,
    content,
    date: Date.now(),
  };
  const writeInfo = new Suggest(object);
  await writeInfo.save();
  res.send('글작성 완료');
};

// 쓴 사람만 수정
exports.modifyPost = async (req, res, next) => {
  const { writer, title, content, _id } = req.body;
  
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
    url: `${process.env.BEIP}/imgUploadFolder/${req.file.filename}`,
  });
};
// 마이페이지 내가 올린 게시글 보기
exports.getMyPost = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  try {
    req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
  } catch (err) {
    const error = new HttpError('로그인 해주세요');
    return next(error);
  }
  
  const mySuggests = await Suggest.find({writer: req.decoded.user.id}).sort({ date: 'desc' });
  res.send({mySuggests});
};

// 게시글 보기
exports.viewList = async (req, res, next) => {
  let msg = {};
  if(req.headers.authorization){
    msg.islogin = true;
  }else{
    msg.islogin = false;
  }
  const suggests = await Suggest.find().sort({ date: 'desc' });
  res.send({suggests, msg});
};
exports.view5List = async (req, res) => {
  const suggests = await Suggest.find().sort({ date: 'desc' }).limit(5);
  res.send(suggests);
};

// 로그인한 사람만 건의사항 작성
exports.viewPost = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  const post = await Suggest.findOne({ _id: req.query.postId });
  let msg = {};
  if(req.headers.authorization){
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      if(req.decoded.user.id === post.writer){
        msg.owner = true;
      }else{
        msg.owner = false;
      }
      msg.islogin = true;
    } catch (err) {
      const error = new HttpError('로그인 해주세요.');
      return next(error);
    }
  }else{
    msg.islogin = false;
  }
  
  // console.log(req);
  
  res.send({post, msg});
};

// 쓴 사람만
exports.deletePost = async (req, res, next) => {

  // console.log(req.body.postId);
  const deleted = await Suggest.findByIdAndDelete(req.body.postId);
  res.send(deleted);
};
