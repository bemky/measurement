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
    
    it('with precision', () => {
        assert.equal(111.235, round(111.2345, {precision: 3}))
        assert.equal(111.23450, round(111.2345, {precision: 5}))
    })
    
    it('with significant', () => {
        assert.equal(13.000, round(13, {precision: 5, significant: true}))
        assert.equal(11000, round(11111.2345, {precision: 2, significant: true}))
        assert.equal(389.3, round(389.32314, {precision: 4, significant: true}))
    })
    
    it('with resolution', () => {
        assert.equal(91000, round(91293, {resolution: 4}))
        assert.equal(91293, round(91293, {resolution: 0}))
    })
    
    it('with resolution and precision', () => {
        assert.equal(90000, round(91293, {resolution: 4, precision: 1, significant: true}))
        assert.equal(91000, round(91293, {resolution: 4, precision: 3, significant: true}))
        assert.equal(9430000, round(9433129, {resolution: 4, precision: 3, significant: true}))
        assert.equal(9433000, round(9433129, {resolution: 4, precision: 5, significant: true}))
    })
    
})