import Measurement from './measurement.js';

export default class Area extends Measurement {
    
    static units = {
        base: 'sqm',
        sqft: {
            toBase: v => v / 10.76391,
            fromBase: v => v * 10.76391
        },
        sqm: {
            toBase: v => v,
            fromBase: v => v
        },
        tsubo: {
            toBase: v => 400 / 121 * v,
            fromBase: v => 121 / 400 * v
        }
    }
}