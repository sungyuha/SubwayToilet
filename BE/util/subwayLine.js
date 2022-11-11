const axios = require('axios');

const subwayLines = process.env.SUBWAY_LINES;

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
