export default function round(n, options = {}) {
  options = Object.assign({
    precision: 0,
    significant: false,
    func: Math.round
  }, options);
  let multiplier;
  if (options.significant) {
    const integerLength = n.toString().split('.')[0].length;
    multiplier = Math.pow(10, integerLength - options.precision);
    n = options.func(n / multiplier) * multiplier;
  } else {
    multiplier = Math.pow(10, options.precision);
    n = options.func(n * multiplier) / multiplier;
  }
  if (options.resolution) {
    multiplier = Math.pow(10, options.resolution - 1);
    n = options.func(n / multiplier) * multiplier;
  }
  return n;
}
export function ceil(n, options) {
  return round(n, Object.assign({
    func: Math.ceil
  }, options));
}
export function floor(n, options) {
  return round(n, Object.assign({
    func: Math.floor
  }, options));
}