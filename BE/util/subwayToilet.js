const axios = require('axios');

const stationToilet = process.env.STATION_TOILET;
const stationDisabledToilet = process.env.DISBLED_TOILET;

function getSubwayToilets(stinCd) {
  return new Promise((resolve, reject) => {
    axios
      .all([
        axios.get(
          `https://openapi.kric.go.kr/openapi/convenientInfo/stationToilet?serviceKey=${stationToilet}&format=json&railOprIsttCd=S1&lnCd=2&stinCd=${stinCd}`
        ),
        axios.get(
          `https://openapi.kric.go.kr/openapi/vulnerableUserInfo/stationDisabledToilet?serviceKey=${stationDisabledToilet}&format=json&railOprIsttCd=S1&lnCd=2&stinCd=${stinCd}`
        ),
      ])
      .then(
        axios.spread((res1, res2) => {
          const normal = res1.data.body;
          const disabled = res2.data.body;
          // console.log('n :', normal);
          // console.log('d :', disabled);
          resolve([{ normal, disabled }]);
          // totalToilet.map((e) => {
          //   const { normal, disabled } = e;
          //   const createLines = new subLines({
          //     normal,
          //     disabled,
          //   });
          //   createLines.save();
          //   // console.log(createLines);
          // });
        })
      );
  });
}

module.exports = getSubwayToilets;
