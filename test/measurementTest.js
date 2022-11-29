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
    
    it('add', () => {
        const area1 = new Area(99, 'sqft')
        const area2 = new Area(20, 'sqm')
        assert.equal("314.27820833420003 sqft", area1.add(area2).toString())
    })
    
    it('add measurement', () => {
        const area = new Area(99, 'sqft')
        assert.equal("102 sqft", area.add(3).toString())
    })
    
    it('subtract', () => {
        const area1 = new Area(20, 'sqm')
        const area2 = new Area(99, 'sqft')
        assert.equal("10.802599040000239 sqm", area1.subtract(area2).toString())
    })
    
    it('subtract measurement', () => {
        const area = new Area(99, 'sqft')
        assert.equal("96 sqft", area.subtract(3).toString())
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