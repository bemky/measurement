import Length from '../src/length.js';
import * as assert from 'assert';

describe('length', () => {
    it('default units', () => {
        const length = new Length(99)
        assert.equal('m', length.units)
    }) 
    
    it('m to mm', () => {
        const length = new Length('99 m')
        assert.equal(99000 , length.to('mm').value)
    })
    
    it('m to cm', () => {
        const length = new Length('99 m')
        assert.equal(9900 , length.to('cm').value)
    })
    
    it('m to km', () => {
        const length = new Length('99 m')
        assert.equal(0.099 , length.to('km').value)
    })

    it('m to ft', () => {
        const length = new Length('99 m')
        assert.equal(324.8031496062992 , length.to('ft').value)
    })
    
    it('ft to in', () => {
        const length = new Length('99 ft')
        assert.equal(1188, length.to('in').value)
    })
    
    it('ft to mi', () => {
        const length = new Length('99 ft')
        assert.equal(0.01875, length.to('mi').value)
    })
    
    it('ft to cm', () => {
        const length = new Length('99 ft').to('cm')
        assert.equal(3017.52, length.value)
        assert.equal('cm', length.units)
    })
    
    it('by', () => {
        const length1 = new Length(99, 'ft')
        const length2 = new Length(20, 'm')
        assert.ok("6496.38 sqft", length1.by(length2))
    })
})