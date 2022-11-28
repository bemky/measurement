import Area from '../src/area.js';
import * as assert from 'assert';

describe('area', () => {
    it('default units', () => {
        const area = new Area(99)
        assert.equal('sqm', area.units)
    }) 
    
    it('sqm to sqft', () => {
        const area = new Area('99 sqm')
        assert.equal(1065.6271312542901, area.to('sqft').value)
    })
    
    it('sqm to sqin', () => {
        const area = new Area('99 sqm')
        assert.equal(153450.30690061778, area.to('sqin').value)
    })
    
    it('sqft to sqm', () => {
        const area = new Area('99 sqft')
        assert.equal(9.197400959999761, area.to('sqm').value)
    })
    
    it('sqft to tsubo', () => {
        const area = new Area('99 sqft')
        assert.equal(2.7822137903999278, area.to('tsubo').value)
    })
})