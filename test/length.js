import Length from '../src/length.js';
import * as assert from 'assert';

describe('length', () => {
    it('default units', () => {
        const area = new Length(99)
        assert.equal('m', area.units)
    }) 
    
    it('m to mm', () => {
        const area = new Length('99 m')
        assert.equal(99000 , area.to('mm').value)
    })
    
    it('m to cm', () => {
        const area = new Length('99 m')
        assert.equal(9900 , area.to('cm').value)
    })
    
    it('m to km', () => {
        const area = new Length('99 m')
        assert.equal(0.099 , area.to('km').value)
    })

    it('m to ft', () => {
        const area = new Length('99 m')
        assert.equal(324.8031496062992 , area.to('ft').value)
    })
    
    it('ft to in', () => {
        const area = new Length('99 ft')
        assert.equal(1188, area.to('in').value)
    })
    
    it('ft to mi', () => {
        const area = new Length('99 ft')
        assert.equal(0.01875, area.to('mi').value)
    })
    
    it('ft to cm', () => {
        const area = new Length('99 ft')
        assert.equal(3017.52, area.to('cm').value)
    })
})