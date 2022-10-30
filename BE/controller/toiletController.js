const stationToilet = require('../models/stationToilet');
const review = require('../models/review');
const HttpError = require('../models/http-error');

exports.getToiletInfo = async (req, res, next) => {
  const { stinNm } = req.query;
  try {
    const Toilet = await stationToilet.findOne({ stinNm: stinNm });
    const Review = await review.find({ stinNm: stinNm });
    await res.json({ Toilet, Review });
  } catch (err) {
    const error = new HttpError('화장실 정보를 불러올 수 없습니다.');
    return next(error);
  }
};
