import { expect } from 'chai';
import { findMax, findMin, removeDuplicates } from '../utils/arrayUtils.js';

describe('arrayUtils', () => {
    describe('findMax', () => {
        it('returns the maximum value in the array', () => {
            expect(findMax([1, 5, 3, 9, 2])).to.equal(9);
        });

        it('throws when input is not an array', () => {
            expect(() => findMax('not-an-array')).to.throw('Input must be an array');
        });
    });

    describe('findMin', () => {
        it('returns the minimum value in the array', () => {
            expect(findMin([4, -2, 7, 0])).to.equal(-2);
        });

        it('throws when input is not an array', () => {
            expect(() => findMin(null)).to.throw('Input must be an array');
        });
    });

    describe('removeDuplicates', () => {
        it('removes duplicate values while preserving order', () => {
            expect(removeDuplicates([1, 2, 2, 3, 1, 4])).to.deep.equal([1, 2, 3, 4]);
        });

        it('throws when input is not an array', () => {
            expect(() => removeDuplicates({})).to.throw('Input must be an array');
        });
    });
});
