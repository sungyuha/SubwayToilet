const linesNum2 = require('../util/subwayLine');
const lineNum2Toilet = require('../util/subwayToilet');
const stationToilet = require('../models/stationToilet');

// 누르면 api 호출해서 db에 2호선 역, 화장실 정보를 저장시키는 버튼 만들어주세요..
exports.getAdmin = (req, res, next) => {
  res.send();
};

// api 호출해서 db에 정보 저장하는 로직
exports.getLines = async (req, res, next) => {
  // 2호선 역 정보 받아오는 함수 실행
  const stationsInfo = await linesNum2();
  let stationToilets = [];
  // 2호선 역들의 정보를 map 함수를 이용해서 각각 분리
  stationsInfo.map(async (info) => {
    const { stinNm, stinCd, routNm } = info;
    const station = new stationToilet({
      stinNm,
      stinCd,
      routNm,
    });

    // 각 역의 비장애인, 장애인 화장실 정보 받아오는 함수 실행
    const toilets = await lineNum2Toilet(stinCd);

    // 2호선 역 화장실들의 정보를 map 함수를 이용해서 분리
    toilets.map(async (toilet) => {
      const { normal, disabled } = toilet;
      station.normal = normal;
      station.disabled = disabled;
      // mongoDB에 저장
      await station.save();
      stationToilets.push(station);
    });
  });
};
