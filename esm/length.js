import Measurement from './measurement.js';
const METERS_TO_FEET = 0.3048;
export default class Length extends Measurement {
  static units = {
    base: 'm',
    mm: {
      toBase: v => v / 1000,
      fromBase: v => v * 1000
    },
    cm: {
      toBase: v => v / 100,
      fromBase: v => v * 100
    },
    m: {
      toBase: v => v,
      fromBase: v => v
    },
    km: {
      toBase: v => v * 1000,
      fromBase: v => v / 1000
    },
    in: {
      toBase: v => v / 12 * METERS_TO_FEET,
      fromBase: v => v / METERS_TO_FEET * 12
    },
    ft: {
      toBase: v => v * METERS_TO_FEET,
      fromBase: v => v / METERS_TO_FEET
    },
    yd: {
      toBase: v => v * METERS_TO_FEET * 3,
      fromBase: v => v / METERS_TO_FEET / 3
    },
    mi: {
      toBase: v => v * METERS_TO_FEET * 5280,
      fromBase: v => v / METERS_TO_FEET / 5280
    }
  };
}