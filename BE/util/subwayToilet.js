const axios = require('axios');

const stationToilet =
  '$2a$10$P6KQpGunBJ1XzUY2o7SWGeiUzE3XA3meCD1TQ87NRgDXUzr5G4VTS';
const stationDisabledToilet =
  '$2a$10$3taPkjP3LiqfUIM5LF4jA.YU13ghbQN7ahqFYJ0a3csJMlwD1duri';

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
