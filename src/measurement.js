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
    
    // new Measurement("9 sqft")
    // new Measurement({value: 9, units: "sqft"})
    // new Measurement(9, "sqft")
    constructor (...args) {
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
    
    to (units) {
        units = this.constructor.getUnits(units);
        return new this.constructor({
            value: units.fromBase(this.toBase()),
            units: units
        })
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
}