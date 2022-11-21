import Measurement from '../src/measurement.js';
import Area from '../src/area.js';
import * as assert from 'assert';

describe('area', () => {
    
    it('init parses string', () => {
        const measurement = new Measurement("99 sqft")
        
        assert.equal(99, measurement.value)
        assert.equal('sqft', measurement.units)
    })
    
    it('init object', () => {
        const measurement = new Measurement({
            value: 99,
            units: "sqft"
        })
        
        assert.equal(99, measurement.value)
        assert.equal('sqft', measurement.units)
    })
    
    it('init args', () => {
        const measurement = new Measurement(99, 'sqft')
        
        assert.equal(99, measurement.value)
        assert.equal('sqft', measurement.units)
    })
    
    it('toString', () => {
        const area = new Area(99, 'sqft')
        assert.equal('The room is 99 sqft.', `The room is ${area}.`)
    })
    
    it('valueOf', () => {
        const area1 = new Area(99, 'sqft')
        const area2 = new Area(20, 'sqm')
        assert.ok(area1 < area2)
    })
    
})