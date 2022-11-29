import round from '../../src/support/round.js';
import {ceil, floor} from '../../src/support/round.js';
import * as assert from 'assert';

describe('round', () => {
    
    it('default', () => {
        assert.equal(111, round(111.2345))
    })
    
    it('ceil', () => {
        assert.equal(112, ceil(111.2345))
    })
    
    it('floor', () => {
        assert.equal(111, floor(111.5345))
    })
    
    it('lower precision', () => {
        assert.equal(111.235, round(111.2345, {precision: 3}))
    })
    
    it('raise precision', () => {
        assert.equal(111.23450, round(111.2345, {precision: 5}))
    })
    
    it('lower significant precision', () => {
        assert.equal(11000, round(11111.2345, {precision: 2, significant: true}))
    })
    
    it('lower significant precision', () => {
        assert.equal(13.000, round(13, {precision: 5, significant: true}))
    })
})