export default function round(n, options={}) {
    options = Object.assign({
        precision: 0,
        significant: false,
        func: Math.round
    }, options)
    
    if (options.significant) {
        const integerLength = n.toString().split('.')[0].length
        const multiplier = Math.pow(10, integerLength - options.precision)
        n = options.func(n / multiplier) * multiplier
    } else {
        const multiplier = Math.pow(10, options.precision)
        n = options.func(n * multiplier) / multiplier
    }
    
    return n
}

export function ceil(n, options) {
    return round(n, Object.assign({
        func: Math.ceil
    }, options))
}

export function floor(n, options) {
    return round(n, Object.assign({
        func: Math.floor
    }, options))
}