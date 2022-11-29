import Measurement from '../src/measurement.js';
import Area from '../src/area.js';
import * as assert from 'assert';

describe('measurement', () => {
    
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
        
        const measurement2 = new Measurement('13', 'sqft')
        
        assert.equal(13, measurement2.value)
        assert.equal('sqft', measurement2.units)
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
    
    it('valueTo', () => {
        const area1 = new Area(99, 'sqft')
        area1.valueTo(33)
        assert.equal(33, area1.value)
        assert.equal('sqft', area1.units)

        area1.valueTo("22")
        assert.equal(22, area1.value)
        assert.equal('sqft', area1.units)
    })
    
    it('add', () => {
        const area = new Area(99, 'sqft')
        assert.equal("102 sqft", area.add(3).toString())
    })
    
    it('add measurement', () => {
        const area1 = new Area(99, 'sqft')
        const area2 = new Area(20, 'sqm')
        assert.equal("314.27820833420003 sqft", area1.add(area2).toString())
    })
    
    it('subtract', () => {
        const area = new Area(99, 'sqft')
        assert.equal("96 sqft", area.subtract(3).toString())
    })
    
    it('subtract measurement', () => {
        const area1 = new Area(100, 'sqft')
        const area2 = new Area(144, 'sqin')
        assert.equal("99 sqft", area1.subtract(area2).toString())
    })
    
    it('clone', () => {
        const area1 = new Area(20, 'sqm')
        const areaClone = area1.clone();
        area1.valueTo(21)
        assert.equal("21 sqm", area1.toString())
        assert.equal("20 sqm", areaClone.toString())
    })
    
    it('round', () => {
        const area1 = new Area(99.123, 'sqft')
        assert.equal("99 sqft", area1.round().toString())
    })
    
    it('round with precision', () => {
        const area1 = new Area(99.123, 'sqft')
        assert.equal("99.1 sqft", area1.round({precision: 1}).toString())
    })
    
    it('ceil', () => {
        const area1 = new Area(99.123, 'sqft')
        assert.equal("100 sqft", area1.ceil().toString())
    })
    
    it('floor', () => {
        const area1 = new Area(99.847, 'sqft')
        assert.equal("99 sqft", area1.floor().toString())
    })
    
})