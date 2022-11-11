const HttpError = require('../models/http-error');
const Notice = require('../models/notice');
const passport = require('../passport/index');
const jwt = require('jsonwebtoken');

exports.writePost = async (req, res) => {
  const { writer, title, content } = req.body;
  const object = {
    writer,
    title,
    content,
    date: Date.now(),
  };
  const writeInfo = new Notice(object);
  await writeInfo.save();
  res.send('글작성 완료');
};
exports.modifyPost = async (req, res) => {
  const { writer, title, content, _id } = req.body;
  const object = {
    writer,
    title,
    content,
  };
  const result = await Notice.findOneAndUpdate({ _id: _id }, object);
  res.send(result);
};

exports.uploadImg = (req, res) => {
  console.log(req.file);
  res.status(200).json({
    uploaded: true,
    url: `${process.env.BEIP}/imgUploadFolder/${req.file.filename}`,
  });
};
// 관리자만 가능
exports.viewList = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  // console.log(req.headers)
  let msg = {};
  if (req.headers.authorization) {
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      if (process.env.ADMIN === req.decoded.user.id) {
        msg.success = '성공';
      } else {
        msg.success = '실패';
      }
    } catch (err) {
      const error = new HttpError('실패');
      return next(error);
    }
  } else {
    msg.success = '실패';
  }
  const notices = await Notice.find().sort({ date: 'desc' });
  res.json({ notices, msg });
};

exports.view5List = async (req, res) => {
  const notices = await Notice.find().sort({ date: 'desc' }).limit(5);
  res.send(notices);
};

// 관리자만 가능
exports.viewPost = async (req, res, next) => {
  passport.authenticate('jwt', { session: false });
  // console.log(req.headers)
  let msg = {};
  if (req.headers.authorization) {
    try {
      req.decoded = jwt.verify(req.headers.authorization, process.env.TOKEN);
      if (process.env.ADMIN === req.decoded.user.id) {
        msg.success = '성공';
      } else {
        msg.success = '실패';
      }
    } catch (err) {
      const error = new HttpError('실패');
      return next(error);
    }
  } else {
    msg.success = '실패';
  }
  // console.log(req);
  const post = await Notice.findOne({ _id: req.query.postId });
  res.json({ post, msg });
};

exports.deletePost = async (req, res) => {
  // console.log(req.body.postId);
  const deleted = await Notice.findByIdAndDelete(req.body.postId);
  res.send(deleted);
};
