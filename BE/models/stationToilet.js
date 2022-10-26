const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const stationToiletSchema = new Schema({
  stinNm: { type: String },
  stinCd: { type: String },
  routNm: { type: String },
  normal: [
    {
      railOprIsttCd: { type: String },
      lnCd: { type: String },
      stinCd: { type: String },
      grndDvNm: { type: String },
      stinFlor: { type: String },
      gateInotDvNm: { type: String },
      exitNo: { type: String },
      dtlLoc: { type: String },
      mlFmlDvNm: { type: String },
      toltNum: { type: String },
      diapExchNum: { type: String },
    },
  ],
  disabled: [
    {
      railOprIsttCd: { type: String },
      lnCd: { type: String },
      stinCd: { type: String },
      grndDvNm: { type: String },
      stinFlor: { type: String },
      gateInotDvNm: { type: String },
      exitNo: { type: String },
      dtlLoc: { type: String },
      mlFmlDvNm: { type: String },
      toltNum: { type: String },
      diapExchNum: { type: String },
    },
  ],
});

module.exports = mongoose.model('StationToilet', stationToiletSchema);
