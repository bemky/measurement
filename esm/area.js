import Measurement from './measurement.js';
const SQFT_PER_SQM = 10.76391041671;
const TSUBO_PER_SQM = 121 / 400;
export default class Area extends Measurement {
  static units = {
    base: 'sqm',
    sqin: {
      toBase: v => v / 144 / SQFT_PER_SQM,
      fromBase: v => v * SQFT_PER_SQM * 144
    },
    sqft: {
      toBase: v => v / SQFT_PER_SQM,
      fromBase: v => v * SQFT_PER_SQM
    },
    sqm: {
      toBase: v => v,
      fromBase: v => v
    },
    tsubo: {
      toBase: v => v / TSUBO_PER_SQM,
      fromBase: v => v * TSUBO_PER_SQM
    }
  };
}