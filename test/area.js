import Area from '../src/area.js';
import * as assert from 'assert';

describe('area', () => {
    it('default units', () => {
        const area = new Area(99)
        assert.equal('sqm', area.units)
    }) 
    
    it('sqm to sqft', () => {
        const area = new Area('99 sqm')
        assert.equal(1065.62709, area.to('sqft').value)
    })
    
    it('sqft to sqm', () => {
        const area = new Area('99 sqft')
        assert.equal(9.197401316064516, area.to('sqm').value)
    })
    
    it('sqft to tsubo', () => {
        const area = new Area('99 sqft')
        assert.equal(2.782213898109516, area.to('tsubo').value)
    })
})