export default class Measurement {
    
    value = null
    units = null
    
    static units = {}
    
    static getUnits (units) {
        let unitsModel
        Object.keys(this.units).forEach(units_key => {
            if (units == units_key) {
                unitsModel = Object.assign({}, this.units[units_key])
            }
        })
        if (unitsModel) return unitsModel
        else throw `Unable to find ${units} in units.`
    }
    
    constructor (...args) {
        this.valueTo(...args)
    }
    
    in (...args) { return this.to(...args) }
    to (units) {
        const unitsModel = this.constructor.getUnits(units);
        return new this.constructor(unitsModel.fromBase(this.toBase()), units)
    }
    
    add (measurement) {
        if (measurement instanceof this.constructor) {
            measurement = measurement.to(this.units).value
        }
        return new this.constructor(this.value + measurement, this.units)
    }
    
    subtract (measurement) {
        if (measurement instanceof this.constructor) {
            measurement = measurement.to(this.units).value
        }
        return new this.constructor(this.value - measurement, this.units)
    }
    
    clone () {
        return new this.constructor(this.value, this.units)
    }
    
    toBase () {
        return this.constructor.getUnits(this.units).toBase(this.value)
    }
    
    toString () {
        return this.value.toString() + " " + this.units
    }
    
    valueOf () {
        return this.toBase()
    }
    
    // new Measurement("9 sqft")
    // new Measurement({value: 9, units: "sqft"})
    // new Measurement(9, "sqft")
    valueTo (...args) {
        if (typeof args[0] == "string") {
            [this.value, this.units] = args[0].split(" ")
        } else if (typeof args[0] == "object") {
            if (args[0].value) this.value = args[0].value
            if (args[0].units) this.units = args[0].units
        } else if (typeof args[0] == "number") {
            this.value = args[0]
            if (typeof args[1] == "string") this.units = args[1]
        }
        if (!this.units) this.units = this.constructor.units.base;
    }
}