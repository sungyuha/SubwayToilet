const axios = require('axios');

const subwayLines =
  '$2a$10$3taPkjP3LiqfUIM5LF4jA.YU13ghbQN7ahqFYJ0a3csJMlwD1duri';

async function getSubwayLines() {
  const Lines = await axios.get(
    `https://openapi.kric.go.kr/openapi/trainUseInfo/subwayRouteInfo?serviceKey=${subwayLines}&format=json&mreaWideCd=01&lnCd=2`
  );
  let lineInfo = [];
  Lines.data.body.map((e) => {
    if (e.routNm === '2호선') {
      const { stinNm, stinCd, routNm } = e;

      lineInfo.push({ stinNm, stinCd, routNm });
    }
  });
  // console.log(lineInfo);
  return lineInfo;
}

module.exports = getSubwayLines;
